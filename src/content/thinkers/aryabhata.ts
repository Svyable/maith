import type { Question } from '../types';

export const aryabhataQuestions: Question[] = [
  {
    id: 9262004,
    topic: 'aryabhata',
    difficulty: 'easy',
    question: 'Which work did Aryabhata complete in 499 CE as a compact synthesis of mathematics and astronomy?',
    options: [
      'The Siddhanta Shiromani',
      'The Aryabhatiya',
      'The Lilavati',
      'The Surya Siddhanta',
    ],
    correctIndex: 1,
    explanation: 'Aryabhata states that he completed the Aryabhatiya in 499 CE, when he was 23. It summarizes arithmetic, algebra, trigonometry, time reckoning, and astronomy.',
    realWorld: 'Compact technical handbooks like the Aryabhatiya helped mathematical methods travel across generations and regions.',
    hint: 'The title is built directly from his own name.',
  },
  {
    id: 9262005,
    topic: 'aryabhata',
    difficulty: 'hard',
    question: 'How did Aryabhata explain the apparent daily motion of the stars across the sky?',
    options: [
      'The stars orbit Earth once every day',
      'A transparent celestial sphere is physically spun by the Sun',
      'Earth rotates on its axis, making the heavens appear to move',
      'Atmospheric refraction drags the apparent star positions westward',
    ],
    correctIndex: 2,
    explanation: 'Aryabhata attributed the apparent daily rotation of the heavens to Earth’s axial rotation, a striking kinematic interpretation for his era.',
    realWorld: 'Separating apparent motion from observer motion is central to astronomy, navigation, and reference-frame physics.',
    hint: 'Ask whether the observer might be moving instead of the entire sky.',
  },
  {
    id: 9262006,
    topic: 'aryabhata',
    difficulty: 'sota',
    question: 'Aryabhata’s kuttaka (“pulverizer”) method was designed to solve what kind of problem?',
    options: [
      'Linear indeterminate equations in integers',
      'General quintic equations by radicals',
      'Nonlinear wave equations on a sphere',
      'Eigenvalue problems for symmetric matrices',
    ],
    correctIndex: 0,
    explanation: 'The kuttaka method reduces linear indeterminate equations such as by = ax ± c to smaller integer problems until a solution can be reconstructed.',
    realWorld: 'Integer-equation algorithms are ancestors of modern number-theoretic methods used in coding, cryptography, and exact computation.',
    hint: 'It repeatedly reduces integer coefficients to simpler ones.',
    sources: [{ title: 'Aryabhata the Elder', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Aryabhata_I/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
