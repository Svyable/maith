import type { Question } from '../types';

export const uhlenbeckQuestions: Question[] = [
  {
    id: 20121, topic: 'uhlenbeck', difficulty: 'easy',
    question: 'Karen Uhlenbeck was the first woman to win which prestigious mathematics prize?',
    options: ['Abel Prize', 'Fields Medal', 'Wolf Prize', 'Breakthrough Prize'],
    correctIndex: 0,
    explanation: 'In 2019, Karen Uhlenbeck became the first woman to win the Abel Prize for her work in geometric analysis and gauge theory.',
    realWorld: 'The Abel Prize, often called the "Nobel of mathematics," carries a ~$700,000 award and lifetime recognition.',
    hint: 'This Norwegian prize is often considered the mathematical equivalent of the Nobel.',
  },
  {
    id: 20122, topic: 'uhlenbeck', difficulty: 'hard',
    question: 'Uhlenbeck\'s gauge theory work was foundational for which mathematical breakthrough?',
    options: ['Donaldson\'s exotic 4-manifold theory', 'Perelman\'s Poincaré proof', 'Wiles\' Fermat proof', 'Freedman\'s topological 4-manifolds'],
    correctIndex: 0,
    explanation: 'Uhlenbeck\'s regularity results for Yang-Mills connections were crucial for Donaldson\'s revolutionary work on 4-dimensional manifold topology.',
    realWorld: 'Gauge theory connects pure mathematics to fundamental physics — the same equations describe particle interactions and geometric invariants.',
    hint: 'This mathematician used Yang-Mills theory to discover exotic smooth structures on 4-manifolds.',
  },
  {
    id: 20123, topic: 'uhlenbeck', difficulty: 'sota',
    question: 'Uhlenbeck\'s compactness theorem addresses what phenomenon in Yang-Mills connections?',
    options: ['Bubbling — curvature concentrating at points', 'Tunneling between gauge orbits', 'Symmetry breaking in fiber bundles', 'Holonomy reduction'],
    correctIndex: 0,
    explanation: 'The Uhlenbeck compactness theorem shows that sequences of Yang-Mills connections can only fail to converge by "bubbling" — curvature concentrating at finitely many points.',
    realWorld: 'Bubbling analysis is now standard in geometric analysis, appearing in minimal surfaces, harmonic maps, and Gromov-Witten theory.',
    hint: 'Energy concentrates at isolated points rather than spreading out — analogous to soliton formation.',
  },
];
