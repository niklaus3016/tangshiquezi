/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppState, UserData, Difficulty, Poem, UserChallengeProgress, UserLevel } from './types';
import { POEMS_DATA } from './data/poems';
import { loadUserData, saveUserData, clearUserData, calculateLevel, INITIAL_USER_DATA } from './storage';

// Import split views
import { SplashView, HomeView, PoemListView, ResultView, SettingsView } from './components/OtherViews';
import { StudyView } from './components/StudyView';
import { ChallengeView } from './components/ChallengeView';
import { BottomNav } from './components/Common';
import { PrivacyModal, DeclineModal } from './components/PrivacyModal';

export default function App() {
  const [appState, setAppState] = useState<AppState>('splash');
  const [userData, setUserData] = useState<UserData>(INITIAL_USER_DATA);
  const [selectedPoemId, setSelectedPoemId] = useState<number | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | '全部'>('全部');
  const [showAgreementModal, setShowAgreementModal] = useState<string | null>(null);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  // Load user data on mount
  useEffect(() => {
    const data = loadUserData();
    setUserData(data);
  }, []);

  const handlePrivacyAccept = useCallback(() => {
    const newData = { ...userData, agreedToPrivacy: true };
    setUserData(newData);
    saveUserData(newData);
  }, [userData]);

  const handlePrivacyDecline = useCallback(() => {
    setShowDeclineModal(true);
  }, []);

  const handleDeclineCancel = useCallback(() => {
    setShowDeclineModal(false);
  }, []);

  const handleDeclineConfirm = useCallback(() => {
    clearUserData();
  }, []);

  const handleOpenAgreement = useCallback(() => {
    setShowAgreementModal('agreement');
  }, []);

  const handleOpenPrivacy = useCallback(() => {
    setShowAgreementModal('privacy');
  }, []);

  const handleCloseAgreement = useCallback(() => {
    setShowAgreementModal(null);
  }, []);

  // Update level whenever score changes
  useEffect(() => {
    const newLevel = calculateLevel(userData.score);
    if (newLevel !== userData.level) {
      setUserData(prev => ({ ...prev, level: newLevel }));
    }
  }, [userData.score]);

  // Handle data saving
  const updateUserData = useCallback((newUserData: UserData) => {
    setUserData(newUserData);
    saveUserData(newUserData);
  }, []);

  const handleClearData = useCallback(() => {
    if (window.confirm('确定清除所有数据吗？清除后不可恢复')) {
      clearUserData();
      const freshData = { ...INITIAL_USER_DATA };
      setUserData(freshData);
      setAppState('home');
    }
  }, []);

  const currentPoem = useMemo(() => {
    if (selectedPoemId) return POEMS_DATA.find(p => p.id === selectedPoemId);
    return null;
  }, [selectedPoemId]);

  const handleComplete = useCallback((sessionScore: number) => {
    if (!currentPoem) return;
    const bonus = 5; // Placeholder for logic
    const totalAward = sessionScore + bonus;
    
    const newPassed = [...new Set([...userData.passedPoems, currentPoem.id])];
    // Unlock all poems up to the next one (sequential unlocking)
    const maxUnlockId = Math.min(currentPoem.id + 1, POEMS_DATA.length);
    const newUnlocked = [...new Set([...userData.unlockedPoems, ...Array.from({ length: maxUnlockId }, (_, i) => i + 1)])];
    
    updateUserData({
      ...userData,
      score: userData.score + totalAward,
      passedPoems: newPassed,
      unlockedPoems: newUnlocked,
      currentChallenge: null
    });
    setAppState('result');
  }, [currentPoem, userData, updateUserData]);

  const handleChallengeExit = useCallback((progress: UserChallengeProgress | null) => {
    if (progress) {
      updateUserData({
        ...userData,
        currentChallenge: progress
      });
    } else {
      // User chose to exit without saving progress
      updateUserData({
        ...userData,
        currentChallenge: null
      });
    }
    setAppState('poem-list');
  }, [userData, updateUserData]);

  return (
    <div className="w-full bg-ancient-bg min-h-screen shadow-2xl relative select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={appState}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {appState === 'splash' && (
            <SplashView onStart={() => setAppState('home')} />
          )}

          {appState === 'home' && (
            <HomeView 
              userData={userData} 
              onNavigate={setAppState} 
              onContinue={() => {
                if (userData.currentChallenge) {
                  setSelectedPoemId(userData.currentChallenge.poemId);
                  setAppState('challenge');
                } else {
                  // Find the first un-passed poem that is unlocked
                  const nextId = userData.passedPoems.length > 0 
                    ? Math.max(...userData.passedPoems) + 1 
                    : 1;
                  
                  if (nextId <= POEMS_DATA.length) {
                    setSelectedPoemId(nextId);
                    setAppState('study');
                  } else {
                    setAppState('poem-list');
                  }
                }
              }}
            />
          )}

          {appState === 'poem-list' && (
            <PoemListView 
              userData={userData} 
              difficultyFilter={difficultyFilter} 
              setDifficultyFilter={setDifficultyFilter} 
              onBack={() => setAppState('home')}
              onPoemSelect={(id) => {
                setSelectedPoemId(id);
                setAppState('study');
              }}
            />
          )}

          {appState === 'study' && currentPoem && (
            <StudyView 
              poem={currentPoem} 
              settings={userData.settings} 
              onBack={() => setAppState('poem-list')}
              onStartChallenge={() => setAppState('challenge')}
            />
          )}

          {appState === 'challenge' && currentPoem && (
            <ChallengeView 
              poem={currentPoem} 
              userData={userData} 
              updateUserData={updateUserData}
              onExit={handleChallengeExit}
              onComplete={handleComplete}
            />
          )}

          {appState === 'result' && currentPoem && (
            <ResultView 
              poem={currentPoem} 
              userData={userData} 
              onBackHome={() => setAppState('home')}
              onRetry={() => setAppState('study')}
              onNext={() => {
                const nextId = currentPoem.id + 1;
                if (nextId <= POEMS_DATA.length) {
                  setSelectedPoemId(nextId);
                  setAppState('study');
                } else {
                  setAppState('poem-list');
                }
              }}
            />
          )}

          {appState === 'settings' && (
            <SettingsView 
              userData={userData} 
              onUpdate={updateUserData} 
              onClear={handleClearData}
              onOpenPrivacy={handleOpenPrivacy}
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {(appState === 'home' || appState === 'settings' || appState === 'poem-list') && appState !== 'splash' && (
        <BottomNav 
          activeTab={appState as 'home' | 'settings' | 'poem-list'} 
          onTabChange={(tab) => setAppState(tab)} 
        />
      )}

      {((!userData.agreedToPrivacy && appState !== 'splash') || showAgreementModal !== null) && (
        <PrivacyModal
          onAccept={handlePrivacyAccept}
          onDecline={handlePrivacyDecline}
          showAgreementModal={showAgreementModal}
          onOpenAgreement={handleOpenAgreement}
          onOpenPrivacy={handleOpenPrivacy}
          onCloseAgreement={handleCloseAgreement}
          hasAgreed={userData.agreedToPrivacy}
        />
      )}

      <AnimatePresence>
        {showDeclineModal && (
          <DeclineModal
            onCancel={handleDeclineCancel}
            onConfirm={handleDeclineConfirm}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
