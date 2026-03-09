import type { Question } from '../types';

export const hidekiYukawaQuestions: Question[] = [
  {
    id: 10616,
    topic: 'hideki-yukawa',
    difficulty: 'easy',
    question: 'Yukawa predicted which particle to explain the strong nuclear force?',
    options: [
      'The meson (pion), a particle mediating the force between nucleons',
      'The photon, mediating electromagnetism',
      'The neutrino, carrying away energy in beta decay',
      'The gluon, binding quarks inside protons',
    ],
    correctIndex: 0,
    explanation: 'In 1935, Yukawa proposed that nucleons exchange a new particle (the meson/pion) to produce the short-range strong force. The pion was discovered in 1947.',
    realWorld: 'While we now know the fundamental strong force is mediated by gluons between quarks, Yukawa\'s pion exchange remains an excellent effective description of nuclear binding.',
    hint: 'He predicted a particle with mass between the electron and proton.',
  },
  {
    id: 10617,
    topic: 'hideki-yukawa',
    difficulty: 'hard',
    question: 'The Yukawa potential $V(r) = -g^2 \\frac{e^{-mr}}{r}$ implies that the force:',
    options: [
      'Has a finite range proportional to 1/m — the heavier the mediator, the shorter the range',
      'Is always attractive and infinite in range like gravity',
      'Increases linearly with distance like a spring',
      'Is repulsive at all distances',
    ],
    correctIndex: 0,
    explanation: 'The exponential decay $e^{-mr}$ gives the force a characteristic range ~ ℏ/(mc). For the pion (m ≈ 140 MeV), this gives ~1.4 fm, matching the observed range of nuclear forces.',
    realWorld: 'This mass-range relationship is universal: it explains why the weak force (massive W, Z bosons) is short-range while electromagnetism (massless photon) is infinite-range.',
    hint: 'The exponential factor cuts off the force at a distance set by the mediator mass.',
  },
  {
    id: 10618,
    topic: 'hideki-yukawa',
    difficulty: 'sota',
    question: 'In modern QCD, the Yukawa coupling between the Higgs field and fermions determines:',
    options: [
      'The mass of each fermion — heavier particles couple more strongly to the Higgs',
      'The color charge of quarks',
      'The spin of fundamental particles',
      'The electric charge quantization',
    ],
    correctIndex: 0,
    explanation: 'In the Standard Model, fermion masses arise from Yukawa couplings $y_f \\bar{\\psi}_L \\phi \\psi_R$. When the Higgs acquires its VEV, $m_f = y_f v/\\sqrt{2}$. The top quark has $y_t \\approx 1$, while the electron has $y_e \\approx 3×10^{-6}$.',
    realWorld: 'The huge hierarchy of Yukawa couplings (spanning 6 orders of magnitude) is one of the great unsolved "flavor puzzles" of particle physics.',
    hint: 'The coupling constant directly becomes the mass when the Higgs field condenses.',
  },
];
