import type { Question } from '../types';

export const willisLambQuestions: Question[] = [
  {
    id: 10664,
    topic: 'willis-lamb',
    difficulty: 'easy',
    question: 'The Lamb shift is a small energy difference between:',
    options: [
      'The 2S₁/₂ and 2P₁/₂ states of hydrogen, which should be degenerate according to the Dirac equation',
      'The ground state and first excited state of helium',
      'Spin-up and spin-down electrons in a magnetic field',
      'Protons and neutrons in a nucleus',
    ],
    correctIndex: 0,
    explanation: 'Dirac\'s equation predicts 2S₁/₂ and 2P₁/₂ have the same energy. Lamb measured a ~1000 MHz splitting (1947), revealing that quantum electrodynamic effects (vacuum fluctuations) shift the S-state upward.',
    realWorld: 'The Lamb shift was the key experimental result that drove the development of renormalized QED by Schwinger, Feynman, and Tomonaga.',
    hint: 'Two hydrogen states that should be equal in energy are not.',
  },
  {
    id: 10665,
    topic: 'willis-lamb',
    difficulty: 'hard',
    question: 'The Lamb shift arises primarily from:',
    options: [
      'Vacuum fluctuations of the electromagnetic field causing the electron to "jiggle" — an effect largest for S-states near the nucleus',
      'Gravitational effects on the electron',
      'Strong nuclear force from the proton',
      'Magnetic interactions with cosmic rays',
    ],
    correctIndex: 0,
    explanation: 'Virtual photons from the vacuum cause the electron to undergo small random fluctuations (Zitterbewegung). S-electrons, which penetrate the nucleus, experience this most strongly, shifting their energy up relative to P-states.',
    realWorld: 'This "jiggling" is a direct consequence of Heisenberg\'s uncertainty principle applied to the electromagnetic field — energy can briefly be "borrowed" from the vacuum.',
    hint: 'The vacuum is not empty — it fluctuates and affects electrons.',
  },
  {
    id: 10666,
    topic: 'willis-lamb',
    difficulty: 'sota',
    question: 'Lamb\'s measurement used:',
    options: [
      'Microwave spectroscopy on a beam of metastable 2S hydrogen atoms, detecting transitions to 2P via their rapid decay',
      'Optical absorption spectroscopy',
      'X-ray diffraction from hydrogen crystals',
      'Mass spectrometry of hydrogen isotopes',
    ],
    correctIndex: 0,
    explanation: 'The 2S state is metastable (τ ~ 0.1 s), while 2P decays in ~1 ns. Lamb applied microwaves to a 2S beam; at the resonant frequency (~1000 MHz), atoms transitioned to 2P and rapidly decayed, detected via Lyman-α photons.',
    realWorld: 'This precision microwave technique founded the field of atomic beam magnetic resonance, later leading to atomic clocks and MRI.',
    hint: 'Metastable atoms survive long enough to be probed; then they decay and emit light.',
  },
];
