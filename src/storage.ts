import { UserData, UserLevel, Difficulty } from './types';
import { LEVEL_RULES } from './data/poems';

const STORAGE_KEY = 'tang_shi_game_data';

export const INITIAL_USER_DATA: UserData = {
  userId: 'local_user_001',
  score: 0,
  level: UserLevel.TONG_SHENG,
  unlockedPoems: [1],
  passedPoems: [],
  currentChallenge: null,
  agreedToPrivacy: false,
  settings: {
    memoryTime: 30,
    difficulty: Difficulty.EASY,
    sound: true,
    showParaphrase: false
  }
};

export const loadUserData = (): UserData => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed = JSON.parse(data);
      // Merge with defaults to handle schema updates
      return {
        ...INITIAL_USER_DATA,
        ...parsed,
        settings: {
          ...INITIAL_USER_DATA.settings,
          ...parsed.settings
        }
      };
    } catch (e) {
      console.error('Failed to parse user data from localStorage', e);
    }
  }
  return { ...INITIAL_USER_DATA };
};

export const saveUserData = (data: UserData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const clearUserData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const calculateLevel = (score: number): UserLevel => {
  const rule = LEVEL_RULES.find(r => score >= r.min && score <= r.max);
  return rule ? rule.level : UserLevel.TONG_SHENG;
};
