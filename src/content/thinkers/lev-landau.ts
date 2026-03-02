import type { Question } from '../types';

export const landauQuestions: Question[] = [
  {
    id: 22000,
    topic: 'lev-landau',
    difficulty: 'hard',
    question: 'In Landau\'s classification of phase transitions, what distinguishes a second-order transition from a first-order one?',
    options: [
      'The order parameter changes continuously at the critical point',
      'Latent heat is released at the transition',
      'The free energy has a discontinuous first derivative',
      'Symmetry is preserved across the transition',
    ],
    correctIndex: 0,
    explanation: 'Second-order (continuous) transitions have a continuously vanishing order parameter at $T_c$ with no latent heat, unlike first-order transitions where the order parameter jumps discontinuously.',
    realWorld: 'Ferromagnetic-paramagnetic transitions in iron follow Landau\'s second-order framework.',
    hint: 'Think about whether the magnetisation jumps or smoothly goes to zero.',
  },
  {
    id: 22001,
    topic: 'lev-landau',
    difficulty: 'sota',
    question: 'Landau\'s Fermi liquid theory predicts that low-energy excitations of an interacting Fermi system behave as quasiparticles. What quantity is renormalised but remains finite?',
    options: [
      'Effective mass $m^*$',
      'Bare electron charge',
      'Debye temperature',
      'Lattice constant',
    ],
    correctIndex: 0,
    explanation: 'Quasiparticles carry a renormalised effective mass $m^*$ that can differ substantially from the bare mass but stays finite, preserving the Fermi surface topology.',
    realWorld: 'Heavy-fermion compounds like CeCoIn₅ have $m^*/m_e > 100$, directly measurable via de Haas–van Alphen oscillations.',
    hint: 'Which single-particle property changes due to many-body interactions?',
  },
  {
    id: 22002,
    topic: 'lev-landau',
    difficulty: 'sota',
    question: 'In Landau\'s theory of superfluidity, the critical velocity $v_c$ for superfluid helium-4 is determined by the minimum of which ratio?',
    options: [
      '$\\varepsilon(p)/p$ over the excitation spectrum',
      '$p/\\varepsilon(p)$ at the roton minimum',
      'The phonon group velocity $d\\varepsilon/dp$',
      'The ratio of normal to superfluid density',
    ],
    correctIndex: 0,
    explanation: 'Landau\'s criterion states $v_c = \\min[\\varepsilon(p)/p]$, the minimum energy-to-momentum ratio over all elementary excitations (phonons and rotons).',
    realWorld: 'The roton minimum in He-4 sets $v_c \\approx 58$ m/s, confirmed by ion mobility experiments.',
    hint: 'Creating an excitation must be energetically favourable in the moving frame.',
  },
];
