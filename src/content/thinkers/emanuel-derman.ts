// derman.ts
import type { Question } from '../types';

export const dermanQuestions: Question[] = [
  {
    id: 69250,
    topic: 'emanuel-derman',
    difficulty: 'easy',
    question: 'Derman-Kani local volatility σ(K,T) extracts?',
    options: [
      'Implied tree: instantaneous vol from vanilla surface',
      'Constant Black-Scholes σ',
      'Heston stochastic volatility',
      'Local Lévy processes'
    ],
    correctIndex: 0,
    explanation: 'Dupire formula: σ_loc²(K,T) = ∂C/∂T/[½K²∂²C/∂K² + terms].',
    realWorld: 'Exotic pricing consistent with observed smile.',
    hint: 'Volatility surface → local volatility surface.'
  },
  {
    id: 69251,
    topic: 'emanuel-derman',
    difficulty: 'hard',
    question: 'Local vol Dupire forward PDE?',
    options: [
      '∂C/∂T = ½σ²(K,T)K²∂²C/∂K² + (r-q)K∂C/∂K - rC',
      'Black-Scholes (σ constant)',
      'Heston dual Fokker-Planck',
      'Variance gamma characteristic'
    ],
    correctIndex: 0,
    explanation: 'Market call prices → local volatility surface via vanilla prices.',
    realWorld: 'Single-factor smile dynamics calibration.',
    hint: 'BS PDE with strike/time-dependent volatility.'
  },
  {
    id: 69252,
    topic: 'emanuel-derman',
    difficulty: 'sota',
    question: 'Derman "rule of two": local vol vs implied?',
    options: [
      'Local σ varies ~2× faster with S than implied σ with K',
      'Local σ = implied σ exactly',
      'Local σ = average implied σ',
      'Implied σ twice local σ'
    ],
    correctIndex: 0,
    explanation: '∂σ_loc/∂S ≈ 2 ∂σ_imp/∂K near ATM (small slope).',
    realWorld: 'Implied tree construction guideline.',
    hint: 'Local vol twice as sensitive to spot moves.'
  },
  {
    id: 69253,
    topic: 'emanuel-derman',
    difficulty: 'hard',
    question: 'Implied binomial tree construction?',
    options: [
      'Adjust node vols σ(S,t) to match market smiles across strikes',
      'Constant volatility CRR tree',
      'Trinomial recombining tree',
      'Jump-adjusted tree'
    ],
    correctIndex: 0,
    explanation: 'Derman-Kani: forward/backward induction fits entire vol surface.',
    realWorld: 'Pre-Monte Carlo exact smile pricing.',
    hint: 'Tree nodes calibrated to market vanillas.'
  },
  {
    id: 69254,
    topic: 'emanuel-derman',
    difficulty: 'sota',
    question: 'Local vol forward skew dynamics?',
    options: [
      'Smile flattens forward: σ_loc(S,t+Δ) < σ_imp(K,T) (leverage effect)',
      'Smile steepens forward',
      'Smile unchanged (sticky strike)',
      'Smile strike-independent'
    ],
    correctIndex: 0,
    explanation: 'High vol → low spot → skew flattens as S rises.',
    realWorld: 'Explains equity smile term structure.',
    hint: 'Future smile lower than current implied.'
  }
];
