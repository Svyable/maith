// ross.ts
import type { Question } from '../types';

export const rossQuestions: Question[] = [
  {
    id: 69200,
    topic: 'ross',
    difficulty: 'easy',
    question: 'Arbitrage Pricing Theory assumes?',
    options: [
      'R_i = E[R_i] + Σ β_{ik} F_k + ε_i (factor model)',
      'Single beta CAPM',
      'Zero arbitrage exact',
      'Complete markets'
    ],
    correctIndex: 0,
    explanation: 'No arbitrage → E[R_i] = R_f + Σ β_{ik} λ_k.',
    realWorld: 'Multi-factor ETF construction.',
    hint: 'Multiple systematic risk factors.'
  },
  {
    id: 69201,
    topic: 'ross',
    difficulty: 'hard',
    question: 'APT factor derivation?',
    options: [
      'Well-diversified portfolio: idiosyncratic ε̄→0',
      'CAPM market portfolio',
      'Principal components analysis',
      'Maximum likelihood factors'
    ],
    correctIndex: 0,
    explanation: 'Law of large numbers eliminates firm-specific risk.',
    realWorld: 'Barra/quant factor models.',
    hint: 'Diversification kills idiosyncratic risk.'
  },
  {
    id: 69202,
    topic: 'ross',
    difficulty: 'sota',
    question: 'APT exact pricing condition?',
    options: [
      'No arbitrage portfolio with zero β earns zero E[R]',
      'Risk premium per beta',
      'Complete market pricing',
      'State price densities'
    ],
    correctIndex: 0,
    explanation: 'Σ w_i β_i = 0, Σ w_i = 0 → E[Σ w_i R_i] = 0.',
    realWorld: 'Statistical arbitrage construction.',
    hint: 'Zero systematic risk → zero expected return.'
  },
  {
    id: 69203,
    topic: 'ross',
    difficulty: 'hard',
    question: 'Ross binomial model converges to?',
    options: [
      'Black-Scholes (CRR u=exp(σ√Δt), d=1/u)',
      'Jump diffusion',
      'Heston stochastic vol',
      'SABR model'
    ],
    correctIndex: 0,
    explanation: 'Recombining tree → lognormal diffusion.',
    realWorld: 'American option pricing.',
    hint: 'Discrete steps → continuous BS.'
  },
  {
    id: 69204,
    topic: 'ross',
    difficulty: 'sota',
    question: 'APT vs Fama-French: key difference?',
    options: [
      'APT: factors unspecified, risk-based; FF: empirical factors',
      'APT single factor',
      'APT exact pricing',
      'APT assumes normality'
    ],
    correctIndex: 0,
    explanation: 'APT theoretical (no arb → pricing); FF empirical.',
    realWorld: 'Theory vs data-driven factors.',
    hint: 'APT derives pricing, doesn\'t specify factors.'
  }
];
