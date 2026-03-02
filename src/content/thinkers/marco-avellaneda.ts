import type { Question } from '../types';

export const avellanedaQuestions: Question[] = [
  {
    id: 20910,
    topic: 'marco-avellaneda',
    difficulty: 'easy',
    question: 'Marco Avellaneda\'s research primarily bridged which two fields?',
    options: ['Pure mathematics and quantitative finance', 'Biology and chemistry', 'Computer science and linguistics', 'Philosophy and physics'],
    correctIndex: 0,
    explanation: 'Avellaneda was a mathematician who became one of the most influential quant researchers, applying PDE theory, stochastic analysis, and functional analysis to derivatives pricing and market microstructure.',
    realWorld: 'He consulted for major Wall Street firms and his papers are required reading at every quant desk.',
    hint: 'He held positions at both the Courant Institute of Mathematics and Wall Street trading firms.',
  },
  {
    id: 20911,
    topic: 'marco-avellaneda',
    difficulty: 'hard',
    question: 'In the Avellaneda-Stoikov model, when inventory $q > 0$ (net long) and time to expiry shrinks ($T - t \\to 0$), the reservation price adjustment $q \\cdot \\gamma \\sigma^2 (T-t)$:',
    options: ['Decreases toward zero, but spread widens via the $\\gamma\\sigma^2(T-t)$ term — creating urgency to flatten', 'Increases without bound', 'Stays constant', 'Reverses sign'],
    correctIndex: 0,
    explanation: 'As $T-t \\to 0$, the inventory adjustment shrinks (less time for adverse moves), BUT the spread\'s first component $\\gamma\\sigma^2(T-t)$ also shrinks while urgency to close increases. The practical effect: near expiry, the market maker must aggressively flatten or accept settlement risk.',
    realWorld: 'On Kalshi, the last 30 minutes before weather settlement see dramatic spread changes as market makers rush to flatten positions.',
    hint: 'Think about what happens when the clock is about to run out and you still hold inventory.',
  },
  {
    id: 20912,
    topic: 'marco-avellaneda',
    difficulty: 'sota',
    question: 'Avellaneda\'s work on Uncertain Volatility Models (UVM) bounds option prices by solving:',
    options: ['A nonlinear Black-Scholes PDE where $\\sigma$ is chosen adversarially from $[\\sigma_{\\min}, \\sigma_{\\max}]$ at each point', 'A standard Black-Scholes with average volatility', 'A Monte Carlo simulation with random volatility', 'A binomial tree with fixed up/down ratios'],
    correctIndex: 0,
    explanation: 'The UVM solves $\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\hat{\\sigma}^2 S^2 V_{SS} + rSV_S - rV = 0$ where $\\hat{\\sigma}$ is chosen to maximize (or minimize) the price at each $(S,t)$ point. This gives model-free bounds on option prices.',
    realWorld: 'UVM is used by risk managers to stress-test portfolios without committing to a single volatility model — a worst-case analysis.',
    hint: 'The volatility is the "adversary" choosing the worst-case scenario at every point in time and space.',
  },
];
