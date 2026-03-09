import type { Question } from '../types';

export const stevenWeinbergQuestions: Question[] = [
  {
    id: 10601,
    topic: 'steven-weinberg',
    difficulty: 'easy',
    question: 'Weinberg\'s electroweak theory unified which two fundamental forces?',
    options: [
      'Electromagnetism and the weak nuclear force',
      'Gravity and electromagnetism',
      'Strong nuclear force and the weak nuclear force',
      'Gravity and the strong nuclear force',
    ],
    correctIndex: 0,
    explanation: 'Weinberg (with Salam and Glashow) showed that electromagnetism and the weak force are manifestations of a single electroweak interaction at high energies, mediated by the W±, Z⁰, and photon.',
    realWorld: 'The electroweak theory predicted the W and Z bosons, discovered at CERN in 1983 — confirming the unification.',
    hint: 'Think about which force governs beta decay and which governs light.',
  },
  {
    id: 10602,
    topic: 'steven-weinberg',
    difficulty: 'hard',
    question: 'In the electroweak theory, the masses of the W and Z bosons arise from:',
    options: [
      'Spontaneous symmetry breaking via the Higgs mechanism',
      'Explicit mass terms added to the Lagrangian by hand',
      'Quantum loop corrections from fermion masses',
      'Confinement of weak-force color charges',
    ],
    correctIndex: 0,
    explanation: 'The electroweak SU(2)×U(1) symmetry is spontaneously broken by the Higgs field acquiring a vacuum expectation value, giving mass to W± and Z⁰ while leaving the photon massless.',
    realWorld: 'This mechanism was confirmed by the discovery of the Higgs boson at the LHC in 2012.',
    hint: 'The gauge bosons "eat" Goldstone bosons to become massive.',
  },
  {
    id: 10603,
    topic: 'steven-weinberg',
    difficulty: 'sota',
    question: 'Weinberg\'s "folk theorem" on effective field theory states that:',
    options: [
      'The most general Lagrangian consistent with symmetries yields the most general S-matrix — no extra assumptions needed',
      'Every gauge theory must be asymptotically free',
      'Renormalization removes all physical predictions from a theory',
      'Spontaneous symmetry breaking always produces exactly three Goldstone bosons',
    ],
    correctIndex: 0,
    explanation: 'Weinberg argued that if you write down all terms consistent with the symmetries of your theory, organized by powers of energy/momentum, you automatically get the most general quantum predictions at each order — the foundation of the EFT paradigm.',
    realWorld: 'This principle underpins chiral perturbation theory in QCD, gravitational EFTs, and the SMEFT program at the LHC.',
    hint: 'It\'s about how symmetries alone determine low-energy physics.',
  },
];
