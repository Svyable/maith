import type { Question } from '../types';

export const fisherQuestions: Question[] = [
  {
    id: 21201, topic: 'ronald-fisher', difficulty: 'easy',
    question: 'Ronald Fisher\'s p-value measures:',
    options: ['The probability of observing data at least as extreme as the actual data, assuming the null hypothesis is true', 'The probability that the null hypothesis is true', 'The probability that the alternative hypothesis is true', 'The effect size of the treatment'],
    correctIndex: 0,
    explanation: 'The p-value is NOT P(H₀ is true). It is P(data this extreme | H₀ true). Fisher proposed it as a continuous measure of evidence, not a binary decision rule — the rigid α=0.05 threshold came later (Neyman-Pearson).',
    realWorld: 'The p < 0.05 threshold drives publication in medicine, psychology, and economics — contributing to the replication crisis when misunderstood as "95% probability the effect is real."',
    hint: 'If the null hypothesis were true, how surprising is this data? That\'s what the p-value quantifies.',
  },
  {
    id: 21202, topic: 'ronald-fisher', difficulty: 'hard',
    question: 'Fisher\'s maximum likelihood estimation (MLE) finds parameters by:',
    options: ['Maximizing $L(\\theta) = \\prod_i f(x_i|\\theta)$ — the probability of the observed data as a function of parameters', 'Minimizing the sum of squared residuals', 'Choosing parameters that minimize the prior', 'Averaging over all possible parameter values'],
    correctIndex: 0,
    explanation: 'MLE asks: "which parameter values make the observed data most probable?" For exponential families, MLEs are sufficient statistics. MLE is asymptotically efficient — no consistent estimator has lower variance.',
    realWorld: 'Logistic regression, hidden Markov models, and neural network training (cross-entropy loss IS negative log-likelihood) all use MLE.',
    hint: 'Flip a coin 7 heads in 10 tosses — what value of p makes this MOST likely? That\'s MLE: p̂ = 0.7.',
  },
  {
    id: 21203, topic: 'ronald-fisher', difficulty: 'sota',
    question: 'Fisher information $I(\\theta) = E\\left[\\left(\\frac{\\partial \\log f}{\\partial \\theta}\\right)^2\\right]$ bounds estimator variance via:',
    options: ['The Cramér-Rao bound: $\\text{Var}(\\hat{\\theta}) \\geq 1/I(\\theta)$ — no unbiased estimator can beat this', 'The central limit theorem', 'The law of large numbers', 'Chebyshev\'s inequality'],
    correctIndex: 0,
    explanation: 'Fisher information measures how much data tells you about the parameter. The Cramér-Rao lower bound says the best possible variance of an unbiased estimator is 1/I(θ). MLE achieves this asymptotically.',
    realWorld: 'In quantum metrology, the quantum Fisher information determines the ultimate precision limit for measurements — used to design optimal sensors and atomic clocks.',
    hint: 'More Fisher information = data is more "informative" about the parameter = tighter bounds on estimation error.',
  },
];
