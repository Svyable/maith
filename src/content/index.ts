// ── Question pack aggregator (v5 — expanded global scientific coverage) ────
// To add a new topic pack:
// 1. Create src/content/<topic-slug>/ directory with a questions.ts + index.ts
// 2. Import and spread into allQuestions below
// 3. Register the topic in src/config/constants.ts TOPICS array with field: '<field-slug>'
// 4. Register the field in src/config/fields.ts FIELDS array
//
// NOTE: Thinker questions are NOT part of allQuestions — they are served exclusively
// through src/content/thinkers and the /thinkers route to keep the pools separate.

export type { Question } from './types';

// ── Mathematics ──────────────────────────────────────────────
import { linearAlgebraQuestions } from './linear-algebra';
import { calculusQuestions } from './calculus';
import { probabilityStatsQuestions } from './probability-stats';
import { optimizationQuestions } from './optimization';
import { discreteMathQuestions } from './discrete-math';
// ── Physics ──────────────────────────────────────────────────
import { physicsQuestions } from './physics';
// ── Quant / Finance ──────────────────────────────────────────
import { quantQuestions } from './quant';
// ── Chemistry ──────────────────────────────────────────────
import { chemistryQuestions } from './chemistry';
// ── Biology ──────────────────────────────────────────────────
import { biologyQuestions } from './biology';
// ── Computer Science ──────────────────────────────────────────
import { computerScienceQuestions } from './computer-science';
// ── Earth & Space ──────────────────────────────────────────────
import { earthSpaceQuestions } from './earth-space';
// ── Engineering ──────────────────────────────────────────────
import { engineeringQuestions } from './engineering';
// ── Economics ──────────────────────────────────────────────
import { economicsQuestions } from './economics';
// ── New topics in existing fields ──────────────────────────────
import {
  electromagnetismQuestions,
  thermodynamicsQuestions,
  numberTheoryQuestions,
  realAnalysisQuestions,
  riskManagementQuestions,
} from './new-topics';
// ── 2025 SOTA ──────────────────────────────────────────────
import { sota2025Questions } from './sota-2025';
// ── 2026 SOTA ──────────────────────────────────────────────
import { sota2026Questions } from './sota-2026';

import type { Question } from './types';

export const allQuestions: Question[] = [
  // ── Mathematics ──────────────────────────────────────────────
  ...linearAlgebraQuestions,
  ...calculusQuestions,
  ...probabilityStatsQuestions,
  ...optimizationQuestions,
  ...discreteMathQuestions,
  ...numberTheoryQuestions,
  ...realAnalysisQuestions,
  // ── Physics ──────────────────────────────────────────────────
  ...physicsQuestions,
  ...electromagnetismQuestions,
  ...thermodynamicsQuestions,
  // ── Chemistry ──────────────────────────────────────────────
  ...chemistryQuestions,
  // ── Biology ──────────────────────────────────────────────────
  ...biologyQuestions,
  // ── Computer Science ──────────────────────────────────────────
  ...computerScienceQuestions,
  // ── Earth & Space ──────────────────────────────────────────────
  ...earthSpaceQuestions,
  // ── Engineering ──────────────────────────────────────────────
  ...engineeringQuestions,
  // ── Economics ──────────────────────────────────────────────
  ...economicsQuestions,
  // ── Quant / Finance ──────────────────────────────────────────
  ...quantQuestions,
  ...riskManagementQuestions,
  // ── 2025 SOTA ──────────────────────────────────────────────
  ...sota2025Questions,
  // ── 2026 SOTA ──────────────────────────────────────────────
  ...sota2026Questions,
];

/** Get questions filtered by topic slugs (standard pool only — no thinkers) */
export function getQuestionsByTopics(topics: string[]): Question[] {
  if (topics.length === 0) return allQuestions;
  return allQuestions.filter((q) => topics.includes(q.topic));
}
