import { biologyY7 } from './biology-y7';
import type { Lesson, Question, Subject, Unit } from './types';

export const subjects: Subject[] = [biologyY7];

/** Subjects shown on the home screen as "coming soon". */
export const comingSoon = [
  { title: 'Chemistry', emoji: '⚗️' },
  { title: 'Physics', emoji: '🪐' },
  { title: 'Maths', emoji: '📐' },
];

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
