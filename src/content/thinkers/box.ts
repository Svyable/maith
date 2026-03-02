// box.ts
import type { Question } from '../types';

export const boxQuestions: Question[] = [
  {
    id: 69700,
    topic: 'box',
    difficulty: 'easy',
    question: 'Box-Jenkins methodology?',
    options: [
      'Identification → estimation → diagnostic → forecasting ARIMA',
      'Exponential smoothing only',
      'Structural time series',
      'Neural network forecasting'
    ],
    correctIndex: 0,
    explanation: 'Iterative model selection process.',
    realWorld: 'Classical time series analysis.',
    hint: 'Model building diagnostic checking.'
  },
  {
    id: 69701,
    topic: 'box',
    difficulty: 'hard',
    question: 'Box-Cox transformation?',
    options: [
      'y^{(λ)} = (y^λ-1)/λ for λ≠0 stabilizes variance',
      'Log transformation only',
      'Square root',
      'Differencing'
    ],
    correctIndex: 0,
    explanation: 'MLE λ̂ maximizes log-likelihood.',
    realWorld: 'Nonlinear trend normalization.',
    hint: 'Power transform λ ∈ (-5,5).'
  },
  {
    id: 69702,
    topic: 'box',
    difficulty: 'sota',
    question: 'Box-Pierce Q-statistic?',
    options: [
      'n ∑ ρ̂_k² ~ χ²_{h}',
      'Ljung-Box improved',
      'Durbin-Watson',
      'Breusch-Godfrey'
    ],
    correctIndex: 0,
    explanation: 'Sum of squared sample ACFs. Portmanteau test for model adequacy.',
    realWorld: 'ARIMA residual checking.',
    hint: 'Residual autocorrelation test' 
  },
  {
    id: 69703,
    topic: 'box',
    difficulty: 'hard',
    question: 'Box-Tiao intervention analysis?',
    options: [
      'ARIMA with dummy variables for shocks: (1-B)Y_t = ω I_t + (φ(B)/θ(B))ε_t',
      'Pre-whitening only',
      'Transfer function',
      'State space'
    ],
    correctIndex: 0,
    explanation: 'Impact/persistence of policy changes.',
    realWorld: 'Event studies.',
    hint: 'ARIMA with impulse indicator.'
  },
  {
    id: 69704,
    topic: 'box',
    difficulty: 'sota',
    question: 'Box-Jenkins airline model?',
    options: [
      'SARIMA(0,1,1)(0,1,1)₁₂ seasonal differencing',
      'AR(12) annual cycle',
      'MA(12) only',
      'Pure trend'
    ],
    correctIndex: 0,
    explanation: '(1-B)(1-B¹²)Z_t = (1-θ₁B)(1-Θ₁B¹²)ε_t.',
    realWorld: 'Monthly passenger forecasting benchmark.',
    hint: 'Double differencing airline data.'
  }
];
