import type { Question } from '../types';

export const chienShiungWuQuestions: Question[] = [
  {
    id: 20109, topic: 'chien-shiung-wu', difficulty: 'easy',
    question: 'What fundamental physics symmetry did Chien-Shiung Wu experimentally prove is violated?',
    options: ['Parity (P) symmetry', 'Time reversal symmetry', 'Charge symmetry', 'Lorentz symmetry'],
    correctIndex: 0,
    explanation: 'Wu\'s 1956 experiment on cobalt-60 beta decay proved that parity is violated in weak interactions, overturning a fundamental assumption.',
    realWorld: 'Parity violation is essential to understanding why the universe is made of matter rather than antimatter — a key unsolved problem in cosmology.',
    hint: 'This symmetry says physics should look the same in a mirror.',
  },
  {
    id: 20110, topic: 'chien-shiung-wu', difficulty: 'hard',
    question: 'In Wu\'s parity violation experiment, what radioactive isotope did she use?',
    options: ['Cobalt-60', 'Cesium-137', 'Uranium-235', 'Strontium-90'],
    correctIndex: 0,
    explanation: 'Wu used polarized cobalt-60 nuclei cooled to near absolute zero and observed asymmetric beta emission, proving parity violation.',
    realWorld: 'Cobalt-60 is still widely used in radiation therapy for cancer treatment and industrial sterilization.',
    hint: 'This isotope was polarized at ultra-low temperatures using adiabatic demagnetization.',
  },
  {
    id: 20111, topic: 'chien-shiung-wu', difficulty: 'sota',
    question: 'Lee and Yang won the Nobel Prize for predicting parity violation, but Wu did not share it. Who independently confirmed Wu\'s result?',
    options: ['Lederman, Garwin, and Weinrich', 'Fermi and Segrè', 'Gell-Mann and Zweig', 'Pauli and Heisenberg'],
    correctIndex: 0,
    explanation: 'Lederman, Garwin, and Weinrich independently confirmed parity violation in pion-muon decay shortly after Wu\'s result.',
    realWorld: 'The Nobel Prize controversy surrounding Wu remains a prominent example in discussions about gender bias in scientific recognition.',
    hint: 'They used a different decay channel (pion → muon) to confirm the same symmetry violation.',
  },
];
