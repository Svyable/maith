import type { Question } from '../types';

export const edThorpQuestions: Question[] = [
  {
    id: 96070, topic: 'ed-thorp', difficulty: 'easy',
    question: 'Ed Thorp\'s "Beat the Dealer" (1962) demonstrated:',
    options: ['Card counting can give players a mathematical edge in blackjack', 'Roulette wheels have exploitable biases', 'Poker is purely a game of luck', 'Slot machines can be predicted'],
    correctIndex: 0,
    explanation: 'Thorp proved that by tracking the ratio of high to low cards remaining, a player can gain a 1-2% edge over the house — the first rigorous application of probability to gambling.',
    realWorld: 'Casinos changed their rules (multi-deck shoes, shuffling machines) in response, and Thorp\'s methods inspired a generation of quantitative thinkers.',
    hint: 'He used a wearable computer hidden in his shoe to count cards.',
  },
  {
    id: 96071, topic: 'ed-thorp', difficulty: 'hard',
    question: 'Thorp independently derived a formula equivalent to Black-Scholes for pricing:',
    options: ['Warrants, years before Black-Scholes was published (1967 vs 1973)', 'Government bonds', 'Currency forwards', 'Credit default swaps'],
    correctIndex: 0,
    explanation: 'In his hedge fund Princeton Newport Partners, Thorp used a warrant pricing formula based on delta hedging by 1967 — six years before Black and Scholes published theirs.',
    realWorld: 'Princeton Newport Partners returned 20%+ annually for 20 years with only 3 losing months — one of the best risk-adjusted track records ever.',
    hint: 'He applied the same mathematical thinking from gambling to Wall Street.',
  },
  {
    id: 96072, topic: 'ed-thorp', difficulty: 'sota',
    question: 'Thorp\'s Kelly Criterion application to portfolio management determines:',
    options: ['The optimal fraction of capital to bet, maximizing long-term geometric growth rate', 'The minimum variance portfolio', 'The maximum Sharpe ratio allocation', 'The equal-weight portfolio'],
    correctIndex: 0,
    explanation: 'The Kelly fraction $f^* = \\frac{p \\cdot b - q}{b}$ maximizes $E[\\ln(W)]$ — the expected log-wealth. Thorp was among the first to apply Kelly betting to financial markets systematically.',
    realWorld: 'Many top hedge funds (Renaissance, AQR) use Kelly-inspired position sizing. Thorp argues it\'s the "scientific" approach to money management.',
    hint: 'It balances the desire to bet big with the need to survive bad streaks.',
  },
];
