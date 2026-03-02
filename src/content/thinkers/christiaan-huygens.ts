import type { Question } from '../types';

export const huygensQuestions: Question[] = [
  {
    id: 21810,
    topic: 'christiaan-huygens',
    difficulty: 'sota',
    question: 'Huygens\' principle states that every point on a wavefront acts as a source of what?',
    options: [
      'Secondary spherical wavelets whose envelope forms the new wavefront',
      'Plane waves propagating only in the forward direction',
      'Standing waves that interfere destructively behind the wavefront',
      'Evanescent waves that decay exponentially'
    ],
    correctIndex: 0,
    explanation: 'Huygens\' principle (1678): every point on a wavefront is a source of secondary spherical wavelets. The new wavefront at time dt is the envelope of all these secondary wavelets. This explains reflection, refraction, and diffraction geometrically.',
    realWorld: 'Huygens\' principle explains why sound bends around corners (diffraction), why lenses focus light (refraction), and is the basis of Kirchhoff\'s diffraction integral.',
    hint: 'Each point on the wave "re-emits" — the envelope of all these gives the next wavefront.'
  },
  {
    id: 21811,
    topic: 'christiaan-huygens',
    difficulty: 'sota',
    question: 'Huygens derived the formula for the period of a physical pendulum. For a simple pendulum of length L, the small-angle period is T = ?',
    options: [
      'T = 2π√(L/g)',
      'T = 2π√(g/L)',
      'T = π√(2L/g)',
      'T = 2π L/g'
    ],
    correctIndex: 0,
    explanation: 'For small oscillations, the restoring torque gives θ̈ + (g/L)θ = 0, yielding T = 2π√(L/g). Huygens discovered this in 1659 and also proved that the tautochrone curve (equal-time descent) is a cycloid, not a circle.',
    realWorld: 'Huygens built the first pendulum clock (1656), revolutionizing timekeeping accuracy from ~15 minutes/day error to ~15 seconds/day.',
    hint: 'The pendulum equation linearizes to simple harmonic motion with ω² = g/L.'
  },
  {
    id: 21812,
    topic: 'christiaan-huygens',
    difficulty: 'sota',
    question: 'Huygens discovered that the tautochrone curve — where descent time is independent of starting height — is what shape?',
    options: [
      'A cycloid',
      'A parabola',
      'A catenary',
      'An ellipse'
    ],
    correctIndex: 0,
    explanation: 'The cycloid (path traced by a point on a rolling circle) has the remarkable property that a frictionless bead sliding down it reaches the bottom in the same time T = π√(r/g) regardless of where it starts. Huygens proved this in Horologium Oscillatorium (1673).',
    realWorld: 'Huygens used cycloidal cheeks on pendulum clocks to make the pendulum follow a cycloidal arc, achieving truly isochronous oscillation — the first precision timepiece.',
    hint: 'It\'s the curve traced by a point on the rim of a rolling wheel.'
  },
];
