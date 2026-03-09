import type { Question } from '../types';

export const andreaGhezQuestions: Question[] = [
  {
    id: 10622,
    topic: 'andrea-ghez',
    difficulty: 'easy',
    question: 'Andrea Ghez won the Nobel Prize for discovering:',
    options: [
      'A supermassive black hole at the center of the Milky Way (Sagittarius A*)',
      'Gravitational waves from merging black holes',
      'The accelerating expansion of the universe',
      'Exoplanets orbiting Sun-like stars',
    ],
    correctIndex: 0,
    explanation: 'By tracking the orbits of stars near the Milky Way\'s center for over 20 years using adaptive optics, Ghez proved that a compact object of ~4 million solar masses — a supermassive black hole — lurks at Sagittarius A*.',
    realWorld: 'The Event Horizon Telescope later directly imaged Sgr A* in 2022, confirming Ghez\'s measurements beautifully.',
    hint: 'She watched stars orbit something invisible at the center of our galaxy.',
  },
  {
    id: 10623,
    topic: 'andrea-ghez',
    difficulty: 'hard',
    question: 'Ghez\'s key observational technique was:',
    options: [
      'Adaptive optics — deforming telescope mirrors in real time to correct for atmospheric turbulence',
      'Radio interferometry using dish arrays',
      'Space-based X-ray telescopes',
      'Gravitational lensing of background galaxies',
    ],
    correctIndex: 0,
    explanation: 'Adaptive optics uses deformable mirrors and laser guide stars to compensate for atmospheric blurring in real time, allowing ground-based telescopes to achieve near-space-quality resolution.',
    realWorld: 'Adaptive optics is now standard on all major observatories (Keck, VLT, Gemini) and is being adapted for retinal imaging in ophthalmology.',
    hint: 'She corrected the atmosphere\'s blurring in real time.',
  },
  {
    id: 10624,
    topic: 'andrea-ghez',
    difficulty: 'sota',
    question: 'The star S2 orbiting Sgr A* showed a gravitational redshift consistent with:',
    options: [
      'General relativity\'s prediction — confirming Einstein near a supermassive black hole for the first time',
      'Newtonian gravity with no relativistic corrections needed',
      'Modified Newtonian dynamics (MOND)',
      'A wormhole rather than a black hole',
    ],
    correctIndex: 0,
    explanation: 'When S2 made its closest approach to Sgr A* in 2018 at ~120 AU and ~7,650 km/s, its light showed a gravitational redshift matching GR predictions to within a few percent — the first test of GR near a supermassive black hole.',
    realWorld: 'Future observations of closer stars and pulsars near Sgr A* may reveal deviations from GR, testing quantum gravity in the strong-field regime.',
    hint: 'Light climbing out of a deep gravitational well loses energy.',
  },
];
