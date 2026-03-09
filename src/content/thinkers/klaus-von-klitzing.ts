import type { Question } from '../types';

export const klausVonKlitzingQuestions: Question[] = [
  {
    id: 10649,
    topic: 'klaus-von-klitzing',
    difficulty: 'easy',
    question: 'The integer quantum Hall effect shows that Hall resistance is quantized as:',
    options: [
      '$R_H = h/(ne^2)$ where n is an integer, h is Planck\'s constant, and e is electron charge',
      '$R_H = mc^2/e$ proportional to electron rest energy',
      '$R_H = \\hbar\\omega$ proportional to a harmonic frequency',
      '$R_H = k_B T/e$ proportional to thermal energy',
    ],
    correctIndex: 0,
    explanation: 'In a 2D electron gas at low temperature and high magnetic field, the Hall resistance takes exact values h/(ne²). This quantization is topological and independent of sample details, impurities, or geometry.',
    realWorld: 'The von Klitzing constant R_K = h/e² = 25,812.807... Ω is now the international standard for electrical resistance.',
    hint: 'Resistance comes in exact quantum units involving h and e.',
  },
  {
    id: 10650,
    topic: 'klaus-von-klitzing',
    difficulty: 'hard',
    question: 'The extreme precision of the quantum Hall resistance arises because:',
    options: [
      'It is a topological invariant — the Chern number of filled Landau levels is exactly quantized',
      'Superconductivity eliminates all resistance',
      'Electrons pair up into Cooper pairs',
      'The magnetic field cancels all scattering processes',
    ],
    correctIndex: 0,
    explanation: 'The Hall conductance σ_xy = ne²/h is protected by topology: it equals e²/h times the Chern number (TKNN invariant) of filled bands. Disorder cannot change an integer, so the quantization is exact to parts in 10⁹.',
    realWorld: 'This topological protection inspired the search for other topological phases, leading to topological insulators and topological quantum computing.',
    hint: 'An integer cannot change continuously — topology protects the quantization.',
  },
  {
    id: 10651,
    topic: 'klaus-von-klitzing',
    difficulty: 'sota',
    question: 'The quantum Hall effect enables a new definition of the kilogram because:',
    options: [
      'Combined with the Josephson effect, it links mass to Planck\'s constant via $h = $ (exactly fixed)',
      'It directly measures gravitational mass',
      'Electrons in the Hall bar have exactly 1 kg mass',
      'The magnetic field creates a force proportional to mass',
    ],
    correctIndex: 0,
    explanation: 'The Kibble balance uses the Josephson voltage (V = nhf/(2e)) and quantum Hall resistance (R = h/(ne²)) to measure electrical power precisely. Combined with mechanical power (mgv), this yields m = constant × h. In 2019, h was fixed exactly, redefining the kilogram.',
    realWorld: 'Since May 2019, the kilogram is defined via Planck\'s constant, not a physical artifact — ending 130 years of the platinum-iridium "Le Grand K."',
    hint: 'Quantum electrical standards plus mechanical measurements give mass.',
  },
];
