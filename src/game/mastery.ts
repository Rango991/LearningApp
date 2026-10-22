import type { Progress } from './types';

/** First-try score she needs on a lesson to unlock the next one. */
export const LESSON_PASS = 0.7;

/** She has scored the pass mark on this lesson at least once. */
export function lessonPassed(p: Progress, lessonId: string): boolean {
  return (p.lessons[lessonId]?.bestAccuracy ?? 0) >= LESSON_PASS;
}

/** Done, but never at the pass mark: shown as "Redo" on the map. */
export function needsRedo(p: Progress, lessonId: string): boolean {
  return Boolean(p.lessons[lessonId]) && !lessonPassed(p, lessonId);
}
