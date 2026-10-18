// Content model. A subject has units, a unit has lessons, a lesson has
// short "learn" cards followed by questions.

/** Any question can show a short block of code above its answers. */
interface QuestionBase {
  code?: string;
}

export interface McqQuestion extends QuestionBase {
  type: 'mcq';
  id: string;
  prompt: string;
  options: string[];
  answer: number; // index into options
  explain?: string;
}

export interface TrueFalseQuestion extends QuestionBase {
  type: 'tf';
  id: string;
  prompt: string;
  answer: boolean;
  explain?: string;
}

export interface GapQuestion extends QuestionBase {
  type: 'gap';
  id: string;
  /** Use ___ to mark the gap. */
  prompt: string;
  /** Accepted answers (case-insensitive). The first one is shown as the correct answer. */
  accept: string[];
  hint?: string;
  explain?: string;
}

export interface MatchQuestion extends QuestionBase {
  type: 'match';
  id: string;
  prompt: string;
  pairs: [string, string][];
  explain?: string;
}

export interface OrderQuestion extends QuestionBase {
  type: 'order';
  id: string;
  prompt: string;
  /** Items in the correct order. They are shuffled when shown. */
  items: string[];
  explain?: string;
}

export type Question = McqQuestion | TrueFalseQuestion | GapQuestion | MatchQuestion | OrderQuestion;

export interface LearnCard {
  emoji: string;
  title: string;
  body: string;
  keywords?: string[];
  /** Id of a diagram in src/diagrams, shown above the text. */
  diagram?: string;
  /** A short block of code, shown under the text. */
  code?: string;
}

export interface Lesson {
  id: string;
  title: string;
  emoji: string;
  learn: LearnCard[];
  questions: Question[];
}

export interface Unit {
  id: string;
  title: string;
  /** Which stage of school it belongs to, e.g. "Year 7" or "Years 8–9". */
  stage: string;
  description: string;
  colour: string;
  lessons: Lesson[];
}

export interface Subject {
  id: string;
  title: string;
  emoji: string;
  colour: string;
  units: Unit[];
}
