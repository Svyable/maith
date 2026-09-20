import type { Question } from '../types';

export const maryJacksonQuestions: Question[] = [
  {
    id: 9262010,
    topic: 'mary-jackson',
    difficulty: 'easy',
    question: 'What milestone did Mary W. Jackson reach at NASA in 1958?',
    options: [
      'She became the first woman to direct the Jet Propulsion Laboratory',
      'She became the first person to compute an orbital trajectory electronically',
      'She became NASA’s first Black female engineer',
      'She became the first astronaut trained as an aerospace engineer',
    ],
    correctIndex: 2,
    explanation: 'After completing advanced mathematics and physics courses, Mary Jackson was promoted in 1958 and became NASA’s first Black female engineer.',
    realWorld: 'Her career joined technical aerospace work with efforts to widen access to engineering and scientific careers.',
    hint: 'The milestone combined engineering with breaking both racial and gender barriers.',
  },
  {
    id: 9262011,
    topic: 'mary-jackson',
    difficulty: 'hard',
    question: 'Much of Mary Jackson’s engineering research at Langley focused on which aerodynamic phenomenon?',
    options: [
      'Orbital resonance between satellites',
      'Boundary-layer behavior around aircraft at high speed',
      'Combustion chemistry inside liquid-fuel rocket engines',
      'Radio propagation through the ionosphere',
    ],
    correctIndex: 1,
    explanation: 'Jackson authored or co-authored research on high-speed aerodynamics, especially the behavior of the boundary layer of air around aircraft configurations.',
    realWorld: 'Boundary-layer behavior strongly affects drag, heating, stability, and the performance of high-speed vehicles.',
    hint: 'It concerns the thin region of airflow immediately next to a vehicle surface.',
  },
  {
    id: 9262012,
    topic: 'mary-jackson',
    difficulty: 'sota',
    question: 'Why did Mary Jackson later move from engineering into NASA’s Federal Women’s Program?',
    options: [
      'To replace wind-tunnel testing with purely numerical simulation',
      'To manage the astronaut corps during the Space Shuttle program',
      'To develop a new launch-vehicle guidance computer',
      'To improve hiring and promotion opportunities for women and other underrepresented professionals',
    ],
    correctIndex: 3,
    explanation: 'In 1979 Jackson moved into equal-opportunity leadership, where she worked to improve hiring and advancement for women in NASA science, engineering, and mathematics careers.',
    realWorld: 'Technical institutions depend not only on good engineering but also on systems that let qualified people enter, contribute, and advance.',
    hint: 'Her later role addressed the career pipeline rather than aerodynamics.',
  },
];
