import type { Question } from '../types';

export const ruthLawrenceQuestions: Question[] = [
  {
    id: 22030,
    topic: 'ruth-lawrence',
    difficulty: 'hard',
    question: 'Ruth Lawrence\'s PhD work at Oxford (completed at age 17) contributed to which area of topology?',
    options: [
      'Representations of braid groups and knot invariants',
      'Homotopy groups of spheres',
      'Surgery theory on 4-manifolds',
      'Persistent homology',
    ],
    correctIndex: 0,
    explanation: 'Lawrence constructed homological representations of braid groups, now called Lawrence representations, which became foundational for understanding quantum knot invariants.',
    realWorld: 'Braid group representations underpin topological quantum computing proposals using anyons.',
    hint: 'Her representations connect algebra to the topology of knots.',
  },
  {
    id: 22031,
    topic: 'ruth-lawrence',
    difficulty: 'sota',
    question: 'The Lawrence–Krammer representation proved that braid groups are what type of group?',
    options: [
      'Linear (faithful matrix representation)',
      'Hyperbolic',
      'Amenable',
      'Residually finite',
    ],
    correctIndex: 0,
    explanation: 'Bigelow and Krammer independently proved the Lawrence–Krammer representation is faithful, establishing that braid groups $B_n$ are linear — a major open question resolved using Lawrence\'s construction.',
    realWorld: 'Linearity of braid groups enables efficient algorithms for the word problem in braid-based cryptography.',
    hint: 'Faithful means injective — every distinct braid maps to a distinct matrix.',
  },
  {
    id: 22032,
    topic: 'ruth-lawrence',
    difficulty: 'sota',
    question: 'Lawrence\'s work connects to the Witten–Reshetikhin–Turaev (WRT) invariants. These 3-manifold invariants arise from which algebraic structure?',
    options: [
      'Quantum groups $U_q(\\mathfrak{sl}_2)$ at roots of unity',
      'Vertex operator algebras',
      'Hopf algebras over finite fields',
      'Kac–Moody algebras at critical level',
    ],
    correctIndex: 0,
    explanation: 'WRT invariants are constructed from the representation theory of quantum groups at roots of unity, providing a rigorous mathematical framework for Witten\'s Chern–Simons path integral.',
    realWorld: 'These invariants distinguish 3-manifolds that classical invariants cannot, with applications in quantum gravity.',
    hint: 'Witten\'s original construction used Chern–Simons gauge theory with gauge group SU(2).',
  },
];
