import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Heart, Lightbulb } from 'lucide-react';
import { Poem, UserData, Difficulty, UserChallengeProgress } from '../types';
import { POEMS_DATA, COMMON_HANZI } from '../data/poems';
import { Header } from './Common';

interface ChallengeViewProps {
  poem: Poem;
  userData: UserData;
  updateUserData: (data: UserData) => void;
  onExit: (progress: UserChallengeProgress | null) => void;
  onComplete: (sessionScore: number) => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({ poem, userData, updateUserData, onExit, onComplete }) => {
  const [gameState, setGameState] = useState<{
    sentenceIndex: number;
    life: number;
    sessionScore: number;
    hintUsed: number;
    blankIndices: number[];
    correctChars: string[];
    options: string[];
    isChecking: boolean;
    feedback: string | null;
    feedbackType: 'correct' | 'wrong' | null;
    selectedCount: number;
    answeredBlanks: string[];
  }>(() => {
    const resume = userData.currentChallenge?.poemId === poem.id ? userData.currentChallenge : null;
    return {
      sentenceIndex: resume?.currentSentence ?? 0,
      life: resume?.life ?? 3,
      sessionScore: 0, 
      hintUsed: resume?.hintUsed ?? 0,
      blankIndices: [],
      correctChars: [],
      options: [],
      isChecking: false,
      feedback: null,
      feedbackType: null,
      selectedCount: 0,
      answeredBlanks: []
    };
  });

  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  useEffect(() => {
    const indices = poem.content.map((_, i) => i);
    if (userData.settings.difficulty === Difficulty.HARD) {
      indices.sort(() => Math.random() - 0.5);
    }
    setShuffledIndices(indices);
  }, [poem, userData.settings.difficulty]);

  const initQuestion = useCallback((indexState: number) => {
    if (shuffledIndices.length === 0) return;
    const actualIndex = shuffledIndices[indexState];
    const line = poem.content[actualIndex];
    const difficulty = userData.settings.difficulty;
    let numBlanks = 1;
    if (difficulty === Difficulty.MEDIUM) numBlanks = 2;
    if (difficulty === Difficulty.HARD) numBlanks = 2;

    const indices: number[] = [];
    const usedPos = new Set<number>();
    
    while (indices.length < Math.min(numBlanks, line.length)) {
      const pos = Math.floor(Math.random() * line.length);
      if (!usedPos.has(pos)) {
        if (difficulty === Difficulty.MEDIUM && indices.some(idx => Math.abs(idx - pos) === 1)) {
          continue;
        }
        usedPos.add(pos);
        indices.push(pos);
      }
    }
    indices.sort((a, b) => a - b);
    
    const targets = indices.map(idx => line[idx]);
    
    const distractors: string[] = [];
    let attempts = 0;
    const maxAttempts = 100;
    const allContent = poem.content.join('');
    while (distractors.length < 3 && attempts < maxAttempts) {
      const char = COMMON_HANZI[Math.floor(Math.random() * COMMON_HANZI.length)];
      if (!line.includes(char) && !allContent.includes(char) && !targets.includes(char) && !distractors.includes(char)) {
        distractors.push(char);
      }
      attempts++;
    }
    // Fallback: if we couldn't find enough unique distractors, fill with random hanzi
    while (distractors.length < 3) {
      const char = COMMON_HANZI[Math.floor(Math.random() * COMMON_HANZI.length)];
      if (!distractors.includes(char)) {
        distractors.push(char);
      }
    }

    const allOptions = [...targets, ...distractors].sort(() => Math.random() - 0.5);

    setGameState(prev => ({
      ...prev,
      sentenceIndex: indexState,
      blankIndices: indices,
      correctChars: targets,
      options: allOptions,
      isChecking: false,
      feedback: null,
      feedbackType: null,
      selectedCount: 0,
      answeredBlanks: []
    }));
  }, [poem.content, userData.settings.difficulty, shuffledIndices]);

  useEffect(() => {
    if (gameState.blankIndices.length === 0 && shuffledIndices.length > 0) {
      initQuestion(gameState.sentenceIndex);
    }
  }, [gameState.blankIndices.length, gameState.sentenceIndex, initQuestion, shuffledIndices]);

  const handleOptionSelect = (char: string) => {
    if (gameState.isChecking) return;

    const newAnsweredBlanks = [...gameState.answeredBlanks, char];
    const newSelectedCount = gameState.selectedCount + 1;

    if (newSelectedCount < gameState.correctChars.length) {
      setGameState(prev => ({
        ...prev,
        answeredBlanks: newAnsweredBlanks,
        selectedCount: newSelectedCount
      }));
      return;
    }

    setGameState(prev => ({ ...prev, isChecking: true }));
    const isCorrect = newAnsweredBlanks.every((val, idx) => val === gameState.correctChars[idx]);

    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        feedback: '回答正确！',
        feedbackType: 'correct',
        sessionScore: prev.sessionScore + 10,
      }));
      
      setTimeout(() => {
        if (gameState.sentenceIndex + 1 < poem.content.length) {
          initQuestion(gameState.sentenceIndex + 1);
        } else {
          onComplete(gameState.sessionScore + 10);
        }
      }, 1500);
    } else {
      setGameState(prev => ({
        ...prev,
        feedback: '回答错误，再试一次！',
        feedbackType: 'wrong',
        life: prev.life - 1,
      }));

      setTimeout(() => {
        if (gameState.life - 1 <= 0) {
          // Game over - save progress and exit
          onExit({
            poemId: poem.id,
            currentSentence: gameState.sentenceIndex,
            life: 0,
            hintUsed: gameState.hintUsed,
            score: gameState.sessionScore
          });
        } else {
          initQuestion(gameState.sentenceIndex);
        }
      }, 1500);
    }
  };

  const handleHint = () => {
    if (userData.score < 5 || gameState.hintUsed >= 2) return;
    const currentTarget = gameState.correctChars[gameState.selectedCount];
    alert(`提示：正确答案包含字符 "${currentTarget}"。 (消耗5积分)`);
    setGameState(prev => ({ ...prev, hintUsed: prev.hintUsed + 1 }));
    updateUserData({ ...userData, score: userData.score - 5 });
  };

  const handleExitClick = () => {
    if (window.confirm('确定退出挑战吗？当前进度将保存')) {
      onExit({
        poemId: poem.id,
        currentSentence: gameState.sentenceIndex,
        life: gameState.life,
        hintUsed: gameState.hintUsed,
        score: gameState.sessionScore
      });
    }
  };

  const currentLine = poem.content[shuffledIndices[gameState.sentenceIndex]] || '';
  const displayLine = currentLine.split('').map((char, i) => {
    if (gameState.blankIndices.includes(i)) {
      const blankIdx = gameState.blankIndices.indexOf(i);
      if (blankIdx < gameState.answeredBlanks.length) {
        return gameState.answeredBlanks[blankIdx];
      }
      return '□';
    }
    return char;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="闯关挑战" 
        left={<button onClick={handleExitClick}><ChevronLeft size={24} className="text-ancient-red" /></button>} 
        right={
          <div className="text-[10px] text-ancient-red font-bold flex flex-col items-end">
            <span>{gameState.sentenceIndex + 1}/{poem.content.length} 句</span>
            <span className="flex items-center text-red-600"><Heart size={10} className="mr-0.5 fill-current" /> {gameState.life}</span>
          </div>
        }
      />

      <main className="flex-1 p-6 flex flex-col justify-center space-y-12 no-scrollbar">
        <div className="ancient-card py-10 px-4 text-center shadow-inner bg-ancient-bg/30 flex items-center justify-center min-h-[180px]">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 max-w-[280px]">
            {displayLine.map((c, i) => (
              <span key={i} className={`text-4xl font-bold w-10 h-12 flex items-center justify-center border-b-2 ${c === '□' ? 'text-ancient-red border-ancient-red/30 animate-pulse' : 'border-transparent'}`}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {gameState.options.map((opt, i) => (
            <button
              key={i}
              disabled={gameState.isChecking}
              onClick={() => handleOptionSelect(opt)}
              className="bg-white border-2 border-ancient-border text-2xl py-6 rounded-lg shadow-sm active:bg-ancient-red active:text-white transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={handleHint}
            disabled={userData.score < 5 || gameState.hintUsed >= 2 || gameState.isChecking}
            className="flex items-center text-ancient-red font-bold disabled:opacity-30"
          >
            <Lightbulb size={18} className="mr-1" />
            使用提示 (5积分) {gameState.hintUsed}/2
          </button>

          {gameState.feedback && (
            <motion.p 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`text-xl font-bold ${gameState.feedbackType === 'correct' ? 'text-green-600' : 'text-red-600'}`}
            >
              {gameState.feedback}
            </motion.p>
          )}
        </div>

        {gameState.life <= 0 && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
            <div className="bg-ancient-paper p-8 rounded-lg border-4 border-ancient-red text-center space-y-6 max-w-sm w-full shadow-2xl">
              <h2 className="text-2xl font-bold text-red-800">挑战失败</h2>
              <p>很遗憾，生命值已耗尽。你可以重新开始或返回诗集。</p>
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {
                    setGameState(prev => ({ ...prev, life: 3, sentenceIndex: 0, hintUsed: 0 }));
                    initQuestion(0);
                  }}
                  className="ancient-button"
                >
                  重新挑战
                </button>
                <button 
                  onClick={() => {
                    const updated = { ...userData, currentChallenge: null };
                    updateUserData(updated);
                    onExit(null);
                  }}
                  className="bg-white border text-ancient-ink p-2 rounded"
                >
                  返回诗集
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
