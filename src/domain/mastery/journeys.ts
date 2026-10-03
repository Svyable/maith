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

  const nextStage = stages[lastEvidenceIndex + 1];
  if (nextStage) {
    return {
      stage: nextStage.stage,
      reason: 'continue',
      stageEvidence: nextStage,
      hasMasteryEvidence: true,
    };
  }

  return {
    stage: stages[lastEvidenceIndex].stage,
    reason: 'reinforce',
    stageEvidence: stages[lastEvidenceIndex],
    hasMasteryEvidence: true,
  };
}
