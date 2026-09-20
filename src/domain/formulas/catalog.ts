import type {
  Difficulty,
  Domain,
  Equation,
} from '@/config/equations';

export type FormulaSortKey = 'rank' | 'beauty' | 'year' | 'name';
export type FormulaSpecialFilter = 'all' | 'millennium' | 'nobel' | 'unsolved';

export interface FormulaCatalogFilters {
  search: string;
  sortBy: FormulaSortKey;
  domain: 'all' | Domain | string;
  difficulty: 'all' | Difficulty;
  special: FormulaSpecialFilter;
}

export interface FormulaDifficultyCounts {
  easy: number;
  hard: number;
  sota: number;
}

export interface FormulaCatalogStats {
  domains: Array<{
    domain: Domain;
    count: number;
    emoji: string;
  }>;
  difficulties: FormulaDifficultyCounts;
  specials: {
    millennium: number;
    nobel: number;
    unsolved: number;
  };
}

export function parseFormulaYear(year: string): number {
  const match = year.match(/-?\d+/);
  if (!match) return 0;

  const numeric = Number.parseInt(match[0], 10);
  if (/\bBCE?\b/i.test(year) && numeric > 0) {
    return -numeric;
  }

  return numeric;
}

export function countFormulaDifficulties(
  equations: readonly Equation[],
): FormulaDifficultyCounts {
  const counts: FormulaDifficultyCounts = {
    easy: 0,
    hard: 0,
    sota: 0,
  };

  equations.forEach((equation) => {
    counts[equation.difficulty] += 1;
  });

  return counts;
}

export function getFormulaCatalogStats(
  equations: readonly Equation[],
): FormulaCatalogStats {
  const domainMap = new Map<
    Domain,
    { count: number; emoji: string }
  >();
  const specials = {
    millennium: 0,
    nobel: 0,
    unsolved: 0,
  };

  equations.forEach((equation) => {
    const existing = domainMap.get(equation.domain);
    if (existing) {
      existing.count += 1;
    } else {
      domainMap.set(equation.domain, {
        count: 1,
        emoji: equation.domainEmoji,
      });
    }

    if (equation.millenniumProblem) specials.millennium += 1;
    if (equation.nobelPrize) specials.nobel += 1;
    if (equation.unsolved) specials.unsolved += 1;
  });

  return {
    domains: [...domainMap.entries()]
      .map(([domain, value]) => ({
        domain,
        count: value.count,
        emoji: value.emoji,
      }))
      .sort((a, b) => b.count - a.count),
    difficulties: countFormulaDifficulties(equations),
    specials,
  };
}

export function filterAndSortEquations(
  equations: readonly Equation[],
  filters: FormulaCatalogFilters,
): Equation[] {
  const query = filters.search.trim().toLowerCase();

  const filtered = equations.filter((equation) => {
    if (filters.domain !== 'all' && equation.domain !== filters.domain) {
      return false;
    }

    if (
      filters.difficulty !== 'all'
      && equation.difficulty !== filters.difficulty
    ) {
      return false;
    }

    if (
      filters.special === 'millennium'
      && !equation.millenniumProblem
    ) {
      return false;
    }

    if (filters.special === 'nobel' && !equation.nobelPrize) {
      return false;
    }

    if (filters.special === 'unsolved' && !equation.unsolved) {
      return false;
    }

    if (!query) return true;

    return [
      equation.name,
      equation.discoverer,
      equation.field,
      equation.domain,
      equation.applications,
      ...equation.tags,
    ].some((value) => value.toLowerCase().includes(query));
  });

  return [...filtered].sort((a, b) => {
    switch (filters.sortBy) {
      case 'rank':
        return a.rank - b.rank;
      case 'beauty':
        return b.beauty - a.beauty || a.rank - b.rank;
      case 'year':
        return parseFormulaYear(a.year) - parseFormulaYear(b.year);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
}
