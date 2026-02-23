import type { Question } from '../types';

export const qinJiushaoQuestions: Question[] = [
  {
    id: 9604,
    topic: 'qin-jiushao',
    difficulty: 'sota',
    question: 'Qin Jiushao\'s method for solving polynomial equations $p(x) = 0$ is equivalent to:',
    options: [
      'Horner\'s method — nested evaluation reducing multiplications from $O(n^2)$ to $O(n)$',
      'Newton\'s method with quadratic convergence',
      'Bisection method with linear convergence',
      'Cardano\'s formula for cubics',
    ],
    correctIndex: 0,
    explanation: 'Qin\'s "Ling Long Kai Fang" rewrites $a_nx^n + \\cdots + a_0$ as $a_0 + x(a_1 + x(a_2 + \\cdots))$, evaluating with $n$ multiplications instead of $n(n+1)/2$ — identical to Horner\'s scheme, 600 years earlier.',
    realWorld: 'Horner\'s method remains the standard for polynomial evaluation in computer algebra systems, floating-point arithmetic, and digital signal processing.',
    hint: 'The key insight is nesting: rewrite the polynomial so each step is one multiply and one add.',
  },
  {
    id: 9605,
    topic: 'qin-jiushao',
    difficulty: 'sota',
    question: 'Qin Jiushao\'s generalization of the Chinese Remainder Theorem (大衍求一术) solves systems of congruences even when moduli are:',
    options: [
      'Not pairwise coprime — by factoring and reconciling shared prime factors',
      'Only powers of 2',
      'All prime numbers',
      'Equal to each other',
    ],
    correctIndex: 0,
    explanation: 'While the classical CRT requires pairwise coprime moduli, Qin\'s 1247 algorithm handles non-coprime cases by decomposing moduli into prime powers and checking consistency — a major generalization.',
    realWorld: 'The CRT is foundational in RSA cryptography, fast Fourier transforms, and distributed computing — anywhere large computations split across coprime modular channels.',
    hint: 'The standard CRT fails when moduli share common factors — Qin handled this edge case centuries early.',
  },
  {
    id: 9606,
    topic: 'qin-jiushao',
    difficulty: 'sota',
    question: 'In Shùshū Jiǔzhāng (1247), Qin Jiushao used zero (0) as a placeholder. His notation system was based on:',
    options: [
      'Rod numerals with a circle symbol for zero in decimal place-value notation',
      'Roman numeral extensions',
      'Binary counting systems',
      'Alphabetic number encoding',
    ],
    correctIndex: 0,
    explanation: 'Chinese rod numerals already had a place-value system; Qin formalized the circle (○) as zero, creating a complete decimal positional notation independent of Indian developments.',
    realWorld: 'This independent invention of zero confirms that place-value notation with zero is a natural mathematical necessity, not a cultural accident — it was discovered independently at least three times.',
    hint: 'Chinese mathematics used physical counting rods arranged in columns — what symbol fills an empty column?',
  },
];
