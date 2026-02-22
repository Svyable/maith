import type { Question } from '../types';

export const fischerBlackQuestions: Question[] = [
  {
    id: 96060, topic: 'fischer-black', difficulty: 'easy',
    question: 'The Black-Scholes model provides a formula for pricing:',
    options: ['European-style options using stock price, volatility, time, and risk-free rate', 'Government bonds', 'Real estate properties', 'Commodity futures exclusively'],
    correctIndex: 0,
    explanation: 'Black-Scholes (1973) gives a closed-form price for European calls/puts: $C = S\\Phi(d_1) - Ke^{-rT}\\Phi(d_2)$, revolutionizing derivatives trading.',
    realWorld: 'This formula enabled the explosive growth of options markets — trillions of dollars in derivatives are priced using variants of Black-Scholes.',
    hint: 'It assumes constant volatility, no dividends, and continuous trading.',
  },
  {
    id: 96061, topic: 'fischer-black', difficulty: 'hard',
    question: 'The Black-Scholes PDE is derived using:',
    options: ['Delta hedging to create a risk-free portfolio, then applying no-arbitrage', 'Monte Carlo simulation', 'Historical price regression', 'Machine learning on past option prices'],
    correctIndex: 0,
    explanation: 'By continuously delta-hedging (holding $\\Delta = \\partial C/\\partial S$ shares), the portfolio becomes riskless and must earn the risk-free rate — yielding the Black-Scholes PDE.',
    realWorld: 'Delta hedging is practiced daily by every options market maker in the world.',
    hint: 'The key insight is eliminating risk through continuous rebalancing.',
  },
  {
    id: 96062, topic: 'fischer-black', difficulty: 'sota',
    question: 'Fischer Black\'s "noise" paper (1986) argued that noise trading:',
    options: ['Makes financial markets possible but imperfect — providing liquidity while preventing prices from being fully efficient', 'Has no effect on market prices', 'Always improves price discovery', 'Only exists in cryptocurrency markets'],
    correctIndex: 0,
    explanation: 'Black argued that noise traders (trading on non-information) are essential: they provide liquidity, but their presence means prices are only "roughly efficient" — a nuanced view of market efficiency.',
    realWorld: 'This insight influenced behavioral finance and explains why meme stocks and speculative bubbles can coexist with generally efficient markets.',
    hint: 'Without noise traders, informed traders would have no one to trade against.',
  },
];
