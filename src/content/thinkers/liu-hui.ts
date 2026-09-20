import type { Question } from '../types';

export const liuHuiQuestions: Question[] = [
  {
    id: 9262001,
    topic: 'liu-hui',
    difficulty: 'easy',
    question: 'Liu Hui is especially known for his 263 CE commentary on which mathematical classic?',
    options: [
      'Euclid’s Elements',
      'The Almagest',
      'The Nine Chapters',
      'The Aryabhatiya',
    ],
    correctIndex: 2,
    explanation: 'Liu Hui wrote a major commentary on The Nine Chapters on the Mathematical Art, supplying explanations and justifications for many of its procedures.',
    realWorld: 'His commentary shows how algorithmic problem solving and mathematical justification developed together in classical Chinese mathematics.',
    hint: 'It is the foundational Chinese text organized around nine groups of practical problems.',
  },
  {
    id: 9262002,
    topic: 'liu-hui',
    difficulty: 'hard',
    question: 'What was the core idea behind Liu Hui’s method for approximating π?',
    options: [
      'Expanding π as an infinite decimal and truncating it',
      'Inscribing regular polygons in a circle and repeatedly increasing their number of sides',
      'Averaging the areas of a square and an equilateral triangle',
      'Measuring the shadow of a circular disk at several times of day',
    ],
    correctIndex: 1,
    explanation: 'Liu Hui approximated the circumference of a circle using inscribed regular polygons, refining the estimate as the number of sides increased.',
    realWorld: 'The same convergence idea—replace a curved object by increasingly fine simple approximations—appears throughout numerical analysis.',
    hint: 'Think of a many-sided figure becoming closer and closer to a circle.',
  },
  {
    id: 9262003,
    topic: 'liu-hui',
    difficulty: 'sota',
    question: 'Liu Hui’s surveying work is an early example of using geometry to measure inaccessible distances. Which principle makes that possible?',
    options: [
      'Prime factorization of the measured lengths',
      'Fourier decomposition of the observed angles',
      'Random sampling of many possible baselines',
      'Proportional relationships from similar right triangles',
    ],
    correctIndex: 3,
    explanation: 'Surveying methods associated with Liu Hui infer inaccessible heights and distances from baselines and similar right triangles.',
    realWorld: 'Triangulation and related geometric methods remain fundamental in surveying, mapping, navigation, and remote sensing.',
    hint: 'You infer a large unknown length from a smaller triangle with the same angles.',
    sources: [{ title: 'Liu Hui', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Liu_Hui/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
