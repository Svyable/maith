// ── Bonafides Content Aggregator ──────────────────────────────────────
// Re-exports all professional certification questions (math & finance focus).
// Thinker and standard quiz pools do NOT include these.
//
// To add a new credential:
// 1. Create src/content/<slug>/questions.ts + index.ts
// 2. Import and spread below
// 3. Add entry to src/config/bonafides.ts

import type { Question } from '../types';

// ── CFA Program (Levels I–III) ───────────────────────────────
import { cfaQuestions } from '../cfa';
// ── Actuarial Exams (P, FM, FAM) ─────────────────────────────
import { actuarialQuestions } from '../actuarial';

export const allBonafideQuestions: Question[] = [
  ...cfaQuestions,
  ...actuarialQuestions,
];

/** Get bonafide questions filtered by topic slugs */
export function getBonafideQuestions(topics: string[]): Question[] {
  if (topics.length === 0) return allBonafideQuestions;
  return allBonafideQuestions.filter((q) => topics.includes(q.topic));
}
