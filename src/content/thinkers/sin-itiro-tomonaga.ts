import type { Question } from '../types';

export const sinItiroTomonagaQuestions: Question[] = [
  {
    id: 10631,
    topic: 'sin-itiro-tomonaga',
    difficulty: 'easy',
    question: 'Tomonaga shared the 1965 Nobel Prize for his work on:',
    options: [
      'Quantum electrodynamics (QED) — the quantum theory of light and matter interactions',
      'The strong nuclear force and meson theory',
      'Superconductivity and Cooper pairs',
      'Cosmic ray physics and muon discovery',
    ],
    correctIndex: 0,
    explanation: 'Tomonaga independently developed renormalization techniques for QED during WWII in Japan, showing how to systematically remove infinities from calculations of electron-photon interactions.',
    realWorld: 'QED is the most precisely tested theory in all of science — its prediction of the electron\'s magnetic moment agrees with experiment to 12 decimal places.',
    hint: 'He tamed the infinities in the quantum theory of light.',
  },
  {
    id: 10632,
    topic: 'sin-itiro-tomonaga',
    difficulty: 'hard',
    question: 'Tomonaga\'s "super-many-time" formulation of QED:',
    options: [
      'Assigns an independent time variable to each point in space, making the theory manifestly Lorentz covariant',
      'Uses a single universal time for all particles',
      'Eliminates the need for quantum field theory',
      'Treats time as a discrete lattice variable',
    ],
    correctIndex: 0,
    explanation: 'By giving each spatial point its own time coordinate on a spacelike surface, Tomonaga made QED manifestly relativistic. This was equivalent to Schwinger\'s approach and led to the same renormalized predictions.',
    realWorld: 'This covariant formulation became standard in modern quantum field theory textbooks.',
    hint: 'Each point in space evolves with its own clock.',
  },
  {
    id: 10633,
    topic: 'sin-itiro-tomonaga',
    difficulty: 'sota',
    question: 'The Tomonaga-Luttinger liquid describes:',
    options: [
      'Interacting fermions in one dimension that behave qualitatively differently from Fermi liquids — with spin-charge separation',
      'Superfluid helium-3 in a rotating container',
      'Electron gas in a strong magnetic field',
      'Bosons condensed into a single quantum state',
    ],
    correctIndex: 0,
    explanation: 'In 1D, the Fermi liquid picture breaks down: individual quasiparticles are replaced by collective excitations. Spin and charge propagate at different velocities (spin-charge separation). The Tomonaga-Luttinger model is exactly solvable via bosonization.',
    realWorld: 'Tomonaga-Luttinger liquid behavior has been observed in carbon nanotubes, quantum wires, and edge states of quantum Hall systems.',
    hint: 'In one dimension, an electron\'s spin and charge can move independently.',
  },
];
