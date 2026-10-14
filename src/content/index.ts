import { biologyKs3 } from './biology-ks3';
import { biologyY7 } from './biology-y7';
import { chemistry } from './chemistry';
import { gcseBiology } from './gcse-biology';
import { geography } from './geography';
import { gcseChemistry } from './gcse-chemistry';
import { gcsePhysics } from './gcse-physics';
import { gcseMaths } from './gcse-maths';
import { maths } from './maths';
import { physics } from './physics';
import type { Lesson, Question, Subject, Unit } from './types';

export const subjects: Subject[] = [
  { id: 'biology', title: 'Biology', emoji: '🧬', colour: '#22b07d', units: [...biologyY7, ...biologyKs3, ...gcseBiology] },
  { id: 'chemistry', title: 'Chemistry', emoji: '⚗️', colour: '#8e5cf7', units: [...chemistry, ...gcseChemistry] },
  { id: 'physics', title: 'Physics', emoji: '🪐', colour: '#1c9df6', units: [...physics, ...gcsePhysics] },
  { id: 'maths', title: 'Maths', emoji: '📐', colour: '#ff8a3d', units: [...maths, ...gcseMaths] },
  { id: 'geography', title: 'Geography', emoji: '🌍', colour: '#0f9d8a', units: geography },
];

export function findSubject(id: string): Subject {
  return subjects.find((s) => s.id === id) ?? subjects[0];
}

/** Stages in the order they're shown, with the units of a subject in each. */
export function unitsByStage(subject: Subject): { stage: string; units: Unit[] }[] {
  const out: { stage: string; units: Unit[] }[] = [];
  for (const unit of subject.units) {
    const group = out.find((g) => g.stage === unit.stage);
    if (group) group.units.push(unit);
    else out.push({ stage: unit.stage, units: [unit] });
  }
  return out;
}

export function findUnit(id: string): { unit: Unit; subject: Subject } | undefined {
  for (const subject of subjects) {
    const unit = subject.units.find((u) => u.id === id);
    if (unit) return { unit, subject };
  }
  return undefined;
}

export interface QuestionRef {
  question: Question;
  lesson: Lesson;
  unit: Unit;
  subject: Subject;
}

const questionIndex = new Map<string, QuestionRef>();
const lessonIndex = new Map<string, { lesson: Lesson; unit: Unit; subject: Subject }>();
for (const subject of subjects) {
  for (const unit of subject.units) {
    for (const lesson of unit.lessons) {
      lessonIndex.set(lesson.id, { lesson, unit, subject });
      for (const question of lesson.questions) {
        const key = qKey(lesson.id, question.id);
        if (questionIndex.has(key)) throw new Error(`Duplicate question id ${key}`);
        questionIndex.set(key, { question, lesson, unit, subject });
      }
    }
  }
}

/** Globally unique key for a question: lessonId/questionId. */
export function qKey(lessonId: string, questionId: string): string {
  return `${lessonId}/${questionId}`;
}

export function findQuestion(key: string): QuestionRef | undefined {
  return questionIndex.get(key);
}

export function findLesson(id: string) {
  return lessonIndex.get(id);
}

export function allQuestionKeys(): string[] {
  return [...questionIndex.keys()];
}

/** Text that represents the correct answer, for showing to a parent or after a mistake. */
export function correctAnswerText(q: Question): string {
  switch (q.type) {
    case 'mcq': return q.options[q.answer];
    case 'tf': return q.answer ? 'True' : 'False';
    case 'gap': return q.accept[0];
    case 'match': return q.pairs.map(([a, b]) => `${a} → ${b}`).join('; ');
    case 'order': return q.items.join(' → ');
  }
}
