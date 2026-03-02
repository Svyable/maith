import type { Question } from '../types';

export const nielsHenrikAbelQuestions: Question[] = [
  {
    id: 12501,
    topic: 'niels-henrik-abel',
    difficulty: 'easy',
    question: 'Niels Henrik Abel proved at age 19 that something mathematicians had sought for centuries was impossible. What was it?',
    options: [
      'A general algebraic formula for solving polynomial equations of degree 5 or higher',
      'Squaring the circle with compass and straightedge',
      'A proof that π is irrational',
      'Finding all prime numbers with a single formula',
    ],
    correctIndex: 0,
    explanation: 'The Abel–Ruffini theorem (1824) proved that no formula using only +, −, ×, ÷, and radicals can solve a general quintic. This was a profound impossibility result that shifted mathematics from "solve it" to "understand why you can\'t."',
    realWorld: 'The Abel Prize (worth ~$700K) is named after him — it\'s considered the "Nobel Prize of mathematics." Understanding unsolvability led directly to Galois theory and modern algebra.',
    hint: 'We have formulas for degree 2 (quadratic), 3 (cubic), and 4 (quartic). He showed 5 was the wall.',
  },
  {
    id: 12502,
    topic: 'niels-henrik-abel',
    difficulty: 'hard',
    question: 'Abel also made foundational contributions to analysis. An "abelian group" is named after him because:',
    options: [
      'He studied groups where the operation is commutative (ab = ba), which arise naturally from his work on polynomial equations',
      'He classified all finite groups by their order and subgroup structure',
      'He proved that all infinite groups are isomorphic to the integers',
      'He invented the concept of a group homomorphism',
    ],
    correctIndex: 0,
    explanation: 'Abelian (commutative) groups are fundamental in mathematics: integers under addition, nonzero rationals under multiplication, and cyclic groups are all abelian. Abel\'s work on equations naturally led to studying when symmetry groups commute.',
    realWorld: 'Abelian groups underpin digital signal processing (FFT uses cyclic groups), cryptography (elliptic curve groups), and error-correcting codes (used in QR codes and satellite links).',
    hint: 'The key property is commutativity: the order of operations doesn\'t matter.',
  },
  {
    id: 12503,
    topic: 'niels-henrik-abel',
    difficulty: 'sota',
    question: 'Abel\'s work on elliptic functions and abelian integrals laid groundwork for modern algebraic geometry. The modern "Abel-Jacobi map" connects:',
    options: [
      'Divisors on an algebraic curve to points on its Jacobian variety — bridging algebra and geometry',
      'Real-valued functions to their Fourier transforms',
      'Polynomial roots to eigenvalues of companion matrices',
      'Topological spaces to their fundamental groups',
    ],
    correctIndex: 0,
    explanation: 'The Abel-Jacobi map sends a divisor (formal sum of points on a curve) to a point in the Jacobian (a complex torus). This transforms discrete algebraic data into continuous geometric objects — a cornerstone of modern algebraic geometry.',
    realWorld: 'Jacobian varieties are central to modern cryptography (hyperelliptic curve cryptosystems), string theory (Calabi-Yau moduli spaces), and the proof of Fermat\'s Last Theorem.',
    hint: 'It maps algebraic data (divisors) to geometric objects (tori).',
  },
];
