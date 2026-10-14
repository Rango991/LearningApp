import { addDays, dayKey, parseDay } from './dates';
import type { Progress } from './types';

// The family's screen-time deal:
//  - Weekdays: the first 20 minutes of study earn 1 minute each, every minute
//    after that earns 1.5 minutes.
//  - Weekends: the same, then doubled.
//  - Passing a unit test (80%+) for the first time earns a 15 minute bonus.
// Study time is "active" time only (see Session.tsx), and it adds up across
// the whole day, so three 10-minute sessions count the same as one 30-minute one.

export const SCREEN_RULES = {
  baseMinutes: 20,
  boostRate: 1.5,
  weekendMultiplier: 2,
  unitTestBonus: 15,
};

/** A spend or a manual adjustment recorded by a parent. Negative = time used. */
export interface ScreenLogEntry {
  id: number | string;
  minutes: number;
  note: string | null;
  created_at: string;
}

export function isWeekend(day: string): boolean {
  const d = parseDay(day).getDay();
  return d === 0 || d === 6;
}

/** Screen minutes earned for a day's total study minutes. */
export function earnedFor(studyMinutes: number, weekend: boolean): number {
  const { baseMinutes, boostRate, weekendMultiplier } = SCREEN_RULES;
  const earned = Math.min(studyMinutes, baseMinutes) + Math.max(0, studyMinutes - baseMinutes) * boostRate;
  return earned * (weekend ? weekendMultiplier : 1);
}

export function studyMinutes(p: Progress, day: string): number {
  return (p.daily[day]?.seconds ?? 0) / 60;
}

/** Whole minutes earned from studying on a day (not counting unit test bonuses). */
export function earnedOnDay(p: Progress, day: string): number {
  return Math.floor(earnedFor(studyMinutes(p, day), isWeekend(day)));
}

export function bonusesOnDay(p: Progress, day: string): number {
  return (p.screenBonuses ?? []).filter((b) => dayKey(new Date(b.at)) === day).reduce((s, b) => s + b.minutes, 0);
}

export function totalEarned(p: Progress): number {
  const fromStudy = Object.keys(p.daily).reduce((s, day) => s + earnedOnDay(p, day), 0);
  const bonuses = (p.screenBonuses ?? []).reduce((s, b) => s + b.minutes, 0);
  return fromStudy + bonuses;
}

export function balance(p: Progress, log: ScreenLogEntry[]): number {
  return totalEarned(p) + log.reduce((s, e) => s + e.minutes, 0);
}

/** A short, encouraging line about what the next few minutes of study are worth today. */
export function nextBoostHint(p: Progress, today = dayKey()): string {
  const weekend = isWeekend(today);
  const studied = studyMinutes(p, today);
  const toBoost = SCREEN_RULES.baseMinutes - studied;
  const x = weekend ? SCREEN_RULES.weekendMultiplier : 1;
  if (toBoost > 0) {
    const mins = Math.ceil(toBoost);
    return `${mins} more min of study today unlocks the ${SCREEN_RULES.boostRate * x}× boost!`;
  }
  return `Boost active: every study minute is worth ${SCREEN_RULES.boostRate * x} min${weekend ? ' (weekend double!)' : ''}`;
}

/** Earned minutes for each of the last n days, oldest first. */
export function earnedHistory(p: Progress, n: number, today = dayKey()) {
  return Array.from({ length: n }, (_, i) => {
    const day = addDays(today, i - n + 1);
    return {
      day,
      weekend: isWeekend(day),
      studied: Math.round(studyMinutes(p, day)),
      earned: earnedOnDay(p, day) + bonusesOnDay(p, day),
    };
  });
}
