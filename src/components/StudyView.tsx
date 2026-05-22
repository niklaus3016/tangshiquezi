import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Volume2 } from 'lucide-react';
import { Poem, UserSettings } from '../types';
import { Header } from './Common';

interface StudyViewProps {
  poem: Poem;
  settings: UserSettings;
  onBack: () => void;
  onStartChallenge: () => void;
}

export const StudyView: React.FC<StudyViewProps> = ({ poem, settings, onBack, onStartChallenge }) => {
  const [timeLeft, setTimeLeft] = useState(settings.memoryTime);
  const [showParaphrase, setShowParaphrase] = useState(settings.showParaphrase);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSpeakingParaphrase, setIsSpeakingParaphrase] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('您的浏览器不支持语音朗读功能');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = `${poem.title}！${poem.author}！${poem.content.join('。')}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.6; // Further reduced for emotional pace
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // Try to find a high quality voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('zh') && (v.name.includes('Xiaoxiao') || v.name.includes('Scenic')));
    if (preferredVoice) utterance.voice = preferredVoice;

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }, [poem, isSpeaking]);

  const handleSpeakParaphrase = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('您的浏览器不支持语音朗读功能');
      return;
    }

    if (isSpeakingParaphrase) {
      window.speechSynthesis.cancel();
      setIsSpeakingParaphrase(false);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const utterance = new SpeechSynthesisUtterance(poem.paraphrase);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeakingParaphrase(false);
    utterance.onerror = () => setIsSpeakingParaphrase(false);

    // Try to find a high quality voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('zh') && (v.name.includes('Xiaoxiao') || v.name.includes('Scenic')));
    if (preferredVoice) utterance.voice = preferredVoice;

    window.speechSynthesis.speak(utterance);
    setIsSpeakingParaphrase(true);
  }, [poem.paraphrase, isSpeakingParaphrase, isSpeaking]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="学习记忆" 
        left={<button onClick={onBack}><ChevronLeft size={24} className="text-ancient-red" /></button>} 
      />

      <main className="flex-1 p-6 flex flex-col overflow-y-auto no-scrollbar">
        <div className="ancient-card p-8 text-center space-y-6 flex-1 shadow-lg border-2 flex flex-col justify-center">
          <div className="relative w-full mb-4">
            <h2 className="text-3xl font-bold text-ancient-red px-10">{poem.title}</h2>
            <button 
              onClick={handleSpeak}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${isSpeaking ? 'bg-ancient-red text-white' : 'text-ancient-red hover:bg-ancient-red/10'}`}
              title="播放朗读"
            >
              <Volume2 size={24} />
            </button>
          </div>
          <p className="text-gray-600 font-medium">〔{poem.dynasty}〕{poem.author}</p>
          
          <div className="space-y-4 text-2xl tracking-widest leading-loose">
            {poem.content.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-ancient-border">
            <div className="flex items-center justify-center space-x-2">
              <button 
                onClick={() => setShowParaphrase(!showParaphrase)}
                className="text-ancient-red text-sm font-medium"
              >
                {showParaphrase ? '收起释义' : '查看释义'}
              </button>
              {showParaphrase && (
                <button 
                  onClick={handleSpeakParaphrase}
                  className={`p-1.5 rounded-full transition-colors ${isSpeakingParaphrase ? 'bg-ancient-red text-white shadow-sm' : 'text-ancient-red hover:bg-ancient-red/10'}`}
                  title="播放释义朗读"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
            <AnimatePresence>
              {showParaphrase && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-2 text-sm text-left text-gray-700 bg-ancient-bg/50 p-3 rounded"
                >
                  {poem.paraphrase}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex flex-col space-y-3">
          <button 
            disabled={timeLeft > 0}
            onClick={onStartChallenge}
            className="ancient-button text-lg disabled:bg-gray-300 disabled:text-gray-500"
          >
            {timeLeft > 0 ? `等待记忆 (${timeLeft}s)` : '开始挑战'}
          </button>
          {timeLeft > 0 && (
            <button 
              onClick={() => setTimeLeft(0)}
              className="text-ancient-red text-sm underline decoration-dotted"
            >
              跳过倒计时
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
