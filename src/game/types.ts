// Everything about her progress lives in one Progress object. It is saved on
// the tablet, and copied to the cloud (when set up) for the parent dashboard.

export interface QuestionStat {
  seen: number;
  correct: number;
  wrong: number;
  /** Leitner box 0-5. 0 = got it wrong last time, needs fixing. */
  box: number;
  /** Day this question is next due for review. */
  due: string;
  lastSeen: string;
  lastWrongAnswer?: string;
}

export interface MistakeEntry {
  at: string; // ISO timestamp
  key: string; // question key: lessonId/questionId
  given: string;
}

export type SessionKind = 'lesson' | 'review' | 'checkpoint';

export interface SessionEntry {
  at: string;
  kind: SessionKind;
  lessonId?: string;
  unitId?: string;
  xp: number;
  correct: number;
  total: number;
  seconds: number;
  perfect: boolean;
}

export interface DayStats {
  xp: number;
  lessons: number;
  answered: number;
  correct: number;
  seconds: number;
}

export type QuestKind = 'xp' | 'lessons' | 'correct' | 'combo' | 'perfect' | 'fix';

export interface Quest {
  kind: QuestKind;
  target: number;
  progress: number;
  reward: number;
  done: boolean;
}

export interface LessonRecord {
  completions: number;
  bestAccuracy: number; // 0-1
  lastCompleted: string;
}

/** A favourite thing she picked, or typed herself. */
export interface Pick {
  e: string;
  label: string;
}

/** What she has told Mito about herself. Every field is optional: she can skip any question. */
export interface About {
  animal?: Pick;
  food?: Pick;
  hobby?: Pick;
  /** An accent colour id from ACCENTS. */
  colour?: string;
  /** Day and month only, as "MM-DD". */
  birthday?: string;
  /** The subject id she finds hardest, or "none". */
  hardest?: string;
  goal?: string;
  doneAt?: string;
  skippedAt?: string;
  /** Years she has already had her birthday gems, e.g. ["2026"]. */
  birthdayGifts?: string[];
}

export interface Progress {
  version: 1;
  updatedAt: string;
  profile: { name: string; createdAt: string; about?: About };
  xp: number;
  gems: number;
  dailyGoal: number;
  streak: {
    current: number;
    longest: number;
    lastActiveDay: string | null;
    freezes: number;
    frozenDays: string[];
  };
  totals: {
    lessons: number;
    perfect: number;
    fixed: number;
    goalDays: number;
    checkpointsPassed: number;
    bestCombo: number;
  };
  daily: Record<string, DayStats>;
  lessons: Record<string, LessonRecord>;
  checkpoints: Record<string, number>; // unitId -> best accuracy
  /** Screen-time bonus minutes, e.g. for passing a unit test. */
  screenBonuses: { at: string; unitId: string; minutes: number }[];
  questions: Record<string, QuestionStat>;
  mistakes: MistakeEntry[];
  sessions: SessionEntry[];
  achievements: Record<string, string>; // id -> unlocked ISO time
  quests: { day: string; items: Quest[]; bonusClaimed: boolean };
  owned: string[]; // shop item ids
  equipped: string | null; // mascot accessory
  /** Mito's colour, a skin item id from the shop (null = the usual orange). */
  skin?: string | null;
  /** Real-world rewards a parent set up, which she can claim with gems. */
  rewards?: { items: FamilyReward[]; updatedAt: string };
  /** Rewards she has claimed. A parent marks them as given. */
  claims?: RewardClaim[];
  settings: { sound: boolean; parentPin: string | null };
}

export interface FamilyReward {
  id: string;
  title: string;
  emoji: string;
  price: number;
}

export interface RewardClaim {
  id: string;
  rewardId: string;
  title: string;
  emoji: string;
  price: number;
  at: string;
  givenAt?: string;
}

/** One answered question within a session. `correct` is for the first attempt. */
export interface AnswerRecord {
  key: string;
  correct: boolean;
  given: string;
}

export interface SessionResult {
  kind: SessionKind;
  lessonId?: string;
  unitId?: string;
  answers: AnswerRecord[];
  maxCombo: number;
  seconds: number;
}

export interface RewardSummary {
  xpGained: number;
  xpBreakdown: { label: string; xp: number }[];
  gemsGained: number;
  accuracy: number;
  perfect: boolean;
  streakExtended: boolean;
  streak: number;
  goalJustMet: boolean;
  levelUp: number | null;
  newAchievements: string[];
  questsCompleted: Quest[];
  allQuestsBonus: boolean;
  passedCheckpoint: boolean;
  /** Screen-time minutes this session added to the bank (including any bonus). */
  screenMinutes: number;
  screenBonus: number;
  /** Study chests opened by this session's time. */
  studyChests: { minutes: number; gems: number }[];
  /** This session took her past last week's study total. */
  weeklyWon: boolean;
  /** A lesson she has never scored the pass mark on, so she should try it again. */
  needsRetry: boolean;
  /** Passing it would unlock the next lesson in the unit. */
  retryUnlocksNext: boolean;
}
