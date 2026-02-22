import type { Question } from '../types';

export const nuclearPhysicsQuestions: Question[] = [
  {
    id: 41001, topic: 'nuclear-physics', difficulty: 'easy',
    question: 'Einstein\'s $E = mc^2$ reveals that:',
    options: [
      'Mass and energy are interconvertible — a tiny amount of mass converts to an enormous amount of energy because $c^2$ is ~9×10¹⁶ m²/s²',
      'Energy equals mass times the speed of light (not squared)',
      'Only light has energy',
      'Mass cannot be converted to energy',
    ],
    correctIndex: 0,
    explanation: 'The speed of light squared is a huge number (~9×10¹⁶), so even tiny mass changes release enormous energy. In nuclear fission, ~0.1% of uranium\'s mass converts to energy; in fusion, ~0.7% of hydrogen\'s mass converts.',
    realWorld: 'Nuclear power plants convert ~1 kg of mass to energy per day, producing ~1 GW. The Sun converts 4.3 million tons of mass to energy every second via hydrogen fusion.',
    hint: 'c² is a HUGE number — even a paperclip\'s mass contains the energy of an atomic bomb.',
  },
  {
    id: 41002, topic: 'nuclear-physics', difficulty: 'hard',
    question: 'Nuclear fusion is harder to achieve than fission because:',
    options: [
      'Positively charged nuclei repel each other via Coulomb force — overcoming this barrier requires temperatures >100 million °C to give nuclei enough kinetic energy to fuse',
      'Fusion produces less energy than fission',
      'The required fuel (hydrogen) is extremely rare',
      'Fusion reactions cannot be sustained for more than microseconds',
    ],
    correctIndex: 0,
    explanation: 'The Coulomb barrier requires nuclei to approach within ~1 fm (10⁻¹⁵ m). At >100 million K, the Maxwell-Boltzmann tail has enough fast particles to tunnel through the barrier. Confinement (magnetic or inertial) must maintain this plasma.',
    realWorld: 'NIF achieved ignition in 2022 (energy out > laser energy in). ITER aims for Q=10 by the 2030s. Private companies (Commonwealth Fusion, Helion) target commercial fusion by 2030s using high-temperature superconducting magnets.',
    hint: 'Like charges repel — you need extreme heat to force positive nuclei close enough to fuse.',
  },
  {
    id: 41003, topic: 'nuclear-physics', difficulty: 'sota',
    question: 'The NIF (National Ignition Facility) achieved fusion ignition in December 2022 by:',
    options: [
      'Focusing 192 laser beams delivering 2.05 MJ onto a deuterium-tritium pellet, producing 3.15 MJ of fusion energy — the first time a fusion experiment produced more energy than was delivered to the fuel',
      'Using magnetic confinement like a tokamak',
      'Achieving room-temperature fusion',
      'Fusing heavy elements like uranium',
    ],
    correctIndex: 0,
    explanation: 'Inertial confinement fusion compresses a millimeter-scale DT capsule to ~1000× liquid density in nanoseconds. The resulting conditions (>100M °C, >100 billion atm) trigger a thermonuclear burn wave. Net energy gain was ~54%.',
    realWorld: 'While scientifically historic, NIF\'s wall-plug efficiency is <1% (the lasers consumed 300+ MJ). Practical fusion energy likely requires magnetic confinement (tokamaks) or hybrid approaches with much better energy balance.',
    hint: 'Crush a tiny fuel pellet with lasers so fast and hard that it becomes a miniature star.',
  },
];
