import type { Question } from '../types';

export const gregoryQuestions: Question[] = [
  {
    id: 11021,
    topic: 'gregory',
    difficulty: 'easy',
    question: 'The Gregory–Leibniz series $\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$ is:',
    options: [
      'The Taylor series of $\\arctan(x)$ evaluated at $x = 1$',
      'The Fourier series of $\\cos(x)$ at $x = 0$',
      'The Maclaurin series of $\\ln(1+x)$ at $x = 1$',
      'The binomial expansion of $(1+x)^{1/2}$ at $x = 1$',
    ],
    correctIndex: 0,
    explanation: 'Since $\\arctan(x) = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$ for $|x| \\leq 1$, setting $x = 1$ gives $\\arctan(1) = \\pi/4 = 1 - 1/3 + 1/5 - \\cdots$. Gregory discovered this series in 1671, independently of Leibniz.',
    realWorld: 'While beautiful, the series converges painfully slowly — you need about 500,000 terms for 5 decimal places of $\\pi$. Machin\'s formula uses arctangent identities to converge much faster.',
    hint: 'What function equals $\\pi/4$ when its input is 1? That function has a well-known power series.',
  },
  {
    id: 11022,
    topic: 'gregory',
    difficulty: 'hard',
    question: 'Why is the Gregory–Leibniz series for $\\pi$ considered extremely slowly convergent?',
    options: [
      'The error after $n$ terms is $O(1/n)$ — it\'s a conditionally convergent alternating series with terms decreasing only as $1/(2n+1)$',
      'The partial sums oscillate with increasing amplitude, never settling',
      'The series requires irrational arithmetic at each step',
      'The convergence rate depends on the Riemann Hypothesis being true',
    ],
    correctIndex: 0,
    explanation: 'By the alternating series error bound, $|S - S_n| < a_{n+1} = \\frac{1}{2n+3}$. For 10 correct digits, you need roughly $5 \\times 10^{10}$ terms. Compare: Ramanujan\'s series gives ~8 digits per term, Chudnovsky gives ~14.',
    realWorld: 'This slowness motivated centuries of work on faster $\\pi$ algorithms: Machin (1706) used $\\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}$ where each arctangent series converges rapidly since $x \\ll 1$.',
    hint: 'The terms $1/(2n+1)$ shrink only linearly — you need astronomical numbers of terms for precision.',
  },
  {
    id: 11023,
    topic: 'gregory',
    difficulty: 'sota',
    question: 'Gregory also discovered the reflection formula for the polygamma function and anticipated the integral test for series convergence. His most advanced anticipation was:',
    options: [
      'The Taylor series for $\\arctan$, $\\tan$, and $\\sec$ — essentially discovering Taylor\'s theorem before Taylor, including the error term',
      'The fundamental theorem of calculus independently of Newton and Leibniz',
      'The convergence of $\\sum 1/n^2$ to $\\pi^2/6$ decades before Euler',
      'The method of partial fractions for integrating rational functions',
    ],
    correctIndex: 0,
    explanation: 'Gregory\'s 1671 letter to Collins contained the series for $\\arctan$, $\\tan$, $\\sec$, $\\ln\\sec$, and more — all instances of what Taylor would publish in 1715. Gregory died young (36) and much of his work remained unpublished, so Taylor gets the credit.',
    realWorld: 'Priority disputes in mathematics show how independent discovery is common. Newton, Leibniz, Gregory, and the Kerala school all developed aspects of calculus somewhat independently.',
    hint: 'He had Taylor series 44 years before Taylor — but died before publishing them systematically.',
  },
];
