import type { Question } from '../types';

export const hipparchusQuestions: Question[] = [
  {
    id: 11061,
    topic: 'hipparchus-of-nicaea',
    difficulty: 'easy',
    question: 'Hipparchus is considered the father of trigonometry primarily because he:',
    options: [
      'Created the first known chord table — systematically tabulating chord lengths for a circle, equivalent to a sine table',
      'Proved the Pythagorean theorem using similar triangles',
      'Discovered that the Earth orbits the Sun',
      'Invented the coordinate system used in modern geometry',
    ],
    correctIndex: 0,
    explanation: 'Hipparchus (c. 190–120 BC) compiled a table of chords in 12 books (now lost, known through Ptolemy). He divided the circle into 360° (borrowing from Babylonians) and computed chord lengths for angles at 7.5° intervals.',
    realWorld: 'His chord tables enabled accurate prediction of eclipses, star positions, and the precession of equinoxes — discoveries that remained unsurpassed for centuries.',
    hint: 'He was the first to systematically tabulate the relationship between angles and lengths in a circle.',
  },
  {
    id: 11062,
    topic: 'hipparchus-of-nicaea',
    difficulty: 'hard',
    question: 'Hipparchus discovered the precession of the equinoxes by:',
    options: [
      'Comparing his star catalogue positions with observations made 150 years earlier by Timocharis, finding a systematic ~1° shift per century',
      'Measuring the changing length of the solar year over his lifetime',
      'Observing the wobble of the Moon\'s orbit over 18-year Saros cycles',
      'Computing the difference between sidereal and tropical years using eclipse timing',
    ],
    correctIndex: 0,
    explanation: 'Hipparchus compared stellar longitudes across ~150 years and found they had all shifted by ~2°, implying a precession rate of ~1°/century (actual: ~1.4°/century). This was one of the greatest observational discoveries of antiquity.',
    realWorld: 'Precession means the North Star changes over millennia — Polaris is our current pole star, but Vega will be in ~12,000 years. Navigation and calendar systems must account for this.',
    hint: 'Stars appeared to have shifted position over 150 years — but all by the same amount and direction.',
  },
  {
    id: 11063,
    topic: 'hipparchus-of-nicaea',
    difficulty: 'sota',
    question: 'Hipparchus\'s magnitude system for stellar brightness was:',
    options: [
      'A logarithmic scale — each magnitude step corresponds to a roughly constant brightness ratio, later formalised as $m_1 - m_2 = -2.5\\log_{10}(F_1/F_2)$',
      'A linear scale where magnitude 1 is twice as bright as magnitude 2',
      'A geometric scale based on apparent angular diameter of stars',
      'A colour-temperature scale ranging from red (cool) to blue (hot)',
    ],
    correctIndex: 0,
    explanation: 'Hipparchus classified ~850 stars into 6 magnitudes. Pogson (1856) formalised this: a 5-magnitude difference = 100× brightness ratio, so each magnitude = $100^{1/5} \\approx 2.512\\times$ brightness. The human eye naturally perceives brightness logarithmically, so Hipparchus\'s intuitive scale was logarithmic.',
    realWorld: 'Modern astronomy still uses this system. The Sun is magnitude −26.7, the faintest Hubble objects are ~+31 — a range of $10^{23}$ in brightness, compactly expressed in ~58 magnitudes.',
    hint: 'Our eyes perceive brightness on a log scale — Hipparchus\'s intuitive system captured this naturally.',
  },
];
