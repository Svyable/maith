import { describe, expect, it } from 'vitest';
import { CONCEPTS } from '@/config/concepts';
import { computerScienceQuestions } from '@/content/computer-science';
import { physicsQuestions } from '@/content/physics';
import { expandConceptsWithPrerequisites } from '@/domain/mastery';

const waveThreeTopics = [
  {
    slug: 'algorithms',
    questions: computerScienceQuestions.filter((question) => question.topic === 'algorithms'),
    expectedCount: 9,
  },
  {
    slug: 'classical-mechanics',
    questions: physicsQuestions.filter((question) => question.topic === 'classical-mechanics'),
    expectedCount: 12,
  },
] as const;

describe('mastery graph wave 3 coverage', () => {
  it.each(waveThreeTopics)(
    '$slug maps every question to at least one concept',
    ({ questions, expectedCount }) => {
      expect(questions).toHaveLength(expectedCount);
      expect(
        questions.every((question) => (question.conceptIds?.length ?? 0) > 0),
      ).toBe(true);
    },
  );

  it.each(waveThreeTopics)(
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

  it('connects classical chaos through Hamiltonian and variational mechanics', () => {
    const chain = expandConceptsWithPrerequisites(['classical-chaos-stability']);

    expect(chain).toEqual(expect.arrayContaining([
      'classical-chaos-stability',
      'hamiltonian-phase-space',
      'variational-mechanics',
      'force-energy-dynamics',
    ]));
  });

  it('connects frontier algorithms back to asymptotic analysis', () => {
    const chain = expandConceptsWithPrerequisites(['fast-algorithm-frontiers']);

    expect(chain).toEqual(expect.arrayContaining([
      'fast-algorithm-frontiers',
      'asymptotic-algorithm-analysis',
    ]));
  });
});
