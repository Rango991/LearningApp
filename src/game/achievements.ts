import { subjects } from '../content';
import { levelFor } from './levels';
import type { Progress } from './types';

export interface Achievement {
  id: string;
  emoji: string;
  title: string;
  description: string;
  gems: number;
  /** Progress towards it, for showing a bar on locked badges. */
  progress: (p: Progress) => { value: number; target: number };
}

const count = (target: number, value: (p: Progress) => number) => (p: Progress) => ({
  value: Math.min(target, value(p)),
  target,
});

const unitAchievements: Achievement[] = subjects.flatMap((s) =>
  s.units.map((u) => ({
    id: `unit-${u.id}`,
    emoji: '🏅',
    title: `${u.title.split(':')[0]} complete`,
    description: `Finish every lesson in “${u.title}”.`,
    gems: 30,
    progress: count(u.lessons.length, (p) => u.lessons.filter((l) => p.lessons[l.id]).length),
  })),
);

export const achievements: Achievement[] = [
  { id: 'first-lesson', emoji: '🐣', title: 'First steps', description: 'Finish your first lesson.', gems: 10, progress: count(1, (p) => p.totals.lessons) },
  { id: 'lessons-10', emoji: '📚', title: 'Bookworm', description: 'Finish 10 lessons.', gems: 20, progress: count(10, (p) => p.totals.lessons) },
  { id: 'lessons-50', emoji: '🎓', title: 'Study machine', description: 'Finish 50 lessons.', gems: 50, progress: count(50, (p) => p.totals.lessons) },
  { id: 'perfect-1', emoji: '💎', title: 'Flawless', description: 'Get every question right first time in a lesson.', gems: 15, progress: count(1, (p) => p.totals.perfect) },
  { id: 'perfect-10', emoji: '👑', title: 'Perfectionist', description: 'Finish 10 perfect lessons.', gems: 40, progress: count(10, (p) => p.totals.perfect) },
  { id: 'combo-8', emoji: '🔥', title: 'On fire', description: 'Get 8 answers right in a row.', gems: 15, progress: count(8, (p) => p.totals.bestCombo) },
  { id: 'streak-3', emoji: '🌱', title: 'Habit forming', description: 'Reach a 3-day streak.', gems: 15, progress: count(3, (p) => p.streak.longest) },
  { id: 'streak-7', emoji: '📅', title: 'Week warrior', description: 'Reach a 7-day streak.', gems: 30, progress: count(7, (p) => p.streak.longest) },
  { id: 'streak-14', emoji: '⚡', title: 'Fortnight force', description: 'Reach a 14-day streak.', gems: 50, progress: count(14, (p) => p.streak.longest) },
  { id: 'streak-30', emoji: '🚀', title: 'Unstoppable', description: 'Reach a 30-day streak.', gems: 100, progress: count(30, (p) => p.streak.longest) },
  { id: 'xp-250', emoji: '⭐', title: 'Rising star', description: 'Earn 250 XP.', gems: 20, progress: count(250, (p) => p.xp) },
  { id: 'xp-1000', emoji: '🌟', title: 'Superstar', description: 'Earn 1,000 XP.', gems: 50, progress: count(1000, (p) => p.xp) },
  { id: 'level-5', emoji: '🧪', title: 'Lab assistant', description: 'Reach level 5.', gems: 25, progress: count(5, (p) => levelFor(p.xp).level) },
  { id: 'level-10', emoji: '🥼', title: 'Scientist', description: 'Reach level 10.', gems: 60, progress: count(10, (p) => levelFor(p.xp).level) },
  { id: 'fixer-10', emoji: '🔧', title: 'Mistake fixer', description: 'Fix 10 questions you got wrong before.', gems: 25, progress: count(10, (p) => p.totals.fixed) },
  { id: 'goal-5', emoji: '🎯', title: 'Goal getter', description: 'Hit your daily goal on 5 days.', gems: 25, progress: count(5, (p) => p.totals.goalDays) },
  { id: 'test-ace', emoji: '🏆', title: 'Test ace', description: 'Score 80% or more on a unit test.', gems: 30, progress: count(1, (p) => p.totals.checkpointsPassed) },
  ...unitAchievements,
];

export function achievementById(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}

/** Achievements newly earned by this progress state. */
export function newlyEarned(p: Progress): Achievement[] {
  return achievements.filter((a) => {
    if (p.achievements[a.id]) return false;
    const { value, target } = a.progress(p);
    return value >= target;
  });
}
