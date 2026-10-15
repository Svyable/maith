import { describe, expect, it } from 'vitest';
import { allThinkerQuestions, getThinkerQuestions } from '@/content/thinkers';
import { fetchThinkerQuestions, getThinkerQuestionAvailability } from '@/domain/quiz/thinker-service';
import type { QuestionDifficulty } from '@/config/constants';

describe('MasterMinds difficulty availability', () => {
  const firstQuestion = allThinkerQuestions[0];
  const slug = firstQuestion?.topic;

  it('counts matching difficulty levels exactly once per authored question', () => {
    expect(slug).toBeDefined();
    const questions = getThinkerQuestions(slug);
    const all = getThinkerQuestionAvailability(['easy', 'hard', 'sota']);
    const unrestricted = getThinkerQuestionAvailability([]);

    expect(all.get(slug)).toEqual({ total: questions.length, available: questions.length });
    expect(unrestricted.get(slug)).toEqual(all.get(slug));

    for (const difficulty of ['easy', 'hard', 'sota'] as QuestionDifficulty[]) {
      const selected = getThinkerQuestionAvailability([difficulty]);
      expect(selected.get(slug)).toEqual({
        total: questions.length,
        available: questions.filter((question) => question.difficulty === difficulty).length,
      });
    }
  });

  it('never starts a round without selected-level questions', () => {
    expect(fetchThinkerQuestions('unknown-thinker', ['hard'])).toEqual([]);
    const availableEasy = getThinkerQuestions(slug).filter((question) => question.difficulty === 'easy').length;
    const round = fetchThinkerQuestions(slug, ['easy']);
    expect(round).toHaveLength(Math.min(10, availableEasy));
    expect(round.every((question) => question.difficulty === 'easy')).toBe(true);
  });
});
