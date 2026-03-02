import type { Question } from '../types';

export const curieQuestions: Question[] = [
  {
    id: 10191,
    topic: 'curie',
    difficulty: 'easy',
    question: 'Marie Curie\'s discovery of radioactivity in polonium and radium demonstrated:',
    options: [
      'Certain elements spontaneously emit radiation from their atomic nuclei',
      'All elements become radioactive at high temperatures',
      'Radiation is produced only by electromagnetic fields',
      'Chemical reactions can create new elements',
    ],
    correctIndex: 0,
    explanation: 'Curie coined the term "radioactivity" and discovered that certain elements emit radiation independent of external energy — a property intrinsic to their atomic nuclei. She isolated polonium and radium from pitchblende ore.',
    realWorld: 'Curie\'s work launched nuclear physics, leading to X-ray diagnostics, cancer radiotherapy, nuclear energy, and our understanding of atomic structure.',
    hint: 'The radiation comes from inside the atom itself, not from any external source.',
  },
  {
    id: 10192,
    topic: 'curie',
    difficulty: 'hard',
    question: 'Curie\'s measurement technique for radioactivity used:',
    options: [
      'A piezoelectric electrometer (designed by Pierre Curie) to measure ionization current from radiation',
      'A Geiger counter to detect individual radioactive particles',
      'Photographic film exposure to measure radiation intensity',
      'A cloud chamber to visualize particle tracks',
    ],
    correctIndex: 0,
    explanation: 'The Curies used an electrometer based on the piezoelectric effect (discovered by Pierre) to precisely measure the tiny ionization currents produced by radioactive materials, enabling quantitative study of radioactivity.',
    realWorld: 'This precision measurement approach — quantifying a new phenomenon with purpose-built instruments — set the template for experimental physics.',
    hint: 'Pierre invented the measurement device; Marie used it to systematically survey all known elements.',
  },
  {
    id: 10193,
    topic: 'curie',
    difficulty: 'sota',
    question: 'Marie Curie remains the only person to have:',
    options: [
      'Won Nobel Prizes in two different sciences — Physics (1903) and Chemistry (1911)',
      'Discovered two chemical elements in the same year',
      'Been nominated for a Nobel Prize in three different fields',
      'Published over 100 papers on radioactivity',
    ],
    correctIndex: 0,
    explanation: 'Curie won the 1903 Physics Nobel (shared with Pierre and Becquerel) for radioactivity research, and the 1911 Chemistry Nobel solely for isolating pure radium and polonium — an unmatched interdisciplinary achievement.',
    realWorld: 'Curie broke barriers as the first woman Nobel laureate and first person to win in two sciences, inspiring generations of scientists.',
    hint: 'She bridged two entire fields of science at the Nobel level.',
  },
];
