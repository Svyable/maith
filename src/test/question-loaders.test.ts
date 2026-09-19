import { describe, expect, it } from 'vitest';
import { CONTENT_COUNTS, QUESTION_COUNTS } from '@/config/content-stats';
import { loadQuestionsForTopics } from '@/content/question-loaders';

describe('selective question loading', () => {
  it('loads only the requested topic while preserving its exact count', async () => {
    const questions = await loadQuestionsForTopics(['linear-algebra']);

    expect(questions).toHaveLength(QUESTION_COUNTS['linear-algebra'].total);
    expect(new Set(questions.map(({ topic }) => topic))).toEqual(new Set(['linear-algebra']));
  });

  it('loads the complete standard universe when no topics are selected', async () => {
    const questions = await loadQuestionsForTopics([]);

    expect(questions).toHaveLength(CONTENT_COUNTS.questions);
    expect(new Set(questions.map(({ id }) => id)).size).toBe(CONTENT_COUNTS.questions);
  });
});