import { describe, expect, it } from 'vitest';
import { createProgress } from '../src/game/engine';
import { birthdayGift, greeting, isBirthday, mitoAccessory, praise, resultLine, testPep } from '../src/game/mito';
import type { About, Progress, RewardSummary } from '../src/game/types';

const about: About = {
  animal: { e: '🐼', label: 'panda' },
  food: { e: '🍕', label: 'pizza' },
  hobby: { e: '🎨', label: 'drawing' },
  colour: 'teal',
  birthday: '03-14',
  hardest: 'maths',
  goal: 'Get a grade 9 at GCSE',
  doneAt: '2026-10-01T10:00:00.000Z',
};

function withAbout(a: About | undefined, lessons = 5): Progress {
  const p = createProgress('Aisha', new Date('2026-09-01T10:00:00Z'));
  return { ...p, profile: { ...p.profile, about: a }, totals: { ...p.totals, lessons } };
}

const summary = (over: Partial<RewardSummary> = {}): RewardSummary => ({
  xpGained: 20, xpBreakdown: [], gemsGained: 5, accuracy: 0.8, perfect: false, streakExtended: false, streak: 1,
  goalJustMet: false, questsCompleted: [], allQuestsBonus: false, levelUp: null, newAchievements: [],
  screenMinutes: 0, screenBonus: 0, passedCheckpoint: false,
  ...over,
} as RewardSummary);

describe('Mito', () => {
  it('celebrates her birthday, and gives gems once a year', () => {
    const p = withAbout(about);
    expect(isBirthday(about, '2026-03-14')).toBe(true);
    expect(greeting(p, new Date('2026-03-14T10:00:00'))).toContain('Happy birthday, Aisha');
    expect(mitoAccessory(p, '2026-03-14')).toBe('party-hat');
    const gifted = birthdayGift(p, '2026-03-14')!;
    expect(gifted.gems).toBe(p.gems + 50);
    expect(birthdayGift(gifted, '2026-03-14')).toBeNull();
    expect(birthdayGift(gifted, '2027-03-14')).not.toBeNull();
    expect(birthdayGift(p, '2026-03-15')).toBeNull();
  });

  it('never says undefined, with or without answers', () => {
    for (const a of [undefined, {}, about, { doneAt: 'x', hardest: 'none' }] as (About | undefined)[]) {
      const p = withAbout(a);
      for (let h = 0; h < 24; h++) {
        for (let d = 1; d <= 28; d += 3) {
          const line = greeting(p, new Date(`2026-10-${String(d).padStart(2, '0')}T${String(h).padStart(2, '0')}:00:00`));
          expect(line).not.toMatch(/undefined|null|NaN/);
        }
      }
      for (const s of [summary(), summary({ perfect: true }), summary({ passedCheckpoint: true })]) {
        expect(resultLine(p, s, 'lesson', 'maths-number')).not.toMatch(/undefined|null/);
        expect(resultLine(p, s, 'checkpoint')).not.toMatch(/undefined|null/);
      }
      expect(testPep(p)).not.toMatch(/undefined|null/);
    }
  });

  it('uses her answers', () => {
    const p = withAbout(about);
    expect(resultLine(p, summary({ perfect: true }), 'lesson')).toContain('panda');
    expect(resultLine(p, summary({ passedCheckpoint: true }), 'checkpoint')).toContain('grade 9');
    expect(resultLine(p, summary(), 'lesson', 'maths-number')).toContain('Maths is getting easier');
    expect(testPep(p)).toContain('grade 9');
    expect(praise(about.animal, 'Aisha', 0.01)).toContain('Aisha');
    expect(praise(undefined, undefined, 0.01)).not.toMatch(/undefined/);
  });
});
