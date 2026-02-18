// ============================================================
// Thinker Mode Configuration — single source of truth
// ============================================================

export interface ThinkerMeta {
  slug: string;
  name: string;
  archetype: string;
  emoji: string;
  era: string;
  domain: string;
  description: string;
  color: string; // tailwind semantic color hint
  tagline: string;
}

export const THINKERS: ThinkerMeta[] = [
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
  },
];

export const THINKER_MAP: Record<string, ThinkerMeta> = Object.fromEntries(
  THINKERS.map((t) => [t.slug, t])
);

export function getThinker(slug: string): ThinkerMeta | undefined {
  return THINKER_MAP[slug];
}
