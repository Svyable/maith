import { describe, expect, it } from 'vitest';
import { calculatePoints, streakBonusLabel } from '@/domain/scoring';
import { STREAK_CAP } from '@/config/constants';

describe('quiz scoring feedback', () => {
  it('increases correct-answer points as the streak grows', () => {
    expect(calculatePoints('easy', 1)).toBeGreaterThan(0);
    expect(calculatePoints('hard', 4)).toBeGreaterThan(calculatePoints('hard', 1));
  });

  it('caps streak bonus labels at the configured multiplier ceiling', () => {
    const expectedBonus = Math.round((STREAK_CAP - 1) * 100);
    expect(streakBonusLabel(10_000)).toBe(`+${expectedBonus}%`);
  });
});
