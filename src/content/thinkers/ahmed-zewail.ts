import type { Question } from '../types';

export const ahmedZewailQuestions: Question[] = [
  {
    id: 50013,
    topic: 'ahmed-zewail',
    difficulty: 'easy',
    question: 'Ahmed Zewail won the 1999 Nobel Prize in Chemistry for founding femtochemistry. What does femtochemistry study?',
    options: [
      'Chemical reactions on the femtosecond ($10^{-15}$ s) timescale, directly observing bond breaking and formation in real time',
      'Chemistry of extremely small molecules with fewer than 5 atoms',
      'Chemical reactions at femtometer ($10^{-15}$ m) length scales inside atomic nuclei',
      'Reactions that take millions of years, like geological mineral formation'
    ],
    correctIndex: 0,
    explanation: 'Zewail used ultrafast laser pulses (tens of femtoseconds) as both a "pump" to initiate a reaction and a "probe" to snapshot the molecular configuration at precise time delays. This revealed the transition state — the fleeting geometry between reactants and products.',
    realWorld: 'Femtochemistry has been applied to understanding vision (retinal isomerization in ~200 fs), photosynthesis, DNA damage, and designing faster molecular electronics.',
    hint: 'A femtosecond is $10^{-15}$ seconds — the timescale of atomic motion during reactions.'
  },
  {
    id: 50014,
    topic: 'ahmed-zewail',
    difficulty: 'hard',
    question: 'Zewail\'s pump-probe experiments on the dissociation of ICN revealed that the transition state has a lifetime of approximately:',
    options: [
      '~200 femtoseconds, showing the I···CN bond stretches through a quasi-bound intermediate before full separation',
      '~200 nanoseconds, visible under a standard microscope',
      '~1 second, easily measurable with a stopwatch',
      'Exactly zero — there is no transition state; bonds break instantaneously'
    ],
    correctIndex: 0,
    explanation: 'In the ICN → I + CN photodissociation, Zewail directly observed the transition state [I···CN]$^\\ddagger$ persisting for ~200 fs. By varying the pump-probe delay $\\Delta t$, he mapped the potential energy surface in real time, confirming Eyring\'s transition state theory experimentally.',
    realWorld: 'This was the first direct observation of a chemical transition state — previously a theoretical construct. It validated decades of reaction rate theory.',
    hint: 'The timescale matches molecular vibration periods — hundreds of femtoseconds.'
  },
  {
    id: 50015,
    topic: 'ahmed-zewail',
    difficulty: 'sota',
    question: 'Zewail later pioneered 4D ultrafast electron microscopy (UEM). What does the "4th dimension" refer to, and what is the typical temporal resolution?',
    options: [
      'Time — single-electron packets triggered by femtosecond lasers provide ~100 fs temporal resolution combined with atomic spatial resolution',
      'Energy — adding electron energy loss spectroscopy to standard TEM',
      'Spin — resolving electron spin states in magnetic materials',
      'Mass — combining mass spectrometry with electron microscopy'
    ],
    correctIndex: 0,
    explanation: 'Zewail\'s 4D UEM combines the spatial resolution of electron microscopy (sub-ångström) with femtosecond temporal resolution. A femtosecond laser pulse excites the specimen; a synchronized electron pulse images it at a controlled delay $\\Delta t$, creating a "molecular movie" of structural dynamics.',
    realWorld: 'This technique has revealed nanoscale mechanical vibrations, phase transitions in nanocrystals, and protein conformational changes — bridging chemistry, biology, and materials science.',
    hint: 'Three spatial dimensions plus time, using ultrashort electron pulses synchronized to laser excitation.'
  }
];
