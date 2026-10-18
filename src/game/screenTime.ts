import { addDays, dayKey, parseDay } from './dates';
import type { Unit } from '../content/types';
import type { Progress } from './types';

// The family's screen-time deal:
//  - Weekdays: the first 20 minutes of study earn 1 minute each, every minute
//    after that earns 1.5 minutes.
//  - Weekends: the same, then doubled.
//  - Passing a unit test (80%+) earns a bonus of 2 minutes per lesson in the unit,
//    up to 10, once per unit. Only once she has done every lesson in it: testing
//    out unlocks the unit but pays no screen time.
// The app only shows what she's earned; the time itself is granted in Family Link.
// Study time is "active" time only (see Session.tsx), and it adds up across
// the whole day, so three 10-minute sessions count the same as one 30-minute one.

export const SCREEN_RULES = {
  baseMinutes: 20,
  boostRate: 1.5,
  weekendMultiplier: 2,
  unitTestBonusPerLesson: 2,
  unitTestBonusMax: 10,
};

/** Screen-time bonus for passing a unit's test: 2 min a lesson, up to 10. */
export function unitTestBonus(unit: Unit): number {
  return Math.min(SCREEN_RULES.unitTestBonusMax, unit.lessons.length * SCREEN_RULES.unitTestBonusPerLesson);
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

/** Everything earned on a day: study time plus any unit test bonuses. */
export function earnedToday(p: Progress, day = dayKey()): number {
  return earnedOnDay(p, day) + bonusesOnDay(p, day);
}

/** A short, encouraging line about what the next few minutes of study are worth today. */
export function nextBoostHint(p: Progress, today = dayKey()): string {
  const weekend = isWeekend(today);
  const studied = studyMinutes(p, today);
  const toBoost = SCREEN_RULES.baseMinutes - studied;
  const { boostRate, weekendMultiplier } = SCREEN_RULES;
  if (toBoost > 0) {
    const mins = Math.ceil(toBoost);
    return weekend
      ? `Weekend: every study minute is worth ${weekendMultiplier} min now, and ${boostRate * weekendMultiplier} min after ${mins} more min of study!`
      : `${mins} more min of study today unlocks the ${boostRate}× boost!`;
  }
  return weekend
    ? `Boost active: every study minute is worth ${boostRate * weekendMultiplier} min today (${boostRate}× boost, doubled for the weekend)`
    : `Boost active: every study minute is worth ${boostRate} min`;
}

/** Earned minutes for each of the last n days, oldest first. */
export function earnedHistory(p: Progress, n: number, today = dayKey()) {
  return Array.from({ length: n }, (_, i) => {
    const day = addDays(today, i - n + 1);
    return {
      day,
      weekend: isWeekend(day),
      studied: Math.round(studyMinutes(p, day)),
      fromStudy: earnedOnDay(p, day),
      bonus: bonusesOnDay(p, day),
      earned: earnedOnDay(p, day) + bonusesOnDay(p, day),
    };
  });
}
