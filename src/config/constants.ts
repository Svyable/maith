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
  { slug: 'number-theory',     label: 'Number Theory',        emoji: '🔢', description: 'Primes, modular arithmetic, Diophantine equations',  field: 'math'    },
  { slug: 'real-analysis',     label: 'Real Analysis',        emoji: '∞',  description: 'Convergence, measure theory, Lebesgue integrals',   field: 'math'    },
  // ── Physics ──────────────────────────────────────────────
  { slug: 'quantum-mechanics',   label: 'Quantum Mechanics',    emoji: '⚛️', description: 'Wave functions, operators, Schrödinger, uncertainty', field: 'physics' },
  { slug: 'classical-mechanics', label: 'Classical Mechanics',  emoji: '🍎', description: 'Newtonian dynamics, Lagrangians, Hamiltonians',      field: 'physics' },
  { slug: 'electromagnetism',    label: 'Electromagnetism',     emoji: '⚡', description: 'Maxwell, Faraday, electromagnetic waves',            field: 'physics' },
  { slug: 'thermodynamics',      label: 'Thermodynamics',       emoji: '🌡️', description: 'Entropy, statistical mechanics, heat engines',       field: 'physics' },
  // ── Chemistry ──────────────────────────────────────────────
  { slug: 'physical-chemistry',  label: 'Physical Chemistry',   emoji: '⚗️', description: 'Thermodynamics, kinetics, quantum chemistry',       field: 'chemistry' },
  { slug: 'organic-chemistry',   label: 'Organic Chemistry',    emoji: '🧪', description: 'Reactions, stereochemistry, synthesis',              field: 'chemistry' },
  { slug: 'inorganic-chemistry', label: 'Inorganic Chemistry',  emoji: '💎', description: 'Coordination, crystal field theory, organometallics', field: 'chemistry' },
  // ── Biology ──────────────────────────────────────────────
  { slug: 'molecular-biology',   label: 'Molecular Biology',    emoji: '🧬', description: 'DNA, RNA, protein synthesis, CRISPR',               field: 'biology' },
  { slug: 'genetics',            label: 'Genetics',             emoji: '🧫', description: 'Mendel, GWAS, epigenetics, heredity',               field: 'biology' },
  { slug: 'ecology',             label: 'Ecology',              emoji: '🌿', description: 'Ecosystems, food webs, biodiversity',               field: 'biology' },
  // ── Computer Science ──────────────────────────────────────
  { slug: 'algorithms',          label: 'Algorithms',           emoji: '🔍', description: 'Sorting, searching, complexity, divide & conquer',  field: 'cs' },
  { slug: 'machine-learning',    label: 'Machine Learning',     emoji: '🤖', description: 'Supervised, unsupervised, transformers, bias-variance', field: 'cs' },
  { slug: 'cryptography',        label: 'Cryptography',         emoji: '🔐', description: 'RSA, zero-knowledge proofs, post-quantum',          field: 'cs' },
  { slug: 'ai-models',           label: 'AI Models',            emoji: '🏗️', description: 'AlexNet, GPT, AlphaGo, DeepSeek, CALM, Diffusion',  field: 'cs' },
  // ── Earth & Space ──────────────────────────────────────────
  { slug: 'astronomy',           label: 'Astronomy',            emoji: '🔭', description: 'Stars, galaxies, cosmology, CMB',                   field: 'earth-space' },
  { slug: 'geology',             label: 'Geology',              emoji: '🪨', description: 'Rocks, tectonics, geochronology',                   field: 'earth-space' },
  { slug: 'climate-science',     label: 'Climate Science',      emoji: '🌡️', description: 'Greenhouse effect, AMOC, climate models',           field: 'earth-space' },
  // ── Engineering ──────────────────────────────────────────
  { slug: 'electrical-engineering',  label: 'Electrical Engineering',  emoji: '🔌', description: 'Circuits, signals, control theory',           field: 'engineering' },
  { slug: 'mechanical-engineering',  label: 'Mechanical Engineering',  emoji: '⚙️', description: 'Stress, thermodynamics, FEA',                 field: 'engineering' },
  { slug: 'materials-science',      label: 'Materials Science',       emoji: '🔩', description: 'Crystallography, dislocations, alloys',        field: 'engineering' },
  // ── Economics ──────────────────────────────────────────────
  { slug: 'microeconomics',      label: 'Microeconomics',       emoji: '📉', description: 'Supply & demand, game theory, welfare',             field: 'economics' },
  { slug: 'macroeconomics',      label: 'Macroeconomics',       emoji: '🏦', description: 'GDP, monetary policy, Phillips curve',              field: 'economics' },
  { slug: 'econometrics',        label: 'Econometrics',         emoji: '📊', description: 'OLS, IV, difference-in-differences',                field: 'economics' },
  // ── Quant / Finance ──────────────────────────────────────
  { slug: 'stochastic-calculus',  label: 'Stochastic Calculus',   emoji: '📊', description: "Itô's lemma, Brownian motion, SDEs",            field: 'quant'   },
  { slug: 'derivatives-pricing',  label: 'Derivatives Pricing',   emoji: '💹', description: 'Black-Scholes, Greeks, risk-neutral pricing',    field: 'quant'   },
  { slug: 'risk-management',      label: 'Risk Management',       emoji: '🛡️', description: 'VaR, Expected Shortfall, FRTB',                 field: 'quant'   },
  // ── 2025 SOTA ──────────────────────────────────────────────
  { slug: 'sota-2025',            label: '2025 SOTA',              emoji: '🧠', description: 'CALM, DeepSeek-R1, Speculative Decoding, Data Shapley, SAM 2',  field: 'sota-2025' },
  // ── 2026 SOTA ──────────────────────────────────────────────
  { slug: 'sota-2026',            label: '2026 SOTA',              emoji: '🚀', description: 'AgentSkiller, ALMA, LLaDA2.1, InftyThink+, Block Diffusion',    field: 'sota-2026' },
];

export const TOPIC_MAP: Record<string, TopicMeta> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, t])
);

// ── Quiz defaults ────────────────────────────────────────────
export const DEFAULT_DIFFICULTY: Difficulty = 'ADVN';
export const CONTENT_VERSION = '2.0.0';
