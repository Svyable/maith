import type { Question } from '../types';

export const liseMeitnerQuestions: Question[] = [
  {
    id: 20106, topic: 'lise-meitner', difficulty: 'easy',
    question: 'Which nuclear process did Lise Meitner provide the first theoretical explanation for?',
    options: ['Nuclear fission', 'Nuclear fusion', 'Beta decay', 'Alpha decay'],
    correctIndex: 0,
    explanation: 'Meitner, along with Otto Frisch, provided the first theoretical explanation of nuclear fission using the liquid drop model of the nucleus.',
    realWorld: 'Nuclear fission powers ~10% of the world\'s electricity through nuclear reactors, all based on the process Meitner first explained.',
    hint: 'This process splits a heavy nucleus into lighter fragments, releasing enormous energy.',
  },
  {
    id: 20107, topic: 'lise-meitner', difficulty: 'hard',
    question: 'Which element is named after Lise Meitner?',
    options: ['Meitnerium (Mt)', 'Mendelevium (Md)', 'Moscovium (Mc)', 'Nihonium (Nh)'],
    correctIndex: 0,
    explanation: 'Element 109, Meitnerium (Mt), was named in her honor — she is the only non-mythological woman to have an element named after her.',
    realWorld: 'Superheavy element synthesis continues at facilities like GSI Darmstadt, where meitnerium was first created in 1982.',
    hint: 'Element 109, a superheavy transactinide element.',
  },
  {
    id: 20108, topic: 'lise-meitner', difficulty: 'sota',
    question: 'In Meitner\'s fission explanation, she used $E=mc^2$ to calculate energy released. Approximately how much energy does fission of one U-235 nucleus release?',
    options: ['~200 MeV', '~20 MeV', '~2 GeV', '~20 keV'],
    correctIndex: 0,
    explanation: 'Meitner calculated that fission of U-235 releases approximately 200 MeV per nucleus, using mass-energy equivalence to account for the mass deficit.',
    realWorld: 'This 200 MeV per fission event is why 1 kg of uranium-235 contains the energy equivalent of ~2,700 tonnes of coal.',
    hint: 'The mass deficit between reactants and products is about 0.1% of the total mass.',
  },
];
