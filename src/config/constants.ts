// ============================================================
// Constants & Configuration — single source of truth
// ============================================================

export type Difficulty = 'EASY' | 'ADVN' | 'SOTA';
export type TopicSlug = string;

// ── Scoring ──────────────────────────────────────────────────
export const BASE_POINTS: Record<Difficulty, number> = {
  EASY: 10,
  ADVN: 20,
  SOTA: 35,
};

/** multiplier = 1 + streak * STREAK_STEP, capped at STREAK_CAP */
export const STREAK_STEP = 0.05;
export const STREAK_CAP = 2.0;

// ── Difficulty meta ──────────────────────────────────────────
export interface DifficultyMeta {
  slug: Difficulty;
  label: string;
  tag: string;        // short badge text
  emoji: string;
  description: string;
  questionsPerQuiz: number;
  timePerQuestion: number; // seconds
  color: 'success' | 'accent' | 'destructive';
}

export const DIFFICULTIES: DifficultyMeta[] = [
  {
    slug: 'EASY',
    label: 'Easy',
    tag: 'EASY',
    emoji: '🌱',
    description: 'Fundamentals — gentle scoring, longer timer',
    questionsPerQuiz: 10,
    timePerQuestion: 30,
    color: 'success',
  },
  {
    slug: 'ADVN',
    label: 'Advanced',
    tag: 'ADVN',
    emoji: '⚡',
    description: 'Competitive difficulty — level up',
    questionsPerQuiz: 15,
    timePerQuestion: 20,
    color: 'accent',
  },
  {
    slug: 'SOTA',
    label: 'State of the Art',
    tag: 'SOTA',
    emoji: '🔥',
    description: 'God-mode frontier — highest reward',
    questionsPerQuiz: 20,
    timePerQuestion: 15,
    color: 'destructive',
  },
];

export function getDifficultyMeta(d: Difficulty): DifficultyMeta {
  return DIFFICULTIES.find((m) => m.slug === d)!;
}

// ── Topic registry ───────────────────────────────────────────
export interface TopicMeta {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  /** Which field this topic belongs to — matches FieldMeta.slug */
  field: string;
}

export const TOPICS: TopicMeta[] = [
  // ── Mathematics ──────────────────────────────────────────
  { slug: 'linear-algebra',    label: 'Linear Algebra',       emoji: '📐', description: 'Vectors, matrices, eigenvalues, SVD',                field: 'math'    },
  { slug: 'calculus',          label: 'Calculus',             emoji: '∫',  description: 'Derivatives, integrals, gradients, Hessians',        field: 'math'    },
  { slug: 'probability-stats', label: 'Probability & Stats',  emoji: '🎲', description: "Bayes, distributions, hypothesis testing",           field: 'math'    },
  { slug: 'optimization',      label: 'Optimization',         emoji: '⛰️', description: 'Gradient descent, convexity, regularization',        field: 'math'    },
  { slug: 'discrete-math',     label: 'Discrete & Modern',    emoji: '🔗', description: 'Complexity, graphs, tensors, attention',             field: 'math'    },
  // ── Physics ──────────────────────────────────────────────
  { slug: 'quantum-mechanics', label: 'Quantum Mechanics',    emoji: '⚛️', description: 'Wave functions, operators, Schrödinger, uncertainty', field: 'physics' },
  { slug: 'classical-mechanics', label: 'Classical Mechanics', emoji: '🍎', description: 'Newtonian dynamics, Lagrangians, Hamiltonians',      field: 'physics' },
  // ── Quant / Finance ──────────────────────────────────────
  { slug: 'stochastic-calculus',  label: 'Stochastic Calculus',   emoji: '📊', description: "Itô's lemma, Brownian motion, SDEs",            field: 'quant'   },
  { slug: 'derivatives-pricing',  label: 'Derivatives Pricing',   emoji: '💹', description: 'Black-Scholes, Greeks, risk-neutral pricing',    field: 'quant'   },
];

export const TOPIC_MAP: Record<string, TopicMeta> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, t])
);

// ── Quiz defaults ────────────────────────────────────────────
export const DEFAULT_DIFFICULTY: Difficulty = 'ADVN';
export const CONTENT_VERSION = '1.0.0';
