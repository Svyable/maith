import type { Question } from '../types';

export const mishaBialyQuestions: Question[] = [
  {
    id: 307025,
    topic: 'misha-bialy',
    difficulty: 'easy',
    question: 'Misha Bialy’s open-problem work here is centered around what theme?',
    options: [
      'Total integrability in billiards and related variational systems',
      'Prime number distribution',
      'Black hole thermodynamics',
      'Neural network pruning'
    ],
    correctIndex: 0,
    explanation: 'Bialy’s problems ask whether certain billiard and variational systems admit new totally integrable examples.',
    realWorld: 'These questions sit at the crossroads of billiards, Hamiltonian dynamics, KAM theory, and rigidity.',
    hint: 'Think invariant graphs and action-minimizing dynamics.',
    symbolLinks: { 'V': 'nu', 'p': 'pi', 'α': 'alpha' },
    formulaLinks: ['magnetic-billiard-larmor-radius', 'minkowski-billiard-generating-function', 'newton-periodic-potential-lagrangian'],
    glossaryLinks: ['total-integrability', 'magnetic-billiard', 'minkowski-billiard'],
  },
  {
    id: 307026,
    topic: 'misha-bialy',
    difficulty: 'hard',
    question: 'In Bialy’s strong-field magnetic billiard problem, what is conjectured to be the only totally integrable example?',
    options: [
      'The circular billiard',
      'The stadium billiard',
      'Any ellipse',
      'Any polygon with rational angles'
    ],
    correctIndex: 0,
    explanation: 'The open question asks whether a circular billiard is the only totally integrable magnetic billiard in a strong constant magnetic field.',
    realWorld: 'This is a rigidity question: whether symmetry is forced by total integrability.',
    hint: 'The known example is maximally symmetric.',
    symbolLinks: { 'B': 'beta' },
    formulaLinks: ['magnetic-billiard-larmor-radius'],
    glossaryLinks: ['magnetic-billiard', 'larmor-circle', 'total-integrability'],
  },
  {
    id: 307027,
    topic: 'misha-bialy',
    difficulty: 'sota',
    question: 'Why are Bialy’s questions mathematically difficult?',
    options: [
      'Because total integrability is extremely rigid, and proving uniqueness or new examples requires combining variational, geometric, and dynamical methods',
      'Because no equations are known for the systems',
      'Because the systems are purely numerical and not analytic',
      'Because invariant tori are easy to classify in all cases'
    ],
    correctIndex: 0,
    explanation: 'These problems involve rigidity of invariant graphs, action-minimizing orbits, Aubry-Mather/KAM style methods, and nontrivial billiard geometry.',
    realWorld: 'They connect billiards, PDEs, twist maps, Finsler geometry, and Hamiltonian mechanics.',
    hint: 'The keyword is rigidity.',
    symbolLinks: { 'α': 'alpha', 'Δ': 'delta' },
    formulaLinks: ['minkowski-billiard-generating-function', 'periodic-elliptic-pde', 'newton-periodic-potential-lagrangian'],
    glossaryLinks: ['aubry-mather-theory', 'invariant-torus', 'rotation-vector'],
  },
];
