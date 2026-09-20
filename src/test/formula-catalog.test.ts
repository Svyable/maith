import { describe, expect, it } from 'vitest';
import type { Equation } from '@/config/equations';
import {
  countFormulaDifficulties,
  filterAndSortEquations,
  getFormulaCatalogStats,
  parseFormulaYear,
} from '@/domain/formulas/catalog';

function equation(
  rank: number,
  overrides: Partial<Equation> = {},
): Equation {
  return {
    rank,
    name: `Equation ${rank}`,
    equation: `x=${rank}`,
    discoverer: 'Tester',
    year: '2000',
    field: 'Pure Mathematics',
    domain: 'Mathematics',
    subDomain: 'Pure Mathematics',
    domainEmoji: '📐',
    significance: 'Significant',
    constants: 'x',
    applications: 'Testing',
    beauty: 5,
    difficulty: 'hard',
    tags: ['test'],
    ...overrides,
  };
}

describe('formula catalog domain', () => {
  it('parses ancient BCE years chronologically', () => {
    expect(parseFormulaYear('1748')).toBe(1748);
    expect(parseFormulaYear('~570 BC')).toBe(-570);
    expect(parseFormulaYear('300 BCE')).toBe(-300);
    expect(parseFormulaYear('unknown')).toBe(0);
  });

  it('computes catalog statistics in one pass', () => {
    const equations = [
      equation(1, { difficulty: 'easy' }),
      equation(2, {
        difficulty: 'hard',
        millenniumProblem: true,
      }),
      equation(3, {
        domain: 'Physics',
        domainEmoji: '⚛️',
        difficulty: 'sota',
        nobelPrize: true,
        unsolved: true,
      }),
    ];

    const stats = getFormulaCatalogStats(equations);

    expect(stats.domains).toEqual([
      { domain: 'Mathematics', count: 2, emoji: '📐' },
      { domain: 'Physics', count: 1, emoji: '⚛️' },
    ]);
    expect(stats.difficulties).toEqual({
      easy: 1,
      hard: 1,
      sota: 1,
    });
    expect(stats.specials).toEqual({
      millennium: 1,
      nobel: 1,
      unsolved: 1,
    });
  });

  it('composes search, domain, difficulty, and special filters', () => {
    const equations = [
      equation(1, {
        name: 'Euler Identity',
        discoverer: 'Euler',
        difficulty: 'hard',
        millenniumProblem: true,
      }),
      equation(2, {
        name: 'Wave Equation',
        discoverer: 'd Alembert',
        domain: 'Physics',
        domainEmoji: '⚛️',
        difficulty: 'hard',
        millenniumProblem: true,
      }),
      equation(3, {
        name: 'Easy Geometry',
        discoverer: 'Euclid',
        difficulty: 'easy',
        millenniumProblem: true,
      }),
    ];

    expect(filterAndSortEquations(equations, {
      search: 'euler',
      sortBy: 'rank',
      domain: 'Mathematics',
      difficulty: 'hard',
      special: 'millennium',
    }).map((item) => item.rank)).toEqual([1]);
  });

  it('sorts by chronological year without mutating the source list', () => {
    const equations = [
      equation(1, { year: '1748' }),
      equation(2, { year: '~570 BC' }),
      equation(3, { year: '1905' }),
    ];
    const sourceOrder = equations.map((item) => item.rank);

    const sorted = filterAndSortEquations(equations, {
      search: '',
      sortBy: 'year',
      domain: 'all',
      difficulty: 'all',
      special: 'all',
    });

    expect(sorted.map((item) => item.rank)).toEqual([2, 1, 3]);
    expect(equations.map((item) => item.rank)).toEqual(sourceOrder);
  });

  it('counts filtered difficulty results independently', () => {
    expect(countFormulaDifficulties([
      equation(1, { difficulty: 'easy' }),
      equation(2, { difficulty: 'easy' }),
      equation(3, { difficulty: 'sota' }),
    ])).toEqual({
      easy: 2,
      hard: 0,
      sota: 1,
    });
  });
});
