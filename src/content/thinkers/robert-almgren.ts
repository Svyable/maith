import type { Question } from '../types';

export const robertAlmgrenQuestions: Question[] = [
  {
    id: 32110, topic: 'robert-almgren', difficulty: 'easy',
    question: 'Robert Almgren (with Neil Chriss) developed the foundational model for optimal trade execution. What does the Almgren-Chriss model optimize?',
    options: [
      'The tradeoff between market impact cost and timing risk when liquidating a large position. The trader chooses a schedule $x(t)$ to sell $X$ shares over time $[0,T]$, minimizing: $$\\mathbb{E}[\\text{Cost}] + \\lambda \\cdot \\text{Var}[\\text{Cost}]$$ where cost includes temporary impact $\\eta |\\dot{x}|$ and permanent impact $\\gamma |\\dot{x}|$, and timing risk comes from price volatility $\\sigma$ during execution.',
      'The optimal price to post a limit order to maximize fill probability while minimizing adverse selection.',
      'The optimal portfolio allocation across $N$ assets to maximize Sharpe ratio subject to turnover constraints.',
      'The optimal hedging frequency for an options portfolio to minimize discrete hedging error.'
    ],
    correctIndex: 0,
    explanation: 'The Almgren-Chriss framework (2000) showed that optimal execution is a mean-variance problem. The optimal trajectory for linear impact is: $x^*(t) = X \\cdot \\sinh(\\kappa(T-t)) / \\sinh(\\kappa T)$ where $\\kappa = \\sqrt{\\lambda \\sigma^2 / \\eta}$. Risk-neutral traders ($\\lambda = 0$) trade at constant rate (TWAP); risk-averse traders front-load execution.',
    realWorld: 'Every major broker and hedge fund uses Almgren-Chriss or its extensions. It\'s the theoretical foundation for VWAP, TWAP, and implementation shortfall algorithms used to execute billions of dollars daily.',
    hint: 'Trade too fast → high market impact. Trade too slow → price might move against you. Optimize the balance.',
    formulaLinks: ['almgren-chriss'],
  },
  {
    id: 32111, topic: 'robert-almgren', difficulty: 'hard',
    question: 'In the Almgren-Chriss model, what is the distinction between temporary and permanent market impact?',
    options: [
      'Permanent impact $g(v) = \\gamma v$ shifts the equilibrium price forever — reflecting information content of the trade. Temporary impact $h(v) = \\eta v + \\epsilon \\text{sgn}(v)$ represents transient liquidity costs (bid-ask spread, order book displacement) that decay after execution. The total execution cost is: $$C = \\sum_{k} \\left[\\gamma v_k \\cdot x_k + (\\eta v_k + \\epsilon) \\cdot v_k\\right] + \\text{volatility risk}$$',
      'Permanent impact is the bid-ask spread, which never changes. Temporary impact is slippage from market orders that recovers within microseconds.',
      'Permanent impact is the price change from news announcements. Temporary impact is the cost of crossing the spread.',
      'Both impacts are identical in magnitude but differ in sign — permanent is positive, temporary is negative.'
    ],
    correctIndex: 0,
    explanation: 'The separation of impact into permanent and temporary components is crucial. Permanent impact satisfies the "no-dynamic-arbitrage" constraint of Huberman-Stanzl: if impact were purely temporary, one could buy, wait for recovery, sell, and profit — which is impossible in equilibrium. The linear permanent impact model is the only functional form consistent with no-arbitrage.',
    realWorld: 'Understanding the permanent/temporary decomposition is essential for: (1) measuring true transaction costs, (2) designing optimal execution algorithms, (3) estimating information content of order flow (the "Kyle lambda").',
    hint: 'One component moves the price forever (information), the other bounces back (liquidity).',
    formulaLinks: ['market-impact'],
  },
  {
    id: 32112, topic: 'robert-almgren', difficulty: 'sota',
    question: 'Almgren extended optimal execution to include adaptive strategies. What changes when the trader can observe prices during execution?',
    options: [
      'The optimal strategy becomes a dynamic program: at each step, the trader updates the remaining schedule based on the realized price path. For linear-quadratic models, the optimal adaptive strategy has the form: $$v_k^* = \\alpha_k (x_k - \\hat{x}_k) + \\hat{v}_k$$ where $\\hat{x}_k, \\hat{v}_k$ is the static optimal schedule and $\\alpha_k$ is a mean-reversion coefficient. If prices have dropped (favorable), slow down; if prices have risen (unfavorable), speed up. The value function satisfies a Hamilton-Jacobi-Bellman equation.',
      'Adaptive strategies are always worse than static strategies because observing prices introduces behavioral biases.',
      'The optimal adaptive strategy is to use a stop-loss: halt execution if the price drops by more than 2 standard deviations.',
      'Adaptive execution reduces to the static Almgren-Chriss solution because price changes are unpredictable (EMH).'
    ],
    correctIndex: 0,
    explanation: 'Almgren-Lorenz (2007) and Bertsimas-Lo (1998) showed that adaptive strategies can reduce expected cost by exploiting mean-reversion in temporary impact. The key insight: if temporary impact causes a price depression, a patient trader waits for recovery before continuing. The HJB equation: $0 = \\min_v \\{(\\text{impact cost}) + \\frac{\\partial J}{\\partial t} + \\frac{\\sigma^2}{2}\\frac{\\partial^2 J}{\\partial S^2}\\}$.',
    realWorld: 'Modern execution algorithms (like Citadel Securities\', Virtu\'s, or Two Sigma\'s) are all adaptive — they adjust execution speed in real-time based on market conditions, order book state, and volatility regime.',
    hint: 'Watch the price as you trade — speed up when it moves against you, slow down when it\'s favorable.',
    formulaLinks: ['almgren-chriss', 'hjb-equation'],
  },
];
