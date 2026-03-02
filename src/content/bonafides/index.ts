// ── Bonafides Content Aggregator ──────────────────────────────────────
// Re-exports all professional certification questions.
// Thinker and standard quiz pools do NOT include these.
//
// To add a new credential:
// 1. Create src/content/<slug>/questions.ts + index.ts
// 2. Import and spread below
// 3. Add entry to src/config/bonafides.ts

import type { Question } from '../types';

// ── CFA Program ──────────────────────────────────────────────
import { cfaQuestions } from '../cfa';
// ── CPA Exam ──────────────────────────────────────────────
import { cpaQuestions } from '../cpa';
// ── Actuarial Exams ──────────────────────────────────────────
import { actuarialQuestions } from '../actuarial';
// ── MBA Core ──────────────────────────────────────────────
import { mbaQuestions } from '../mba';
// ── Law & Ethics ──────────────────────────────────────────
import { lawQuestions } from '../law';
// ── Medical Sciences ──────────────────────────────────────────
import { medicalQuestions } from '../medical';
// ── Data Science ──────────────────────────────────────────
import { dataScienceQuestions } from '../data-science';

export const allBonafideQuestions: Question[] = [
  ...cfaQuestions,
  ...cpaQuestions,
  ...actuarialQuestions,
  ...mbaQuestions,
  ...lawQuestions,
  ...medicalQuestions,
  ...dataScienceQuestions,
];

/** Get bonafide questions filtered by credential slug's topics */
export function getBonafideQuestions(topics: string[]): Question[] {
  if (topics.length === 0) return allBonafideQuestions;
  return allBonafideQuestions.filter((q) => topics.includes(q.topic));
}
