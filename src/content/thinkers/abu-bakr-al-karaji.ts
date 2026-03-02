import type { Question } from '../types';

export const alKarajiQuestions: Question[] = [
  {
    id: 9613,
    topic: 'abu-bakr-al-karaji',
    difficulty: 'sota',
    question: 'Al-Karaji\'s proof of the binomial theorem used a method equivalent to:',
    options: [
      'Mathematical induction — proving the base case and the inductive step',
      'Proof by contradiction',
      'Direct geometric construction',
      'Exhaustive enumeration of cases',
    ],
    correctIndex: 0,
    explanation: 'In al-Fakhrī (c. 1000 CE), al-Karaji proved $(a+b)^n = \\sum \\binom{n}{k}a^kb^{n-k}$ by showing it holds for $n$ implies it holds for $n+1$ — the earliest known use of mathematical induction, ~700 years before Pascal.',
    realWorld: 'Mathematical induction became the foundation of all recursive proofs in mathematics and computer science — from proving algorithm correctness to verifying software.',
    hint: 'The method works by assuming a result for $n$ and deriving it for $n+1$ — what proof technique is this?',
  },
  {
    id: 9614,
    topic: 'abu-bakr-al-karaji',
    difficulty: 'sota',
    question: 'Al-Karaji\'s algebraic program aimed to "arithmetize" algebra by:',
    options: [
      'Freeing algebra from geometric justification and treating it as pure number manipulation',
      'Replacing all numbers with geometric magnitudes',
      'Inventing a new number system beyond integers',
      'Combining algebra with trigonometry',
    ],
    correctIndex: 0,
    explanation: 'Al-Karaji was the first to systematically treat algebra as arithmetic of unknowns rather than geometry — manipulating $x^n$ for arbitrary $n$ (positive and negative) as numbers, not lengths or areas.',
    realWorld: 'This "arithmetization of algebra" was a pivotal step toward modern abstract algebra, where symbols are manipulated by rules without needing physical/geometric interpretation.',
    hint: 'Greek algebra was tied to geometry (squares = areas). Al-Karaji broke this connection.',
  },
  {
    id: 9615,
    topic: 'abu-bakr-al-karaji',
    difficulty: 'sota',
    question: 'Al-Karaji proved that $\\sum_{k=1}^{n} k^3 =$:',
    options: [
      '$\\left(\\sum_{k=1}^{n} k\\right)^2 = \\left(\\frac{n(n+1)}{2}\\right)^2$',
      '$\\frac{n^2(n+1)}{2}$',
      '$n^4/4$',
      '$\\frac{n(n+1)(2n+1)}{6}$',
    ],
    correctIndex: 0,
    explanation: 'Al-Karaji proved the stunning identity $1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2$ — the sum of cubes equals the square of the sum. His proof used a form of mathematical induction.',
    realWorld: 'This identity appears in statistics (relating moments), signal processing, and was later generalized by Faulhaber and Bernoulli into formulas for arbitrary power sums.',
    hint: 'The sum of the first $n$ cubes has a beautiful relationship to the sum of the first $n$ integers.',
  },
];
