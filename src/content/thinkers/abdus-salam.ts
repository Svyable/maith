import type { Question } from '../types';

export const abdusSalamQuestions: Question[] = [
  {
    id: 10610,
    topic: 'abdus-salam',
    difficulty: 'easy',
    question: 'Abdus Salam shared the 1979 Nobel Prize for his contribution to:',
    options: [
      'The electroweak unification theory',
      'The discovery of quarks',
      'General relativity',
      'Superconductivity theory',
    ],
    correctIndex: 0,
    explanation: 'Salam independently developed the electroweak theory that unified electromagnetism with the weak nuclear force, sharing the Nobel with Weinberg and Glashow.',
    realWorld: 'Salam founded the International Centre for Theoretical Physics (ICTP) in Trieste, which has trained thousands of scientists from the developing world.',
    hint: 'He unified two of the four fundamental forces.',
  },
  {
    id: 10611,
    topic: 'abdus-salam',
    difficulty: 'hard',
    question: 'The Pati-Salam model proposes:',
    options: [
      'Lepton number as a fourth color — unifying quarks and leptons under SU(4)_C × SU(2)_L × SU(2)_R',
      'A fifth fundamental force beyond the Standard Model',
      'That gravity is a gauge theory of SU(2)',
      'That neutrinos are massless',
    ],
    correctIndex: 0,
    explanation: 'The Pati-Salam model (1974) treats lepton number as a fourth "color," placing quarks and leptons in the same multiplet. It naturally predicts right-handed neutrinos and is a stepping stone toward grand unification.',
    realWorld: 'The Pati-Salam model predicted neutrino masses decades before their experimental confirmation via neutrino oscillations.',
    hint: 'It treats leptons as a fourth color of quark.',
  },
  {
    id: 10612,
    topic: 'abdus-salam',
    difficulty: 'sota',
    question: 'In the electroweak theory, the Weinberg angle $\\theta_W$ determines:',
    options: [
      'The mixing between the SU(2) and U(1) gauge bosons to produce the physical Z⁰ and photon',
      'The rate of proton decay in grand unified theories',
      'The CP violation phase in the CKM matrix',
      'The mass ratio of up and down quarks',
    ],
    correctIndex: 0,
    explanation: 'The Weinberg (or weak mixing) angle parameterizes how the neutral SU(2) gauge boson $W^3$ and the U(1) hypercharge boson $B$ mix to form the physical $Z^0$ and photon $\\gamma$. Experimentally, $\\sin^2\\theta_W \\approx 0.231$.',
    realWorld: 'Precision measurements of $\\sin^2\\theta_W$ at LEP and the Tevatron were crucial tests of the Standard Model and constrained the Higgs mass before its discovery.',
    hint: 'It tells you how much of the Z boson comes from each gauge group.',
  },
];
