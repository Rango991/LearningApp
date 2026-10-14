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

export interface Progress {
  version: 1;
  updatedAt: string;
  profile: { name: string; createdAt: string };
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
  questions: Record<string, QuestionStat>;
  mistakes: MistakeEntry[];
  sessions: SessionEntry[];
  achievements: Record<string, string>; // id -> unlocked ISO time
  quests: { day: string; items: Quest[]; bonusClaimed: boolean };
  owned: string[]; // shop item ids
  equipped: string | null; // mascot accessory
  settings: { sound: boolean; parentPin: string | null };
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
}
