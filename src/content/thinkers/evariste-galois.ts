import type { Question } from '../types';

export const galoisQuestions: Question[] = [
  {
    id: 12301,
    topic: 'evariste-galois',
    difficulty: 'easy',
    question: 'Évariste Galois died at 20 in a duel but left behind a revolutionary mathematical framework. What did Galois theory ultimately prove?',
    options: [
      'There is no general formula (using radicals) for solving polynomial equations of degree 5 or higher',
      'Every polynomial has at least one complex root',
      'The real numbers are uncountable',
      'Parallel lines never meet in Euclidean geometry',
    ],
    correctIndex: 0,
    explanation: 'Galois connected the solvability of polynomials to the structure of their symmetry groups. If the Galois group is "solvable" (built from abelian layers), a radical formula exists. For degree ≥5, the symmetric group S₅ is not solvable.',
    realWorld: 'Galois theory underpins modern cryptography (finite field arithmetic in AES/RSA), error-correcting codes, and the classification of crystal symmetries in materials science.',
    hint: 'The key insight was connecting polynomial roots to group symmetries.',
  },
  {
    id: 12302,
    topic: 'evariste-galois',
    difficulty: 'hard',
    question: 'A Galois group of a polynomial captures symmetries among its roots. For the polynomial x⁴ - 2 over ℚ, the Galois group is:',
    options: [
      'The dihedral group D₄ of order 8 — it includes rotations and reflections of the four roots',
      'The cyclic group Z₄ of order 4',
      'The symmetric group S₄ of order 24',
      'The Klein four-group V₄ of order 4',
    ],
    correctIndex: 0,
    explanation: 'The roots are ⁴√2, -⁴√2, i·⁴√2, -i·⁴√2. The splitting field is ℚ(⁴√2, i) with degree 8 over ℚ. The Galois group permutes roots respecting field structure, yielding D₄ — the symmetries of a square.',
    realWorld: 'Understanding Galois groups of polynomials is essential in algebraic number theory, which underlies elliptic curve cryptography used in Bitcoin and secure communications.',
    hint: 'Count the degree of the splitting field extension — that gives you the group order.',
  },
  {
    id: 12303,
    topic: 'evariste-galois',
    difficulty: 'sota',
    question: 'The Inverse Galois Problem asks whether every finite group appears as a Galois group over ℚ. As of 2025, the status is:',
    options: [
      'Open in general — proven for solvable groups, symmetric groups, and many sporadic groups, but not all finite groups',
      'Fully solved by Shafarevich in 1954 for all finite groups',
      'Disproved — the Monster group cannot be a Galois group over ℚ',
      'Equivalent to the Riemann Hypothesis and therefore undecidable',
    ],
    correctIndex: 0,
    explanation: 'Shafarevich proved all solvable groups are Galois groups over ℚ. Hilbert showed Sₙ works. Many sporadic simple groups (including the Monster) have been realized. But a complete proof for all finite groups remains open.',
    realWorld: 'The Inverse Galois Problem connects to the Langlands program, which unifies number theory, geometry, and representation theory — one of the deepest research programs in modern mathematics.',
    hint: 'Solvable groups are handled, but "all finite groups" is the hard part.',
  },
];
