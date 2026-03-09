import type { Question } from '../types';

export const tsungDaoLeeQuestions: Question[] = [
  {
    id: 10640,
    topic: 'tsung-dao-lee',
    difficulty: 'easy',
    question: 'Lee and Yang\'s Nobel Prize-winning work showed that:',
    options: [
      'The weak nuclear force violates parity (mirror) symmetry',
      'Energy is conserved in all nuclear reactions',
      'Quarks come in three colors',
      'Neutrinos have mass',
    ],
    correctIndex: 0,
    explanation: 'In 1956, Lee and Yang proposed that the weak interaction might not respect parity — a left-right mirror symmetry that was assumed universal. Wu\'s experiment confirmed this within months.',
    realWorld: 'Parity violation explains why neutrinos are always left-handed. This asymmetry is crucial for understanding matter-antimatter asymmetry in the universe.',
    hint: 'They questioned whether nature treats left and right equally.',
  },
  {
    id: 10641,
    topic: 'tsung-dao-lee',
    difficulty: 'hard',
    question: 'The Lee-Yang theorem in statistical mechanics states that:',
    options: [
      'The zeros of the partition function lie on a unit circle in the complex fugacity plane — phase transitions occur when zeros pinch the real axis',
      'All partition functions are analytic everywhere',
      'Phase transitions cannot occur in finite systems',
      'The free energy is always convex',
    ],
    correctIndex: 0,
    explanation: 'Lee and Yang proved (1952) that for ferromagnetic Ising models, all zeros of the partition function Z(z) lie on |z|=1. In the thermodynamic limit, these zeros can approach the real axis, causing phase transitions.',
    realWorld: 'The Lee-Yang theorem inspired modern research on partition function zeros, now used to study phase transitions in lattice QCD and complex systems.',
    hint: 'Phase transitions happen when complex zeros hit the real axis.',
  },
  {
    id: 10642,
    topic: 'tsung-dao-lee',
    difficulty: 'sota',
    question: 'In the Wu experiment confirming parity violation, the observable was:',
    options: [
      'Asymmetric emission of electrons from polarized ⁶⁰Co nuclei — more electrons emitted opposite to the nuclear spin',
      'Equal emission of electrons in all directions',
      'A shift in the electron\'s magnetic moment',
      'Oscillation between electron and positron states',
    ],
    correctIndex: 0,
    explanation: 'Wu cooled ⁶⁰Co to align nuclear spins in a magnetic field. In parity-conserving physics, electron emission would be symmetric. Instead, electrons preferentially emerged opposite to the spin direction — maximal parity violation.',
    realWorld: 'This experiment is why we say the weak force is "left-handed." It fundamentally changed our understanding of symmetry in physics.',
    hint: 'The electrons had a preferred direction relative to nuclear spin.',
  },
];
