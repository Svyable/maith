// kelly.ts
import type { Question } from '../types';

export const kellyQuestions: Question[] = [
  {
    id: 69000,
    topic: 'john-kelly',
    difficulty: 'easy',
    question: 'Kelly Criterion maximizes?',
    options: [
      'Geometric growth: f* = (bp-q)/b where p=win prob, b=odds',
      'Arithmetic expected value E[X]',
      'Variance minimization σ²',
      'Max drawdown protection'
    ],
    correctIndex: 0,
    explanation: 'f* maximizes E[log wealth] → exponential bankroll growth.',
    realWorld: 'Renaissance Medallion, Buffett, blackjack pros.',
    hint: 'Bet fraction grows wealth fastest long-term.'
  },
  {
    id: 69001,
    topic: 'john-kelly',
    difficulty: 'hard',
    question: 'Even money Kelly (b=1): f* = ?',
    options: [
      'f* = 2p-1 (edge as % of odds)',
      'f* = p (win probability)',
      'f* = p-q (raw edge)',
      'f* = 1/(2p) (half-Kelly)'
    ],
    correctIndex: 0,
    explanation: 'p=0.6 fair coin → f*=0.2. Half-Kelly f*=0.1 reduces volatility.',
    realWorld: 'Sports betting optimal position sizing.',
    hint: 'Edge over fair odds ratio.'
  },
  {
    id: 69002,
    topic: 'john-kelly',
    difficulty: 'sota',
    question: 'Kelly portfolio weights solve?',
    options: [
      'f* = Σ w_i f_i* maximizing ∏(1+wᵀR_i)^{p_i}',
      'Markowitz mean-variance',
      'CAPM security market line',
      'Black-Litterman blending'
    ],
    correctIndex: 0,
    explanation: 'Multi-bet Kelly: log-optimal portfolio across simultaneous opportunities.',
    realWorld: 'Quantitative hedge fund position sizing.',
    hint: 'Multiple simultaneous growth maximization.'
  },
  {
    id: 69003,
    topic: 'john-kelly',
    difficulty: 'hard',
    question: 'Kelly + transaction costs: f* becomes?',
    options: [
      'f*_tc = max(f*-c/|b|, 0) where c=tc cost',
      'f*/(1+tc)',
      'f*(1-tc)',
      'No position if tc>edge'
    ],
    correctIndex: 0,
    explanation: 'Costs erode edge; breakeven when f* ≤ c/|b|.',
    realWorld: 'High-frequency trading position thresholds.',
    hint: 'Costs subtract from optimal fraction.'
  },
  {
    id: 69004,
    topic: 'john-kelly',
    difficulty: 'sota',
    question: 'Asymptotic Kelly growth rate?',
    options: [
      'G(f*) ≈ (p log(1+bf*)+(1-p)log(1-f*))/ln(2) → max',
      'E[R] arithmetic drift',
      'σ²/2 volatility drag',
      'Sharpe ratio maximization'
    ],
    correctIndex: 0,
    explanation: 'G(f) = limit T⁻¹ log(W_T/W_0); Kelly maximizes.',
    realWorld: 'Theoretical growth optimality proof.',
    hint: 'Log-wealth rate per unit time.'
  }
];
