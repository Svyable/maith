import type { Question } from '../types';

export const kleinQuestions: Question[] = [
  {
    id: 21720,
    topic: 'klein',
    difficulty: 'sota',
    question: 'Klein\'s Erlangen program (1872) proposed classifying geometries by what mathematical structure?',
    options: [
      'The symmetry group G acting on a space X — geometry studies G-invariants',
      'The dimension of the underlying manifold',
      'The curvature tensor of the metric',
      'The number of axioms required to define the geometry'
    ],
    correctIndex: 0,
    explanation: 'Klein proposed that each geometry is defined by a group G acting on a space X, and the "geometric properties" are exactly the G-invariants. Euclidean geometry = isometry group, affine geometry = affine group, projective geometry = projective group.',
    realWorld: 'The Erlangen program unified previously separate geometries and influenced gauge theory in physics, where symmetry groups define fundamental forces.',
    hint: 'Different groups acting on the same space give different geometries.'
  },
  {
    id: 21721,
    topic: 'klein',
    difficulty: 'sota',
    question: 'The Klein bottle is a non-orientable closed surface. What is its Euler characteristic χ?',
    options: [
      'χ = 0',
      'χ = 1',
      'χ = 2',
      'χ = −1'
    ],
    correctIndex: 0,
    explanation: 'The Klein bottle K has χ(K) = 0. It can be constructed by identifying opposite edges of a square with one pair reversed. Its homology gives H₀ = ℤ, H₁ = ℤ ⊕ ℤ/2ℤ, H₂ = 0, yielding χ = 1 − 2 + 0 = 0 (over ℚ: ranks 1, 1, 0).',
    realWorld: 'Klein bottles appear in topology courses as the simplest example of a non-orientable surface without boundary — impossible to embed in 3D without self-intersection.',
    hint: 'It\'s like a torus but with a twist — and shares its Euler characteristic.'
  },
  {
    id: 21722,
    topic: 'klein',
    difficulty: 'sota',
    question: 'Klein\'s j-invariant j(τ) classifies elliptic curves up to isomorphism. What is j(i)?',
    options: [
      '1728',
      '0',
      '1',
      '∞'
    ],
    correctIndex: 0,
    explanation: 'The j-invariant j(τ) = 1728·g₂³/(g₂³ − 27g₃²) maps the moduli space of elliptic curves to ℂ. At τ = i (the square lattice), j(i) = 1728 = 12³. At τ = e^(2πi/3), j = 0.',
    realWorld: 'The j-invariant is central to the proof of Fermat\'s Last Theorem and to isogeny-based post-quantum cryptography (SIKE/SIDH).',
    hint: 'The square lattice ℤ + iℤ gives the most symmetric elliptic curve after the hexagonal one.'
  },
];
