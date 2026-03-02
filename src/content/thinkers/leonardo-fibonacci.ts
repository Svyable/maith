import type { Question } from '../types';

export const fibonacciQuestions: Question[] = [
  {
    id: 20760,
    topic: 'leonardo-fibonacci',
    difficulty: 'hard',
    question: 'The ratio of consecutive Fibonacci numbers $F_{n+1}/F_n$ converges to which value as $n \\to \\infty$?',
    options: ['The golden ratio $\\phi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$', '$\\pi$', '$e$', '$\\sqrt{2}$'],
    correctIndex: 0,
    explanation: 'The golden ratio emerges as the eigenvalue of the Fibonacci recurrence matrix $\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$ — connecting number theory to linear algebra.',
    realWorld: 'The golden ratio appears in phyllotaxis (leaf arrangement), ensuring maximum sunlight exposure for each leaf.',
    hint: 'This irrational number ≈ 1.618 appears throughout art, architecture, and nature.',
  },
  {
    id: 20761,
    topic: 'leonardo-fibonacci',
    difficulty: 'sota',
    question: 'Binet\'s formula gives $F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$ where $\\psi = \\frac{1-\\sqrt{5}}{2}$. Since $|\\psi| < 1$, what is the practical consequence?',
    options: ['$F_n = \\text{round}(\\phi^n / \\sqrt{5})$ — the nearest integer to a simple exponential', '$F_n$ alternates sign', '$F_n$ grows polynomially', '$F_n$ is always prime'],
    correctIndex: 0,
    explanation: 'Since $|\\psi^n/\\sqrt{5}| < 1/2$ for $n \\geq 1$, $F_n$ is simply the nearest integer to $\\phi^n/\\sqrt{5}$ — a closed-form expression for the $n$th Fibonacci number.',
    realWorld: 'This allows $O(\\log n)$ computation of Fibonacci numbers via matrix exponentiation — used in competitive programming.',
    hint: 'The $\\psi^n$ term vanishes exponentially, leaving just a function of $\\phi^n$.',
  },
  {
    id: 20762,
    topic: 'leonardo-fibonacci',
    difficulty: 'easy',
    question: 'Fibonacci introduced his famous sequence as a model for the population growth of which animal?',
    options: ['Rabbits', 'Bees', 'Sheep', 'Mice'],
    correctIndex: 0,
    explanation: 'In his 1202 "Liber Abaci," he posed the problem: how many pairs of rabbits are produced starting from one pair, if each pair breeds monthly?',
    realWorld: 'His book\'s greater contribution was introducing Hindu-Arabic numerals (0-9) to Europe, replacing cumbersome Roman numerals.',
    hint: 'A breeding puzzle involving fluffy animals.',
  },
];
