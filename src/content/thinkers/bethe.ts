import type { Question } from '../types';

export const betheQuestions: Question[] = [
  {
    id: 21140,
    topic: 'bethe',
    difficulty: 'sota',
    question: 'Hans Bethe won the Nobel Prize for identifying which nuclear process as the energy source of stars?',
    options: ['The CNO cycle and proton–proton chain', 'Nuclear fission of heavy elements', 'Gravitational contraction (Kelvin–Helmholtz mechanism)', 'Matter-antimatter annihilation'],
    correctIndex: 0,
    explanation: 'Bethe systematically worked out the nuclear reaction sequences — both the proton–proton chain (dominant in Sun-like stars) and the CNO cycle (dominant in more massive stars) — that convert hydrogen into helium, releasing energy.',
    realWorld: 'Understanding stellar nucleosynthesis explains the origin of virtually all elements in the universe and is essential for fusion energy research.',
    hint: 'Hydrogen fuses into helium through two different pathways depending on stellar mass.',
  },
  {
    id: 21141,
    topic: 'bethe',
    difficulty: 'sota',
    question: 'The Bethe–Bloch formula describes which fundamental physical process?',
    options: ['Energy loss of charged particles passing through matter', 'Nuclear binding energy per nucleon', 'Cross-sections for neutrino scattering', 'Spectral line broadening in stellar atmospheres'],
    correctIndex: 0,
    explanation: 'The Bethe–Bloch formula gives the mean rate of energy loss (stopping power) for charged particles traversing material, depending on particle velocity and the material\'s properties.',
    realWorld: 'This formula is essential for designing particle detectors, radiation therapy planning, and spacecraft shielding.',
    hint: 'It tells you how quickly a fast charged particle slows down inside a material.',
  },
  {
    id: 21142,
    topic: 'bethe',
    difficulty: 'sota',
    question: 'Bethe\'s exact solution to the one-dimensional Heisenberg spin chain introduced which foundational technique in mathematical physics?',
    options: ['The Bethe ansatz', 'Perturbation theory', 'The renormalization group', 'Path integral quantization'],
    correctIndex: 0,
    explanation: 'The Bethe ansatz (1931) provides exact wavefunctions for the 1D Heisenberg model by reducing the many-body problem to a set of algebraic equations. It became a cornerstone of exactly solvable models.',
    realWorld: 'The Bethe ansatz is now used in condensed matter physics, string theory (via AdS/CFT), and even models of traffic flow.',
    hint: 'An educated guess for the wavefunction that miraculously yields exact solutions.',
  },
];
