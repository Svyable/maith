// ── Question pack aggregator (v3 — flat content structure) ─────────
// To add a new topic pack:
// 1. Create src/content/<topic-slug>/ directory with easy.ts, hard.ts, sota.ts, index.ts
// 2. Import and spread it into allQuestions below
// 3. Register the topic in src/config/constants.ts TOPICS array
//
// NOTE: Thinker questions are NOT part of allQuestions — they are served exclusively
// through src/content/thinkers and the /thinkers route to keep the pools separate.

export type { Question } from './types';

import { linearAlgebraQuestions } from './linear-algebra';
import { calculusQuestions } from './calculus';
import { probabilityStatsQuestions } from './probability-stats';
import { optimizationQuestions } from './optimization';
import { discreteMathQuestions } from './discrete-math';

import type { Question } from './types';

export const allQuestions: Question[] = [
  ...linearAlgebraQuestions,
  ...calculusQuestions,
  ...probabilityStatsQuestions,
  ...optimizationQuestions,
  ...discreteMathQuestions,
];

/** Get questions filtered by topic slugs (standard math pool only) */
export function getQuestionsByTopics(topics: string[]): Question[] {
  if (topics.length === 0) return allQuestions;
  return allQuestions.filter((q) => topics.includes(q.topic));
}
