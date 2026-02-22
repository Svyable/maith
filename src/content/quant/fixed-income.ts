import type { Question } from '../types';

export const fixedIncomeQuestions: Question[] = [
  {
    id: 70200,
    topic: 'fixed-income',
    difficulty: 'easy',
    question: 'Duration measures a bond\'s sensitivity to changes in:',
    options: [
      'Interest rates',
      'Credit rating',
      'Inflation expectations',
      'Currency exchange rates',
    ],
    correctIndex: 0,
    explanation: 'Duration quantifies the approximate percentage change in bond price for a 1% change in yield.',
    realWorld: 'Fixed income PMs use duration to immunize portfolios against interest rate risk.',
    hint: 'It\'s the first-order price sensitivity to yield.',
  },
  {
    id: 70201,
    topic: 'fixed-income',
    difficulty: 'hard',
    question: 'Convexity adjusts the duration estimate because:',
    options: [
      'The price-yield relationship is non-linear (curved)',
      'Duration only works for zero-coupon bonds',
      'Credit spreads are constant',
      'Bonds always trade at par',
    ],
    correctIndex: 0,
    explanation: 'Duration is a linear approximation; convexity captures the curvature of the price-yield curve, improving accuracy for large yield changes.',
    realWorld: 'Traders add convexity adjustment: ΔP/P ≈ -D·Δy + ½·C·(Δy)².',
    hint: 'Think about second-order effects in a Taylor expansion.',
  },
  {
    id: 70202,
    topic: 'fixed-income',
    difficulty: 'sota',
    question: 'In the Heath-Jarrow-Morton (HJM) framework, the no-arbitrage drift of forward rates is determined by:',
    options: [
      'The volatility structure of forward rates under the risk-neutral measure',
      'Historical mean reversion parameters only',
      'The current spot rate exclusively',
      'Central bank policy rate targets',
    ],
    correctIndex: 0,
    explanation: 'HJM\'s key insight is the drift restriction: under Q, forward rate drifts are fully determined by their volatilities, preventing arbitrage.',
    realWorld: 'HJM underpins modern fixed-income derivatives pricing at banks and hedge funds.',
    hint: 'The drift is not free — it\'s constrained by vol under risk-neutral pricing.',
  },
];
