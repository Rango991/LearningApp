import { allQuestionKeys, findLesson, findQuestion, findUnit, qKey } from '../content';
import type { Question, Unit } from '../content/types';
import { achievementById, newlyEarned } from './achievements';
import { addDays, daysBetween, dayKey } from './dates';
import { levelFor } from './levels';
import { lessonPassed } from './mastery';
import { bonusesOnDay, earnedOnDay, unitTestBonus } from './screenTime';
import { MAX_FREEZES, shopItems } from './shop';
import { chestsCrossed, weeklyStatus, WEEKLY_GOAL } from './studyChests';
import type {
  DayStats, Progress, Quest, QuestKind, RewardSummary, SessionResult,
} from './types';

export const XP = {
  perCorrect: 2,
  lessonComplete: 5,
  reviewComplete: 5,
  checkpointComplete: 15,
  perfectBonus: 5,
  comboBonus: 3, // for a combo of 5 or more
};

export const GEMS = {
  lesson: 5,
  perfect: 5,
  checkpointPass: 20,
  levelUp: 25,
  allQuests: 20,
  /** First time she does a lesson in a unit she has already tested out of. */
  testedOutLesson: 10,
};

/** Leitner intervals in days for boxes 0-5. */
const INTERVALS = [0, 1, 3, 7, 14, 30];

const MAX_LOG = 300;

export function createProgress(name: string, now = new Date()): Progress {
  return {
    version: 1,
    updatedAt: now.toISOString(),
    profile: { name, createdAt: now.toISOString() },
    xp: 0,
    gems: 50,
    dailyGoal: 20,
    streak: { current: 0, longest: 0, lastActiveDay: null, freezes: 1, frozenDays: [] },
    totals: { lessons: 0, perfect: 0, fixed: 0, goalDays: 0, checkpointsPassed: 0, bestCombo: 0 },
    daily: {},
    lessons: {},
    checkpoints: {},
    screenBonuses: [],
    questions: {},
    mistakes: [],
    sessions: [],
    achievements: {},
    quests: { day: '', items: [], bonusClaimed: false },
    owned: [],
    equipped: null,
    settings: { sound: true, parentPin: null },
  };
}

const clone = (p: Progress): Progress => structuredClone(p);

/** Fills in fields added after a progress file was first saved. */
export function migrate(p: Progress): Progress {
  if (p.screenBonuses) return p;
  return { ...p, screenBonuses: [] };
}

// ---------------------------------------------------------------- streaks

export interface StreakCheck {
  progress: Progress;
  /** Days covered by streak freezes since she was last on. */
  frozeDays: number;
  /** The streak she lost, if it ran out. */
  lostStreak: number;
}

/**
 * Called when the app opens. Uses streak freezes to cover missed days, or
 * resets the streak if there aren't enough.
 */
export function reconcileStreak(p: Progress, today = dayKey()): StreakCheck {
  const last = p.streak.lastActiveDay;
  if (!last || p.streak.current === 0) return { progress: p, frozeDays: 0, lostStreak: 0 };
  const missed = daysBetween(last, today) - 1;
  if (missed <= 0) return { progress: p, frozeDays: 0, lostStreak: 0 };

  const next = clone(p);
  if (next.streak.freezes >= missed) {
    next.streak.freezes -= missed;
    for (let i = 1; i <= missed; i++) next.streak.frozenDays.push(addDays(last, i));
    next.streak.lastActiveDay = addDays(today, -1);
    return { progress: touch(next), frozeDays: missed, lostStreak: 0 };
  }
  const lost = next.streak.current;
  next.streak.current = 0;
  return { progress: touch(next), frozeDays: 0, lostStreak: lost };
}

/** Is her streak waiting on today's lesson? */
export function streakAtRisk(p: Progress, today = dayKey()): boolean {
  return p.streak.current > 0 && p.streak.lastActiveDay !== today;
}

// ----------------------------------------------------------------- quests

const QUEST_POOL: { kind: QuestKind; targets: number[]; reward: number }[] = [
  { kind: 'xp', targets: [20, 30, 40], reward: 10 },
  { kind: 'lessons', targets: [1, 2, 3], reward: 10 },
  { kind: 'correct', targets: [10, 15, 20], reward: 10 },
  { kind: 'combo', targets: [5, 6, 8], reward: 15 },
  { kind: 'perfect', targets: [1], reward: 15 },
  { kind: 'fix', targets: [2, 3], reward: 15 },
];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function questLabel(q: Quest): string {
  switch (q.kind) {
    case 'xp': return `Earn ${q.target} XP`;
    case 'lessons': return q.target === 1 ? 'Finish a lesson' : `Finish ${q.target} lessons`;
    case 'correct': return `Get ${q.target} answers right`;
    case 'combo': return `Get ${q.target} right in a row`;
    case 'perfect': return 'Finish a perfect lesson';
    case 'fix': return `Fix ${q.target} old mistakes`;
  }
}

/** Makes sure today's three quests exist. They're the same all day. */
export function ensureQuests(p: Progress, today = dayKey()): Progress {
  if (p.quests.day === today) return p;
  const canFix = mistakeKeys(p).length >= 2;
  const pool = QUEST_POOL.filter((q) => q.kind !== 'fix' || canFix);
  let seed = hash(today + p.profile.createdAt);
  const items: Quest[] = [];
  while (items.length < 3 && pool.length > 0) {
    const pick = pool.splice(seed % pool.length, 1)[0];
    seed = hash(String(seed));
    const target = pick.kind === 'fix'
      ? Math.min(pick.targets[seed % pick.targets.length], mistakeKeys(p).length)
      : pick.targets[seed % pick.targets.length];
    items.push({ kind: pick.kind, target, progress: 0, reward: pick.reward, done: false });
  }
  const next = clone(p);
  next.quests = { day: today, items, bonusClaimed: false };
  return touch(next);
}

// ------------------------------------------------------- spaced repetition

/** Questions she got wrong last time she saw them. */
export function mistakeKeys(p: Progress): string[] {
  return Object.entries(p.questions)
    .filter(([key, s]) => s.box === 0 && s.wrong > 0 && findQuestion(key))
    .sort((a, b) => (a[1].lastSeen < b[1].lastSeen ? 1 : -1))
    .map(([key]) => key);
}

/** Questions due for a refresher (not counting mistakes). */
export function dueKeys(p: Progress, today = dayKey()): string[] {
  return Object.entries(p.questions)
    .filter(([key, s]) => s.box > 0 && s.due <= today && findQuestion(key))
    .sort((a, b) => (a[1].due < b[1].due ? -1 : 1))
    .map(([key]) => key);
}

/** Builds a practice session: mistakes first, then due refreshers. */
export function buildReview(p: Progress, today = dayKey(), size = 10): string[] {
  const keys = [...mistakeKeys(p), ...dueKeys(p, today)];
  return [...new Set(keys)].slice(0, size);
}

export function reviewAvailable(p: Progress, today = dayKey()): number {
  return new Set([...mistakeKeys(p), ...dueKeys(p, today)]).size;
}

// ------------------------------------------------------------- unlocking

/** Lessons within a unit unlock in order. All units are open, so she can
 *  follow whatever order her school teaches them in. */
export function isLessonUnlocked(p: Progress, unit: Unit, lessonIndex: number): boolean {
  if (lessonIndex === 0 || testedOut(p, unit)) return true;
  // Lessons she has already done stay open, even from before the pass mark existed.
  if (p.lessons[unit.lessons[lessonIndex].id]) return true;
  return lessonPassed(p, unit.lessons[lessonIndex - 1].id);
}

/** Passing the unit test unlocks every lesson in it, so she can skip what she already knows. */
export function testedOut(p: Progress, unit: Unit): boolean {
  return (p.checkpoints[unit.id] ?? 0) >= 0.8;
}

export function isUnitComplete(p: Progress, unit: Unit): boolean {
  return unit.lessons.every((l) => p.lessons[l.id]);
}

/** 0-3 stars for a lesson: one per completion, gold once she's had a perfect run. */
export function lessonStars(p: Progress, lessonId: string): { stars: number; gold: boolean } {
  const r = p.lessons[lessonId];
  if (!r) return { stars: 0, gold: false };
  return { stars: Math.min(3, r.completions), gold: r.bestAccuracy >= 1 };
}

export function checkpointQuestions(unit: Unit, rng = Math.random, size = 12): string[] {
  const keys = unit.lessons.flatMap((l) => l.questions.map((q) => qKey(l.id, q.id)));
  return shuffle(keys, rng).slice(0, size);
}

export function shuffle<T>(arr: T[], rng = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ------------------------------------------------------- finishing a session

function emptyDay(): DayStats {
  return { xp: 0, lessons: 0, answered: 0, correct: 0, seconds: 0 };
}

/**
 * Applies a finished lesson/review/test to her progress and works out every
 * reward she earned, so the results screen can celebrate each one.
 */
export function applySession(p: Progress, result: SessionResult, now = new Date()): { progress: Progress; summary: RewardSummary } {
  const next = clone(migrate(p));
  const today = dayKey(now);
  const iso = now.toISOString();
  const levelBefore = levelFor(next.xp).level;
  const screenBefore = earnedOnDay(next, today) + bonusesOnDay(next, today);

  const total = result.answers.length;
  const correct = result.answers.filter((a) => a.correct).length;
  const accuracy = total === 0 ? 0 : correct / total;
  const perfect = total > 0 && correct === total;

  // XP
  const breakdown: { label: string; xp: number }[] = [];
  const completeXp = result.kind === 'lesson' ? XP.lessonComplete
    : result.kind === 'checkpoint' ? XP.checkpointComplete : XP.reviewComplete;
  breakdown.push({ label: result.kind === 'checkpoint' ? 'Unit test done' : result.kind === 'review' ? 'Practice done' : 'Lesson done', xp: completeXp });
  if (correct > 0) breakdown.push({ label: `${correct} right first time`, xp: correct * XP.perCorrect });
  if (perfect) breakdown.push({ label: 'Perfect!', xp: XP.perfectBonus });
  if (result.maxCombo >= 5) breakdown.push({ label: `${result.maxCombo} in a row`, xp: XP.comboBonus });
  const xpGained = breakdown.reduce((s, b) => s + b.xp, 0);
  next.xp += xpGained;

  // Gems
  let gems = 0;
  if (result.kind === 'lesson') gems += GEMS.lesson;
  if (perfect && result.kind !== 'review') gems += GEMS.perfect;

  // Question stats (spaced repetition) and the mistakes log
  let fixed = 0;
  for (const a of result.answers) {
    const s = next.questions[a.key] ?? { seen: 0, correct: 0, wrong: 0, box: 1, due: today, lastSeen: today };
    s.seen++;
    s.lastSeen = today;
    if (a.correct) {
      if (s.box === 0 && s.wrong > 0) fixed++;
      s.correct++;
      s.box = Math.min(INTERVALS.length - 1, s.box + 1);
    } else {
      s.wrong++;
      s.box = 0;
      s.lastWrongAnswer = a.given;
      next.mistakes.push({ at: iso, key: a.key, given: a.given });
    }
    s.due = addDays(today, INTERVALS[s.box]);
    next.questions[a.key] = s;
  }
  next.mistakes = next.mistakes.slice(-MAX_LOG);

  // Lesson / checkpoint records
  let passedCheckpoint = false;
  if (result.kind === 'lesson' && result.lessonId) {
    const r = next.lessons[result.lessonId] ?? { completions: 0, bestAccuracy: 0, lastCompleted: iso };
    r.completions++;
    r.bestAccuracy = Math.max(r.bestAccuracy, accuracy);
    r.lastCompleted = iso;
    next.lessons[result.lessonId] = r;
    next.totals.lessons++;
    // Extra gems for going back to learn a unit she skipped by passing its test.
    const unit = findLesson(result.lessonId)?.unit;
    if (r.completions === 1 && unit && testedOut(next, unit)) gems += GEMS.testedOutLesson;
  }
  if (result.kind === 'checkpoint' && result.unitId) {
    const before = next.checkpoints[result.unitId] ?? 0;
    next.checkpoints[result.unitId] = Math.max(before, accuracy);
    if (accuracy >= 0.8) {
      passedCheckpoint = true;
      if (before < 0.8) {
        next.totals.checkpointsPassed++;
        gems += GEMS.checkpointPass;
      }
      // Screen time only once she has done every lesson, and only once per unit.
      const unit = findUnit(result.unitId)?.unit;
      if (unit && isUnitComplete(next, unit) && !next.screenBonuses.some((b) => b.unitId === unit.id)) {
        next.screenBonuses.push({ at: iso, unitId: unit.id, minutes: unitTestBonus(unit) });
      }
    }
  }
  if (perfect && result.kind === 'lesson') next.totals.perfect++;
  next.totals.fixed += fixed;
  next.totals.bestCombo = Math.max(next.totals.bestCombo, result.maxCombo);

  // Daily stats and goal
  const day = next.daily[today] ?? emptyDay();
  const goalWasMet = day.xp >= next.dailyGoal;
  const minutesBefore = day.seconds / 60;
  const weekWasWon = weeklyStatus(next, today).won;
  day.xp += xpGained;
  day.lessons += 1;
  day.answered += total;
  day.correct += correct;
  day.seconds += result.seconds;
  next.daily[today] = day;
  const goalJustMet = !goalWasMet && day.xp >= next.dailyGoal;
  if (goalJustMet) next.totals.goalDays++;

  // Study chests for time spent today, and the beat-last-week chest
  const studyChests = chestsCrossed(minutesBefore, day.seconds / 60);
  for (const c of studyChests) gems += c.gems;
  const weeklyWon = !weekWasWon && weeklyStatus(next, today).won;
  if (weeklyWon) gems += WEEKLY_GOAL.gems;

  // Streak
  let streakExtended = false;
  if (next.streak.lastActiveDay !== today) {
    const continues = next.streak.lastActiveDay === addDays(today, -1) && next.streak.current > 0;
    next.streak.current = continues ? next.streak.current + 1 : 1;
    next.streak.lastActiveDay = today;
    next.streak.longest = Math.max(next.streak.longest, next.streak.current);
    streakExtended = true;
  }

  // Quests
  const questsCompleted: Quest[] = [];
  if (next.quests.day === today) {
    for (const q of next.quests.items) {
      if (q.done) continue;
      switch (q.kind) {
        case 'xp': q.progress = Math.min(q.target, day.xp); break;
        case 'lessons': q.progress += result.kind === 'lesson' ? 1 : 0; break;
        case 'correct': q.progress += correct; break;
        case 'combo': q.progress = Math.max(q.progress, result.maxCombo); break;
        case 'perfect': q.progress += perfect && result.kind === 'lesson' ? 1 : 0; break;
        case 'fix': q.progress += fixed; break;
      }
      q.progress = Math.min(q.progress, q.target);
      if (q.progress >= q.target) {
        q.done = true;
        gems += q.reward;
        questsCompleted.push({ ...q });
      }
    }
  }
  let allQuestsBonus = false;
  if (next.quests.items.length > 0 && next.quests.items.every((q) => q.done) && !next.quests.bonusClaimed) {
    next.quests.bonusClaimed = true;
    gems += GEMS.allQuests;
    allQuestsBonus = true;
  }

  // Level up
  const levelAfter = levelFor(next.xp).level;
  const levelUp = levelAfter > levelBefore ? levelAfter : null;
  if (levelUp) gems += GEMS.levelUp;

  // Session log
  next.sessions.push({
    at: iso, kind: result.kind, lessonId: result.lessonId, unitId: result.unitId,
    xp: xpGained, correct, total, seconds: result.seconds, perfect,
  });
  next.sessions = next.sessions.slice(-MAX_LOG);

  next.gems += gems;
  const screenBonus = bonusesOnDay(next, today) - bonusesOnDay(p, today);
  const screenMinutes = earnedOnDay(next, today) + bonusesOnDay(next, today) - screenBefore;

  // Achievements (after everything else so they see the new totals)
  const earned = newlyEarned(next);
  for (const a of earned) {
    next.achievements[a.id] = iso;
    next.gems += a.gems;
    gems += a.gems;
  }

  return {
    progress: touch(next, now),
    summary: {
      xpGained,
      xpBreakdown: breakdown,
      gemsGained: gems,
      accuracy,
      perfect,
      streakExtended,
      streak: next.streak.current,
      goalJustMet,
      levelUp,
      newAchievements: earned.map((a) => a.id),
      questsCompleted,
      allQuestsBonus,
      passedCheckpoint,
      screenMinutes,
      screenBonus,
      studyChests,
      weeklyWon,
      needsRetry: result.kind === 'lesson' && Boolean(result.lessonId) && !lessonPassed(next, result.lessonId!),
      retryUnlocksNext: (() => {
        const found = result.lessonId ? findLesson(result.lessonId) : undefined;
        if (!found) return false;
        const i = found.unit.lessons.findIndex((l) => l.id === result.lessonId);
        return i + 1 < found.unit.lessons.length && !isLessonUnlocked(next, found.unit, i + 1);
      })(),
    },
  };
}

// ------------------------------------------------------------------- shop

export type BuyResult = { ok: true; progress: Progress } | { ok: false; reason: string };

export function buyItem(p: Progress, itemId: string): BuyResult {
  const item = shopItems.find((i) => i.id === itemId);
  if (!item) return { ok: false, reason: 'Unknown item' };
  if (p.gems < item.price) return { ok: false, reason: `You need ${item.price - p.gems} more gems` };
  const next = clone(p);
  if (item.kind === 'freeze') {
    if (next.streak.freezes >= MAX_FREEZES) return { ok: false, reason: `You can only hold ${MAX_FREEZES} freezes` };
    next.streak.freezes++;
  } else {
    if (next.owned.includes(item.id)) return { ok: false, reason: 'You already own this' };
    next.owned.push(item.id);
    if (item.kind === 'skin') next.skin = item.id;
    else next.equipped = item.id;
  }
  next.gems -= item.price;
  return { ok: true, progress: touch(next) };
}

/** Spend gems on a real-world reward a parent set up. A parent then marks it as given. */
export function claimReward(p: Progress, rewardId: string, now = new Date()): BuyResult {
  const reward = p.rewards?.items.find((r) => r.id === rewardId);
  if (!reward) return { ok: false, reason: 'That reward isn’t available any more' };
  if (p.gems < reward.price) return { ok: false, reason: `You need ${reward.price - p.gems} more gems` };
  const next = clone(p);
  next.gems -= reward.price;
  next.claims = [...(next.claims ?? []), {
    id: `${reward.id}-${now.getTime()}`, rewardId: reward.id, title: reward.title, emoji: reward.emoji, price: reward.price, at: now.toISOString(),
  }].slice(-50);
  return { ok: true, progress: touch(next, now) };
}

/**
 * Take in the parent's reward list and "given" marks. The list is replaced only
 * when the parent's copy is newer; given marks only ever get added.
 */
export function applyFamilyRewards(p: Progress, inbox: { rewards: Progress['rewards']; given: string[] }): Progress {
  let next = p;
  const incoming = inbox.rewards;
  if (incoming && (!p.rewards || incoming.updatedAt > p.rewards.updatedAt)) next = { ...next, rewards: incoming };
  const given = new Set(inbox.given);
  if (next.claims?.some((c) => !c.givenAt && given.has(c.id))) {
    const at = new Date().toISOString();
    next = { ...next, claims: next.claims.map((c) => (!c.givenAt && given.has(c.id) ? { ...c, givenAt: at } : c)) };
  }
  return next === p ? p : touch({ ...next });
}

export function touch(p: Progress, now = new Date()): Progress {
  p.updatedAt = now.toISOString();
  return p;
}

// ------------------------------------------------------- parent insights

export interface WeakSpot {
  key: string;
  question: Question;
  lessonTitle: string;
  wrong: number;
  seen: number;
  lastWrongAnswer?: string;
  fixed: boolean;
}

/** Questions she gets wrong most, worst first. */
export function weakSpots(p: Progress, limit = 10): WeakSpot[] {
  return Object.entries(p.questions)
    .filter(([, s]) => s.wrong > 0)
    .flatMap(([key, s]): WeakSpot[] => {
      const ref = findQuestion(key);
      if (!ref) return [];
      return [{
        key,
        question: ref.question,
        lessonTitle: ref.lesson.title,
        wrong: s.wrong,
        seen: s.seen,
        lastWrongAnswer: s.lastWrongAnswer,
        fixed: s.box > 0,
      }];
    })
    .sort((a, b) => Number(a.fixed) - Number(b.fixed) || b.wrong / b.seen - a.wrong / a.seen || b.wrong - a.wrong)
    .slice(0, limit);
}

/** Accuracy over every attempt at a lesson's questions, or null if untried. */
export function lessonAccuracy(p: Progress, lessonId: string): number | null {
  const ref = findLesson(lessonId);
  if (!ref) return null;
  let seen = 0;
  let correct = 0;
  for (const q of ref.lesson.questions) {
    const s = p.questions[qKey(lessonId, q.id)];
    if (s) { seen += s.seen; correct += s.correct; }
  }
  return seen === 0 ? null : correct / seen;
}

export function questionsSeenCount(p: Progress): { seen: number; total: number } {
  const keys = allQuestionKeys();
  return { seen: keys.filter((k) => p.questions[k]).length, total: keys.length };
}

export { achievementById };
