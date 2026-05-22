/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Difficulty {
  EASY = '初级',
  MEDIUM = '中级',
  HARD = '高级'
}

export enum UserLevel {
  TONG_SHENG = '童生',
  XIU_CAI = '秀才',
  JU_REN = '举人',
  JIN_SHI = '进士',
  ZHUANG_YUAN = '状元'
}

export interface Poem {
  id: number;
  title: string;
  author: string;
  dynasty: string;
  content: string[];
  paraphrase: string;
  difficulty: Difficulty;
}

export interface UserChallengeProgress {
  poemId: number;
  currentSentence: number; // 0-indexed
  life: number;
  hintUsed: number;
  score: number; // score earned in current session
}

export interface UserSettings {
  memoryTime: number; // seconds
  difficulty: Difficulty;
  sound: boolean;
  showParaphrase: boolean;
}

export interface UserData {
  userId: string;
  score: number;
  level: UserLevel;
  unlockedPoems: number[]; // Array of poem IDs
  passedPoems: number[]; // Array of poem IDs
  currentChallenge: UserChallengeProgress | null;
  agreedToPrivacy: boolean;
  settings: UserSettings;
}

export type AppState = 'splash' | 'home' | 'poem-list' | 'study' | 'challenge' | 'result' | 'settings';
