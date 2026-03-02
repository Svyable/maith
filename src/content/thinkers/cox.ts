// cox.ts
import type { Question } from '../types';

export const coxQuestions: Question[] = [
  {
    id: 69500,
    topic: 'cox',
    difficulty: 'easy',
    question: 'Cox-Ross-Rubinstein binomial?',
    options: [
      'u = e^{σ√Δt}, d = e^{-σ√Δt} (lognormal limit)',
      'Jarrow-Rudd risk-neutral',
      'Equal prob p=0.5',
      'Additive u=1+σ√Δt'
    ],
    correctIndex: 0,
    explanation: 'Multiplicative recombining tree → Black-Scholes.',
    realWorld: 'American/Bermudan option pricing.',
    hint: 'Geometric steps → lognormal diffusion.'
  },
  {
    id: 69501,
    topic: 'cox',
    difficulty: 'hard',
    question: 'Cox-Ingersoll-Ross CIR rates model?',
    options: [
      'dr = κ(θ-r)dt + σ√r dW (√r diffusion, Feller condition)',
      'Vasicek Ornstein-Uhlenbeck',
      'Hull-White time-dependent',
      'Ho-Lee arithmetic'
    ],
    correctIndex: 0,
    explanation: '2κθ > σ² prevents negative rates.',
    realWorld: 'Interest rate derivatives.',
    hint: 'Square-root diffusion stays positive.'
  },
  {
    id: 69502,
    topic: 'cox',
    difficulty: 'sota',
    question: 'Cox doubly stochastic Poisson?',
    options: [
      'N_t | Λ_t ~ Poisson(∫λ_s ds), Λ_t Cox process',
      'Homogeneous Poisson',
      'Hawkes self-exciting',
      'Mixed Poisson'
    ],
    correctIndex: 0,
    explanation: 'Intensity λ_t random process.',
    realWorld: 'Credit risk, insurance claims.',
    hint: 'Random intensity Poisson process.'
  },
  {
    id: 69503,
    topic: 'cox',
    difficulty: 'hard',
    question: 'CRR risk-neutral probability?',
    options: [
      'p* = (e^{(r-δ)Δt}-d)/(u-d)',
      'p* = 0.5',
      'p* = e^{rΔt}/2',
      'p* = 1/(1+e^{-rΔt})'
    ],
    correctIndex: 0,
    explanation: 'Martingale measure for binomial tree.',
    realWorld: 'Option pricing discrete model.',
    hint: 'Discounted expectation = forward.'
  },
  {
    id: 69504,
    topic: 'cox',
    difficulty: 'sota',
    question: 'CIR zero-coupon bond price?',
    options: [
      'P(0,T) = A(T)e^{-B(T)r_0} (affine form)',
      'Black formula',
      'Ho-Lee exponential',
      'Vasicek erf function'
    ],
    correctIndex: 0,
    explanation: 'Ricatti ODE solution; non-central χ² distribution.',
    realWorld: 'Treasury curve calibration.',
    hint: 'Exponential affine rates model.'
  }
];
