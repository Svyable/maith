import type { Question } from '../types';

export const robertLaughlinQuestions: Question[] = [
  {
    id: 10655,
    topic: 'robert-laughlin',
    difficulty: 'easy',
    question: 'The fractional quantum Hall effect reveals that electrons in 2D can form:',
    options: [
      'Quasiparticles with fractional electric charge (e.g., e/3)',
      'Cooper pairs with double charge',
      'Completely non-interacting states',
      'Classical orbits without quantum effects',
    ],
    correctIndex: 0,
    explanation: 'At certain magnetic fields, electrons in 2D form a strongly correlated quantum liquid. The excitations (quasiparticles) carry fractional charge — a fraction of the electron charge — a purely quantum many-body phenomenon.',
    realWorld: 'Fractional charges have been directly measured using shot noise in quantum point contacts, confirming Laughlin\'s prediction.',
    hint: 'Many electrons together can act like particles with less than one electron\'s charge.',
  },
  {
    id: 10656,
    topic: 'robert-laughlin',
    difficulty: 'hard',
    question: 'The Laughlin wave function for filling fraction ν = 1/m is:',
    options: [
      '$\\Psi = \\prod_{i<j}(z_i - z_j)^m \\exp(-\\sum_k |z_k|^2/4\\ell_B^2)$, with m odd for fermions',
      '$\\Psi = \\sum_k e^{ik \\cdot r}$ — a plane wave superposition',
      '$\\Psi = \\prod_i \\phi_0(z_i)$ — a product of single-particle states',
      '$\\Psi = \\det[e^{ik_j \\cdot r_i}]$ — a Slater determinant',
    ],
    correctIndex: 0,
    explanation: 'Laughlin\'s ansatz (1983) captures the essential physics: the (z_i - z_j)^m factor keeps electrons apart (avoiding the Coulomb repulsion), while m odd ensures fermionic antisymmetry. It describes ν = 1/3, 1/5, etc.',
    realWorld: 'This wave function has 99.9% overlap with the exact ground state from numerical diagonalization — an extraordinary theoretical achievement.',
    hint: 'Electrons avoid each other via a polynomial that vanishes when any two coincide.',
  },
  {
    id: 10657,
    topic: 'robert-laughlin',
    difficulty: 'sota',
    question: 'Laughlin quasiparticles at ν = 1/3 obey:',
    options: [
      'Abelian anyonic statistics — exchanging two quasiparticles multiplies the wave function by $e^{i\\pi/3}$',
      'Fermi-Dirac statistics like electrons',
      'Bose-Einstein statistics like photons',
      'No quantum statistics (they are classical)',
    ],
    correctIndex: 0,
    explanation: 'In 2D, particles can have statistics between bosons and fermions. Laughlin quasiparticles acquire phase θ = π/m under exchange (θ = π/3 for ν = 1/3). They are "anyons" — uniquely possible in two dimensions.',
    realWorld: 'Non-Abelian anyons (in other FQHE states like ν = 5/2) are candidates for topological quantum computing, where information is stored in braiding histories.',
    hint: 'In 2D, exchange statistics can be any phase, not just ±1.',
  },
];
