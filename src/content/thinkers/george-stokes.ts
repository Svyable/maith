import type { Question } from '../types';

export const stokesQuestions: Question[] = [
  {
    id: 9507,
    topic: 'stokes',
    difficulty: 'sota',
    question: 'Stokes\' theorem in its modern differential forms version states $\\int_M d\\omega =$:',
    options: [
      '$\\int_{\\partial M} \\omega$',
      '$\\int_M \\omega$',
      '$\\int_{\\partial M} d\\omega$',
      '$\\int_M \\omega \\wedge d\\omega$',
    ],
    correctIndex: 0,
    explanation: 'The generalized Stokes\' theorem $\\int_M d\\omega = \\int_{\\partial M} \\omega$ unifies the fundamental theorem of calculus, Green\'s theorem, the divergence theorem, and classical Stokes\' theorem into one statement.',
    realWorld: 'This theorem is the backbone of electromagnetism (Maxwell\'s equations), fluid dynamics (circulation theorems), and general relativity (conservation laws).',
    hint: 'The integral of the exterior derivative over the manifold equals the integral of the form over the boundary.',
  },
  {
    id: 9508,
    topic: 'stokes',
    difficulty: 'sota',
    question: 'In Stokes\' drag law $F = 6\\pi\\mu rv$ for a sphere in viscous flow, what Reynolds number regime is assumed?',
    options: [
      '$Re \\ll 1$ (creeping flow)',
      '$Re \\approx 1$ (transitional)',
      '$Re \\gg 1$ (turbulent)',
      '$Re = 0$ (static)',
    ],
    correctIndex: 0,
    explanation: 'Stokes\' law assumes creeping flow where viscous forces completely dominate inertial forces ($Re \\ll 1$). The drag is linear in velocity — a special low-Reynolds result.',
    realWorld: 'Millikan\'s oil drop experiment used Stokes drag to measure the electron charge. It also governs sedimentation of blood cells, fog droplets, and nanoparticles.',
    hint: 'The Reynolds number compares inertial to viscous forces — Stokes\' law applies when one dominates completely.',
  },
  {
    id: 9509,
    topic: 'stokes',
    difficulty: 'sota',
    question: 'The Navier-Stokes existence and smoothness problem (Clay Millennium) asks whether solutions in 3D always:',
    options: [
      'Remain smooth and bounded for all time given smooth initial data',
      'Converge to a unique steady state',
      'Satisfy the second law of thermodynamics',
      'Exhibit turbulent behavior at high Reynolds numbers',
    ],
    correctIndex: 0,
    explanation: 'The $1M Millennium Prize asks: given smooth initial velocity fields in 3D, do the Navier-Stokes equations always produce smooth solutions, or can singularities (infinite velocity) develop in finite time?',
    realWorld: 'Solving this would revolutionize our understanding of turbulence in aircraft design, weather prediction, blood flow modeling, and ocean current simulation.',
    hint: 'This is about regularity — can the velocity field blow up to infinity in finite time?',
  },
];
