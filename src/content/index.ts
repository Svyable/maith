// ── Question pack aggregator (v5 — expanded global scientific coverage) ────
// To add a new topic pack:
// 1. Create src/content/<topic-slug>/ directory with a questions.ts + index.ts
// 2. Import and spread into allQuestions below
// 3. Register the canonical topic/field ownership in src/config/content-registry.ts and src/config/fields.ts
// 4. Register the pack in src/config/content-registry-tooling.ts, then regenerate loaders/stats
//
// NOTE: allQuestions is the canonical standard-quiz pool. Thinker, Bonafide, and Vault
// questions are served through their dedicated collections and must not be mixed here.

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
// ── Astrophysics ──────────────────────────────────────────────
import { astrophysicsQuestions } from './astrophysics';
// ── Engineering ──────────────────────────────────────────────
import { engineeringQuestions } from './engineering';
// ── Economics ──────────────────────────────────────────────
import { economicsQuestions } from './economics';
// ── New topics in existing fields ──────────────────────────────
import {
  electromagnetismQuestions,
  numberTheoryQuestions,
  realAnalysisQuestions,
  riskManagementQuestions,
} from './new-topics';
// ── Dedicated thermodynamics pack ──────────────────────────────
import { thermodynamicsTopicQuestions } from './thermodynamics';
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
import { statisticalPhysicsQuestions } from './statistical-physics';
import { plasmaPhysicsQuestions } from './plasma-physics';
import { condensedMatterQuestions } from './condensed-matter';
import { nonlinearDynamicsQuestions } from './nonlinear-dynamics';
import { quantumFieldTheoryQuestions } from './quantum-field-theory';
import { manyBodyPhysicsQuestions } from './many-body-physics';
import { quantumGravityQuestions } from './quantum-gravity';
import { distributedSystemsQuestions } from './distributed-systems';
import { operatingSystemsQuestions } from './operating-systems';
// ── 2024 SOTA ──────────────────────────────────────────────
import { sota2024Questions } from './sota-2024';
// ── 2025 SOTA ──────────────────────────────────────────────
import { sota2025Questions } from './sota-2025';
// ── 2026 SOTA ──────────────────────────────────────────────
import { sota2026Questions } from './sota-2026';
// ── Bonafides (CFA, CPA, Actuarial, MBA, Law, Medical, Data Science)
// are now served exclusively via src/content/bonafides/ and the /bonafides route.
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
import { predictionMarketsQuestions } from './prediction-markets';
import { formalVerificationQuestions } from './formal-verification';
import { aiSubstratesQuestions } from './ai-substrates';
import { informationTheoryQuestions } from './information-theory';
// ── New math topics ──────────────────────────────────────
import { complexAnalysisQuestions } from './complex-analysis';
import { functionalAnalysisQuestions } from './functional-analysis';
import { graphTheoryQuestions } from './graph-theory';
import { differentialGeometryQuestions } from './differential-geometry';
import { numericalMethodsQuestions } from './numerical-methods';
import type { Question } from './types';

export const standardQuestions: Question[] = [
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
  ...complexAnalysisQuestions,
  ...functionalAnalysisQuestions,
  ...graphTheoryQuestions,
  ...differentialGeometryQuestions,
  ...numericalMethodsQuestions,
  // ── Physics ──────────────────────────────────────────────────
  ...physicsQuestions,
  ...electromagnetismQuestions,
  ...thermodynamicsTopicQuestions,
  ...nuclearPhysicsQuestions,
  ...fluidDynamicsQuestions,
  ...opticsQuestions,
  ...relativityQuestions,
  ...statisticalPhysicsQuestions,
  ...plasmaPhysicsQuestions,
  ...condensedMatterQuestions,
  ...nonlinearDynamicsQuestions,
  ...quantumFieldTheoryQuestions,
  ...manyBodyPhysicsQuestions,
  ...quantumGravityQuestions,
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
  ...aiSubstratesQuestions,
  // ── Earth & Space ──────────────────────────────────────────────
  ...earthSpaceQuestions,
  ...astrophysicsQuestions,
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
  ...predictionMarketsQuestions,
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
  // ── Special collections stay outside the standard pool ──────────
];

/** Backwards-compatible name for the canonical standard-quiz pool. */
export const allQuestions = standardQuestions;

/** Get questions filtered by topic slugs from the standard pool only. */
export function getQuestionsByTopics(topics: string[]): Question[] {
  if (topics.length === 0) return allQuestions;
  return allQuestions.filter((q) => topics.includes(q.topic));
}
