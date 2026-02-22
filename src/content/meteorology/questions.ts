import type { Question } from '../types';

export const meteorologyQuestions: Question[] = [
  {
    id: 40301, topic: 'meteorology', difficulty: 'easy',
    question: 'The Coriolis effect causes large-scale weather systems to:',
    options: [
      'Rotate counterclockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere due to Earth\'s rotation',
      'Always move from west to east regardless of hemisphere',
      'Remain stationary over the equator',
      'Rotate in the same direction in both hemispheres',
    ],
    correctIndex: 0,
    explanation: 'The Coriolis effect is a pseudo-force arising from Earth\'s rotation. Moving air masses deflect right in the Northern Hemisphere and left in the Southern, creating cyclonic rotation patterns.',
    realWorld: 'Hurricanes spin counterclockwise in the Atlantic, cyclones spin clockwise in the Indian Ocean — same physics, different hemisphere. This is why toilets DON\'T spin differently (too small for Coriolis).',
    hint: 'Earth rotates underneath moving air — the deflection depends on which hemisphere you\'re in.',
  },
  {
    id: 40302, topic: 'meteorology', difficulty: 'hard',
    question: 'Numerical weather prediction (NWP) solves which equations?',
    options: [
      'The primitive equations — Navier-Stokes equations adapted for a rotating sphere with thermodynamic energy equations and moisture transport',
      'Simple harmonic oscillator equations',
      'Only the ideal gas law',
      'Schrödinger\'s equation for atmospheric particles',
    ],
    correctIndex: 0,
    explanation: 'NWP discretizes the atmosphere into a 3D grid and solves coupled PDEs: momentum (Navier-Stokes on rotating Earth), continuity (mass conservation), thermodynamic energy, and moisture transport equations.',
    realWorld: 'ECMWF\'s IFS model uses a ~9km grid with 137 vertical levels. Forecasts are reliable to ~10 days — beyond that, chaos theory limits predictability (Lorenz\'s butterfly effect).',
    hint: 'It\'s fluid dynamics on a spinning sphere — plus heat and water.',
  },
  {
    id: 40303, topic: 'meteorology', difficulty: 'sota',
    question: 'Google DeepMind\'s GenCast and GraphCast AI weather models surpass traditional NWP by:',
    options: [
      'Using graph neural networks trained on 40 years of reanalysis data to produce 15-day probabilistic forecasts in seconds — vs. hours on supercomputers for traditional NWP',
      'Solving the Navier-Stokes equations exactly',
      'Using only temperature data without any other atmospheric variables',
      'Running on quantum computers exclusively',
    ],
    correctIndex: 0,
    explanation: 'GraphCast uses a mesh-based GNN to learn atmospheric dynamics directly from ERA5 reanalysis data. GenCast adds probabilistic ensemble generation. Both outperform ECMWF\'s HRES on most metrics while running 1000× faster.',
    realWorld: 'AI weather models now provide better 10-day forecasts than the world\'s best supercomputer models. This has massive implications for disaster preparedness, agriculture, and energy grid management.',
    hint: 'Learn the physics from data rather than coding equations — and do it 1000× faster.',
  },
];
