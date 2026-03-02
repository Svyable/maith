// wilmott.ts
import type { Question } from '../types';

export const paulWilmottQuestions: Question[] = [
  {
    id: 69310,
    topic: 'paul-wilmott',
    difficulty: 'easy',
    question: 'Wilmott sticky delta convention?',
    options: [
      'Local Δ = ∂V/∂S (model delta) for hedging',
      'Sticky strike Δ',
      'Sticky moneyness Δ',
      'Risk reversal Δ'
    ],
    correctIndex: 0,
    explanation: 'Hedge using instantaneous local volatility derivative.',
    realWorld: 'Vol trader position management.',
    hint: 'Model-implied delta, not market delta.'
  },
  {
    id: 69311,
    topic: 'paul-wilmott',
    difficulty: 'hard',
    question: 'Wilmott vol cone construction?',
    options: [
      '±2σ bounds from historical vol surface',
      'Implied vol confidence bands',
      'GARCH forecast cone',
      'Realized vol trailing'
    ],
    correctIndex: 0,
    explanation: 'Visual risk management tool.',
    realWorld: 'Desk risk monitoring.',
    hint: 'Historical vol envelope around spot.'
  },
  {
    id: 69312,
    topic: 'paul-wilmott',
    difficulty: 'sota',
    question: 'Wilmott PDE numerical schemes?',
    options: [
      'Crank-Nicolson ADI for multidimensional BS PDEs',
      'Explicit FTCS',
      'SOR successive over-relaxation',
      'Spectral Galerkin'
    ],
    correctIndex: 0,
    explanation: 'Unconditional stability + second-order accuracy.',
    realWorld: 'Production exotic pricers.',
    hint: 'Time-stepping PDE solver for options.'
  },
  {
    id: 69313,
    topic: 'paul-wilmott',
    difficulty: 'hard',
    question: 'Wilmott Greeks: vanna = ?',
    options: [
      '∂²V/∂S∂σ (vol × delta cross-greek)',
      '∂vega/∂t (vol time decay)',
      '∂delta/∂t (delta bleed)',
      '∂gamma/∂σ (vol convexity)'
    ],
    correctIndex: 0,
    explanation: 'Vanna risk: delta changes with spot/vol correlation.',
    realWorld: 'Cross-gamma vol hedging.',
    hint: 'Delta sensitivity to volatility.'
  },
  {
    id: 69314,
    topic: 'paul-wilmott',
    difficulty: 'sota',
    question: 'Wilmott utility indifference pricing?',
    options: [
      'V = sup E[U(W + payoff)] marginal utility price',
      'Risk-neutral expectation',
      'Super-replication',
      'Quantile hedging'
    ],
    correctIndex: 0,
    explanation: 'Optimal risk-adjusted price for non-replicable payoffs.',
    realWorld: 'Incomplete markets pricing.',
    hint: 'Investor utility determines fair price.'
  }
];
