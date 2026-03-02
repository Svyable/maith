// shreve.ts
import type { Question } from '../types';

export const stevenShreveQuestions: Question[] = [
  {
    id: 69350,
    topic: 'steven-shreve',
    difficulty: 'easy',
    question: 'Shreve binomial model converges to?',
    options: [
      'Black-Scholes (CRR: u=e^{σ√Δt}, d=1/u)',
      'Jump-diffusion process',
      'Heston stochastic volatility',
      'Variance gamma Lévy'
    ],
    correctIndex: 0,
    explanation: 'Recombining tree → geometric Brownian motion in limit Δt→0.',
    realWorld: 'American option pricing bridge to continuous.',
    hint: 'Discrete steps → continuous diffusion.'
  },
  {
    id: 69351,
    topic: 'steven-shreve',
    difficulty: 'hard',
    question: 'Shreve Vol I teaches via?',
    options: [
      'Binomial asset pricing → probability → martingales → continuous limit',
      'Direct Itô calculus',
      'Risk-neutral pricing only',
      'Fourier methods'
    ],
    correctIndex: 0,
    explanation: 'Finite markets → Lebesgue → conditional expectation → martingale pricing.',
    realWorld: 'Quant finance textbook standard.',
    hint: 'Discrete tree builds to continuous theory.'
  },
  {
    id: 69352,
    topic: 'steven-shreve',
    difficulty: 'sota',
    question: 'Shreve American put exercise boundary?',
    options: [
      'Optimal stopping: V(S,t) = max(exercise, continuation)',
      'European put price',
      'Perpetual put formula',
      'Static exercise rule'
    ],
    correctIndex: 0,
    explanation: 'Binomial backward induction finds critical S*(t).',
    realWorld: 'Early exercise premium calculation.',
    hint: 'Discrete dynamic programming → optimal boundary.'
  },
  {
    id: 69353,
    topic: 'steven-shreve',
    difficulty: 'hard',
    question: 'Shreve change of numeraire?',
    options: [
      'T-forward measure: dS/S = σ dW^T (dividend reinvestment)',
      'Risk-neutral measure only',
      'Stock measure',
      'Money market numeraire'
    ],
    correctIndex: 0,
    explanation: 'Girsanov kernel changes drift under numeraire switch.',
    realWorld: 'Quanto/FX option pricing.',
    hint: 'Different probability measure simplifies payoff.'
  },
  {
    id: 69354,
    topic: 'steven-shreve',
    difficulty: 'sota',
    question: 'Shreve Vol II: continuous martingale?',
    options: [
      'Itô integral square integrable martingale (no drift)',
      'Risk-neutral pricing measure',
      'Local martingale (supermartingale)',
      'Doob decomposition'
    ],
    correctIndex: 0,
    explanation: '∫ H dW is martingale if E[∫ H² dt] < ∞.',
    realWorld: 'Fundamental theorem asset pricing.',
    hint: 'Stochastic integral w/o drift term.'
  }
];
