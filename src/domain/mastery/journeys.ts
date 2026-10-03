import { CONCEPTS } from '@/config/concepts';
import {
  getLearningJourneyStages,
  type LearningJourney,
  type LearningJourneyStage,
} from '@/config/learning-journeys';
import type { ConceptMastery } from './types';

export type JourneyRecommendationReason =
  | 'start'
  | 'review'
  | 'continue'
  | 'reinforce';

export interface JourneyStageEvidence {
  stage: LearningJourneyStage;
  conceptCount: number;
  evidencedConcepts: number;
  strongConcepts: number;
  weakConcepts: number;
}

export interface JourneyRecommendation {
  stage: LearningJourneyStage;
  reason: JourneyRecommendationReason;
  stageEvidence: JourneyStageEvidence;
  hasMasteryEvidence: boolean;
}

function isStrongStatus(status: ConceptMastery['status']): boolean {
  return status === 'strong' || status === 'mastered';
}

export function getJourneyStageEvidence(
  journey: LearningJourney,
  mastery: readonly ConceptMastery[],
): JourneyStageEvidence[] {
  const masteryMap = new Map(mastery.map((item) => [item.conceptId, item]));

  return getLearningJourneyStages(journey).map((stage) => {
    const conceptIds = CONCEPTS
      .filter(
        (concept) =>
          concept.status === 'active'
          && concept.topics.includes(stage.topic.slug),
      )
      .map((concept) => concept.id);

    const evidenced = conceptIds
      .map((conceptId) => masteryMap.get(conceptId))
      .filter((item): item is ConceptMastery => Boolean(item));

    return {
      stage,
      conceptCount: conceptIds.length,
      evidencedConcepts: evidenced.length,
      strongConcepts: evidenced.filter((item) => isStrongStatus(item.status)).length,
      weakConcepts: evidenced.filter((item) => !isStrongStatus(item.status)).length,
    };
  });
}

export function recommendJourneyStage(
  journey: LearningJourney,
  mastery: readonly ConceptMastery[],
): JourneyRecommendation | null {
  const stages = getJourneyStageEvidence(journey, mastery);
  if (stages.length === 0) return null;

  const hasMasteryEvidence = stages.some(({ evidencedConcepts }) => evidencedConcepts > 0);
  if (!hasMasteryEvidence) {
    return {
      stage: stages[0].stage,
      reason: 'start',
      stageEvidence: stages[0],
      hasMasteryEvidence: false,
    };
  }

  const explicitWeakStage = stages.find(({ weakConcepts }) => weakConcepts > 0);
  if (explicitWeakStage) {
    return {
      stage: explicitWeakStage.stage,
      reason: 'review',
      stageEvidence: explicitWeakStage,
      hasMasteryEvidence: true,
    };
  }

  let lastEvidenceIndex = 0;
  for (let index = stages.length - 1; index >= 0; index -= 1) {
    if (stages[index].evidencedConcepts > 0) {
      lastEvidenceIndex = index;
      break;
    }
  }

  const currentStage = stages[lastEvidenceIndex];
  const minimumBroadEvidence = Math.max(
    2,
    Math.ceil(currentStage.conceptCount / 2),
  );
  const hasBroadStrongEvidence =
    currentStage.evidencedConcepts >= minimumBroadEvidence
    && currentStage.strongConcepts === currentStage.evidencedConcepts;

  const nextStage = stages[lastEvidenceIndex + 1];
  if (nextStage && hasBroadStrongEvidence) {
    return {
      stage: nextStage.stage,
      reason: 'continue',
      stageEvidence: nextStage,
      hasMasteryEvidence: true,
    };
  }

  return {
    stage: currentStage.stage,
    reason: 'reinforce',
    stageEvidence: currentStage,
    hasMasteryEvidence: true,
  };
}


export type JourneyDiagnosticPlacementReason =
  | 'insufficient'
  | 'review'
  | 'frontier';

export interface JourneyDiagnosticStageResult {
  stage: LearningJourneyStage;
  correct: number;
  total: number;
  accuracy: number;
  passed: boolean;
}

export interface JourneyDiagnosticPlacement {
  stage: LearningJourneyStage;
  reason: JourneyDiagnosticPlacementReason;
  passedStages: number;
  stageResult: JourneyDiagnosticStageResult;
  results: JourneyDiagnosticStageResult[];
}

export const JOURNEY_DIAGNOSTIC_QUESTIONS_PER_STAGE = 2;
export const JOURNEY_DIAGNOSTIC_PASS_ACCURACY = 1;

export function placeJourneyFromTopicBreakdown(
  journey: LearningJourney,
  topicBreakdown: Readonly<Record<string, { correct: number; total: number }>>,
): JourneyDiagnosticPlacement | null {
  const stages = getLearningJourneyStages(journey);
  if (stages.length === 0) return null;

  const results = stages.map((stage): JourneyDiagnosticStageResult => {
    const stats = topicBreakdown[stage.topic.slug] ?? { correct: 0, total: 0 };
    const accuracy = stats.total > 0 ? stats.correct / stats.total : 0;
    const passed =
      stats.total >= JOURNEY_DIAGNOSTIC_QUESTIONS_PER_STAGE
      && accuracy >= JOURNEY_DIAGNOSTIC_PASS_ACCURACY;

    return {
      stage,
      correct: stats.correct,
      total: stats.total,
      accuracy,
      passed,
    };
  });

  let passedStages = 0;
  for (const result of results) {
    if (result.total < JOURNEY_DIAGNOSTIC_QUESTIONS_PER_STAGE) {
      return {
        stage: result.stage,
        reason: 'insufficient',
        passedStages,
        stageResult: result,
        results,
      };
    }

    if (!result.passed) {
      return {
        stage: result.stage,
        reason: 'review',
        passedStages,
        stageResult: result,
        results,
      };
    }

    passedStages += 1;
  }

  const finalResult = results[results.length - 1];
  return {
    stage: finalResult.stage,
    reason: 'frontier',
    passedStages,
    stageResult: finalResult,
    results,
  };
}
