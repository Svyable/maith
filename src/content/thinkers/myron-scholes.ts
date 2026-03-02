// scholes.ts
import type { Question } from '../types';

export const myronScholesQuestions: Question[] = [
  {
    id: 69050,
    topic: 'myron-scholes',
    difficulty: 'easy',
    question: 'Black-Scholes call price C(S,K,t,σ,r)?',
    options: [
      'C = S N(d₁) - K e^{-rt} N(d₂)',
      'C = (S-K)^+',
      'C = S - K/(1+r)^t',
      'C = σ √t S Φ(d)'
    ],
    correctIndex: 0,
    explanation: 'd₁ = [ln(S/K)+(r+σ²/2)t]/(σ√t), d₂ = d₁-σ√t.',
    realWorld: '$500T+ derivatives market pricing.',
    hint: 'Stock times probability minus strike times discount.'
  },
  {
    id: 69051,
    topic: 'myron-scholes',
    difficulty: 'hard',
    question: 'Black-Scholes PDE derivation?',
    options: [
      'Portfolio Δ = -∂V/∂S hedged → deterministic rV = ∂V/∂t + (rS)∂V/∂S + σ²S²/2 ∂²V/∂S²',
      'Risk-neutral expectation',
      'Feynman-Kac solution',
      'Heston stochastic volatility'
    ],
    correctIndex: 0,
    explanation: 'Locally riskless portfolio eliminates dW term.',
    realWorld: 'Options pricing heat equation.',
    hint: 'Delta-hedged portfolio riskless.'
  },
  {
    id: 69052,
    topic: 'myron-scholes',
    difficulty: 'sota',
    question: 'Vega ∂C/∂σ measures?',
    options: [
      'S √t n(d₁) (undiversifiable volatility risk)',
      '∂C/∂r (rho)',
      '∂C/∂t (theta decay)',
      '∂²C/∂S² (gamma)'
    ],
    correctIndex: 0,
    explanation: 'Vega = κ √T φ(d₁); smile trading/volatility arbitrage.',
    realWorld: 'VIX futures, variance swaps.',
    hint: 'Option price sensitivity to volatility.'
  },
  {
    id: 69053,
    topic: 'myron-scholes',
    difficulty: 'hard',
    question: 'Scholes 1973 continuous hedging?',
    options: [
      'Self-financing: ΔS_t + V_t replicates payoff',
      'Discrete time binomial',
      'Static replication',
      'Variance swap hedging'
    ],
    correctIndex: 0,
    explanation: 'Dynamic delta Δ_t = N(d₁,t) perfectly replicates.',
    realWorld: 'Market maker risk management.',
    hint: 'Continuously adjust delta to match payoff.'
  },
  {
    id: 69054,
    topic: 'myron-scholes',
    difficulty: 'sota',
    question: 'Implied volatility smile from?',
    options: [
      'Skew: crash fear → OTM put IV > ATM > OTM call',
      'Constant σ (1973 assumption)',
      'Stochastic r volatility',
      'Jump diffusion only'
    ],
    correctIndex: 0,
    explanation: 'Market prices embed fat tails/skew beyond BS Gaussian.',
    realWorld: 'Volatility surface trading.',
    hint: 'Puts cost more than model predicts.'
  }
];
