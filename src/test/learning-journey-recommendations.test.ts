import { describe, expect, it } from 'vitest';
import { CONCEPT_MAP } from '@/config/concepts';
import { LEARNING_JOURNEYS } from '@/config/learning-journeys';
import {
  recommendJourneyStage,
  type ConceptMastery,
} from '@/domain/mastery';

function mastery(
  conceptId: string,
  status: ConceptMastery['status'],
): ConceptMastery {
  return {
    conceptId,
    label: CONCEPT_MAP[conceptId].label,
    status,
    attempts: status === 'developing' ? 1 : 3,
    correct: status === 'developing' ? 1 : 3,
    independentCorrect: status === 'developing' ? 1 : 3,
    assistedCorrect: 0,
    hardOrSotaCorrect: status === 'developing' ? 0 : 1,
    accuracy: 1,
    lastAttemptAt: '2026-10-03T00:00:00.000Z',
    prerequisiteIds: CONCEPT_MAP[conceptId].prerequisites,
  };
}

const aiJourney = LEARNING_JOURNEYS.find(({ id }) => id === 'ai-foundations')!;

describe('evidence-aware journey recommendations', () => {
  it('falls back to the first stage when no concept evidence exists', () => {
    const recommendation = recommendJourneyStage(aiJourney, []);

    expect(recommendation?.stage.topic.slug).toBe('linear-algebra');
    expect(recommendation?.reason).toBe('start');
    expect(recommendation?.hasMasteryEvidence).toBe(false);
  });

  it('prioritizes the earliest stage with explicit weak evidence', () => {
    const recommendation = recommendJourneyStage(aiJourney, [
      mastery('derivatives', 'developing'),
      mastery('attention-transformers', 'strong'),
    ]);

    expect(recommendation?.stage.topic.slug).toBe('calculus');
    expect(recommendation?.reason).toBe('review');
    expect(recommendation?.stageEvidence.weakConcepts).toBe(1);
  });

  it('does not advance from a stage with only sparse strong evidence', () => {
    const recommendation = recommendJourneyStage(aiJourney, [
      mastery('supervised-learning-generalization', 'strong'),
    ]);

    expect(recommendation?.stage.topic.slug).toBe('machine-learning');
    expect(recommendation?.reason).toBe('reinforce');
  });

  it('advances when the furthest evidenced stage has broad strong evidence', () => {
    const recommendation = recommendJourneyStage(aiJourney, [
      mastery('supervised-learning-generalization', 'strong'),
      mastery('neural-network-training', 'mastered'),
    ]);

    expect(recommendation?.stage.topic.slug).toBe('information-theory');
    expect(recommendation?.reason).toBe('continue');
  });

  it('never invents a stage beyond the end of a journey', () => {
    const recommendation = recommendJourneyStage(aiJourney, [
      mastery('entropy-information-dependence', 'strong'),
      mastery('channel-capacity-coding', 'mastered'),
    ]);

    expect(recommendation?.stage.topic.slug).toBe('information-theory');
    expect(recommendation?.reason).toBe('reinforce');
  });
});
