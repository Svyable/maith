import type { Question } from '../types';

export const gladysWestQuestions: Question[] = [
  {
    id: 9263013,
    topic: 'gladys-west',
    difficulty: 'easy',
    question: 'Gladys West’s mathematical work helped provide a foundation for which technology?',
    options: ['Magnetic resonance imaging', 'Global Positioning System', 'Fiber-optic networking', 'Lithium-ion batteries'],
    correctIndex: 1,
    explanation: 'West’s geodetic calculations contributed to highly accurate models of Earth that became foundational to satellite positioning and GPS.',
    realWorld: 'GPS now supports navigation, logistics, surveying, agriculture, telecommunications timing, and emergency response.',
    hint: 'Think satellite-based positioning on Earth.',
  },
  {
    id: 9263014,
    topic: 'gladys-west',
    difficulty: 'hard',
    question: 'Which computer did Gladys West program to refine geodetic models of Earth?',
    options: ['UNIVAC 1108 system', 'CDC 6600 system', 'IBM 7030 Stretch', 'IBM 7090 mainframe'],
    correctIndex: 2,
    explanation: 'West programmed the IBM 7030 Stretch to perform increasingly refined calculations of Earth’s shape and gravitational variations.',
    realWorld: 'High-performance computing made it practical to combine large geophysical datasets into useful reference models.',
    hint: 'It was an IBM supercomputer nicknamed Stretch.',
  },
  {
    id: 9263015,
    topic: 'gladys-west',
    difficulty: 'sota',
    question: 'Why does an accurate geoid matter for satellite positioning?',
    options: [
      'It makes radio waves travel faster',
      'It removes the need for atomic clocks',
      'It forces satellites into circular orbits',
      'It provides a realistic gravity-based reference for Earth’s shape',
    ],
    correctIndex: 3,
    explanation: 'The geoid represents an equipotential surface of Earth’s gravity field, giving positioning systems a physically meaningful reference for height and shape.',
    realWorld: 'Surveying and satellite navigation depend on converting orbital measurements into accurate positions relative to Earth.',
    hint: 'It is a reference surface shaped by gravity, not a perfect sphere.',
    sources: [{ title: 'Navy Scientist Helped Develop GPS', url: 'https://www.defense.gov/News/Feature-Stories/Story/Article/3700859/', publisher: 'U.S. Department of Defense' }],
    reviewedAt: '2026-09-20',
  },
];
