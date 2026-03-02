import type { Question } from '../types';

export const wernerHeisenbergQuestions: Question[] = [
  {
    id: 20601, topic: 'werner-heisenberg', difficulty: 'easy',
    question: 'Heisenberg\'s uncertainty principle states that:',
    options: ['Position and momentum cannot both be precisely known: $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$', 'Energy is always conserved', 'Electrons orbit the nucleus in fixed paths', 'Measurements are always inaccurate due to instruments'],
    correctIndex: 0,
    explanation: 'This is not about measurement limitations — it is a fundamental property of nature. A quantum particle does not simultaneously possess precise position and momentum. This follows from the wave nature of matter.',
    realWorld: 'Quantum tunneling in flash memory, the stability of atoms (electrons can\'t collapse into the nucleus), and the zero-point energy of vacuum all follow from the uncertainty principle.',
    hint: 'The more precisely you know WHERE a particle is, the less you know about its MOMENTUM — and vice versa.',
  },
  {
    id: 20602, topic: 'werner-heisenberg', difficulty: 'hard',
    question: 'Heisenberg\'s matrix mechanics formulates quantum mechanics using:',
    options: ['Infinite-dimensional matrices of observable quantities, with non-commuting operators $[\\hat{x}, \\hat{p}] = i\\hbar$', 'Wave equations in 3D space', 'Path integrals over all possible trajectories', 'Classical phase space with Poisson brackets'],
    correctIndex: 0,
    explanation: 'Heisenberg (1925) replaced classical variables with matrices (operators). The canonical commutation relation [x,p] = iℏ is the foundation — non-commutativity IS the uncertainty principle in algebraic form.',
    realWorld: 'Quantum computing gates are unitary matrices — the entire framework of quantum computation is built on Heisenberg\'s matrix mechanics insight that physics is algebra.',
    hint: 'In classical physics, x·p = p·x. In quantum mechanics, they don\'t commute — the difference is iℏ.',
  },
  {
    id: 20603, topic: 'werner-heisenberg', difficulty: 'sota',
    question: 'The energy-time uncertainty relation $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$ implies:',
    options: ['Virtual particles can borrow energy $\\Delta E$ for time $\\Delta t \\sim \\hbar/\\Delta E$, enabling quantum vacuum fluctuations', 'Energy conservation is violated in quantum mechanics', 'Time is an operator in quantum mechanics', 'Measurements of energy are always imprecise'],
    correctIndex: 0,
    explanation: 'Unlike position-momentum, time is not an operator in QM. The energy-time relation means states that exist briefly have broad energy uncertainty. Virtual particles in Feynman diagrams borrow energy within this window.',
    realWorld: 'The Casimir effect (measurable force between uncharged plates) and Hawking radiation from black holes are direct consequences of vacuum energy fluctuations allowed by energy-time uncertainty.',
    hint: 'The shorter the time window, the more "energy borrowing" is allowed — virtual particles pop in and out of existence.',
  },
];
