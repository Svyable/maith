import type { Question } from '../types';

export const takebeQuestions: Question[] = [
  {
    id: 9616,
    topic: 'takebe-katahiro',
    difficulty: 'sota',
    question: 'Takebe Katahiro\'s series expansion for $\\arcsin^2(x)$ was remarkable because:',
    options: [
      'He derived the series coefficients numerically by computing 1,000+ digit approximations and recognizing patterns',
      'He used the formal Taylor expansion method',
      'He obtained it from European sources via Dutch traders',
      'He guessed the formula and verified it for a few values',
    ],
    correctIndex: 0,
    explanation: 'Takebe computed $\\pi$ and related quantities to extraordinary precision (41 digits), then reverse-engineered the pattern of series coefficients from numerical data — a computational tour de force without formal calculus machinery.',
    realWorld: 'This "experimental mathematics" approach — discovering formulas from numerical computation — anticipates modern computer-assisted discovery like the PSLQ algorithm used to find new mathematical identities.',
    hint: 'Without formal calculus, Takebe used sheer computational power to discover series by pattern recognition.',
  },
  {
    id: 9617,
    topic: 'takebe-katahiro',
    difficulty: 'sota',
    question: 'Takebe\'s method for computing $\\pi$ to 41 decimal places used:',
    options: [
      'Accelerated convergence of Seki\'s polygon-based series using Richardson-like extrapolation',
      'The Leibniz series $\\pi/4 = 1 - 1/3 + 1/5 - \\cdots$ directly',
      'Monte Carlo random sampling',
      'Archimedes\' 96-gon method without refinement',
    ],
    correctIndex: 0,
    explanation: 'Takebe didn\'t just inscribe polygons — he systematically accelerated the convergence by studying how the approximations approached $\\pi$, deriving correction terms analogous to Richardson extrapolation, independently achieving what Europeans wouldn\'t formalize for centuries.',
    realWorld: 'Series acceleration techniques are essential in modern scientific computing — from quantum chemistry calculations to numerical solutions of PDEs where naive series converge too slowly.',
    hint: 'Raw polygon methods converge slowly; Takebe found a way to speed up convergence dramatically.',
  },
  {
    id: 9618,
    topic: 'takebe-katahiro',
    difficulty: 'sota',
    question: 'The Wasan (和算) mathematical tradition that Takebe belonged to developed independently because:',
    options: [
      'Japan\'s Sakoku isolationist policy (1639–1853) cut off European mathematical exchange',
      'Japanese mathematicians rejected European methods as inferior',
      'European mathematics had not yet surpassed Japanese mathematics',
      'Translation of European texts was forbidden by mathematicians\' guilds',
    ],
    correctIndex: 0,
    explanation: 'The Tokugawa shogunate\'s 200+ year isolation policy meant Japanese mathematicians like Seki and Takebe developed calculus-like methods, determinants, and series independently — a parallel mathematical evolution.',
    realWorld: 'Wasan demonstrates that mathematical ideas are universal — the same structures (series, determinants, calculus) emerge independently across cultures when intellectual inquiry is supported.',
    hint: 'Japan was deliberately isolated from the outside world for over two centuries during the Edo period.',
  },
];
