import { describe, expect, it } from 'vitest';
import { CONCEPTS } from '@/config/concepts';
import { discreteMathQuestions } from '@/content/discrete-math';
import { informationTheoryQuestions } from '@/content/information-theory';
import { expandConceptsWithPrerequisites } from '@/domain/mastery';

const waveFiveTopics = [
  {
    slug: 'discrete-math',
    questions: discreteMathQuestions,
    expectedCount: 24,
  },
  {
    slug: 'information-theory',
    questions: informationTheoryQuestions,
    expectedCount: 9,
  },
] as const;

describe('mastery graph wave 5 coverage', () => {
  it.each(waveFiveTopics)(
    '$slug maps every question to at least one concept',
    ({ questions, expectedCount }) => {
      expect(questions).toHaveLength(expectedCount);
      expect(
        questions.every((question) => (question.conceptIds?.length ?? 0) > 0),
      ).toBe(true);
    },
  );

  it.each(waveFiveTopics)(
    '$slug keeps every registered concept evidence-dense',
    ({ slug, questions }) => {
      const concepts = CONCEPTS.filter((concept) => concept.topics.includes(slug));
      expect(concepts.length).toBeGreaterThan(0);

      for (const concept of concepts) {
        const mapped = questions.filter((question) =>
          question.conceptIds?.includes(concept.id),
        );
        expect(
          mapped.length,
          `${concept.id} should have at least two independent question mappings`,
        ).toBeGreaterThanOrEqual(2);
      }
    },
  );

  it('connects graph computation to discrete structures', () => {
    const chain = expandConceptsWithPrerequisites(['graph-structures-computation']);

    expect(chain).toEqual(expect.arrayContaining([
      'graph-structures-computation',
      'discrete-data-structures',
    ]));
  });

  it('connects modern ML math primitives to probability and linear algebra', () => {
    const chain = expandConceptsWithPrerequisites(['modern-ml-math-primitives']);

    expect(chain).toEqual(expect.arrayContaining([
      'modern-ml-math-primitives',
      'probability-rules',
      'matrix-dimensions',
    ]));
  });

  it('connects source and channel coding through entropy', () => {
    const sourceChain = expandConceptsWithPrerequisites(['source-coding-rate-distortion']);
    const channelChain = expandConceptsWithPrerequisites(['channel-capacity-coding']);

    expect(sourceChain).toEqual(expect.arrayContaining([
      'source-coding-rate-distortion',
      'entropy-information-dependence',
      'probability-distributions',
    ]));
    expect(channelChain).toEqual(expect.arrayContaining([
      'channel-capacity-coding',
      'entropy-information-dependence',
      'probability-distributions',
    ]));
  });
});
