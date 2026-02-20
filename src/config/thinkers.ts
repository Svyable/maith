// ============================================================
// Thinker Mode Configuration — THINKER_REGISTRY
// ============================================================
//
// HOW TO ADD A NEW THINKER PACK:
// ─────────────────────────────────────────────────────────────
// 1. Add a ThinkerMeta entry to THINKERS below
// 2. Create src/content/thinkers/<slug>.ts with 10+ Questions
//    — use IDs in range: Ancient 10001-10999, Modern 11001-11999,
//      Contemporary 12001-12999
// 3. Export the questions array from src/content/thinkers/index.ts
// 4. The thinker appears automatically in the gallery
//
// era_group values:
//   'ancient'       — historical figures (pre-1900)
//   'modern'        — 20th-century pioneers (1900-1980 birth)
//   'contemporary'  — living or recently active figures (post-1980 birth or active today)
// ─────────────────────────────────────────────────────────────

export interface ThinkerMeta {
  slug: string;
  name: string;
  archetype: string;
  emoji: string;
  era: string;
  domain: string;
  description: string;
  color: string;
  tagline: string;
  era_group: 'ancient' | 'modern' | 'contemporary';
}

export const THINKERS: ThinkerMeta[] = [
  // ── Original legends ────────────────────────────────────
  {
    slug: 'hinton',
    name: 'Geoffrey Hinton',
    archetype: 'The Godfather',
    emoji: '🧠',
    era: '1947–present',
    domain: 'Deep Learning',
    description: 'Backpropagation, Boltzmann Machines, Capsule Networks',
    color: 'primary',
    tagline: 'He taught machines to learn from their mistakes.',
    era_group: 'modern',
  },
  {
    slug: 'turing',
    name: 'Alan Turing',
    archetype: 'The Logician',
    emoji: '⚙️',
    era: '1912–1954',
    domain: 'Computability',
    description: 'Turing Machines, Halting Problem, Turing Test',
    color: 'accent',
    tagline: 'He defined what a computer could ever do.',
    era_group: 'modern',
  },
  {
    slug: 'shannon',
    name: 'Claude Shannon',
    archetype: 'The Messenger',
    emoji: '📡',
    era: '1916–2001',
    domain: 'Information Theory',
    description: 'Entropy, Channel Capacity, Data Compression',
    color: 'success',
    tagline: 'He turned noise into signal — and bits into science.',
    era_group: 'modern',
  },
  {
    slug: 'poincare',
    name: 'Henri Poincaré',
    archetype: 'The Geometer',
    emoji: '🌀',
    era: '1854–1912',
    domain: 'Topology & Chaos',
    description: 'Topology, Chaos Theory, Manifolds, Poincaré Conjecture',
    color: 'destructive',
    tagline: 'He found that the universe cannot be predicted.',
    era_group: 'ancient',
  },
  {
    slug: 'riemann',
    name: 'Bernhard Riemann',
    archetype: 'The Navigator',
    emoji: '🌐',
    era: '1826–1866',
    domain: 'Differential Geometry',
    description: 'Riemannian Metrics, Curved Spaces, Geodesics',
    color: 'accent',
    tagline: 'He curved space before Einstein needed it.',
    era_group: 'ancient',
  },
  {
    slug: 'feynman',
    name: 'Richard Feynman',
    archetype: 'The Explainer',
    emoji: '⚛️',
    era: '1918–1988',
    domain: 'Quantum Physics & Computing',
    description: 'Path Integrals, Quantum Computing, Physics-Informed NNs',
    color: 'primary',
    tagline: 'He made the impossible feel obvious.',
    era_group: 'modern',
  },
  {
    slug: 'vonneumann',
    name: 'John von Neumann',
    archetype: 'The Architect',
    emoji: '🏛️',
    era: '1903–1957',
    domain: 'Game Theory & Architecture',
    description: 'Minimax, Game Theory, Von Neumann Architecture',
    color: 'success',
    tagline: 'He designed the mind of every modern computer.',
    era_group: 'modern',
  },
  {
    slug: 'pearl',
    name: 'Judea Pearl',
    archetype: 'The Causalist',
    emoji: '🔀',
    era: '1936–present',
    domain: 'Causal Inference',
    description: 'Do-Calculus, Causal Diagrams, Bayesian Networks',
    color: 'destructive',
    tagline: 'He taught machines to ask "why?"',
    era_group: 'modern',
  },
  {
    slug: 'simons',
    name: 'Jim Simons',
    archetype: 'The Quant',
    emoji: '📈',
    era: '1938–2024',
    domain: 'Quantitative Finance',
    description: 'Hidden Markov Models, Stochastic Calculus, Arbitrage',
    color: 'accent',
    tagline: 'He weaponized mathematics against the market.',
    era_group: 'modern',
  },
  {
    slug: 'ramanujan',
    name: 'Srinivasa Ramanujan',
    archetype: 'The Oracle',
    emoji: '∞',
    era: '1887–1920',
    domain: 'Pure Mathematics',
    description: 'Infinite Series, Number Theory, Partition Functions',
    color: 'primary',
    tagline: 'He dreamed of formulas no one had proved.',
    era_group: 'ancient',
  },
  // ── Ancient thinkers ─────────────────────────────────────
  {
    slug: 'euclid',
    name: 'Euclid of Alexandria',
    archetype: 'The Axiomatist',
    emoji: '📐',
    era: '≈300 BC',
    domain: 'Geometry & Logic',
    description: 'Axiomatic Geometry, Infinitely Many Primes, GCD Algorithm',
    color: 'accent',
    tagline: 'He built all of geometry from five humble axioms.',
    era_group: 'ancient',
  },
  {
    slug: 'archimedes',
    name: 'Archimedes of Syracuse',
    archetype: 'The Mechanic',
    emoji: '⚖️',
    era: '≈287–212 BC',
    domain: 'Calculus & Mechanics',
    description: 'Proto-Calculus, Buoyancy, Spiral, π Approximation',
    color: 'success',
    tagline: 'He invented integral calculus 1800 years early.',
    era_group: 'ancient',
  },
  {
    slug: 'newton',
    name: 'Isaac Newton',
    archetype: 'The Physicist',
    emoji: '🍎',
    era: '1643–1727',
    domain: 'Calculus & Mechanics',
    description: 'Calculus, Laws of Motion, Gravitation, Newton\'s Method',
    color: 'primary',
    tagline: 'He unified Earth and sky with a single equation.',
    era_group: 'ancient',
  },
  {
    slug: 'euler',
    name: 'Leonhard Euler',
    archetype: 'The Prolific',
    emoji: '🔢',
    era: '1707–1783',
    domain: 'Analysis & Graph Theory',
    description: 'e^{iπ}+1=0, Graph Theory, Euler Characteristic, π²/6',
    color: 'destructive',
    tagline: 'He wrote more mathematics than any human before or since.',
    era_group: 'ancient',
  },
  {
    slug: 'pythagoras',
    name: 'Pythagoras of Samos',
    archetype: 'The Harmonist',
    emoji: '🔺',
    era: '≈570–495 BC',
    domain: 'Geometry & Number Theory',
    description: 'a²+b²=c², Irrational Numbers, Musical Ratios',
    color: 'success',
    tagline: 'He found that the universe speaks in numbers.',
    era_group: 'ancient',
  },
  {
    slug: 'gauss',
    name: 'Carl Friedrich Gauss',
    archetype: 'The Prince',
    emoji: '👑',
    era: '1777–1855',
    domain: 'Number Theory & Statistics',
    description: 'Normal Distribution, Gaussian Elimination, FFT, Modular Arithmetic',
    color: 'accent',
    tagline: 'He was doing modern mathematics at age 19.',
    era_group: 'ancient',
  },
  // ── Modern thinkers ────────────────────────────────────
  {
    slug: 'bengio',
    name: 'Yoshua Bengio',
    archetype: 'The Representor',
    emoji: '🎓',
    era: '1964–present',
    domain: 'Representation Learning',
    description: 'Word Embeddings, Attention, GFlowNets, Causal AI',
    color: 'primary',
    tagline: 'He taught machines to represent meaning itself.',
    era_group: 'modern',
  },
  {
    slug: 'lecun',
    name: 'Yann LeCun',
    archetype: 'The Vision Master',
    emoji: '👁️',
    era: '1960–present',
    domain: 'Computer Vision',
    description: 'CNNs, LeNet, Energy-Based Models, JEPA, World Models',
    color: 'accent',
    tagline: 'He gave machines the gift of sight.',
    era_group: 'modern',
  },
  {
    slug: 'sutton',
    name: 'Richard Sutton',
    archetype: 'The Reinforcer',
    emoji: '🎮',
    era: '1956–present',
    domain: 'Reinforcement Learning',
    description: 'TD Learning, Policy Gradients, Dyna, The Bitter Lesson',
    color: 'success',
    tagline: 'He showed that reward is all you need.',
    era_group: 'modern',
  },
  {
    slug: 'goodfellow',
    name: 'Ian Goodfellow',
    archetype: 'The Adversary',
    emoji: '⚔️',
    era: '1985–present',
    domain: 'Generative AI',
    description: 'GANs, Adversarial Examples, WGAN, Deep Learning Textbook',
    color: 'destructive',
    tagline: 'He pitted two AIs against each other — and magic happened.',
    era_group: 'contemporary',
  },
  {
    slug: 'vapnik',
    name: 'Vladimir Vapnik',
    archetype: 'The Statistician',
    emoji: '📊',
    era: '1936–present',
    domain: 'Statistical Learning',
    description: 'SVMs, Kernel Methods, VC Theory, PAC Learning',
    color: 'primary',
    tagline: 'He gave learning theory its mathematical foundation.',
    era_group: 'modern',
  },
];

/** Typed registry map — O(1) lookup by slug */
export const THINKER_REGISTRY: Record<string, ThinkerMeta> = Object.fromEntries(
  THINKERS.map((t) => [t.slug, t])
);

/** Backward-compatible alias */
export const THINKER_MAP = THINKER_REGISTRY;

export function getThinker(slug: string): ThinkerMeta | undefined {
  return THINKER_REGISTRY[slug];
}

export const ANCIENT_THINKERS = THINKERS.filter((t) => t.era_group === 'ancient');
export const MODERN_THINKERS = THINKERS.filter((t) => t.era_group === 'modern');
export const CONTEMPORARY_THINKERS = THINKERS.filter((t) => t.era_group === 'contemporary');
