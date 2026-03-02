import type { Question } from '../types';

export const alexanderFriedmannQuestions: Question[] = [
  {
    id: 90701, topic: 'alexander-friedmann', difficulty: 'sota',
    question: 'The Friedmann equation $(\\dot{a}/a)^2 = 8\\pi G\\rho/3 - k/a^2$ describes:',
    options: ['The expansion rate of a homogeneous, isotropic universe', 'Gravitational wave propagation', 'Stellar interior structure', 'Black hole evaporation'],
    correctIndex: 0,
    explanation: 'Derived from Einstein\'s field equations with the cosmological principle (homogeneity + isotropy), the Friedmann equation governs how the scale factor $a(t)$ evolves with energy density $\\rho$ and curvature $k$.',
    realWorld: 'Every modern cosmological model (ΛCDM, dark energy) is built on the Friedmann equations.',
    hint: 'Einstein\'s equations applied to the universe as a whole — assuming it looks the same everywhere.',
  },
  {
    id: 90702, topic: 'alexander-friedmann', difficulty: 'sota',
    question: 'Friedmann predicted the expanding universe in 1922, which was observationally confirmed by:',
    options: ['Hubble\'s 1929 redshift-distance relation', 'The 1965 CMB discovery', 'Einstein\'s 1905 special relativity', 'Zwicky\'s dark matter observations'],
    correctIndex: 0,
    explanation: 'Edwin Hubble\'s observation that galaxies recede with velocity proportional to distance ($v = H_0 d$) confirmed Friedmann\'s mathematical prediction of cosmic expansion.',
    realWorld: 'Einstein initially dismissed Friedmann\'s expanding solution, calling it "suspicious" — later calling his own cosmological constant his "biggest blunder."',
    hint: 'An astronomer at Mount Wilson measured galaxy velocities and distances 7 years after the theoretical prediction.',
  },
  {
    id: 90703, topic: 'alexander-friedmann', difficulty: 'sota',
    question: 'In the Friedmann equation, $k = +1, 0, -1$ corresponds to universes that are:',
    options: ['Closed (spherical), flat, and open (hyperbolic)', 'Expanding, static, and contracting', 'Hot, warm, and cold', 'Young, middle-aged, and old'],
    correctIndex: 0,
    explanation: 'The curvature parameter $k$ determines spatial geometry: $k=+1$ (positive curvature, finite volume), $k=0$ (Euclidean, critical density), $k=-1$ (negative curvature, infinite).',
    realWorld: 'CMB observations from Planck show $k \\approx 0$ — our universe is flat to within 0.4%.',
    hint: 'Three possible shapes for the universe: sphere, flat plane, or saddle.',
  },
];
