import { describe, expect, it } from 'vitest';
import { linearAlgebraQuestions } from '@/content/linear-algebra';
import { calculusQuestions } from '@/content/calculus';
import { probabilityStatsQuestions } from '@/content/probability-stats';
import { LEARNING_JOURNEY_MAP } from '@/config/learning-journeys';
import { placeJourneyFromTopicBreakdown } from '@/domain/mastery';
import { fetchDiagnosticQuestions } from '@/domain/quiz/service';

describe('journey placement diagnostics', () => {
  it('samples one Easy and one Hard question from every requested stage', () => {
    const topics = ['linear-algebra', 'calculus', 'probability-stats'];
    const pool = [
      ...linearAlgebraQuestions,
      ...calculusQuestions,
      ...probabilityStatsQuestions,
    ];

    const diagnostic = fetchDiagnosticQuestions(
      pool,
      topics,
      ['easy', 'hard'],
    );

    expect(diagnostic).toHaveLength(6);

    for (const topic of topics) {
      const questions = diagnostic.filter((question) => question.topic === topic);
      expect(questions).toHaveLength(2);
      expect(new Set(questions.map(({ difficulty }) => difficulty))).toEqual(
        new Set(['easy', 'hard']),
      );
      expect(questions.every((question) => (question.conceptIds?.length ?? 0) > 0)).toBe(true);
    }
  });

  it('places at the first sampled stage that is not perfect', () => {
    const journey = LEARNING_JOURNEY_MAP['algorithms-computation'];
    const placement = placeJourneyFromTopicBreakdown(journey, {
      'discrete-math': { correct: 2, total: 2 },
      algorithms: { correct: 1, total: 2 },
      'information-theory': { correct: 2, total: 2 },
    });

    expect(placement?.stage.topic.slug).toBe('algorithms');
    expect(placement?.reason).toBe('review');
    expect(placement?.passedStages).toBe(1);
  });

  it('stops at the first stage with insufficient answered samples', () => {
    const journey = LEARNING_JOURNEY_MAP['algorithms-computation'];
    const placement = placeJourneyFromTopicBreakdown(journey, {
      'discrete-math': { correct: 2, total: 2 },
      algorithms: { correct: 1, total: 1 },
    });

    expect(placement?.stage.topic.slug).toBe('algorithms');
    expect(placement?.reason).toBe('insufficient');
    expect(placement?.passedStages).toBe(1);
  });

  it('places at the final stage when every stage sample is cleared', () => {
    const journey = LEARNING_JOURNEY_MAP['algorithms-computation'];
    const placement = placeJourneyFromTopicBreakdown(journey, {
      'discrete-math': { correct: 2, total: 2 },
      algorithms: { correct: 2, total: 2 },
      'information-theory': { correct: 2, total: 2 },
    });

    expect(placement?.stage.topic.slug).toBe('information-theory');
    expect(placement?.reason).toBe('frontier');
    expect(placement?.passedStages).toBe(3);
  });
});
