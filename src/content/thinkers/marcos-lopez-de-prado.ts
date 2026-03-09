import type { Question } from '../types';

export const marcosLopezDePradoQuestions: Question[] = [
  {
    id: 32200, topic: 'marcos-lopez-de-prado', difficulty: 'easy',
    question: 'Marcos López de Prado developed the Hierarchical Risk Parity (HRP) algorithm. What problem does it solve?',
    options: [
      'Portfolio allocation without inverting the covariance matrix — avoiding the instability of Markowitz optimization. HRP uses: (1) hierarchical clustering to build a dendrogram of asset correlations, (2) quasi-diagonalization to reorder the covariance matrix, (3) recursive bisection to allocate inversely proportional to cluster variance: $$w_i \\propto \\frac{1}{\\text{Var}(\\text{cluster containing } i)}$$ This produces well-diversified portfolios even when $N > T$ (more assets than observations).',
      'Computing the exact global minimum variance portfolio for any number of assets in polynomial time.',
      'Selecting the optimal number of assets to include in a portfolio using cross-validation.',
      'Estimating the true covariance matrix from a single observation per asset using Bayesian priors.'
    ],
    correctIndex: 0,
    explanation: 'Markowitz optimization requires inverting $\\Sigma$ — which is catastrophically unstable when $N/T$ is large. Small estimation errors get amplified into extreme (and meaningless) portfolio weights. HRP avoids this entirely by using the hierarchical structure of correlations. It\'s also intuitive: similar assets are grouped and allocated to collectively, preventing over-concentration in correlated positions.',
    realWorld: 'HRP is implemented at major asset managers and is available in Python libraries (riskfolio-lib, PyPortfolioOpt). It consistently outperforms mean-variance optimization out-of-sample, especially in high-dimensional settings.',
    hint: 'Cluster similar assets, then allocate to clusters — no matrix inversion, no instability.',
    formulaLinks: ['hierarchical-risk-parity'],
  },
  {
    id: 32201, topic: 'marcos-lopez-de-prado', difficulty: 'hard',
    question: 'López de Prado identified the "backtest overfitting" problem in quantitative finance. What is the key result?',
    options: [
      'Given $N$ independent strategy backtests, the probability that the best performer is a false positive (overfit to in-sample data) approaches 1 as $N$ grows: $$P(\\text{best is overfit}) \\approx 1 - \\frac{1}{N} \\cdot \\left(\\frac{e \\cdot \\text{IS trials}}{\\text{OOS trials}}\\right)$$ The Deflated Sharpe Ratio (DSR) adjusts the reported Sharpe for: (1) number of trials $N$, (2) skewness and kurtosis of returns, (3) correlation among strategies. For typical quant research ($N \\sim 1000$ backtests), a Sharpe of 2.0 may be statistically insignificant.',
      'Backtesting always produces accurate forecasts of future performance if the sample size exceeds 10 years.',
      'Overfitting only occurs when using machine learning — traditional econometric models are immune.',
      'The solution to overfitting is to use more parameters in the model to capture all market regimes.'
    ],
    correctIndex: 0,
    explanation: 'López de Prado and Bailey (2014) showed that the "multiple testing" problem is devastating in finance: a quant researcher who tests 1000 strategy variants will find many with Sharpe > 2 purely by chance. The Deflated Sharpe Ratio applies a Bonferroni-like correction: $\\text{DSR} = \\text{SR} - \\sqrt{\\frac{V[\\hat{\\text{SR}}]}{T}} \\cdot Z_{1-1/N}$. This explains why most published trading strategies fail out-of-sample.',
    realWorld: 'This work changed industry practice: top quant firms now track "researcher degrees of freedom" and require out-of-sample validation with proper multiple-testing correction. The "replication crisis" in finance echoes similar problems in psychology and medicine.',
    hint: 'Test enough strategies and one will look great by chance. Adjust your Sharpe ratio for how many strategies you tried.',
    formulaLinks: ['deflated-sharpe-ratio'],
  },
  {
    id: 32202, topic: 'marcos-lopez-de-prado', difficulty: 'sota',
    question: 'López de Prado advocates "meta-labeling" and triple-barrier methods for ML in finance. What is the triple-barrier method?',
    options: [
      'A trade labeling scheme with three exit conditions: (1) upper barrier at profit-take level $\\tau_u$, (2) lower barrier at stop-loss level $\\tau_l$, and (3) time barrier at maximum holding period $T$. The label is: $$y = \\begin{cases} +1 & \\text{if upper barrier hit first} \\\\ -1 & \\text{if lower barrier hit first} \\\\ \\text{sign}(r_T) & \\text{if time barrier hit first} \\end{cases}$$ Meta-labeling then trains a secondary ML model to predict the probability of the primary model\'s trades being profitable — outputting a position size $f \\in [0,1]$ rather than a direction.',
      'A method that uses three separate ML models (random forest, neural net, SVM) and takes a majority vote.',
      'A labeling scheme that classifies each day as "bull," "bear," or "sideways" based on 3 moving averages.',
      'A risk management framework with three VaR limits: daily, weekly, and monthly — breaching any triggers liquidation.'
    ],
    correctIndex: 0,
    explanation: 'The triple-barrier method solves a fundamental problem: fixed-horizon returns (e.g., next-day return) are noisy and don\'t reflect how traders actually operate. Real traders have profit targets and stop-losses. Meta-labeling separates the "what" (direction) from "how much" (sizing), allowing the sizing model to learn when the primary signal is reliable. This typically improves Sharpe by 30-50% vs. naive labeling.',
    realWorld: 'Triple-barrier + meta-labeling is implemented in the mlfinlab Python library and used by quant funds globally. It\'s the standard approach for applying ML to trading strategy development in López de Prado\'s "Advances in Financial Machine Learning" framework.',
    hint: 'Label trades by which barrier they hit first — profit, stop-loss, or time expiry. Then learn when to size up.',
    formulaLinks: ['triple-barrier', 'meta-labeling'],
  },
];
