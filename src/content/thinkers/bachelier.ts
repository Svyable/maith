import type { Question } from '../types';

export const bachelierQuestions: Question[] = [
  {
    id: 20790,
    topic: 'bachelier',
    difficulty: 'hard',
    question: 'Bachelier\'s 1900 thesis modeled stock prices as arithmetic Brownian motion: $dS = \\sigma\\,dW$. What is the main flaw of this model?',
    options: ['Prices can become negative', 'Prices grow too fast', 'Volatility is time-dependent', 'It assumes discrete trading'],
    correctIndex: 0,
    explanation: 'Arithmetic Brownian motion allows negative values because the increments are Gaussian with unbounded range. This is why geometric Brownian motion ($dS/S$) replaced it.',
    realWorld: 'Despite this flaw, Bachelier\'s insight that prices follow a random walk was revolutionary — predating Einstein\'s Brownian motion paper by 5 years.',
    hint: 'Stock prices should never go below zero, but this model doesn\'t prevent that.',
  },
  {
    id: 20791,
    topic: 'bachelier',
    difficulty: 'sota',
    question: 'Bachelier derived an option pricing formula in 1900 that anticipated Black-Scholes by 73 years. His formula assumed which risk-free rate?',
    options: ['Zero (no discounting)', 'The bank rate of France', 'A continuous compounding rate', 'The inflation rate'],
    correctIndex: 0,
    explanation: 'Bachelier\'s formula assumed zero interest rates and arithmetic Brownian motion. Black-Scholes added risk-neutral pricing and geometric Brownian motion.',
    realWorld: 'His thesis was graded merely "honorable" instead of "très honorable" — his professors thought finance was beneath pure mathematics.',
    hint: 'His model was simpler than Black-Scholes in part because he ignored time value of money.',
  },
  {
    id: 20792,
    topic: 'bachelier',
    difficulty: 'easy',
    question: 'Bachelier\'s 1900 PhD thesis "The Theory of Speculation" was the first to apply advanced mathematics to:',
    options: ['Financial markets (stock and option pricing)', 'Weather prediction', 'Population growth', 'Fluid dynamics'],
    correctIndex: 0,
    explanation: 'He modeled the Paris stock exchange using random walks and normal distributions — the birth of mathematical finance, completely ignored for 50 years.',
    realWorld: 'Paul Samuelson rediscovered his work in the 1950s, calling it "remarkably advanced for its time."',
    hint: 'He studied the Paris Bourse — the French stock exchange.',
  },
];
