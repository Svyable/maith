import { CONCEPTS } from './concepts';
import { TOPIC_MAP, type TopicMeta } from './content-registry';
import { buildLearnTopicPath } from './site-navigation';

export interface LearningJourney {
  id: string;
  label: string;
  emoji: string;
  description: string;
  outcome: string;
  topicSlugs: readonly string[];
}

export interface LearningJourneyStage {
  index: number;
  topic: TopicMeta;
  path: string;
  conceptCount: number;
}

export const LEARNING_JOURNEYS: readonly LearningJourney[] = [
  {
    id: 'ai-foundations',
    label: 'AI Foundations',
    emoji: '🤖',
    description: 'Build the mathematical spine behind modern machine learning before climbing into models.',
    outcome: 'Connect matrices, calculus, probability, optimization, machine learning, and information theory.',
    topicSlugs: [
      'linear-algebra',
      'calculus',
      'probability-stats',
      'optimization',
      'machine-learning',
      'information-theory',
    ],
  },
  {
    id: 'algorithms-computation',
    label: 'Algorithms & Computation',
    emoji: '🧩',
    description: 'Move from discrete structures into efficient algorithms and the limits of information.',
    outcome: 'Build fluency in complexity, data structures, graph computation, fast algorithms, and coding limits.',
    topicSlugs: [
      'discrete-math',
      'algorithms',
      'information-theory',
    ],
  },
  {
    id: 'dynamics-control',
    label: 'Dynamics & Control',
    emoji: '🎛️',
    description: 'Connect mathematical foundations to physical dynamics and engineered feedback systems.',
    outcome: 'Progress from linear systems and calculus through mechanics into feedback, estimation, and control.',
    topicSlugs: [
      'linear-algebra',
      'calculus',
      'classical-mechanics',
      'control-systems',
    ],
  },
] as const;

export const LEARNING_JOURNEY_MAP: Readonly<Record<string, LearningJourney>> =
  Object.fromEntries(LEARNING_JOURNEYS.map((journey) => [journey.id, journey]));

export function getLearningJourneyStages(journey: LearningJourney): LearningJourneyStage[] {
  return journey.topicSlugs.flatMap((topicSlug, index) => {
    const topic = TOPIC_MAP[topicSlug];
    if (!topic) return [];

    return [{
      index,
      topic,
      path: buildLearnTopicPath(topic.field, topic.slug),
      conceptCount: CONCEPTS.filter(
        (concept) => concept.status === 'active' && concept.topics.includes(topic.slug),
      ).length,
    }];
  });
}

export function getJourneysForTopic(topicSlug: string): LearningJourney[] {
  return LEARNING_JOURNEYS.filter((journey) => journey.topicSlugs.includes(topicSlug));
}
