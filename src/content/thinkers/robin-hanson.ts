import type { Question } from '../types';

export const hansonQuestions: Question[] = [
  {
    id: 20900,
    topic: 'hanson',
    difficulty: 'easy',
    question: 'Robin Hanson\'s key insight behind prediction markets is that:',
    options: ['Market prices aggregate dispersed information more effectively than polls or expert panels', 'Markets always reflect the truth', 'Only experts should be allowed to trade', 'Prediction markets require government regulation to work'],
    correctIndex: 0,
    explanation: 'Hanson argued that the profit motive incentivizes truthful revelation of private information. When traders risk money on beliefs, they are incentivized to be accurate — producing "the wisdom of crowds" through price discovery.',
    realWorld: 'His work inspired Kalshi, Polymarket, and IARPA\'s forecasting tournaments that outperformed CIA analysts.',
    hint: 'Put your money where your mouth is — that is the core mechanism.',
  },
  {
    id: 20901,
    topic: 'hanson',
    difficulty: 'hard',
    question: 'Hanson\'s LMSR cost function $C(\\mathbf{q}) = b \\cdot \\ln(\\sum_i e^{q_i/b})$ has the property that the price of outcome $j$ is:',
    options: ['$p_j = \\frac{e^{q_j/b}}{\\sum_i e^{q_i/b}}$ — a softmax function', '$p_j = q_j / \\sum q_i$', '$p_j = 1/n$ always', '$p_j = b \\cdot q_j$'],
    correctIndex: 0,
    explanation: 'The LMSR price function is exactly the softmax: $p_j = \\partial C / \\partial q_j = e^{q_j/b} / \\sum e^{q_i/b}$. This connects prediction markets directly to neural network output layers.',
    realWorld: 'The softmax function used in every transformer model\'s attention layer is mathematically identical to Hanson\'s LMSR pricing.',
    hint: 'Take the partial derivative of the cost function with respect to $q_j$.',
  },
  {
    id: 20902,
    topic: 'hanson',
    difficulty: 'sota',
    question: 'Hanson proposed "futarchy" — a governance model where elected officials define welfare metrics and prediction markets decide policies. The key mechanism is:',
    options: ['Conditional prediction markets: "GDP growth IF Policy A" vs "GDP growth IF Policy B" — adopt the policy with higher predicted outcome', 'Direct democracy via blockchain voting', 'Expert panels selecting optimal policies', 'AI systems choosing policies based on historical data'],
    correctIndex: 0,
    explanation: 'Futarchy uses conditional prediction markets to estimate the causal effect of policies on measurable outcomes. The decision rule: "Vote on Values, Bet on Beliefs." Markets price $E[\\text{welfare}|\\text{Policy A}]$ vs $E[\\text{welfare}|\\text{Policy B}]$.',
    realWorld: 'Ethereum experimented with futarchy-inspired governance (Gnosis). MetaDAO on Solana implements a version for protocol governance.',
    hint: 'The key insight is separating values (what to optimize) from beliefs (how to achieve it) — letting markets handle the latter.',
  },
];
