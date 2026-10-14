import { describe, expect, it } from 'vitest';
import { subjects } from '../src/content';
import { ActiveClock } from '../src/game/activeClock';
import { applySession, createProgress } from '../src/game/engine';
import { balance, earnedFor, earnedOnDay, isWeekend, totalEarned } from '../src/game/screenTime';

describe('screen-time rules', () => {
  it('weekday: first 20 min 1:1, then 1.5x (50 min study = 65 min)', () => {
    expect(earnedFor(10, false)).toBe(10);
    expect(earnedFor(20, false)).toBe(20);
    expect(earnedFor(50, false)).toBe(65);
  });

  it('weekend: the same, doubled (50 min study = 130 min)', () => {
    expect(earnedFor(10, true)).toBe(20);
    expect(earnedFor(50, true)).toBe(130);
  });

  it('knows which days are weekends', () => {
    expect(isWeekend('2026-10-17')).toBe(true); // Saturday
    expect(isWeekend('2026-10-18')).toBe(true); // Sunday
    expect(isWeekend('2026-10-19')).toBe(false); // Monday
  });

  it('adds study across a day before applying the boost', () => {
    let p = createProgress('Test');
    const unit = subjects[0].units[0];
    const lesson = unit.lessons[0];
    const key = `${lesson.id}/${lesson.questions[0].id}`;
    for (const hour of ["09", "12", "16"]) {
      p = applySession(p, { kind: 'lesson', lessonId: lesson.id, answers: [{ key, correct: true, given: 'x' }], maxCombo: 1, seconds: 15 * 60 }, new Date(`2026-10-19T${hour}:00:00`)).progress;
    }
    // 45 min on a Monday: 20 + 25 x 1.5 = 57.5, rounded down
    expect(earnedOnDay(p, '2026-10-19')).toBe(57);
  });

  it('gives 15 min once for passing a unit test, and reports what each session earned', () => {
    const unit = subjects[0].units[0];
    const keys = unit.lessons.flatMap((l) => l.questions.map((q) => `${l.id}/${q.id}`)).slice(0, 10);
    const answers = keys.map((key) => ({ key, correct: true, given: 'x' }));
    const day = new Date('2026-10-19T17:00:00');
    const first = applySession(createProgress('Test'), { kind: 'checkpoint', unitId: unit.id, answers, maxCombo: 10, seconds: 10 * 60 }, day);
    expect(first.summary.screenBonus).toBe(15);
    expect(first.summary.screenMinutes).toBe(10 + 15);
    const again = applySession(first.progress, { kind: 'checkpoint', unitId: unit.id, answers, maxCombo: 10, seconds: 0 }, day);
    expect(again.summary.screenBonus).toBe(0);
    expect(totalEarned(again.progress)).toBe(25);
    expect(balance(again.progress, [{ id: 1, minutes: -20, note: null, created_at: '' }])).toBe(5);
  });
});

describe('active clock', () => {
  it('caps long idle gaps and ignores time in the background', () => {
    const c = new ActiveClock(0, 120_000);
    c.tick(30_000); // 30s
    c.tick(30_000 + 10 * 60_000); // 10 min idle counts as 2 min
    c.pause(30_000 + 10 * 60_000 + 5_000); // +5s then backgrounded
    c.resume(60 * 60_000); // an hour later
    c.tick(60 * 60_000 + 20_000); // +20s
    expect(c.seconds()).toBe(30 + 120 + 5 + 20);
  });
});
