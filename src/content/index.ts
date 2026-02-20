// ── Question pack aggregator (v4 — field-scoped content structure) ────
// To add a new topic pack:
// 1. Create src/content/<topic-slug>/ directory with a questions.ts + index.ts
// 2. Import and spread into allQuestions below
// 3. Register the topic in src/config/constants.ts TOPICS array with field: '<field-slug>'
// 4. Register the field in src/config/fields.ts FIELDS array
//
// NOTE: Thinker questions are NOT part of allQuestions — they are served exclusively
// through src/content/thinkers and the /thinkers route to keep the pools separate.

export type { Question } from './types';

import { linearAlgebraQuestions } from './linear-algebra';
import { calculusQuestions } from './calculus';
import { probabilityStatsQuestions } from './probability-stats';
import { optimizationQuestions } from './optimization';
import { discreteMathQuestions } from './discrete-math';
import { physicsQuestions } from './physics';
import { quantQuestions } from './quant';

import type { Question } from './types';

export const allQuestions: Question[] = [
  // ── Mathematics ──────────────────────────────────────────────
  ...linearAlgebraQuestions,
  ...calculusQuestions,
  ...probabilityStatsQuestions,
  ...optimizationQuestions,
  ...discreteMathQuestions,
  // ── Physics ──────────────────────────────────────────────────
  ...physicsQuestions,
  // ── Quant / Finance ──────────────────────────────────────────
  ...quantQuestions,
];

/** Get questions filtered by topic slugs (standard pool only — no thinkers) */
export function getQuestionsByTopics(topics: string[]): Question[] {
  if (topics.length === 0) return allQuestions;
  return allQuestions.filter((q) => topics.includes(q.topic));
}
