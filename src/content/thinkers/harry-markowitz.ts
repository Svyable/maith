import type { Question } from '../types';

export const harryMarkowitzQuestions: Question[] = [
  {
    id: 19501, topic: 'harry-markowitz', difficulty: 'easy',
    question: 'Harry Markowitz\'s Modern Portfolio Theory (MPT) showed that:',
    options: ['Diversification can reduce portfolio risk without sacrificing expected return', 'All stocks have the same risk', 'Higher risk always means higher return', 'Bonds are always safer than stocks'],
    correctIndex: 0,
    explanation: 'MPT (1952) demonstrated that by combining assets with imperfect correlations, an investor can achieve a given expected return at lower risk than any individual asset — the "free lunch" of diversification.',
    realWorld: 'Every index fund, pension fund, and robo-advisor uses Markowitz-style portfolio optimization.',
    hint: 'Don\'t put all your eggs in one basket — but MPT tells you exactly how many baskets to use.',
  },
  {
    id: 19502, topic: 'harry-markowitz', difficulty: 'hard',
    question: 'The efficient frontier in MPT represents:',
    options: ['The set of portfolios offering maximum expected return for each level of risk', 'The portfolio with the lowest return', 'A single optimal portfolio', 'The set of all possible portfolios'],
    correctIndex: 0,
    explanation: 'The efficient frontier is the upper boundary of the feasible set in mean-variance space. Any portfolio below the frontier is dominated — you can find one with higher return at the same risk.',
    realWorld: 'Wealth managers plot client portfolios against the efficient frontier to show if they\'re sub-optimal.',
    hint: 'It\'s a curve — each point is the best return you can get for a given level of volatility.',
  },
  {
    id: 19503, topic: 'harry-markowitz', difficulty: 'sota',
    question: 'The Black-Litterman model improves upon Markowitz optimization by:',
    options: ['Combining market equilibrium returns with investor views using Bayesian updating', 'Using historical returns directly', 'Ignoring correlations between assets', 'Maximizing Sharpe ratio only'],
    correctIndex: 0,
    explanation: 'Black-Litterman (1992) starts with CAPM equilibrium returns as the prior, then blends in investor views via Bayes\' theorem. This produces stable, intuitive portfolio weights that avoid the extreme positions of naive mean-variance optimization.',
    realWorld: 'Goldman Sachs, where Black and Litterman worked, uses this model for asset allocation. Most institutional investors prefer it over raw Markowitz.',
    hint: 'Start with the market\'s implied returns (equilibrium), then tilt toward your views.',
  },
];
