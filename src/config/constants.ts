// ============================================================
// Constants & Configuration — single source of truth
// ============================================================

export type Difficulty = 'EASY' | 'HARD' | 'SOTA';
export type QuestionDifficulty = 'easy' | 'hard' | 'sota';
export type TopicSlug = string;

// ── Difficulty ↔ QuestionDifficulty mapping ──────────────────
export function toQuestionDifficulty(d: Difficulty): QuestionDifficulty {
  return d.toLowerCase() as QuestionDifficulty;
}

export function toDifficulty(qd: QuestionDifficulty): Difficulty {
  return qd.toUpperCase() as Difficulty;
}

export function highestDifficulty(ds: Difficulty[]): Difficulty {
  if (ds.includes('SOTA')) return 'SOTA';
  if (ds.includes('HARD')) return 'HARD';
  return 'EASY';
}

// ── Scoring ──────────────────────────────────────────────────
export const BASE_POINTS: Record<Difficulty, number> = {
  EASY: 10,
  HARD: 20,
  SOTA: 35,
};

/** multiplier = 1 + streak * STREAK_STEP, capped at STREAK_CAP */
export const STREAK_STEP = 0.05;
export const STREAK_CAP = 2.0;

// ── Universal timer (seconds per question, regardless of difficulty) ─
export const QUESTION_TIME_SECONDS = 30;

// ── Default quiz question cap ───────────────────────────────
export const DEFAULT_QUIZ_CAP = 10;

// ── Difficulty meta ──────────────────────────────────────────
export interface DifficultyMeta {
  slug: Difficulty;
  label: string;
  tag: string;        // short badge text
  /** i18n key for the translated tag (e.g. "difficulty.easy") */
  tagKey: string;
  /** i18n key for the translated description */
  descKey: string;
  emoji: string;
  description: string;
  pointsPerCorrect: number;
  color: 'success' | 'accent' | 'destructive';
}

export const DIFFICULTIES: DifficultyMeta[] = [
  {
    slug: 'EASY',
    label: 'Easy',
    tag: 'EASY',
    tagKey: 'difficulty.easy',
    descKey: 'difficulty.easyDesc',
    emoji: '🌱',
    description: 'Fundamentals — gentle scoring',
    pointsPerCorrect: 10,
    color: 'success',
  },
  {
    slug: 'HARD',
    label: 'Hard',
    tag: 'HARD',
    tagKey: 'difficulty.hard',
    descKey: 'difficulty.hardDesc',
    emoji: '⚡',
    description: 'Competitive — double points',
    pointsPerCorrect: 20,
    color: 'accent',
  },
  {
    slug: 'SOTA',
    label: 'State of the Art',
    tag: 'SOTA',
    tagKey: 'difficulty.sota',
    descKey: 'difficulty.sotaDesc',
    emoji: '🔥',
    description: 'Frontier — max reward',
    pointsPerCorrect: 35,
    color: 'destructive',
  },
];

export function getDifficultyMeta(d: Difficulty): DifficultyMeta {
  return DIFFICULTIES.find((m) => m.slug === d)!;
}

// ── Canonical topic registry ─────────────────────────────────
export { TOPICS, TOPIC_MAP } from './content-registry';
export type { TopicMeta } from './content-registry';

// ── Quiz defaults ────────────────────────────────────────────
export const DEFAULT_DIFFICULTIES: Difficulty[] = ['EASY', 'HARD', 'SOTA'];
export const CONTENT_VERSION = '2.0.0';
