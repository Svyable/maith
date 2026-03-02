import type { Question } from '../types';

export const jenniferDoudnaQuestions: Question[] = [
  {
    id: 96034, topic: 'jennifer-doudna', difficulty: 'easy',
    question: 'CRISPR-Cas9, co-developed by Jennifer Doudna, allows scientists to:',
    options: ['Cut and edit specific DNA sequences in living cells', 'Photograph individual atoms', 'Synthesize proteins from scratch', 'Clone entire organisms instantly'],
    correctIndex: 0,
    explanation: 'CRISPR-Cas9 uses a guide RNA to direct the Cas9 protein to a specific DNA sequence, where it makes a precise cut — enabling gene editing with unprecedented accuracy and ease.',
    realWorld: 'CRISPR has been used to treat sickle cell disease (Casgevy, FDA-approved 2023), edit crops for drought resistance, and engineer cancer-fighting T cells.',
    hint: 'Molecular scissors guided by an RNA address tag.',
  },
  {
    id: 96035, topic: 'jennifer-doudna', difficulty: 'hard',
    question: 'The CRISPR system was originally discovered in bacteria as:',
    options: ['An adaptive immune defense that stores viral DNA fragments to recognize future infections', 'A DNA repair mechanism for radiation damage', 'A gene regulation system for nutrient sensing', 'A method of horizontal gene transfer between species'],
    correctIndex: 0,
    explanation: 'Bacteria use CRISPR to capture snippets of viral DNA and store them as "spacers." If the virus attacks again, CRISPR-Cas matches and destroys the viral DNA — a programmable immune system.',
    realWorld: 'Understanding this natural immune system led directly to the gene-editing revolution. It\'s evolution\'s own antivirus software.',
    hint: 'Bacteria remember viruses that attacked them before.',
  },
  {
    id: 96036, topic: 'jennifer-doudna', difficulty: 'sota',
    question: 'Base editing and prime editing, next-generation CRISPR tools, improve on Cas9 by:',
    options: ['Making precise single-letter changes without cutting both DNA strands', 'Using larger guide RNAs for better specificity', 'Replacing Cas9 with a different nuclease', 'Working only in plant cells'],
    correctIndex: 0,
    explanation: 'Base editors chemically convert one base to another (e.g., C→T) without double-strand breaks. Prime editors use a reverse transcriptase to write new sequences — "search and replace" for DNA.',
    realWorld: 'Prime editing can correct ~89% of known pathogenic mutations. Clinical trials are underway for sickle cell disease, familial hypercholesterolemia, and certain cancers.',
    hint: 'Edit without cutting — like fixing a typo instead of rewriting the sentence.',
  },
];
