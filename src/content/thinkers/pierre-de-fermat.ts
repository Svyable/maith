import type { Question } from '../types';

export const fermatQuestions: Question[] = [
  {
    id: 10111,
    topic: 'pierre-de-fermat',
    difficulty: 'easy',
    question: 'Fermat\'s Little Theorem states that if $p$ is prime and $\\gcd(a,p)=1$:',
    options: [
      '$a^{p-1} \\equiv 1 \\pmod{p}$',
      '$a^p \\equiv a^2 \\pmod{p}$',
      '$a^{p+1} \\equiv 0 \\pmod{p}$',
      '$a^p \\equiv p \\pmod{a}$',
    ],
    correctIndex: 0,
    explanation: 'Fermat\'s Little Theorem is fundamental in number theory. It says that raising any integer not divisible by $p$ to the power $p-1$ gives remainder 1 when divided by $p$.',
    realWorld: 'RSA encryption relies on Fermat\'s Little Theorem for modular exponentiation — it\'s the backbone of internet security.',
    hint: 'For prime $p$, powers of $a$ cycle with period dividing $p-1$.',
  },
  {
    id: 10112,
    topic: 'pierre-de-fermat',
    difficulty: 'hard',
    question: 'Fermat\'s Last Theorem states that $x^n + y^n = z^n$ has no positive integer solutions for:',
    options: [
      '$n > 2$, proved by Andrew Wiles in 1995 using modularity of elliptic curves',
      '$n > 1$, proved by Euler in 1770',
      '$n = 2$, as a consequence of the irrationality of $\\sqrt{2}$',
      '$n > 3$, proved by Gauss using quadratic reciprocity',
    ],
    correctIndex: 0,
    explanation: 'Fermat claimed a proof in 1637 ("the margin is too narrow"). Wiles proved it 358 years later by showing semistable elliptic curves are modular, connecting number theory to algebraic geometry in a profound way.',
    realWorld: 'The proof spawned entirely new areas of mathematics, including the Langlands program connecting number theory, geometry, and representation theory.',
    hint: 'The proof waited 358 years and required 20th-century mathematics Fermat never had.',
  },
  {
    id: 10113,
    topic: 'pierre-de-fermat',
    difficulty: 'sota',
    question: 'The Taniyama-Shimura-Weil conjecture (now theorem), key to proving Fermat\'s Last Theorem, states:',
    options: [
      'Every rational elliptic curve is modular — it corresponds to a modular form',
      'Every prime can be written as a sum of two squares',
      'The Riemann zeta function has all non-trivial zeros on the critical line',
      'Every algebraic number field has a finite class number',
    ],
    correctIndex: 0,
    explanation: 'The modularity theorem connects two seemingly unrelated areas: elliptic curves (algebraic geometry) and modular forms (complex analysis). Wiles proved the semistable case; the full theorem was proved by Breuil, Conrad, Diamond, and Taylor in 2001.',
    realWorld: 'This is a cornerstone of the Langlands program — one of the deepest unifying frameworks in modern mathematics.',
    hint: 'It bridges elliptic curves and modular forms — two different mathematical worlds.',
  },
];
