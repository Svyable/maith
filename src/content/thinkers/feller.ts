// feller.ts
import type { Question } from '../types';

export const fellerQuestions: Question[] = [
  {
    id: 69450,
    topic: 'feller',
    difficulty: 'easy',
    question: 'Feller semi-group property?',
    options: [
      'Markov process: P_{t+s}(x,y) = ∫ P_t(x,z)P_s(z,y) dz',
      'Chapman-Kolmogorov only',
      'Stationary distribution',
      'Generator infinitesimal'
    ],
    correctIndex: 0,
    explanation: 'Transition semigroup composition.',
    realWorld: 'Diffusion/Markov chain theory.',
    hint: 'Future independent of past given present.'
  },
  {
    id: 69451,
    topic: 'feller',
    difficulty: 'hard',
    question: 'Feller property (semigroup)?',
    options: [
      'P_t maps C_0 → C_0 (continuous functions vanishing at ∞)',
      'Bounded operators only',
      'Compact operators',
      'Hilbert-Schmidt'
    ],
    correctIndex: 0,
    explanation: 'Preserves continuous vanishing boundary functions.',
    realWorld: 'Boundary value problems.',
    hint: 'Semigroup maps nice functions to nice functions.'
  },
  {
    id: 69452,
    topic: 'feller',
    difficulty: 'sota',
    question: 'Feller diffusion generator?',
    options: [
      'L = μ(x) d/dx + ½σ²(x) d²/dx²',
      'Forward Kolmogorov',
      'Laplacian Δ',
      'Advection only'
    ],
    correctIndex: 0,
    explanation: 'Infinitesimal generator of transition semigroup.',
    realWorld: 'Fokker-Planck duality.',
    hint: 'PDE generator of Markov process.'
  },
  {
    id: 69453,
    topic: 'feller',
    difficulty: 'hard',
    question: 'Feller continuity at boundary?',
    options: [
      'lim_{t→0} P_t f(x) → f(x) ∀x continuous f',
      'Strong continuity',
      'Uniform continuity',
      'L¹ continuity'
    ],
    correctIndex: 0,
    explanation: 'Semigroup regularity condition.',
    realWorld: 'Markov process identification.',
    hint: 'Returns to identity as t→0.'
  },
  {
    id: 69454,
    topic: 'feller',
    difficulty: 'sota',
    question: 'Feller-McKean test for?',
    options: [
      'Boundary classification (regular, exit, entrance, natural)',
      'Explosion times',
      'Recurrence/transience',
      'Hitting probabilities'
    ],
    correctIndex: 0,
    explanation: 'Scale function + speed measure determine boundary behavior.',
    realWorld: 'Diffusion theory boundaries.',
    hint: 'Boundaries hit or escape?'
  }
];
