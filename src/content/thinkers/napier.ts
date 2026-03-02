// napier.ts
import type { Question } from '../types';

export const napierQuestions: Question[] = [
  {
    id: 67045,
    topic: 'napier',
    difficulty: 'easy',
    question:
      'John Napier is best known for introducing logarithms to turn hard operations into easy ones. Which identity captures the core idea?',
    options: [
      '$\\log(ab)=\\log a + \\log b$ and $\\log(a^k)=k\\log a$',
      '$\\log(a+b)=\\log a + \\log b$',
      '$\\log(ab)=\\log a\\,\\log b$',
      '$\\log a = a^2$'
    ],
    correctIndex: 0,
    explanation:
      'Logs convert multiplication into addition and exponentiation into multiplication, enabling fast computation with tables.',
    realWorld:
      'This is the mathematical basis of slide rules and pre-computer scientific calculation.',
    hint: 'Multiplication → addition.'
  },
  {
    id: 67046,
    topic: 'napier',
    difficulty: 'hard',
    question:
      'If $\\log_{10}(x)=3.7$, what is $x$ in exponential form, and what does the integer part “3” mean?',
    options: [
      '$x=10^{3.7}$, and “3” means $x$ is between $10^3$ and $10^4$',
      '$x=3.7^{10}$, and “3” counts digits of $x$ exactly',
      '$x=e^{3.7}$, and “3” means $x$ is between $e^3$ and $e^4$',
      '$x=10^{0.37}$, and “3” is a rounding artifact'
    ],
    correctIndex: 0,
    explanation:
      'Base-10 logs invert powers of ten: $x=10^{3.7}$. The characteristic 3 indicates the order of magnitude (thousands range).',
    realWorld:
      'Engineers still reason in “orders of magnitude” using base-10 logs (dB, pH, Richter-style scales).',
    hint: 'Log base 10 tells you the power of ten.'
  },
  {
    id: 67047,
    topic: 'napier',
    difficulty: 'hard',
    question:
      'Napier’s work connected closely to spherical trigonometry (astronomy/navigation). Which relationship is a classic spherical-trig analogue (for a spherical triangle with side $c$ opposite angle $C$)?',
    options: [
      '$\\cos c=\\cos a\\cos b+\\sin a\\sin b\\cos C$ (spherical law of cosines)',
      '$c^2=a^2+b^2-2ab\\cos C$ (planar law of cosines only)',
      '$\\cos c=\\cos(a+b)$ for all triangles',
      '$\\sin c = \\sin a + \\sin b$'
    ],
    correctIndex: 0,
    explanation:
      'On a sphere, triangle relationships use sines/cosines of arc lengths; the spherical law of cosines is fundamental for celestial navigation.',
    realWorld:
      'Used for great-circle distances (aviation routes) and astronomical calculations.',
    hint: 'Great-circle triangles use trig of arc lengths.'
  },
  {
    id: 67048,
    topic: 'napier',
    difficulty: 'sota',
    question:
      'Napier’s “bones” were a mechanical aid for multiplication. What computation principle do they exploit?',
    options: [
      'Place-value decomposition: multiplying by a digit uses pre-tabulated partial products and diagonal summation (a structured long-multiplication shortcut)',
      'Binary exponentiation using bit shifts',
      'Newton’s method root finding',
      'Gaussian elimination'
    ],
    correctIndex: 0,
    explanation:
      'Napier’s rods encode digit-wise products so multiplication becomes table lookup plus additions with carries.',
    realWorld:
      'An early example of “hardware acceleration” for arithmetic, analogous in spirit to lookup tables and fixed-function units.',
    hint: 'It’s long multiplication turned into a lookup-and-add routine.'
  },
  {
    id: 67049,
    topic: 'napier',
    difficulty: 'sota',
    question:
      'Logarithms make exponentials linear. If $y=Ae^{kt}$, which transformation turns this into a straight line in $t$ (assuming $A>0$)?',
    options: [
      'Take natural logs: $\\ln y = \\ln A + kt$',
      'Square it: $y^2=A^2e^{2kt}$',
      'Differentiate twice: $y\'\'=k^2y$',
      'Invert it: $1/y = e^{-kt}/A$'
    ],
    correctIndex: 0,
    explanation:
      'Taking $\\ln$ produces a linear relation in $t$ with slope $k$, a core reason logs are used in growth/decay fitting.',
    realWorld:
      'Used in regression for exponential growth/decay, half-life estimation, and log-linear models in economics/biology.',
    hint: 'Logs turn exponentials into lines.'
  }
];