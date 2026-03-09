import type { Question } from '../types';

export const rogerKornbergQuestions: Question[] = [
  {
    id: 31630, topic: 'roger-kornberg', difficulty: 'easy',
    question: 'Roger Kornberg won the 2006 Nobel Prize in Chemistry for his studies of the molecular basis of eukaryotic transcription. What process did he elucidate?',
    options: [
      'How RNA polymerase II reads DNA and synthesizes messenger RNA in eukaryotic cells — including the structure of the complete transcription machinery at atomic resolution.',
      'How ribosomes translate mRNA into proteins using transfer RNA adaptor molecules.',
      'How DNA polymerase replicates the genome with high fidelity during cell division.',
      'How spliceosomes remove introns from pre-mRNA to produce mature messenger RNA.'
    ],
    correctIndex: 0,
    explanation: 'Kornberg determined the crystal structure of RNA Polymerase II — a 12-subunit, 500 kDa enzyme — caught in the act of transcribing DNA into RNA. His structures revealed the mechanism: DNA enters a cleft, the template strand contacts the active site, and RNA is synthesized in the 5\'→3\' direction at ~20 nucleotides per second.',
    realWorld: 'Understanding transcription at the atomic level enabled the design of drugs targeting Pol II (e.g., α-amanitin in mushroom poisoning), and informed development of mRNA vaccines by revealing how cells process RNA.',
    hint: 'He solved the 3D structure of the machine that reads genes — the largest asymmetric structure solved by X-ray crystallography at the time.',
  },
  {
    id: 31631, topic: 'roger-kornberg', difficulty: 'hard',
    question: 'Kornberg also discovered the nucleosome — the fundamental unit of chromatin. What is a nucleosome?',
    options: [
      '147 base pairs of DNA wrapped ~1.65 turns around an octamer of histone proteins (2 copies each of H2A, H2B, H3, H4). Nucleosomes compact DNA ~10,000-fold and regulate gene access.',
      'A complex of 6 snRNPs that assembles on pre-mRNA introns to catalyze splicing via two transesterification reactions.',
      'A ribosomal subunit consisting of 28S rRNA and 49 proteins that catalyzes peptide bond formation during translation.',
      'A protein complex of condensins and cohesins that compacts chromosomes during mitosis by forming loops of ~100 kb.'
    ],
    correctIndex: 0,
    explanation: 'In 1974, Roger Kornberg proposed (with his father Arthur, also a Nobel laureate) that chromatin consists of repeating nucleosome units. Each nucleosome has an octameric histone core with DNA wrapped around it, connected by ~20–80 bp of linker DNA. This "beads on a string" structure was later confirmed by X-ray crystallography at 2.8 Å resolution.',
    realWorld: 'Nucleosome positioning controls which genes are accessible for transcription. Histone modifications (acetylation, methylation) constitute the "histone code" — a key layer of epigenetic regulation in development and disease.',
    hint: 'DNA wraps around a protein spool — like thread around a bobbin — to fit 2 meters of DNA into a 10-μm nucleus.',
  },
  {
    id: 31632, topic: 'roger-kornberg', difficulty: 'sota',
    question: 'Kornberg\'s structural work revealed the "transcription bubble." What happens at the RNA Pol II active site during elongation?',
    options: [
      'The enzyme maintains a ~12 bp transcription bubble of unwound DNA. An 8–9 bp RNA:DNA hybrid forms in the active site, where two Mg²⁺ ions catalyze nucleotidyl transfer: the 3\'-OH of the nascent RNA attacks the α-phosphate of the incoming NTP, releasing pyrophosphate. The bridge helix then translocates Pol II by one base pair.',
      'The enzyme uses a helicase domain to unwind 30 bp of DNA ahead of the active site, synthesizing RNA at 1000 nt/s using a zinc-finger catalytic mechanism.',
      'The enzyme simultaneously transcribes both DNA strands, producing sense and antisense RNA that are separated by a built-in RNase domain.',
      'The enzyme synthesizes RNA 3\'→5\' using a unique reverse polymerase mechanism, then flips the transcript to create the standard 5\'→3\' orientation.'
    ],
    correctIndex: 0,
    explanation: 'Kornberg\'s crystal structures captured Pol II at multiple stages of the transcription cycle. The two-metal-ion mechanism (Mg²⁺) activates the 3\'-OH for nucleophilic attack on the NTP. The bridge helix (a long α-helix spanning the active site cleft) bends to translocate the enzyme after each incorporation. Fidelity is ensured by NTP selection in the active site and a "trigger loop" that closes over the correct nucleotide.',
    realWorld: 'The two-metal-ion catalytic mechanism is universal across all nucleic acid polymerases — from bacterial RNA polymerase to human DNA polymerase to HIV reverse transcriptase. Kornberg\'s structures revealed this fundamental biochemical principle.',
    hint: 'Two magnesium ions, an 8-bp RNA:DNA hybrid, and a bending helix that ratchets the enzyme forward one base at a time.',
  },
];
