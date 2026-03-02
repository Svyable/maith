// engle.ts
import type { Question } from '../types';

export const engleQuestions: Question[] = [
  {
    id: 69650,
    topic: 'engle',
    difficulty: 'easy',
    question: 'ARCH(1): σ_t² = ?',
    options: [
      'α₀ + α₁ ε_{t-1}² (volatility clustering)',
      'Constant variance',
      'GARCH recursion',
      'EWMA λ=0.94'
    ],
    correctIndex: 0,
    explanation: 'Autoregressive conditional heteroskedasticity.',
    realWorld: 'Equity/fx volatility modeling.',
    hint: 'Past squared returns predict future variance.'
  },
  {
    id: 69651,
    topic: 'engle',
    difficulty: 'hard',
    question: 'ARCH LM test?',
    options: [
      'n R² ~ χ²_k from ε²_t on ε²_{t-1},…,ε²_{t-k}',
      'Ljung-Box on returns',
      'Breusch-Pagan on levels',
      'Jarque-Bera normality'
    ],
    correctIndex: 0,
    explanation: 'Autocorrelation test on squared standardized residuals.',
    realWorld: 'ARCH effects detection.',
    hint: 'Squared residuals autocorrelation.'
  },
  {
    id: 69652,
    topic: 'engle',
    difficulty: 'sota',
    question: 'Engle ARCH-M: risk-return tradeoff?',
    options: [
      'r_t = α + β σ_t² + γ σ_t² ε_t (GARCH-in-mean)',
      'Constant risk premium',
      'Linear r_t vs σ_t',
      'Leverage effect only'
    ],
    correctIndex: 0,
    explanation: 'Conditional variance enters mean equation.',
    realWorld: 'Asset pricing tests.',
    hint: 'Volatility compensates expected return.'
  },
  {
    id: 69653,
    topic: 'engle',
    difficulty: 'hard',
    question: 'DCC Engle-Sheppard?',
    options: [
      'Dynamic conditional correlation: Q_t = (1-α-β)Q̄ + α u_{t-1}u_{t-1}ᵀ + β Q_{t-1}',
      'Constant correlation',
      'BEKK quadratic',
      'VECH parameterization'
    ],
    correctIndex: 0,
    explanation: 'Multivariate GARCH with time-varying correlations.',
    realWorld: 'Portfolio VaR, pairs trading.',
    hint: 'GARCH-like correlation evolution.'
  },
  {
    id: 69654,
    topic: 'engle',
    difficulty: 'sota',
    question: 'Engle cointegration test?',
    options: [
      'DF/ADF residuals from VECM: Δe_t = γ e_{t-1} + ∑ δ_i Δe_{t-i}',
      'Johansen trace/max-eigen',
      'KPSS stationarity',
      'Phillips-Perron'
    ],
    correctIndex: 0,
    explanation: 'Tests if error correction term stationary.',
    realWorld: 'Pairs trading signals.',
    hint: 'Residuals from cointegrating regression.'
  }
];
