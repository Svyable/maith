import type { Question } from '../types';

export const robertEmdenQuestions: Question[] = [
  {
    id: 9513,
    topic: 'robert-emden',
    difficulty: 'sota',
    question: 'The Lane-Emden equation $\\frac{1}{\\xi^2}\\frac{d}{d\\xi}\\left(\\xi^2\\frac{d\\theta}{d\\xi}\\right) + \\theta^n = 0$ has exact closed-form solutions for polytropic indices:',
    options: [
      '$n = 0, 1, 5$',
      '$n = 1, 2, 3$',
      '$n = 0, 2, 4$',
      'All integer $n$',
    ],
    correctIndex: 0,
    explanation: 'Exact solutions exist only for $n=0$ (constant density, parabolic), $n=1$ (sinc function $\\theta = \\sin\\xi/\\xi$), and $n=5$ (Schuster solution). All other indices require numerical integration.',
    realWorld: 'Polytropic models approximate stellar interiors: $n=1.5$ models convective stars and white dwarfs, $n=3$ models the Sun\'s radiative core, and $n=5$ gives infinite radius (unphysical but mathematically elegant).',
    hint: 'Only three specific values of the polytropic index yield solutions expressible in elementary functions.',
  },
  {
    id: 9514,
    topic: 'robert-emden',
    difficulty: 'sota',
    question: 'For the Lane-Emden equation with $n=3$ (Eddington\'s standard model), the first zero $\\xi_1$ determines:',
    options: [
      'The stellar radius in dimensionless units',
      'The core temperature',
      'The luminosity of the star',
      'The nuclear reaction rate',
    ],
    correctIndex: 0,
    explanation: 'The first zero $\\xi_1$ of $\\theta(\\xi)$ is where the density drops to zero — the surface of the star. For $n=3$, $\\xi_1 \\approx 6.897$, giving the radius-to-central-density relationship.',
    realWorld: 'Eddington used the $n=3$ polytrope to model main-sequence stars like the Sun, deriving the mass-luminosity relation $L \\propto M^3$ that governs stellar evolution timescales.',
    hint: 'In the polytropic model, $\\theta = 0$ means the density has dropped to zero — what does that physically represent?',
  },
  {
    id: 9515,
    topic: 'robert-emden',
    difficulty: 'sota',
    question: 'The Chandrasekhar mass limit for white dwarfs uses the Lane-Emden equation with $n = 3$ because the electron degeneracy pressure in the relativistic limit follows:',
    options: [
      '$P \\propto \\rho^{4/3}$',
      '$P \\propto \\rho^{5/3}$',
      '$P \\propto \\rho^2$',
      '$P \\propto \\rho$',
    ],
    correctIndex: 0,
    explanation: 'In the ultra-relativistic limit, degenerate electron pressure scales as $P \\propto \\rho^{4/3}$ ($\\gamma = 4/3$, so $n = 1/(\\gamma-1) = 3$). This gives the critical mass $M_{Ch} \\approx 1.44 M_\\odot$.',
    realWorld: 'Above the Chandrasekhar limit, white dwarfs collapse into neutron stars or black holes — this governs Type Ia supernovae used as "standard candles" to measure cosmic distances.',
    hint: 'The polytropic index $n$ is related to the adiabatic index $\\gamma$ by $n = 1/(\\gamma - 1)$.',
  },
];
