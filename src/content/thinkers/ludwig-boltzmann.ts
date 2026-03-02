import type { Question } from '../types';

export const boltzmannQuestions: Question[] = [
  {
    id: 97001, topic: 'ludwig-boltzmann', difficulty: 'easy',
    question: 'Boltzmann\'s entropy formula $S = k_B \\ln \\Omega$ connects macroscopic thermodynamics to:',
    options: ['The number of microscopic configurations (microstates) compatible with a macrostate', 'The temperature of a system', 'The total energy of all particles', 'The volume of the container'],
    correctIndex: 0,
    explanation: 'Boltzmann showed that entropy — previously a mysterious thermodynamic quantity — counts microstates. A gas with more ways to arrange its molecules has higher entropy. This is the foundation of statistical mechanics.',
    realWorld: 'This formula is engraved on Boltzmann\'s tombstone in Vienna. It bridges the microscopic world of atoms to the macroscopic world of heat engines.',
    hint: '$\\Omega$ counts the number of ways to arrange particles — more arrangements = more entropy.',
  },
  {
    id: 97002, topic: 'ludwig-boltzmann', difficulty: 'hard',
    question: 'The Boltzmann transport equation $\\frac{\\partial f}{\\partial t} + \\mathbf{v} \\cdot \\nabla f + \\frac{\\mathbf{F}}{m} \\cdot \\nabla_{\\mathbf{v}} f = \\left(\\frac{\\partial f}{\\partial t}\\right)_{\\text{coll}}$ describes:',
    options: ['The time evolution of the distribution function of particles in phase space, including collisions', 'The trajectory of a single particle', 'The temperature of an ideal gas', 'Quantum tunneling through barriers'],
    correctIndex: 0,
    explanation: 'The Boltzmann equation tracks how the probability distribution $f(\\mathbf{x}, \\mathbf{v}, t)$ evolves. The left side describes free streaming and external forces; the right side captures collisions. It is the master equation of classical kinetic theory.',
    realWorld: 'Used in semiconductor physics (electron transport), rarefied gas dynamics (spacecraft re-entry), neutron transport (nuclear reactors), and lattice Boltzmann methods for CFD.',
    hint: 'It tracks a population of particles, not individual ones — think of it as a probability flow equation.',
  },
  {
    id: 97003, topic: 'ludwig-boltzmann', difficulty: 'sota',
    question: 'Boltzmann\'s H-theorem proved that the quantity $H = \\int f \\ln f \\, d^3v$ monotonically decreases over time. This was controversial because:',
    options: ['It derived irreversibility (arrow of time) from time-reversible microscopic laws — the Loschmidt paradox', 'It violated conservation of energy', 'It predicted temperatures below absolute zero', 'It required quantum mechanics to be valid'],
    correctIndex: 0,
    explanation: 'The H-theorem shows entropy increases (H decreases) over time, but Newton\'s laws are time-reversible. Loschmidt objected: reverse all velocities and entropy should decrease. Boltzmann resolved this by arguing that the molecular chaos assumption (Stosszahlansatz) introduces probabilistic irreversibility.',
    realWorld: 'This debate over the arrow of time continues in modern physics. Boltzmann\'s resolution — that the second law is statistical, not absolute — is now the accepted view, confirmed by the fluctuation theorem.',
    hint: 'How can irreversible macroscopic behavior emerge from reversible microscopic laws? That was the paradox.',
  },
  {
    id: 97004, topic: 'ludwig-boltzmann', difficulty: 'sota',
    question: 'The Boltzmann distribution $P(E) \\propto e^{-E/k_BT}$ gives the probability of a microstate with energy $E$. The partition function $Z = \\sum_i e^{-E_i/k_BT}$ encodes:',
    options: ['All thermodynamic quantities — $F = -k_BT \\ln Z$ gives free energy, from which entropy, pressure, and heat capacity follow', 'Only the average energy of the system', 'The number of particles in the system', 'The volume of phase space'],
    correctIndex: 0,
    explanation: 'The partition function is the Rosetta Stone of statistical mechanics. Once you know $Z(T,V,N)$, every thermodynamic quantity can be derived: $F = -k_BT \\ln Z$, $S = -\\partial F/\\partial T$, $P = -\\partial F/\\partial V$, $\\langle E \\rangle = -\\partial \\ln Z / \\partial \\beta$.',
    realWorld: 'The partition function is computed routinely in computational chemistry, materials science, and machine learning (Boltzmann machines are named after this distribution).',
    hint: '$Z$ is the normalization constant of the probability distribution — but it contains far more information than just normalization.',
  },
];
