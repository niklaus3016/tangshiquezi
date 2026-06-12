import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings as SettingsIcon, ChevronLeft, Play, LayoutGrid, Info, Trash2, Lock, ChevronRight, RefreshCw, Volume2 } from 'lucide-react';
import { AppState, UserData, Difficulty, Poem } from '../types';
import { POEMS_DATA, LEVEL_RULES } from '../data/poems';
import { Header } from './Common';
import { speechService } from '../services/speech';

// --- SplashView ---
export const SplashView: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onStart();
    }, 3500); // 3.5s for a smooth experience (animation + stay time)
    return () => clearTimeout(timer);
  }, [onStart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-6 bg-ancient-paper overflow-hidden text-center">
      {/* Decorative Rotating Mandala */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 opacity-5 pointer-events-none"
      >
        <LayoutGrid size={500} className="text-ancient-red" />
      </motion.div>

      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 opacity-5 pointer-events-none"
      >
        <LayoutGrid size={500} className="text-ancient-red" />
      </motion.div>
      
      <div className="z-10 space-y-12">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl font-black text-ancient-red tracking-[0.4em] drop-shadow-xl mb-4">
              唐诗
            </h1>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.5, letterSpacing: "2em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.4em" }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
              className="text-8xl font-black text-ancient-red drop-shadow-2xl"
            >
              缺字闯关
            </motion.h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center space-x-4 max-w-xs mx-auto"
          >
            <div className="h-[2px] flex-1 bg-gradient-to-right from-transparent to-ancient-border"></div>
            <p className="text-2xl text-gray-800 font-bold tracking-[0.2em] italic whitespace-nowrap">
              腹有诗书气自华
            </p>
            <div className="h-[2px] flex-1 bg-gradient-to-left from-transparent to-ancient-border"></div>
          </motion.div>
        </div>

        {/* Loading/Enter Progress */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden border border-white shadow-inner relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full bg-ancient-red shadow-[0_0_10px_rgba(153,27,27,0.5)]"
            ></motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="text-xs text-ancient-red font-black tracking-widest uppercase"
          >
            开启诗意画卷...
          </motion.p>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-[10px] text-gray-400 font-medium tracking-[0.2em]"
        >
          探索 300 首经典唐诗的魅力
        </motion.p>
      </div>

      {/* Decorative Ink Splashes */}
      <motion.div 
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"
      ></motion.div>
    </div>
  );
};


// --- HomeView ---
const LEVEL_THEMES: Record<string, { colorText: string, colorBg: string, colorBar: string, character: string, icon: string }> = {
  '童生': { colorText: 'text-emerald-600', colorBg: 'bg-emerald-50', colorBar: 'bg-emerald-500', character: '🧒', icon: '🌱' },
  '秀才': { colorText: 'text-sky-600', colorBg: 'bg-sky-50', colorBar: 'bg-sky-500', character: '🧑‍🎓', icon: '📖' },
  '举人': { colorText: 'text-indigo-600', colorBg: 'bg-indigo-50', colorBar: 'bg-indigo-500', character: '🧑‍🏫', icon: '✨' },
  '进士': { colorText: 'text-amber-600', colorBg: 'bg-amber-50', colorBar: 'bg-amber-500', character: '👨‍💼', icon: '🎖️' },
  '状元': { colorText: 'text-ancient-red', colorBg: 'bg-red-50', colorBar: 'bg-ancient-red', character: '🤴', icon: '👑' },
};

// Static achievements data - defined outside component to avoid re-creation
const ACHIEVEMENTS = [
  { title: '初学乍练', count: 10, icon: '🌱', desc: '累计通过 10 首唐诗' },
  { title: '学富五车', count: 50, icon: '📚', desc: '累计通过 50 首唐诗' },
  { title: '才高八斗', count: 150, icon: '✨', desc: '累计通过 150 首唐诗' },
  { title: '名满天下', count: POEMS_DATA.length, icon: '🏆', desc: `累计通过全部 ${POEMS_DATA.length} 首唐诗` },
];

export const HomeView: React.FC<{
  userData: UserData,
  onNavigate: (state: AppState) => void,
  onContinue: () => void
}> = ({ userData, onNavigate, onContinue }) => {
  const [showRulesInfo, setShowRulesInfo] = useState(false);

  const currentTheme = LEVEL_THEMES[userData.level] || LEVEL_THEMES['童生'];

  // Calculate real progress
  const currentLevelRule = LEVEL_RULES.find(r => r.level === userData.level) || LEVEL_RULES[0];
  const nextLevelRule = LEVEL_RULES[LEVEL_RULES.indexOf(currentLevelRule) + 1];
  
  let progress = 0;
  let remaining = 0;
  let nextTotal = 100;

  if (nextLevelRule) {
    const min = currentLevelRule.min;
    const nextMin = nextLevelRule.min;
    nextTotal = nextMin - min;
    remaining = nextMin - userData.score;
    progress = ((userData.score - min) / nextTotal) * 100;
  } else {
    // Max level (Zhuang Yuan)
    progress = 100;
  }

  // Find next target poem title
  const nextPoemId = userData.passedPoems.length > 0 
    ? Math.max(...userData.passedPoems) + 1 
    : 1;
  const nextPoem = POEMS_DATA.find(p => p.id === nextPoemId);

  return (
    <div className="flex flex-col h-screen relative bg-ancient-paper overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 -left-10 opacity-10 pointer-events-none transform -rotate-12">
        <LayoutGrid size={120} className="text-ancient-red" />
      </div>

      <Header title="唐诗缺字挑战" />
      
      <main className="flex-1 overflow-y-auto p-4 space-y-4 w-full max-w-2xl mx-auto z-10 no-scrollbar pb-28">
        {/* User Stats Hero - Cute Cartoon Avatar Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-white/80 backdrop-blur-md rounded-3xl p-4 border-b-4 border-ancient-border shadow-sm overflow-hidden"
        >
          {/* Subtle decoration in hero background */}
          <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${currentTheme.colorBar} opacity-5`}></div>

          <div className="absolute top-2 right-2 bg-ancient-red text-white px-3 py-0.5 rounded-full text-[10px] font-bold shadow-md z-20">
            Lv. {LEVEL_RULES.indexOf(currentLevelRule) + 1}
          </div>
          
          <div className="flex items-center space-x-5 mb-4 relative z-10">
            <div className="relative shrink-0">
              {/* Floating icon above avatar */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 z-20 text-xl drop-shadow-sm"
              >
                {currentTheme.icon}
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`w-16 h-16 ${currentTheme.colorBar} rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl border-4 border-white transform rotate-3 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full translate-y-1/2 scale-150"></div>
                <span className="relative z-10 transform -rotate-3">{currentTheme.character}</span>
              </motion.div>
            </div>
            
            <div className="flex-1 text-left relative">
              <h2 className={`text-2xl font-black ${currentTheme.colorText} leading-tight drop-shadow-sm`}>
                {userData.level}
              </h2>
              <div className="flex items-center mt-1">
                <span className="bg-white/50 backdrop-blur-sm border border-ancient-border/50 px-2.5 py-0.5 rounded-full text-ancient-red text-[10px] font-black flex items-center shadow-sm">
                  <span className="mr-1">💎</span> 积分: {userData.score}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full space-y-1 relative z-10">
            <div className="flex justify-between text-[9px] font-black text-gray-400">
              <span className="tracking-widest uppercase">成长之路</span>
              {nextLevelRule ? (
                <span>还差 {remaining} 分升级</span>
              ) : (
                <span>已达最高等级</span>
              )}
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden border border-white shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, progress)}%` }}
                className={`h-full relative ${currentTheme.colorBar}`}
              >
                <div className="absolute right-0 top-0 h-full w-2 bg-white/30 skew-x-12"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>


        {/* Play Button Section */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContinue} 
          className="w-full bg-ancient-red text-white py-4 rounded-3xl shadow-[0_4px_0_rgb(120,30,30)] active:shadow-none active:translate-y-[4px] transition-all flex flex-col items-center justify-center space-y-1"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <Play size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-[.2em]">{userData.currentChallenge ? '继续闯关' : '进入挑战'}</span>
        </motion.button>

        {/* Info Grid - More compact */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/70 p-3 rounded-2xl border border-ancient-border flex flex-col items-center justify-center text-center">
            <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">通关进度</span>
            <span className="text-xl font-black text-ancient-red leading-none mt-1">{userData.passedPoems.length}</span>
            <span className="text-[8px] text-gray-500 mt-1">共 {POEMS_DATA.length} 首</span>
          </div>
          <div className="bg-white/70 p-3 rounded-2xl border border-ancient-border flex flex-col items-center justify-center text-center overflow-hidden">
            <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">下一关卡</span>
            <span className="text-lg font-black text-ancient-red leading-none mt-1 truncate w-full">{nextPoem?.title || '已通关'}</span>
            <span className="text-[8px] text-gray-500 mt-1">按部就班</span>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-xs font-black text-ancient-red flex items-center">
              <span className="mr-2 text-base">🏆</span> 收集成就
            </h3>
            <button 
              onClick={() => setShowRulesInfo(true)}
              className="text-gray-400 hover:text-ancient-red transition-colors"
            >
              <Info size={14} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 bg-ancient-bg/40 border-2 border-ancient-border border-dashed p-3 rounded-2xl">
            {ACHIEVEMENTS.map((ach, idx) => {
              const isUnlocked = userData.passedPoems.length >= ach.count;
              return (
                <div key={idx} className={`flex flex-col items-center space-y-1 ${!isUnlocked ? 'opacity-30 grayscale' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl border-2 ${isUnlocked ? 'bg-orange-100 border-orange-300' : 'bg-gray-100 border-gray-300'}`}>
                    {ach.icon}
                  </div>
                  <span className="text-[8px] font-bold text-gray-600 truncate w-full text-center">{ach.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Rules Modal Overlay */}
        {showRulesInfo && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowRulesInfo(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-ancient-paper w-full max-w-sm rounded-3xl p-6 shadow-2xl border-4 border-ancient-border"
            >
              <h3 className="text-xl font-black text-ancient-red mb-6 text-center tracking-widest border-b border-ancient-border pb-3">成就阶梯说明</h3>
              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="flex items-center space-x-4 bg-white/50 p-3 rounded-xl border border-ancient-border/50">
                    <span className="text-2xl w-10 h-10 flex items-center justify-center bg-ancient-bg rounded-full">{ach.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{ach.title}</h4>
                      <p className="text-[10px] text-gray-500">{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowRulesInfo(false)}
                className="w-full mt-8 bg-ancient-red text-white py-3 rounded-xl font-bold tracking-widest active:scale-95 transition-transform"
              >
                我知道了
              </button>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
};


// --- PoemListView ---
export const PoemListView: React.FC<{
  userData: UserData,
  difficultyFilter: Difficulty | '全部',
  setDifficultyFilter: (d: Difficulty | '全部') => void,
  onPoemSelect: (id: number) => void,
  onBack: () => void
}> = ({ userData, difficultyFilter, setDifficultyFilter, onPoemSelect, onBack }) => {
  const filteredPoems = POEMS_DATA.filter(p => difficultyFilter === '全部' || p.difficulty === difficultyFilter);
  
  const difficultyCounts = React.useMemo(() => {
    return {
      全部: POEMS_DATA.length,
      [Difficulty.EASY]: POEMS_DATA.filter(p => p.difficulty === Difficulty.EASY).length,
      [Difficulty.MEDIUM]: POEMS_DATA.filter(p => p.difficulty === Difficulty.MEDIUM).length,
      [Difficulty.HARD]: POEMS_DATA.filter(p => p.difficulty === Difficulty.HARD).length,
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header title="选择唐诗" left={<button onClick={onBack}><ChevronLeft size={24} className="text-ancient-red" /></button>} />
      <div className="bg-ancient-paper p-3 flex space-x-2 overflow-x-auto border-b border-ancient-border shrink-0 no-scrollbar">
        {['全部', Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD].map((d) => (
          <button 
            key={d} 
            onClick={() => setDifficultyFilter(d as any)} 
            className={`px-3 py-1 rounded-full text-xs border shrink-0 transition-all ${difficultyFilter === d ? 'bg-ancient-red text-white border-ancient-red' : 'bg-white border-ancient-border'}`}
          >
            {d}
            <span className="opacity-60 text-[10px] ml-1">
              {difficultyCounts[d as keyof typeof difficultyCounts]}
            </span>
          </button>
        ))}
      </div>
      <main className="flex-1 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto pb-24 no-scrollbar">
        {filteredPoems.map(poem => {
          const isUnlocked = userData.unlockedPoems.includes(poem.id);
          const isPassed = userData.passedPoems.includes(poem.id);
          const isInterrupted = userData.currentChallenge?.poemId === poem.id;
          return (
            <button key={poem.id} disabled={!isUnlocked} onClick={() => onPoemSelect(poem.id)} className={`ancient-card p-4 text-center relative flex flex-col justify-between h-32 active:scale-95 transition-transform ${!isUnlocked ? 'opacity-50 grayscale' : ''}`}>
              {!isUnlocked && <Lock size={16} className="absolute top-2 right-2 text-gray-500" />}
              {isPassed && <span className="absolute top-1 left-1 bg-green-600 text-white text-[10px] px-1 rounded">已通关</span>}
              {isInterrupted && <span className="absolute top-1 left-1 bg-orange-500 text-white text-[10px] px-1 rounded">继续挑战</span>}
              <h3 className="font-bold text-lg mb-1 truncate">{poem.title}</h3>
              <p className="text-xs text-gray-500">— {poem.author} —</p>
              <div className="mt-2 text-[10px]"><span className="px-2 py-0.5 rounded-full bg-gray-100">{poem.difficulty}</span></div>
            </button>
          );
        })}
      </main>
    </div>
  );
};

// --- ResultView ---
export const ResultView: React.FC<{ 
  poem: Poem, 
  userData: UserData, 
  onNext: () => void, 
  onRetry: () => void, 
  onBackHome: () => void 
}> = ({ poem, userData, onNext, onRetry, onBackHome }) => {
  const pointsGained = (poem.content.length * 10) + 5;
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => speechService.stop();
  }, []);

  const handleSpeak = useCallback(async () => {
    if (isSpeaking) {
      await speechService.stop();
      setIsSpeaking(false);
      return;
    }

    const textToRead = `${poem.title}！${poem.author}！${poem.content.join('。')}`;
    
    try {
      setIsSpeaking(true);
      await speechService.speak(textToRead, 0.6);
      setIsSpeaking(false);
    } catch (error) {
      setIsSpeaking(false);
      alert('语音朗读失败，请检查设备音频设置');
    }
  }, [poem, isSpeaking]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-ancient-paper">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="ancient-card p-10 text-center w-full max-w-sm space-y-6 shadow-2xl border-4">
        <div className="text-6xl mb-2">🎉</div>
        <h2 className="text-3xl font-bold text-ancient-red tracking-widest">闯关成功！</h2>
        <div className="space-y-4 text-lg">
          <div className="relative flex items-center justify-center font-bold">
            <span>《{poem.title}》</span>
            <button 
              onClick={handleSpeak}
              className={`absolute right-0 translate-x-4 p-1.5 rounded-full transition-colors ${isSpeaking ? 'bg-ancient-red text-white' : 'text-ancient-red hover:bg-ancient-red/10'}`}
              title="朗读全诗"
            >
              <Volume2 size={18} />
            </button>
          </div>
          <div className="bg-ancient-bg p-4 rounded border border-ancient-border flex flex-col space-y-2">
            <div className="flex justify-between"><span>获得积分</span><span className="text-green-600 font-bold">+{pointsGained}</span></div>
            <div className="flex justify-between border-t pt-2"><span>总积分</span><span className="font-bold">{userData.score}</span></div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 pt-4">
          <button onClick={onNext} className="ancient-button text-lg flex items-center justify-center">下一首挑战 <ChevronRight size={20} className="ml-1" /></button>
          <div className="flex space-x-2">
            <button onClick={onRetry} className="flex-1 border-2 border-ancient-border py-2 rounded font-bold">重新挑战</button>
            <button onClick={onBackHome} className="flex-1 border-2 border-ancient-border py-2 rounded font-bold">返回首页</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- SettingsView ---
export const SettingsView: React.FC<{ 
  userData: UserData, 
  onUpdate: (data: UserData) => void, 
  onClear: () => void,
  onOpenPrivacy: () => void
}> = ({ userData, onUpdate, onClear, onOpenPrivacy }) => {
  const [modalContent, setModalContent] = useState<{ title: string, body: string } | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <Header title="设置" />
      
      <main className="flex-1 overflow-y-auto p-6 space-y-8 w-full max-w-2xl mx-auto pb-24 no-scrollbar">
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-ancient-red border-l-4 border-ancient-red pl-2">记忆时间</h3>
          <div className="grid grid-cols-2 gap-2">
            {[15, 30, 60, 90].map(s => (
              <button 
                key={s} 
                onClick={() => onUpdate({ ...userData, settings: { ...userData.settings, memoryTime: s } })} 
                className={`py-1.5 rounded border text-sm transition-colors active:opacity-70 ${userData.settings.memoryTime === s ? 'bg-ancient-red text-white' : 'bg-white'}`}
              >
                {s}秒
              </button>
            ))}
          </div>
        </section>
        
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-ancient-red border-l-4 border-ancient-red pl-2">功能开关</h3>
          <button 
            onClick={() => onUpdate({ ...userData, settings: { ...userData.settings, sound: !userData.settings.sound } })} 
            className="w-full flex justify-between bg-white p-3 border rounded text-sm active:bg-gray-50 transition-colors"
          >
            <span>挑战音效</span>
            <span className={userData.settings.sound ? 'text-ancient-red font-bold' : 'text-gray-400'}>{userData.settings.sound ? '开' : '关'}</span>
          </button>
          <button 
            onClick={() => onUpdate({ ...userData, settings: { ...userData.settings, showParaphrase: !userData.settings.showParaphrase } })} 
            className="w-full flex justify-between bg-white p-3 border rounded text-sm active:bg-gray-50 transition-colors"
          >
            <span>默认折叠释义</span>
            <span className={!userData.settings.showParaphrase ? 'text-ancient-red font-bold' : 'text-gray-400'}>{userData.settings.showParaphrase ? '否' : '是'}</span>
          </button>
        </section>
        
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-ancient-red border-l-4 border-ancient-red pl-2">应用相关</h3>
          <div className="bg-white border rounded divide-y text-sm">
            <button 
              onClick={() => setModalContent({ 
                title: '关于我们', 
                body: '唐诗缺字挑战 v1.0\n\n一款专注于传统文化学习的小游戏，通过“缺字填充”的方式帮助您深度领略大唐风骨。所有题目均选自经典《唐诗三百首》，难度由浅入深，伴您踏上一场诗词修身之旅。\n\n腹有诗书气自华。' 
              })} 
              className="w-full flex justify-between p-3 items-center active:bg-gray-50 transition-colors"
            >
              <span className="flex items-center"><Info size={16} className="mr-2 text-gray-500" /> 关于我们</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
            <button 
              onClick={onOpenPrivacy}
              className="w-full flex justify-between p-3 items-center active:bg-ancient-bg transition-colors"
            >
              <span className="flex items-center"><Lock size={16} className="mr-2 text-ancient-red" /> 隐私政策</span>
              <ChevronRight size={16} className="text-ancient-ink/50" />
            </button>
            <button 
              onClick={() => setShowConfirmClear(true)} 
              className="w-full flex justify-between p-3 items-center text-red-600 active:bg-red-50 transition-colors"
            >
              <span className="flex items-center"><Trash2 size={16} className="mr-2" /> 清除所有数据</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
        </section>
      </main>

      {/* Custom Modal for Info */}
      <AnimatePresence>
        {modalContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-100 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-ancient-paper w-full max-w-sm rounded-3xl shadow-2xl border-2 border-ancient-red overflow-hidden"
            >
              <div className="bg-ancient-red p-3 text-white text-center font-bold tracking-widest">
                {modalContent.title}
              </div>
              <div className="p-6 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed max-h-[60vh] overflow-y-auto">
                {modalContent.body}
              </div>
              <button 
                onClick={() => setModalContent(null)}
                className="w-full py-4 border-t border-ancient-border font-bold text-ancient-red active:bg-gray-100 transition-colors"
              >
                我知道了
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Clear Confirmation Modal */}
        {showConfirmClear && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-100 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-xs rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Trash2 size={32} className="text-red-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">确定要重置吗？</h4>
                  <p className="text-xs text-gray-500 line-clamp-2 px-2">清除后所有的通关记录和进度都将无法找回。</p>
                </div>
              </div>
              <div className="flex border-t divide-x">
                <button 
                  onClick={() => setShowConfirmClear(false)}
                  className="flex-1 py-4 text-gray-500 font-medium active:bg-gray-50"
                >
                  取消
                </button>
                <button 
                  onClick={() => {
                    onClear();
                    setShowConfirmClear(false);
                  }}
                  className="flex-1 py-4 text-red-600 font-bold active:bg-red-50"
                >
                  确定清除
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
