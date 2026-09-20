import type { Difficulty } from '@/config/equations';
import { t } from '@/i18n';

export const FORMULA_DIFFICULTY_STYLES: Record<Difficulty, string> = {
  easy: 'bg-success/15 text-success border-success/30',
  hard: 'bg-accent/15 text-accent border-accent/30',
  sota: 'bg-destructive/15 text-destructive border-destructive/30',
};

const DIFFICULTY_LABEL_KEYS: Record<Difficulty, string> = {
  easy: 'formulas.accessible',
  hard: 'formulas.advanced',
  sota: 'formulas.frontier',
};

export function getFormulaDifficultyLabel(
  difficulty: Difficulty,
): string {
  return t(DIFFICULTY_LABEL_KEYS[difficulty]);
}
