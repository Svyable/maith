import type { Question } from '../types';

export const schrodingerQuestions: Question[] = [
  {
    id: 20501, topic: 'schrodinger', difficulty: 'easy',
    question: 'The Schrödinger equation $i\\hbar \\frac{\\partial}{\\partial t}|\\psi\\rangle = \\hat{H}|\\psi\\rangle$ describes:',
    options: ['How quantum states evolve in time, governed by the Hamiltonian operator', 'The trajectory of classical particles', 'Electromagnetic wave propagation', 'Statistical mechanics of ideal gases'],
    correctIndex: 0,
    explanation: 'The Schrödinger equation is the fundamental equation of quantum mechanics. The wavefunction ψ encodes all measurable information about the system, and |ψ|² gives probability densities.',
    realWorld: 'Semiconductor design, laser physics, and quantum chemistry all solve the Schrödinger equation — every transistor in your phone relies on quantum tunneling predicted by it.',
    hint: 'The quantum analog of Newton\'s F=ma — it tells you how the quantum state changes over time.',
  },
  {
    id: 20502, topic: 'schrodinger', difficulty: 'hard',
    question: 'Schrödinger\'s cat thought experiment illustrates:',
    options: ['The measurement problem — quantum superposition seems absurd at macroscopic scales', 'That cats can exist in two states simultaneously', 'That quantum mechanics is wrong', 'The many-worlds interpretation is correct'],
    correctIndex: 0,
    explanation: 'Schrödinger designed this paradox to highlight the absurdity of applying quantum superposition to everyday objects. It forces us to confront: when does "measurement" collapse the wavefunction?',
    realWorld: 'Decoherence theory explains why macroscopic superpositions are effectively impossible — interaction with the environment rapidly destroys quantum coherence, resolving the cat paradox without mysticism.',
    hint: 'The cat is entangled with a quantum event — but we never see cats in superposition. Why not?',
  },
  {
    id: 20503, topic: 'schrodinger', difficulty: 'sota',
    question: 'The time-independent Schrödinger equation $\\hat{H}|\\psi\\rangle = E|\\psi\\rangle$ is an eigenvalue problem. For the hydrogen atom, the energy eigenvalues are:',
    options: ['$E_n = -13.6\\,\\text{eV}/n^2$, explaining discrete spectral lines', '$E_n = n\\hbar\\omega$ (harmonic oscillator levels)', '$E = p^2/2m$ (free particle, continuous)', '$E_n = -13.6\\,\\text{eV} \\cdot n$ (linear in $n$)'],
    correctIndex: 0,
    explanation: 'The 1/n² spectrum arises from the Coulomb potential. Solving the radial equation gives quantized angular momentum and energy levels that perfectly match observed hydrogen spectral lines (Balmer, Lyman series).',
    realWorld: 'Atomic clocks use transitions between these energy levels — GPS satellites carry cesium clocks whose accuracy depends on knowing quantum energy levels to 15 significant figures.',
    hint: 'The energy levels get closer together as n increases — they scale as 1/n², not linearly.',
  },
];
