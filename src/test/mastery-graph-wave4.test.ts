import { describe, expect, it } from 'vitest';
import { CONCEPTS } from '@/config/concepts';
import { computerScienceQuestions } from '@/content/computer-science';
import { engineeringQuestions } from '@/content/engineering';
import { expandConceptsWithPrerequisites } from '@/domain/mastery';

const waveFourTopics = [
  {
    slug: 'machine-learning',
    questions: computerScienceQuestions.filter((question) => question.topic === 'machine-learning'),
    expectedCount: 9,
  },
  {
    slug: 'control-systems',
    questions: engineeringQuestions.filter((question) => question.topic === 'control-systems'),
    expectedCount: 5,
  },
] as const;

describe('mastery graph wave 4 coverage', () => {
  it.each(waveFourTopics)(
    '$slug maps every question to at least one concept',
    ({ questions, expectedCount }) => {
      expect(questions).toHaveLength(expectedCount);
      expect(
        questions.every((question) => (question.conceptIds?.length ?? 0) > 0),
      ).toBe(true);
    },
  );

  it.each(waveFourTopics)(
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

  it('connects attention through neural training to optimization foundations', () => {
    const chain = expandConceptsWithPrerequisites(['attention-transformers']);

    expect(chain).toEqual(expect.arrayContaining([
      'attention-transformers',
      'neural-network-training',
      'gradient-descent',
      'gradient',
      'derivatives',
      'matrix-multiplication',
    ]));
  });

  it('connects supervised learning to probability and model selection', () => {
    const chain = expandConceptsWithPrerequisites(['supervised-learning-generalization']);

    expect(chain).toEqual(expect.arrayContaining([
      'supervised-learning-generalization',
      'generalization-model-selection',
      'expectation-variance',
      'probability-rules',
    ]));
  });

  it('connects model-based control to linear systems and feedback stability', () => {
    const chain = expandConceptsWithPrerequisites(['model-based-control-estimation']);

    expect(chain).toEqual(expect.arrayContaining([
      'model-based-control-estimation',
      'feedback-control-stability',
      'linear-systems',
      'matrix-multiplication',
      'matrix-dimensions',
    ]));
  });
});
