import { describe, expect, it } from 'vitest';
import { DEFAULT_QUIZ_CAP, TOPICS } from '@/config/constants';
import { QUIZ_FIELDS } from '@/config/fields';
import {
  countAvailableQuizQuestions,
  getQuizSetupStats,
  resolveQuizTopics,
} from '@/domain/quiz';

describe('quiz setup scope', () => {
  it('expands All Fields to explicit canonical standard-quiz topics', () => {
    const resolved = resolveQuizTopics([], 'all');
    const canonical = TOPICS.map((topic) => topic.slug);

    expect(new Set(resolved)).toEqual(new Set(canonical));
    expect(resolved.length).toBeGreaterThan(0);
    expect(resolved).not.toContain('engineering');
    expect(resolved).not.toContain('string-theory');
    expect(resolved).not.toContain('cfa-ethics');
  });

  it('lets an explicit topic selection override the field scope', () => {
    expect(resolveQuizTopics(['linear-algebra'], 'physics')).toEqual(['linear-algebra']);
  });

  it('fails safe to the canonical quiz scope for an invalid field', () => {
    expect(new Set(resolveQuizTopics([], 'cfa'))).toEqual(
      new Set(TOPICS.map((topic) => topic.slug)),
    );
  });

  it('keeps isolated professional collections out of ordinary quiz field filters', () => {
    const slugs = QUIZ_FIELDS.map((field) => field.slug);

    expect(slugs).toContain('math');
    expect(slugs).toContain('physics');
    expect(slugs).not.toContain('cfa');
    expect(slugs).not.toContain('cpa');
    expect(slugs).not.toContain('actuarial');
    expect(slugs).not.toContain('mba');
    expect(slugs).not.toContain('law');
    expect(slugs).not.toContain('medical');
    expect(slugs).not.toContain('data-science');
  });
});

describe('quiz setup availability', () => {
  it('counts only the selected difficulty levels', () => {
    expect(countAvailableQuizQuestions(['linear-algebra'], ['EASY'])).toBe(8);
    expect(countAvailableQuizQuestions(['linear-algebra'], ['EASY', 'HARD', 'SOTA'])).toBe(24);
  });

  it('disables a setup with no matching questions', () => {
    expect(getQuizSetupStats([], 'sota-2025', ['EASY'])).toMatchObject({
      availableCount: 0,
      roundCount: 0,
      canStart: false,
    });
  });

  it('previews the actual capped round size rather than the full pool', () => {
    const stats = getQuizSetupStats([], 'sota-2025', ['SOTA']);

    expect(stats.availableCount).toBe(11);
    expect(stats.roundCount).toBe(DEFAULT_QUIZ_CAP);
    expect(stats.canStart).toBe(true);
  });
});
