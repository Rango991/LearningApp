import { addDays, parseDay } from './dates';
import { studyMinutes } from './screenTime';
import type { Progress } from './types';

// Extra gems for studying longer. Chests open as her active study time for
// the day passes each mark, and they get bigger the longer she goes, so most
// of the bonus sits past where she usually stops. A weekly chest goes to
// beating last week's total, so the target grows with her.

export const STUDY_CHESTS = [
  { minutes: 15, gems: 10 },
  { minutes: 30, gems: 20 },
  { minutes: 45, gems: 35 },
  { minutes: 60, gems: 55 },
  { minutes: 75, gems: 80 },
];

export const WEEKLY_GOAL = {
  /** Minutes more than last week she needs. */
  extraMinutes: 30,
  /** The target is never lower than this, e.g. after a week off. */
  minTarget: 60,
  gems: 150,
};

export type StudyChest = (typeof STUDY_CHESTS)[number];

/** Chests opened by going from `before` to `after` minutes of study in a day. */
export function chestsCrossed(before: number, after: number): StudyChest[] {
  return STUDY_CHESTS.filter((c) => before < c.minutes && after >= c.minutes);
}

/** The next chest she can open today, or null once she has them all. */
export function nextChest(minutes: number): StudyChest | null {
  return STUDY_CHESTS.find((c) => minutes < c.minutes) ?? null;
}

/** The Monday that starts the week containing `day`. */
export function weekStart(day: string): string {
  const offset = (parseDay(day).getDay() + 6) % 7;
  return addDays(day, -offset);
}

/** Minutes studied in the week starting on `monday`. */
export function weekMinutes(p: Progress, monday: string): number {
  let total = 0;
  for (let i = 0; i < 7; i++) total += studyMinutes(p, addDays(monday, i));
  return total;
}

/** This week's target: last week's total plus a bit. */
export function weeklyTarget(p: Progress, today: string): number {
  const last = weekMinutes(p, addDays(weekStart(today), -7));
  return Math.max(WEEKLY_GOAL.minTarget, Math.round(last) + WEEKLY_GOAL.extraMinutes);
}

export interface WeeklyStatus {
  lastWeek: number;
  thisWeek: number;
  target: number;
  won: boolean;
}

export function weeklyStatus(p: Progress, today: string): WeeklyStatus {
  const monday = weekStart(today);
  const thisWeek = weekMinutes(p, monday);
  const target = weeklyTarget(p, today);
  return { lastWeek: weekMinutes(p, addDays(monday, -7)), thisWeek, target, won: thisWeek >= target };
}
