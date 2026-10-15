import { describe, expect, it } from 'vitest';
import { subjects } from '../src/content';
import { ActiveClock } from '../src/game/activeClock';
import { applySession, createProgress } from '../src/game/engine';
import type { Progress } from '../src/game/types';
import { earnedFor, earnedOnDay, earnedToday, isWeekend, unitTestBonus } from '../src/game/screenTime';

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

  it('scales the unit test bonus: 5 min a lesson, up to 15', () => {
    const units = subjects.flatMap((s) => s.units);
    const two = units.find((u) => u.lessons.length === 2)!;
    const three = units.find((u) => u.lessons.length === 3)!;
    const five = units.find((u) => u.lessons.length === 5)!;
    expect(unitTestBonus(two)).toBe(10);
    expect(unitTestBonus(three)).toBe(15);
    expect(unitTestBonus(five)).toBe(15);
  });

  it('pays the bonus once, and only after every lesson is done', () => {
    const unit = subjects.flatMap((s) => s.units).find((u) => u.lessons.length === 2)!;
    const keys = unit.lessons.flatMap((l) => l.questions.map((q) => `${l.id}/${q.id}`)).slice(0, 10);
    const answers = keys.map((key) => ({ key, correct: true, given: 'x' }));
    const day = new Date('2026-10-19T17:00:00');
    const test = (p: Progress, seconds = 0) => applySession(p, { kind: 'checkpoint', unitId: unit.id, answers, maxCombo: 10, seconds }, day);

    // Testing out: passes and unlocks the unit, but no screen time.
    const testedOut = test(createProgress('Test'), 10 * 60);
    expect(testedOut.summary.passedCheckpoint).toBe(true);
    expect(testedOut.summary.screenBonus).toBe(0);

    // Do the lessons, then pass the test: now the bonus is paid.
    let p = testedOut.progress;
    for (const l of unit.lessons) {
      p = applySession(p, { kind: 'lesson', lessonId: l.id, answers: [{ key: `${l.id}/${l.questions[0].id}`, correct: true, given: 'x' }], maxCombo: 1, seconds: 0 }, day).progress;
    }
    const earned = test(p);
    expect(earned.summary.screenBonus).toBe(10);
    expect(earnedToday(earned.progress, '2026-10-19')).toBe(10 + 10);

    // Only once.
    expect(test(earned.progress).summary.screenBonus).toBe(0);
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
