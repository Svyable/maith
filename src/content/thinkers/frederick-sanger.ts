import type { Question } from '../types';

export const frederickSangerQuestions: Question[] = [
  {
    id: 50040,
    topic: 'frederick-sanger',
    difficulty: 'easy',
    question: 'What feature makes a dideoxynucleotide terminate DNA synthesis in Sanger sequencing?',
    options: [
      'It contains an extra phosphate that blocks the template',
      'It carries a dye that permanently disables DNA polymerase',
      'It lacks the 3′-OH needed to form the next phosphodiester bond',
      'It binds two complementary bases at the same time',
    ],
    correctIndex: 2,
    explanation: 'A ddNTP lacks the 3′ hydroxyl group required to attach the next nucleotide, so incorporation terminates extension of that DNA strand.',
    realWorld: 'Controlled chain termination creates a nested set of DNA fragments whose terminal bases reveal the sequence.',
    hint: 'Ask what chemical group DNA polymerase needs to extend a growing strand.',
    reviewedAt: '2026-10-02',
  },
  {
    id: 50041,
    topic: 'frederick-sanger',
    difficulty: 'hard',
    question: 'In automated Sanger sequencing, DNA fragments that differ by one nucleotide are separated primarily by:',
    options: [
      'Density-gradient ultracentrifugation',
      'Capillary electrophoresis',
      'Affinity chromatography',
      'Fluorescence-activated cell sorting',
    ],
    correctIndex: 1,
    explanation: 'Capillary electrophoresis separates fluorescently labeled chain-terminated DNA fragments by size with sufficient resolution to distinguish successive fragment lengths.',
    realWorld: 'Automated capillary instruments greatly increased Sanger sequencing throughput and were central to large genome-sequencing programs.',
    hint: 'Think of an automated replacement for slab-gel size separation.',
    reviewedAt: '2026-10-02',
  },
  {
    id: 50042,
    topic: 'frederick-sanger',
    difficulty: 'sota',
    question: 'Why can modern dye-terminator Sanger sequencing identify all four bases in a single reaction?',
    options: [
      'Each base changes the electrical resistance of the capillary',
      'Each DNA fragment is sorted into a base-specific physical channel',
      'Polymerase emits a different photon for each incorporated base',
      'The four terminating ddNTPs carry distinguishable fluorescent labels',
    ],
    correctIndex: 3,
    explanation: 'Base-specific fluorescent labels on the four ddNTP terminators allow fragments from one reaction to be distinguished optically as they pass the detector after capillary separation.',
    realWorld: 'Fluorescent dye terminators and capillary electrophoresis enabled highly automated Sanger sequencing and helped scale the method for the Human Genome Project.',
    hint: 'The detector must distinguish which terminating base is present without four separate reactions.',
    sources: [
      {
        title: 'Human Genome Project Fact Sheet',
        url: 'https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genome-project',
        publisher: 'National Human Genome Research Institute',
      },
      {
        title: 'DNA Sequencing by Capillary Electrophoresis',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2782523/',
        publisher: 'Journal of Biomolecular Techniques',
        year: 2009,
      },
    ],
    reviewedAt: '2026-10-02',
  },
];
