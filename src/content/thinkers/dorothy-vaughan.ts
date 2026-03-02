import type { Question } from '../types';

export const dorothyVaughanQuestions: Question[] = [
  {
    id: 20209, topic: 'dorothy-vaughan', difficulty: 'easy',
    question: 'Dorothy Vaughan was the first Black female supervisor at which organization?',
    options: ['NACA (later NASA)', 'MIT Lincoln Lab', 'Bell Labs', 'Los Alamos'],
    correctIndex: 0,
    explanation: 'Vaughan became the first Black supervisor at NACA (National Advisory Committee for Aeronautics), which later became NASA, heading the West Area Computing unit.',
    realWorld: 'Her story was featured in "Hidden Figures," highlighting the contributions of Black women to the US space program.',
    hint: 'This aeronautics organization became NASA in 1958.',
  },
  {
    id: 20210, topic: 'dorothy-vaughan', difficulty: 'hard',
    question: 'Vaughan taught herself and her team which programming language to remain relevant as electronic computers replaced human computers?',
    options: ['FORTRAN', 'COBOL', 'LISP', 'Assembly'],
    correctIndex: 0,
    explanation: 'Vaughan foresaw that electronic computers would replace human calculators, so she taught herself FORTRAN from IBM manuals and trained her entire team.',
    realWorld: 'FORTRAN (1957) remains in use today for scientific computing — climate models, fluid dynamics, and nuclear simulations still rely on FORTRAN code.',
    hint: 'This language, whose name means "Formula Translation," was the first high-level programming language.',
  },
  {
    id: 20211, topic: 'dorothy-vaughan', difficulty: 'sota',
    question: 'The "human computers" Vaughan supervised performed calculations for which critical aeronautics applications?',
    options: ['Wind tunnel test data reduction and aircraft stability analysis', 'Rocket fuel chemistry', 'Radio signal propagation', 'Nuclear warhead yields'],
    correctIndex: 0,
    explanation: 'The West Area Computing unit processed wind tunnel data and performed stability calculations essential for designing aircraft during WWII and the early jet age.',
    realWorld: 'Modern CFD (computational fluid dynamics) software has replaced human computers but solves the same fundamental equations they calculated by hand.',
    hint: 'These calculations involved the aerodynamic forces measured in testing facilities.',
  },
];
