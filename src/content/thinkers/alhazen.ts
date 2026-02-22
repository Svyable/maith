import type { Question } from '../types';

export const alhazenQuestions: Question[] = [
  {
    id: 11101,
    topic: 'alhazen',
    difficulty: 'easy',
    question: 'Ibn al-Haytham (Alhazen) revolutionised optics by proposing that:',
    options: [
      'Vision occurs when light rays enter the eye from objects — rejecting the ancient "emission theory" where eyes emit rays',
      'Light travels instantaneously between objects and the eye',
      'Colour is an intrinsic property of objects unrelated to light',
      'All light is composed of particles with no wave-like behaviour',
    ],
    correctIndex: 0,
    explanation: 'In his "Book of Optics" (Kitab al-Manazir, c. 1011), Alhazen proved that vision works by light entering the eye — overturning Euclid\'s and Ptolemy\'s emission theory. He used the camera obscura as evidence: images form without the eye emitting anything.',
    realWorld: 'Alhazen\'s intromission theory is the foundation of all modern optics, from camera design to ophthalmology. The camera obscura he studied became the ancestor of photography.',
    hint: 'Do your eyes send out beams, or do they receive light? He settled this debate 1000 years ago.',
  },
  {
    id: 11102,
    topic: 'alhazen',
    difficulty: 'hard',
    question: '"Alhazen\'s problem" asks: given a spherical mirror, a light source, and an observer, find the reflection point. This problem reduces to:',
    options: [
      'Solving a 4th-degree polynomial — a problem in geometric optics that took 1000 years to fully resolve algebraically',
      'Finding the intersection of two conic sections',
      'Minimising the optical path length using Fermat\'s principle',
      'Solving a system of linear equations in 3 variables',
    ],
    correctIndex: 0,
    explanation: 'The problem requires finding a point $P$ on a circle where the angle of incidence equals the angle of reflection for given source and observer positions. This leads to a quartic equation. Alhazen solved special cases geometrically; a complete algebraic solution came only with modern algebra.',
    realWorld: 'This problem appears in designing satellite dish focal points, acoustic reflectors in concert halls, and laser cavity alignment.',
    hint: 'Equal angles of incidence and reflection on a curved surface create a surprisingly hard equation.',
  },
  {
    id: 11103,
    topic: 'alhazen',
    difficulty: 'sota',
    question: 'Alhazen\'s experimental methodology in optics anticipated the modern scientific method by:',
    options: [
      'Systematically combining hypothesis formation, controlled experiments, and mathematical analysis — centuries before Bacon or Galileo',
      'Using statistical sampling to validate optical measurements',
      'Publishing peer-reviewed papers in Arabic scientific journals',
      'Employing double-blind experimental protocols for subjective observations',
    ],
    correctIndex: 0,
    explanation: 'Alhazen conducted controlled experiments with darkened rooms (camera obscura), varied single parameters at a time, used geometry to make quantitative predictions, and tested them against observation. His "Book of Optics" is arguably the first work of modern experimental physics.',
    realWorld: 'His emphasis on empirical verification over authority influenced Roger Bacon, Kepler, and the European Scientific Revolution. UNESCO declared 2015 the "International Year of Light" partly honouring his work.',
    hint: 'Hypothesis → experiment → mathematical analysis → verification: he did this 600 years before Galileo.',
  },
];
