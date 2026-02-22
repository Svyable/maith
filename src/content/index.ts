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
// ── New fields & topics ──────────────────────────────────────
import { quantumComputingQuestions } from './quantum-computing';
import { gameTheoryQuestions } from './game-theory';
import { roboticsQuestions } from './robotics';
import { meteorologyQuestions } from './meteorology';
import { audioEngineeringQuestions } from './audio-engineering';
import { neuroscienceQuestions } from './neuroscience';
import { linguisticsQuestions } from './linguistics';
import { oceanographyQuestions } from './oceanography';
import { cybersecurityQuestions } from './cybersecurity';
import { aerospaceQuestions } from './aerospace';
import { nuclearPhysicsQuestions } from './nuclear-physics';
import { fluidDynamicsQuestions } from './fluid-dynamics';
import { philosophyScienceQuestions } from './philosophy-of-science';
import { topologyQuestions } from './topology';
import { psychologyQuestions } from './psychology';
import { environmentalScienceQuestions } from './environmental-science';
import { pharmacologyQuestions } from './pharmacology';
// ── New expanded topics ──────────────────────────────────────
import { differentialEquationsQuestions } from './differential-equations';
import { abstractAlgebraQuestions } from './abstract-algebra';
import { opticsQuestions } from './optics';
import { relativityQuestions } from './relativity';
import { distributedSystemsQuestions } from './distributed-systems';
import { operatingSystemsQuestions } from './operating-systems';
// ── 2024 SOTA ──────────────────────────────────────────────
import { sota2024Questions } from './sota-2024';
// ── 2025 SOTA ──────────────────────────────────────────────
import { sota2025Questions } from './sota-2025';
// ── 2026 SOTA ──────────────────────────────────────────────
import { sota2026Questions } from './sota-2026';
// ── CFA Program ──────────────────────────────────────────────
import { cfaQuestions } from './cfa';
// ── CPA Exam ──────────────────────────────────────────────
import { cpaQuestions } from './cpa';
// ── Actuarial Exams ──────────────────────────────────────────────
import { actuarialQuestions } from './actuarial';
// ── MBA Core ──────────────────────────────────────────────
import { mbaQuestions } from './mba';
// ── Law & Ethics ──────────────────────────────────────────────
import { lawQuestions } from './law';
// ── Medical Sciences ──────────────────────────────────────────────
import { medicalQuestions } from './medical';
// ── Data Science ──────────────────────────────────────────────
import { dataScienceQuestions } from './data-science';
// ── New advanced topics ──────────────────────────────────────
import { combinatoricsQuestions } from './combinatorics';
import { categoryTheoryQuestions } from './category-theory';
import { ergodicTheoryQuestions } from './ergodic-theory';
import { algebraicGeometryQuestions } from './algebraic-geometry';
import { measureTheoryQuestions } from './measure-theory';
import { compilerTheoryQuestions } from './compiler-theory';
// ── New advanced topics ──────────────────────────────────────
import { controlTheoryQuestions } from './control-theory';
import { signalProcessingQuestions } from './signal-processing';
import { behavioralEconomicsQuestions } from './behavioral-economics';
import { developmentEconomicsQuestions } from './development-economics';
import { marketMicrostructureQuestions } from './market-microstructure';
import { creditRiskQuestions } from './credit-risk';
import { formalVerificationQuestions } from './formal-verification';
import { informationTheoryQuestions } from './information-theory';

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
  ...topologyQuestions,
  ...differentialEquationsQuestions,
  ...abstractAlgebraQuestions,
  ...combinatoricsQuestions,
  ...categoryTheoryQuestions,
  ...ergodicTheoryQuestions,
  ...algebraicGeometryQuestions,
  ...measureTheoryQuestions,
  // ── Physics ──────────────────────────────────────────────────
  ...physicsQuestions,
  ...electromagnetismQuestions,
  ...thermodynamicsQuestions,
  ...nuclearPhysicsQuestions,
  ...fluidDynamicsQuestions,
  ...opticsQuestions,
  ...relativityQuestions,
  // ── Chemistry ──────────────────────────────────────────────
  ...chemistryQuestions,
  // ── Biology & Medicine ──────────────────────────────────────
  ...biologyQuestions,
  ...neuroscienceQuestions,
  ...pharmacologyQuestions,
  // ── Computer Science ──────────────────────────────────────────
  ...computerScienceQuestions,
  ...quantumComputingQuestions,
  ...cybersecurityQuestions,
  ...distributedSystemsQuestions,
  ...operatingSystemsQuestions,
  ...compilerTheoryQuestions,
  ...formalVerificationQuestions,
  ...informationTheoryQuestions,
  // ── Earth & Space ──────────────────────────────────────────────
  ...earthSpaceQuestions,
  ...meteorologyQuestions,
  ...oceanographyQuestions,
  ...environmentalScienceQuestions,
  // ── Engineering ──────────────────────────────────────────────
  ...engineeringQuestions,
  ...roboticsQuestions,
  ...aerospaceQuestions,
  ...audioEngineeringQuestions,
  ...controlTheoryQuestions,
  ...signalProcessingQuestions,
  // ── Economics ──────────────────────────────────────────────
  ...economicsQuestions,
  ...gameTheoryQuestions,
  ...behavioralEconomicsQuestions,
  ...developmentEconomicsQuestions,
  // ── Quant / Finance ──────────────────────────────────────────
  ...quantQuestions,
  ...riskManagementQuestions,
  ...marketMicrostructureQuestions,
  ...creditRiskQuestions,
  // ── Human Sciences ──────────────────────────────────────────
  ...psychologyQuestions,
  ...linguisticsQuestions,
  ...philosophyScienceQuestions,
  // ── 2024 SOTA ──────────────────────────────────────────────
  ...sota2024Questions,
  // ── 2025 SOTA ──────────────────────────────────────────────
  ...sota2025Questions,
  // ── 2026 SOTA ──────────────────────────────────────────────
  ...sota2026Questions,
  // ── CFA Program ──────────────────────────────────────────────
  ...cfaQuestions,
  // ── CPA Exam ──────────────────────────────────────────────
  ...cpaQuestions,
  // ── Actuarial Exams ──────────────────────────────────────────────
  ...actuarialQuestions,
  // ── MBA Core ──────────────────────────────────────────────
  ...mbaQuestions,
  // ── Law & Ethics ──────────────────────────────────────────────
  ...lawQuestions,
  // ── Medical Sciences ──────────────────────────────────────────────
  ...medicalQuestions,
  // ── Data Science ──────────────────────────────────────────────
  ...dataScienceQuestions,
];

/** Get questions filtered by topic slugs (standard pool only — no thinkers) */
export function getQuestionsByTopics(topics: string[]): Question[] {
  if (topics.length === 0) return allQuestions;
  return allQuestions.filter((q) => topics.includes(q.topic));
}
