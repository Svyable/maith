import type { Question } from '../types';

export const algoTradingQuestions: Question[] = [
  {
    id: 70300,
    topic: 'algo-trading',
    difficulty: 'easy',
    question: 'A VWAP (Volume-Weighted Average Price) execution algorithm aims to:',
    options: [
      'Match the volume-weighted average price over a trading period',
      'Execute all shares at the market open price',
      'Maximize the number of trades per second',
      'Guarantee best execution at the closing price',
    ],
    correctIndex: 0,
    explanation: 'VWAP algorithms slice orders to track the expected volume distribution throughout the day, achieving average execution near the benchmark.',
    realWorld: 'Institutional investors commonly use VWAP algos to reduce market impact on large orders.',
    hint: 'It\'s about matching volume-weighted benchmarks, not speed.',
  },
  {
    id: 70301,
    topic: 'algo-trading',
    difficulty: 'hard',
    question: 'The Almgren-Chriss model for optimal execution minimizes a tradeoff between:',
    options: [
      'Market impact cost and timing risk (price variance)',
      'Commission fees and latency',
      'Bid-ask spread and overnight gap risk',
      'Order routing complexity and regulatory compliance',
    ],
    correctIndex: 0,
    explanation: 'Almgren-Chriss formulates optimal liquidation as minimizing E[cost] + λ·Var[cost], balancing urgency against market impact.',
    realWorld: 'Quant desks at banks implement Almgren-Chriss to optimally unwind large positions.',
    hint: 'It\'s a mean-variance optimization applied to execution, not portfolio selection.',
  },
  {
    id: 70302,
    topic: 'algo-trading',
    difficulty: 'sota',
    question: 'Reinforcement learning in execution algorithms (e.g., using DQN or PPO) improves over Almgren-Chriss by:',
    options: [
      'Adapting to real-time market microstructure without parametric impact models',
      'Eliminating all transaction costs',
      'Guaranteeing zero slippage on every trade',
      'Removing the need for historical data',
    ],
    correctIndex: 0,
    explanation: 'RL agents learn non-parametric policies from live order book data, capturing complex dynamics that static models miss.',
    realWorld: 'JPMorgan\'s LOXM and other bank RL systems have shown 10-20% execution cost improvement.',
    hint: 'RL adapts online; traditional models assume fixed impact functions.',
  },
];
