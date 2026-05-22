import { Search, LayoutGrid, Settings as SettingsIcon, BookOpen } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

// Common components can be added here if needed
export const Header = ({ title, left, right }: { title: string, left?: React.ReactNode, right?: React.ReactNode }) => (
  <header className="flex items-center justify-between p-4 bg-ancient-paper/90 backdrop-blur-md border-b border-ancient-border sticky top-0 z-50">
    <div className="w-10">{left}</div>
    <h1 className="text-xl font-bold text-ancient-red truncate max-w-[60%] tracking-widest">{title}</h1>
    <div className="w-10 flex justify-end">{right}</div>
  </header>
);

export const BottomNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: 'home' | 'settings' | 'poem-list') => void }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: LayoutGrid },
    { id: 'poem-list', label: '书阁', icon: BookOpen },
    { id: 'settings', label: '我的', icon: SettingsIcon },
  ];

  return (
    <nav className="flex bg-white/95 backdrop-blur-xl border-t border-ancient-border fixed bottom-0 left-0 right-0 z-50 w-full py-1.5 px-4 shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <button 
            key={tab.id}
            onClick={() => onTabChange(tab.id as any)}
            className="flex-1 relative py-2 flex flex-col items-center justify-center transition-colors overflow-hidden"
          >
            {isActive && (
              <motion.div 
                layoutId="navItemBg"
                className="absolute inset-0 bg-ancient-red/5 rounded-2xl mx-2"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <motion.div
              animate={{ 
                scale: isActive ? 1.1 : 1,
                y: isActive ? -2 : 0
              }}
              className={isActive ? 'text-ancient-red' : 'text-gray-400'}
            >
              <Icon size={22} className={isActive ? 'drop-shadow-sm' : ''} />
            </motion.div>
            <span className={`text-[10px] font-black mt-1 ${isActive ? 'text-ancient-red' : 'text-gray-400'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

