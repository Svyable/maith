import type { Question } from '../types';

export const johnBardeenQuestions: Question[] = [
  {
    id: 31550, topic: 'john-bardeen', difficulty: 'easy',
    question: 'John Bardeen is the only person to have won two Nobel Prizes in Physics. What were they for?',
    options: [
      'The invention of the transistor (1956, with Shockley and Brattain) and the theory of superconductivity — BCS theory (1972, with Cooper and Schrieffer).',
      'The discovery of the neutron (1956) and the development of quantum electrodynamics (1972).',
      'The photoelectric effect (1956) and the theory of superfluidity in helium-4 (1972).',
      'The invention of the laser (1956) and the discovery of the cosmic microwave background (1972).'
    ],
    correctIndex: 0,
    explanation: 'Bardeen co-invented the point-contact transistor at Bell Labs in 1947, revolutionizing electronics. Then he developed BCS theory — the first microscopic theory explaining why certain materials lose all electrical resistance below a critical temperature. Two Nobel Prizes in the same field is an unmatched achievement.',
    realWorld: 'The transistor powers every electronic device on Earth. BCS theory explains conventional superconductors used in MRI machines, particle accelerators, and quantum computers.',
    hint: 'One prize created the information age; the other explained why some metals have zero resistance.',
  },
  {
    id: 31551, topic: 'john-bardeen', difficulty: 'hard',
    question: 'BCS theory explains superconductivity via Cooper pairs. What is a Cooper pair and why does it enable zero resistance?',
    options: [
      'Two electrons with opposite spin and momentum form a bound pair via phonon-mediated attraction. Cooper pairs are bosons (integer spin) that condense into a single quantum state, described by a macroscopic wavefunction $\\Psi = |\\Psi|e^{i\\phi}$ with a gap $\\Delta$ that protects against scattering.',
      'Two electrons occupy the same orbital but with aligned spins, forming a ferromagnetic bond that repels lattice phonons, eliminating scattering.',
      'Two protons in the crystal lattice pair with electrons to form neutral hydrogen-like bound states that carry current without electromagnetic interaction.',
      'Two electrons tunnel synchronously through successive potential barriers in the lattice, such that their combined tunneling amplitude exceeds unity.'
    ],
    correctIndex: 0,
    explanation: 'One electron distorts the positive ion lattice, creating a slight positive charge concentration that attracts a second electron. This phonon-mediated attraction overcomes Coulomb repulsion at low temperatures. The resulting Cooper pairs have zero net momentum and spin, making them composite bosons that undergo Bose-Einstein condensation into a superconducting ground state.',
    realWorld: 'The BCS energy gap $\\Delta \\approx 1.76 k_B T_c$ at $T = 0$ explains the exponential suppression of resistance below $T_c$. This prediction matches experiments across hundreds of conventional superconductors.',
    hint: 'Lattice vibrations glue electrons into boson-like pairs that flow without resistance because they all share one quantum state.',
  },
  {
    id: 31552, topic: 'john-bardeen', difficulty: 'sota',
    question: 'The BCS gap equation is a self-consistency condition for the superconducting order parameter $\\Delta$. What is this equation?',
    options: [
      '$\\Delta = \\lambda \\int_0^{\\omega_D} \\frac{\\Delta}{\\sqrt{\\xi^2 + \\Delta^2}} \\tanh\\frac{\\sqrt{\\xi^2 + \\Delta^2}}{2k_BT}\\, d\\xi$, where $\\lambda$ is the electron-phonon coupling, $\\omega_D$ is the Debye cutoff, and $\\xi$ is the single-particle energy relative to the Fermi level.',
      '$\\Delta = g^2 N(0) \\ln(\\omega_D / \\Delta)$, a simple logarithmic equation relating the gap to the density of states $N(0)$ at the Fermi level.',
      '$\\Delta(T) = \\Delta_0 (1 - T/T_c)^{1/2}$ exactly, a mean-field power law with no integral required.',
      '$\\Delta = \\hbar \\omega_D \\exp(-1/\\lambda)$ at all temperatures, independent of thermal occupation factors.'
    ],
    correctIndex: 0,
    explanation: 'The BCS gap equation is derived by minimizing the free energy of the superconducting state. The $\\tanh$ factor encodes the thermal occupation of quasiparticle states. At $T = 0$, it reduces to $1 = \\lambda \\int_0^{\\omega_D} d\\xi / \\sqrt{\\xi^2 + \\Delta_0^2}$, giving $\\Delta_0 \\approx 2\\hbar\\omega_D e^{-1/\\lambda}$. At $T = T_c$, $\\Delta \\to 0$ yields $k_B T_c = 1.13\\, \\hbar\\omega_D\\, e^{-1/\\lambda}$.',
    realWorld: 'The BCS gap equation predicts the universal ratio $2\\Delta_0 / k_B T_c \\approx 3.53$, confirmed experimentally in Al, Sn, Pb, and many other conventional superconductors.',
    hint: 'A self-consistent integral equation where the gap appears on both sides — the hyperbolic tangent encodes finite-temperature effects.',
  },
];
