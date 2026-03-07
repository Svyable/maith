import type { Question } from '../types';

export const luigiBianchiQuestions: Question[] = [
  {
    id: 307022,
    topic: 'luigi-bianchi',
    difficulty: 'easy',
    question: 'Luigi Bianchi is most famous in geometry and relativity for identities involving what object?',
    options: [
      'The Riemann curvature tensor',
      'The Fourier transform',
      'The Laplace operator',
      'The Dirac spinor'
    ],
    correctIndex: 0,
    explanation: 'Bianchi is best known for the Bianchi identities, which constrain the Riemann curvature tensor and play a central role in differential geometry and general relativity.',
    realWorld: 'These identities help guarantee conservation laws in Einstein’s theory of gravity.',
    hint: 'Think curvature in geometry and relativity.',
    symbolLinks: { 'R': 'rho' },
    formulaLinks: ['bianchi-identity', 'contracted-bianchi-identity'],
    glossaryLinks: ['bianchi-identity', 'riemann-curvature-tensor', 'einstein-tensor'],
  },
  {
    id: 307023,
    topic: 'luigi-bianchi',
    difficulty: 'hard',
    question: 'Why are the contracted Bianchi identities so important in general relativity?',
    options: [
      'They imply the covariant conservation of the Einstein tensor',
      'They prove spacetime is always flat',
      'They eliminate the need for a metric',
      'They show gravity is a quantum force'
    ],
    correctIndex: 0,
    explanation: 'The contracted Bianchi identities imply that the covariant divergence of the Einstein tensor vanishes, matching the local conservation of energy-momentum.',
    realWorld: 'This is one reason Einstein’s field equations are mathematically consistent with conservation laws.',
    hint: 'Think conservation built into geometry.',
    symbolLinks: { 'G': 'gamma' },
    formulaLinks: ['contracted-bianchi-identity', 'einstein-field-equations'],
    glossaryLinks: ['contracted-bianchi-identity', 'einstein-tensor', 'general-relativity'],
  },
  {
    id: 307024,
    topic: 'luigi-bianchi',
    difficulty: 'sota',
    question: 'Why does Luigi Bianchi remain relevant in modern mathematical physics?',
    options: [
      'Because curvature identities and Bianchi-type classifications still structure relativity, cosmology, and geometric analysis',
      'Because he replaced tensor calculus with elementary algebra',
      'Because he proved all manifolds are Euclidean',
      'Because he removed symmetry from geometry'
    ],
    correctIndex: 0,
    explanation: 'Bianchi’s work continues to matter through curvature identities, homogeneous-space classifications, and the geometric structure of spacetime models.',
    realWorld: 'Bianchi cosmologies are still used in relativistic cosmology and symmetry-based spacetime analysis.',
    hint: 'Think geometry, symmetry, and spacetime.',
    symbolLinks: {},
    formulaLinks: ['bianchi-identity', 'contracted-bianchi-identity', 'bianchi-cosmology-metric'],
    glossaryLinks: ['bianchi-identity', 'bianchi-cosmology', 'homogeneous-space'],
  },
];
