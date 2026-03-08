import type { Question } from '../types';

export const johannaBimmermannQuestions: Question[] = [
  {
    id: 307028,
    topic: 'johanna-bimmermann',
    difficulty: 'easy',
    question: 'Johanna Bimmermann’s problem in this document focuses on which symplectic invariant?',
    options: [
      'The Hofer-Zehnder capacity',
      'The Euler characteristic',
      'The Jones polynomial',
      'The Maslov index only'
    ],
    correctIndex: 0,
    explanation: 'Her contribution studies whether the Hofer-Zehnder capacity of the unit disk cotangent bundle of a closed orientable hyperbolic surface is finite.',
    realWorld: 'This question is tied to periodic orbits, Hamiltonian dynamics, and the Weinstein conjecture.',
    hint: 'It measures how much Hamiltonians can oscillate before fast periodic orbits appear.',
    symbolLinks: {},
    formulaLinks: ['hofer-zehnder-capacity', 'relative-hofer-zehnder-capacity'],
    glossaryLinks: ['hofer-zehnder-capacity', 'cotangent-bundle', 'weinstein-conjecture'],
  },
  {
    id: 307029,
    topic: 'johanna-bimmermann',
    difficulty: 'hard',
    question: 'What is the core open question Bimmermann asks for a closed orientable hyperbolic surface N?',
    options: [
      'Whether c_HZ(D^*N, dλ) is finite',
      'Whether every geodesic is periodic',
      'Whether D^*N is symplectomorphic to C^2',
      'Whether hyperbolic surfaces admit no billiards'
    ],
    correctIndex: 0,
    explanation: 'The problem asks whether the Hofer-Zehnder capacity of the unit disk cotangent bundle of a closed orientable hyperbolic surface is finite.',
    realWorld: 'A positive answer would strengthen our understanding of periodic orbit existence in cotangent bundles.',
    hint: 'It is a finiteness question for a capacity.',
    symbolLinks: {},
    formulaLinks: ['hofer-zehnder-capacity', 'fiber-scaling-symplectomorphism'],
    glossaryLinks: ['hofer-zehnder-capacity', 'hyperbolic-surface', 'disk-cotangent-bundle'],
  },
  {
    id: 307030,
    topic: 'johanna-bimmermann',
    difficulty: 'sota',
    question: 'Why is Bimmermann’s question subtle for hyperbolic surfaces?',
    options: [
      'Because many standard tools for proving capacity finiteness, such as pseudoholomorphic-curve or symplectic-homology strategies, do not straightforwardly apply',
      'Because cotangent bundles of surfaces are not symplectic',
      'Because hyperbolic surfaces have no geodesics',
      'Because capacities are defined only in dimension two'
    ],
    correctIndex: 0,
    explanation: 'Her discussion explains that several known routes to finiteness fail or become ineffective in the hyperbolic-surface case, making it a particularly delicate test problem.',
    realWorld: 'It is a benchmark question in quantitative symplectic geometry and Hamiltonian dynamics.',
    hint: 'The difficulty is methodological, not definitional.',
    symbolLinks: {},
    formulaLinks: ['hofer-zehnder-capacity', 'pi1-sensitive-hofer-zehnder-capacity', 'hyperbolic-billiard-lower-bound'],
    glossaryLinks: ['symplectic-homology', 'pseudoholomorphic-curve', 'pi1-sensitive-capacity'],
  },
];
