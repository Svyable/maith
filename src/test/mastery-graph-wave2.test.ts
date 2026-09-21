import { describe, expect, it } from 'vitest';
import { CONCEPTS } from '@/config/concepts';
import { probabilityStatsQuestions } from '@/content/probability-stats';
import { optimizationQuestions } from '@/content/optimization';
import { expandConceptsWithPrerequisites } from '@/domain/mastery';

const waveTwoTopics = [
  { slug: 'probability-stats', questions: probabilityStatsQuestions },
  { slug: 'optimization', questions: optimizationQuestions },
] as const;

describe('mastery graph wave 2 coverage', () => {
  it.each(waveTwoTopics)('$slug maps every question to at least one concept', ({ questions }) => {
    expect(questions).toHaveLength(24);
    expect(questions.every((question) => (question.conceptIds?.length ?? 0) > 0)).toBe(true);
  });

  it.each(waveTwoTopics)('$slug keeps every registered concept evidence-dense', ({ slug, questions }) => {
    const concepts = CONCEPTS.filter((concept) => concept.topics.includes(slug));
    expect(concepts.length).toBeGreaterThan(0);

    for (const concept of concepts) {
      const mapped = questions.filter((question) => question.conceptIds?.includes(concept.id));
      expect(
        mapped.length,
        `${concept.id} should have at least two independent question mappings`,
      ).toBeGreaterThanOrEqual(2);
    }
  });

  it('connects optimization prerequisites back through calculus foundations', () => {
    const chain = expandConceptsWithPrerequisites(['gradient-descent']);

    expect(chain).toEqual(expect.arrayContaining([
      'gradient-descent',
      'gradient',
      'derivatives',
      'continuity',
      'optimization-objectives',
    ]));
  });

  it('connects stochastic optimization to probability foundations', () => {
    const chain = expandConceptsWithPrerequisites(['stochastic-optimization']);

    expect(chain).toEqual(expect.arrayContaining([
      'stochastic-optimization',
      'gradient-descent',
      'expectation-variance',
      'probability-rules',
    ]));
  });
});
