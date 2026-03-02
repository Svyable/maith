import type { Question } from '../types';

export const nikolaTeslaQuestions: Question[] = [
  {
    id: 96019, topic: 'nikola-tesla', difficulty: 'easy',
    question: 'Nikola Tesla\'s greatest contribution to electrical engineering was developing:',
    options: ['Alternating current (AC) power systems', 'Direct current (DC) power grids', 'The first battery', 'The telegraph'],
    correctIndex: 0,
    explanation: 'Tesla designed the polyphase AC induction motor and power transmission system, which proved far superior to Edison\'s DC for long-distance power distribution.',
    realWorld: 'AC power lights virtually every home and building on Earth today. The "War of Currents" with Edison shaped the entire modern electrical grid.',
    hint: 'The current that alternates direction 50-60 times per second.',
  },
  {
    id: 496020, topic: 'nikola-tesla', difficulty: 'hard',
    question: 'Tesla\'s AC induction motor works without brushes or commutators because it uses:',
    options: ['A rotating magnetic field from polyphase currents to induce rotor motion', 'Permanent magnets spinning at constant speed', 'Direct mechanical coupling to the power source', 'Piezoelectric vibrations in the stator'],
    correctIndex: 0,
    explanation: 'Tesla\'s key insight was that multiple AC phases, spatially offset, create a rotating magnetic field. This field induces currents in the rotor (via Faraday\'s law), causing it to spin — no physical contact needed.',
    realWorld: 'Induction motors power ~45% of global electricity consumption — from factory machinery to electric vehicles like Tesla (the car company named after him).',
    hint: 'The magnetic field itself rotates, dragging the rotor along.',
  },
  {
    id: 496021, topic: 'nikola-tesla', difficulty: 'sota',
    question: 'Tesla\'s Wardenclyffe Tower aimed to achieve global wireless power transmission by exploiting:',
    options: ['Earth\'s natural resonant frequency and the ionosphere as a waveguide', 'Microwave beaming to satellites', 'Laser power transmission through fiber optics', 'Nuclear-powered broadcast antennas'],
    correctIndex: 0,
    explanation: 'Tesla believed the Earth-ionosphere cavity could act as a resonant waveguide, transmitting both information and power wirelessly. While ahead of its time, practical wireless power at global scale remains unsolved.',
    realWorld: 'Modern wireless charging (Qi), microwave power beaming, and Schumann resonance research all echo Tesla\'s original vision, though at far smaller scales.',
    hint: 'He wanted to use the planet itself as a conductor.',
  },
];
