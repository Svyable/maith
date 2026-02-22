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
    realWorld: 'Hurricanes spin counterclockwise in the Atlantic, cyclones spin clockwise in the Indian Ocean — same physics, different hemisphere.',
    hint: 'Earth rotates underneath moving air — the deflection depends on which hemisphere you\'re in.',
  },
  {
    id: 40304, topic: 'meteorology', difficulty: 'easy',
    question: 'A weather front forms when:',
    options: [
      'Two air masses of different temperatures and densities collide — cold fronts bring rapid cooling and thunderstorms, warm fronts bring gradual warming and steady rain',
      'The sun heats the ground unevenly',
      'Wind speeds exceed 100 km/h',
      'Atmospheric pressure is exactly 1013 hPa everywhere',
    ],
    correctIndex: 0,
    explanation: 'Cold fronts (dense cold air undercuts warm air) produce steep uplift → cumulonimbus → thunderstorms. Warm fronts (warm air rides over cold) produce gentle uplift → stratus → steady precipitation. Occluded fronts combine both.',
    realWorld: 'Front analysis is the foundation of synoptic meteorology. The polar jet stream steers fronts across continents, determining weekly weather patterns for billions of people.',
    hint: 'When cold air meets warm air, the boundary creates dramatic weather.',
  },
  {
    id: 40302, topic: 'meteorology', difficulty: 'hard',
    question: 'Numerical weather prediction (NWP) solves which equations?',
    options: [
      'The primitive equations — Navier-Stokes adapted for a rotating sphere with thermodynamic energy equations and moisture transport',
      'Simple harmonic oscillator equations',
      'Only the ideal gas law',
      'Schrödinger\'s equation for atmospheric particles',
    ],
    correctIndex: 0,
    explanation: 'NWP discretizes the atmosphere into a 3D grid and solves coupled PDEs: momentum (Navier-Stokes on rotating Earth), continuity, thermodynamic energy, and moisture transport.',
    realWorld: 'ECMWF\'s IFS model uses a ~9km grid with 137 vertical levels. Forecasts are reliable to ~10 days — beyond that, chaos theory limits predictability.',
    hint: 'It\'s fluid dynamics on a spinning sphere — plus heat and water.',
  },
  {
    id: 40305, topic: 'meteorology', difficulty: 'hard',
    question: 'Lorenz discovered chaos theory through weather modeling when he found:',
    options: [
      'Tiny rounding differences in initial conditions (0.506127 vs. 0.506) led to completely different forecasts — deterministic systems can be inherently unpredictable',
      'Weather is completely random with no deterministic component',
      'Computers cannot solve weather equations',
      'The atmosphere follows simple linear dynamics',
    ],
    correctIndex: 0,
    explanation: 'Lorenz\'s 1963 paper showed that his simplified atmospheric model exhibited sensitive dependence on initial conditions — the "butterfly effect." This means perfect long-range forecasts are fundamentally impossible, not just technically difficult.',
    realWorld: 'This limits deterministic weather forecasts to ~2 weeks. Modern ensemble forecasting runs many slightly different simulations to quantify forecast uncertainty — probability of rain rather than yes/no.',
    hint: 'A butterfly flapping its wings in Brazil could theoretically cause a tornado in Texas — tiny causes, huge effects.',
  },
  {
    id: 40303, topic: 'meteorology', difficulty: 'sota',
    question: 'Google DeepMind\'s GenCast and GraphCast AI weather models surpass traditional NWP by:',
    options: [
      'Using graph neural networks trained on 40 years of reanalysis data to produce 15-day probabilistic forecasts in seconds — vs. hours on supercomputers for traditional NWP',
      'Solving the Navier-Stokes equations exactly',
      'Using only temperature data',
      'Running on quantum computers exclusively',
    ],
    correctIndex: 0,
    explanation: 'GraphCast uses a mesh-based GNN to learn atmospheric dynamics from ERA5 reanalysis data. GenCast adds probabilistic ensemble generation. Both outperform ECMWF\'s HRES on most metrics while running 1000× faster.',
    realWorld: 'AI weather models now provide better 10-day forecasts than the world\'s best supercomputer models. This transforms disaster preparedness, agriculture, and energy grid management.',
    hint: 'Learn the physics from data rather than coding equations — and do it 1000× faster.',
  },
];
