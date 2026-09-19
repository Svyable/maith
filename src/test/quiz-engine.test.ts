import { describe, expect, it } from 'vitest';
import { getSafeEliminationIndices } from '@/domain/quiz/engine';

describe('getSafeEliminationIndices', () => {
  it('never eliminates the correct visible option', () => {
    const originalIndices = [2, 0, 3, 1];
    const correctIndex = 3;
    const correctVisibleIndex = originalIndices.indexOf(correctIndex);

    for (let i = 0; i < 50; i++) {
      const eliminated = getSafeEliminationIndices(correctIndex, originalIndices);
      expect(eliminated).toHaveLength(2);
      expect(new Set(eliminated).size).toBe(2);
      expect(eliminated).not.toContain(correctVisibleIndex);
    }
  });

  it('fails closed when the correct answer is missing from the visible mapping', () => {
    expect(getSafeEliminationIndices(3, [0, 1, 2])).toEqual([]);
  });
});
