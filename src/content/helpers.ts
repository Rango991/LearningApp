import type { GapQuestion, LearnCard, MatchQuestion, McqQuestion, OrderQuestion, Question, TrueFalseQuestion } from './types';

// Short-hand builders so content files read like a worksheet.

export const mcq = (id: string, prompt: string, options: string[], answer: number, explain?: string): McqQuestion =>
  ({ type: 'mcq', id, prompt, options, answer, explain });

export const tf = (id: string, prompt: string, answer: boolean, explain?: string): TrueFalseQuestion =>
  ({ type: 'tf', id, prompt, answer, explain });

/** Use ___ in the prompt for the gap. Number answers are marked by value (0.5 = .5 = 1/2). */
export const gap = (id: string, prompt: string, accept: string[], explain?: string, hint?: string): GapQuestion =>
  ({ type: 'gap', id, prompt, accept, explain, hint });

export const match = (id: string, prompt: string, pairs: [string, string][], explain?: string): MatchQuestion =>
  ({ type: 'match', id, prompt, pairs, explain });

export const order = (id: string, prompt: string, items: string[], explain?: string): OrderQuestion =>
  ({ type: 'order', id, prompt, items, explain });

export const card = (emoji: string, title: string, body: string, keywords?: string[], diagram?: string): LearnCard =>
  ({ emoji, title, body, keywords, diagram });

/** A learn card with a block of code under its text. */
export const codeCard = (emoji: string, title: string, body: string, code: string, keywords?: string[], diagram?: string): LearnCard =>
  ({ emoji, title, body, keywords, diagram, code });

/** Shows a block of code with a question, e.g. withCode('print(2 + 3)', gap('q1', 'It prints ___', ['5'])). */
export const withCode = <T extends Question>(code: string, q: T): T => ({ ...q, code });
