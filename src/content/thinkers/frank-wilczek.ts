import type { Question } from '../types';

export const frankWilczekQuestions: Question[] = [
  {
    id: 10625,
    topic: 'frank-wilczek',
    difficulty: 'easy',
    question: 'Wilczek\'s Nobel Prize was for the discovery of:',
    options: [
      'Asymptotic freedom — quarks interact more weakly at shorter distances',
      'The Higgs boson at the LHC',
      'Cosmic microwave background radiation',
      'Superconductivity in ceramic materials',
    ],
    correctIndex: 0,
    explanation: 'Asymptotic freedom (1973) means the strong coupling constant decreases at high energies (short distances). This explains why quarks behave almost freely inside protons during deep inelastic scattering.',
    realWorld: 'Asymptotic freedom is why proton collisions at the LHC can be calculated precisely — at high energies, quarks are nearly free.',
    hint: 'The strong force gets weaker when particles are very close together.',
  },
  {
    id: 10626,
    topic: 'frank-wilczek',
    difficulty: 'hard',
    question: 'Wilczek proposed the "axion" to solve:',
    options: [
      'The strong CP problem — why QCD doesn\'t violate CP symmetry despite having a term that should',
      'The hierarchy problem of the Higgs mass',
      'Dark energy and the cosmological constant',
      'The black hole information paradox',
    ],
    correctIndex: 0,
    explanation: 'QCD allows a CP-violating term θ·(g²/32π²)·F·F̃, yet experiments show θ < 10⁻¹⁰. The Peccei-Quinn mechanism promotes θ to a dynamical field (the axion) that naturally relaxes to zero.',
    realWorld: 'Axions are now a leading dark matter candidate. Experiments like ADMX and CASPEr are actively searching for them.',
    hint: 'It explains why the strong force respects a symmetry it shouldn\'t have to.',
  },
  {
    id: 10627,
    topic: 'frank-wilczek',
    difficulty: 'sota',
    question: 'Wilczek\'s concept of "time crystals" refers to systems that:',
    options: [
      'Spontaneously break time-translation symmetry — oscillating in their ground state without energy input',
      'Travel backward in time using exotic matter',
      'Store time as a quantum resource for computation',
      'Exist only at absolute zero temperature',
    ],
    correctIndex: 0,
    explanation: 'A time crystal is a phase of matter whose ground state exhibits periodic motion, breaking time-translation symmetry just as ordinary crystals break spatial translation symmetry. Discrete time crystals were realized in 2017 using periodically driven quantum systems.',
    realWorld: 'Google\'s quantum computer demonstrated a discrete time crystal in 2021 using 20 superconducting qubits.',
    hint: 'Like a crystal repeats in space, this repeats in time.',
  },
];
