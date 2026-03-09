import type { Question } from '../types';

export const peterHiggsQuestions: Question[] = [
  {
    id: 10604,
    topic: 'peter-higgs',
    difficulty: 'easy',
    question: 'The Higgs boson is responsible for:',
    options: [
      'Giving mass to fundamental particles through the Higgs field',
      'Binding quarks together inside protons',
      'Mediating the gravitational force',
      'Producing electromagnetic radiation',
    ],
    correctIndex: 0,
    explanation: 'Particles acquire mass by interacting with the Higgs field that permeates all of space. The Higgs boson is the quantum excitation of this field, confirmed at CERN in 2012.',
    realWorld: 'The discovery of the Higgs boson at the LHC was one of the most expensive and complex experiments in history, involving thousands of scientists from over 100 countries.',
    hint: 'Think about what gives electrons and quarks their rest mass.',
  },
  {
    id: 10605,
    topic: 'peter-higgs',
    difficulty: 'hard',
    question: 'The Higgs mechanism breaks which symmetry of the Standard Model?',
    options: [
      'The electroweak SU(2)_L × U(1)_Y gauge symmetry',
      'The SU(3) color symmetry of QCD',
      'Lorentz invariance of special relativity',
      'CPT symmetry',
    ],
    correctIndex: 0,
    explanation: 'The Higgs field acquires a nonzero vacuum expectation value, spontaneously breaking SU(2)_L × U(1)_Y down to U(1)_EM. Three of the four gauge bosons become massive (W±, Z⁰), while the photon remains massless.',
    realWorld: 'This symmetry breaking pattern explains why the weak force has a short range (massive mediators) while electromagnetism has infinite range (massless photon).',
    hint: 'Which gauge group describes the unified electroweak interaction?',
  },
  {
    id: 10606,
    topic: 'peter-higgs',
    difficulty: 'sota',
    question: 'The measured Higgs boson mass of ~125 GeV has what theoretical implication?',
    options: [
      'The electroweak vacuum may be metastable — we could be in a false vacuum that could tunnel to a lower-energy state',
      'The Standard Model is definitely stable up to the Planck scale',
      'Supersymmetry must exist at low energies',
      'The Higgs is actually a composite particle, not elementary',
    ],
    correctIndex: 0,
    explanation: 'At ~125 GeV, the Higgs self-coupling runs negative at very high energies, placing our vacuum in a metastable region. The tunneling time far exceeds the age of the universe, but it raises deep questions about naturalness and new physics.',
    realWorld: 'This "vacuum stability" question is one of the key motivations for building next-generation colliders to measure Higgs properties with extreme precision.',
    hint: 'Consider what happens to the Higgs potential at very high energy scales.',
  },
];
