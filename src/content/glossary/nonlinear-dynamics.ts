import type { GlossaryTerm } from './types';

export const nonlinearDynamicsTerms: GlossaryTerm[] = [
  {
    id: 'lyapunov-exponent-gloss', field: 'physics', topic: 'nonlinear-dynamics',
    term: 'Lyapunov Exponent',
    definition: 'Quantifies the rate of separation of infinitesimally close trajectories: $\\lambda = \\lim_{t\\to\\infty}\\frac{1}{t}\\ln\\frac{|\\delta(t)|}{|\\delta(0)|}$. Positive $\\lambda$ signals chaos.',
    formula: '$\\lambda = \\lim_{t\\to\\infty}\\frac{1}{t}\\ln\\frac{|\\delta(t)|}{|\\delta(0)|}$',
    latex: '\\lambda = \\lim_{t\\to\\infty}\\frac{1}{t}\\ln\\frac{|\\delta(t)|}{|\\delta(0)|}',
    symbolLinks: { 'λ': 'lambda', 'δ': 'delta' },
    thinkerLinks: ['lyapunov'],
    related: ['strange-attractor'],
    difficulty: 'intermediate',
  },
  {
    id: 'strange-attractor', field: 'physics', topic: 'nonlinear-dynamics',
    term: 'Strange Attractor',
    definition: 'A fractal set in phase space toward which a chaotic dynamical system evolves. Has non-integer (fractal) dimension.',
    example: 'The Lorenz attractor\'s butterfly shape arises from just three coupled ODEs.',
    thinkerLinks: ['lorenz'],
    related: ['lyapunov-exponent-gloss', 'bifurcation'],
    difficulty: 'intermediate',
  },
  {
    id: 'bifurcation', field: 'physics', topic: 'nonlinear-dynamics',
    term: 'Bifurcation',
    definition: 'A qualitative change in a system\'s behavior as a parameter varies — e.g., a fixed point splitting into a limit cycle (Hopf bifurcation).',
    example: 'The logistic map $x_{n+1} = rx_n(1-x_n)$ undergoes period-doubling bifurcations leading to chaos.',
    related: ['strange-attractor', 'lyapunov-exponent-gloss'],
    difficulty: 'intro',
  },
];
