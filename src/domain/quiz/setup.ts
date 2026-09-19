import {
  DEFAULT_QUIZ_CAP,
  TOPICS,
  TOPIC_MAP,
  type Difficulty,
} from '@/config/constants';
import { QUESTION_COUNTS } from '@/config/content-stats';
import { QUIZ_FIELD_MAP } from '@/config/fields';

export interface QuizSetupStats {
  topics: string[];
  availableCount: number;
  roundCount: number;
  canStart: boolean;
}

/**
 * Resolve the ordinary Test Time scope to explicit canonical quiz topics.
 * Never return an empty array for "all": the loader treats [] as every group,
 * which includes isolated/special content.
 */
export function resolveQuizTopics(
  selectedTopics: string[],
  selectedField: string,
): string[] {
  const explicitTopics = selectedTopics.filter((topic) => Boolean(TOPIC_MAP[topic]));
  if (explicitTopics.length > 0) return explicitTopics;

  if (selectedField !== 'all') {
    return (QUIZ_FIELD_MAP[selectedField]?.topics ?? []).filter((topic) => Boolean(TOPIC_MAP[topic]));
  }

  return TOPICS.map((topic) => topic.slug);
}

export function countAvailableQuizQuestions(
  topics: string[],
  difficulties: Difficulty[],
): number {
  return topics.reduce((total, topic) => {
    const counts = QUESTION_COUNTS[topic as keyof typeof QUESTION_COUNTS];
    if (!counts) return total;

    return total + difficulties.reduce((sum, difficulty) => {
      const key = difficulty.toLowerCase() as 'easy' | 'hard' | 'sota';
      return sum + counts[key];
    }, 0);
  }, 0);
}

export function getQuizSetupStats(
  selectedTopics: string[],
  selectedField: string,
  difficulties: Difficulty[],
): QuizSetupStats {
  const topics = resolveQuizTopics(selectedTopics, selectedField);
  const availableCount = countAvailableQuizQuestions(topics, difficulties);

  return {
    topics,
    availableCount,
    roundCount: Math.min(availableCount, DEFAULT_QUIZ_CAP),
    canStart: availableCount > 0,
  };
}
