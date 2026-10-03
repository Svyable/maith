import { describe, expect, it } from 'vitest';
import { CONCEPTS } from '@/config/concepts';
import { TOPIC_MAP } from '@/config/content-registry';
import {
  LEARNING_JOURNEYS,
  getJourneysForTopic,
  getLearningJourneyStages,
} from '@/config/learning-journeys';
import { buildLearnTopicPath } from '@/config/site-navigation';

describe('guided learning journeys', () => {
  it('ships a small curated initial journey set', () => {
    expect(LEARNING_JOURNEYS.map(({ id }) => id)).toEqual([
      'ai-foundations',
      'algorithms-computation',
      'dynamics-control',
    ]);
  });

  it('keeps every stage canonical, concept-backed, and navigable', () => {
    for (const journey of LEARNING_JOURNEYS) {
      const stages = getLearningJourneyStages(journey);

      expect(stages).toHaveLength(journey.topicSlugs.length);
      expect(new Set(journey.topicSlugs).size).toBe(journey.topicSlugs.length);

      for (const stage of stages) {
        const topic = TOPIC_MAP[stage.topic.slug];
        expect(topic).toBeDefined();
        expect(stage.path).toBe(buildLearnTopicPath(topic.field, topic.slug));
        expect(stage.conceptCount).toBeGreaterThan(0);
        expect(
          CONCEPTS.some(
            (concept) =>
              concept.status === 'active'
              && concept.topics.includes(stage.topic.slug),
          ),
        ).toBe(true);
      }
    }
  });

  it('keeps the AI Foundations sequence explicit and stable', () => {
    const journey = LEARNING_JOURNEYS.find(({ id }) => id === 'ai-foundations');
    expect(journey?.topicSlugs).toEqual([
      'linear-algebra',
      'calculus',
      'probability-stats',
      'optimization',
      'machine-learning',
      'information-theory',
    ]);
  });

  it('finds journeys that provide topic-level next-step context', () => {
    expect(getJourneysForTopic('machine-learning').map(({ id }) => id)).toContain('ai-foundations');
    expect(getJourneysForTopic('classical-mechanics').map(({ id }) => id)).toContain('dynamics-control');
    expect(getJourneysForTopic('algorithms').map(({ id }) => id)).toContain('algorithms-computation');
  });
});
