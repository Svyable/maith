import type { Question } from '../types';

export const alissaCransQuestions: Question[] = [
  {
    id: 22040,
    topic: 'alissa-crans',
    difficulty: 'hard',
    question: 'Alissa Crans\'s PhD work focused on Lie 2-algebras. What is a Lie 2-algebra?',
    options: [
      'A categorified Lie algebra: a category internal to Vect with a bracket satisfying Jacobi up to coherent isomorphism',
      'A Lie algebra with two compatible brackets',
      'A $\\mathbb{Z}/2$-graded Lie algebra (i.e., a Lie superalgebra)',
      'A Lie algebra of dimension 2',
    ],
    correctIndex: 0,
    explanation: 'A Lie 2-algebra is a 2-vector space equipped with a skew-symmetric bracket functor satisfying the Jacobi identity up to a natural isomorphism (the Jacobiator), which itself satisfies a coherence law.',
    realWorld: 'Lie 2-algebras appear in string theory as the symmetry algebras of gerbes and higher gauge theories.',
    hint: 'The "2" refers to categorification — replacing equations with isomorphisms.',
  },
  {
    id: 22041,
    topic: 'alissa-crans',
    difficulty: 'sota',
    question: 'Crans showed that Lie 2-algebras are classified (up to equivalence) by which cohomological data?',
    options: [
      'A Lie algebra $\\mathfrak{g}$, a representation $V$, and a class in $H^3(\\mathfrak{g}, V)$',
      'A pair of Lie algebras and an element of $H^2(\\mathfrak{g}, \\mathfrak{h})$',
      'A crossed module and a class in $H^4(B\\mathfrak{g})$',
      'A differential graded Lie algebra truncated at degree 2',
    ],
    correctIndex: 0,
    explanation: 'The classification theorem shows that skeletal Lie 2-algebras correspond to triples $(\\mathfrak{g}, V, [\\alpha])$ where $[\\alpha] \\in H^3(\\mathfrak{g}, V)$ is the Jacobiator cohomology class.',
    realWorld: 'The string Lie 2-algebra, built from $\\mathfrak{so}(n)$ and its canonical 3-cocycle, governs anomaly cancellation in string theory.',
    hint: 'The Jacobiator is a 3-cocycle — so its cohomology class lives in degree 3.',
  },
  {
    id: 22042,
    topic: 'alissa-crans',
    difficulty: 'hard',
    question: 'In higher gauge theory, Lie 2-groups (the group version of Lie 2-algebras) describe parallel transport along which geometric objects?',
    options: [
      'Surfaces (2-dimensional paths)',
      'Curves (1-dimensional paths)',
      'Points (0-dimensional)',
      '3-manifolds',
    ],
    correctIndex: 0,
    explanation: 'Just as Lie groups describe parallel transport along paths in a principal bundle, Lie 2-groups describe parallel transport of strings (surfaces) in a principal 2-bundle — this is higher gauge theory.',
    realWorld: 'Higher gauge theory provides the mathematical framework for the B-field in string theory.',
    hint: 'Categorification raises dimension by one: paths become surfaces.',
  },
];
