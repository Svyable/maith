import type { Question } from '../types';

export const barbaraMcclintockQuestions: Question[] = [
  {
    id: 20118, topic: 'barbara-mcclintock', difficulty: 'easy',
    question: 'Barbara McClintock discovered which genetic phenomenon in maize?',
    options: ['Transposable elements (jumping genes)', 'Genetic linkage', 'Polyploidy', 'Gene silencing'],
    correctIndex: 0,
    explanation: 'McClintock discovered transposable elements — segments of DNA that can move within the genome — decades before molecular biology confirmed her findings.',
    realWorld: 'Transposons are now used as tools in genetics research for mutagenesis and gene delivery in gene therapy.',
    hint: 'These genetic elements can change their position within the genome.',
  },
  {
    id: 20119, topic: 'barbara-mcclintock', difficulty: 'hard',
    question: 'What did McClintock name the two-element control system she discovered in maize transposition?',
    options: ['Ac/Ds (Activator/Dissociation)', 'Promoter/Enhancer', 'Operon/Operator', 'Intron/Exon'],
    correctIndex: 0,
    explanation: 'The Ac (Activator) element encodes a transposase, while Ds (Dissociation) is a non-autonomous element requiring Ac to move.',
    realWorld: 'The Ac/Ds system is still used as a genetic tool in plant biology for insertional mutagenesis and gene tagging.',
    hint: 'One element provides the enzyme; the other is the mobile element that depends on it.',
  },
  {
    id: 20120, topic: 'barbara-mcclintock', difficulty: 'sota',
    question: 'What fraction of the human genome is estimated to derive from transposable elements?',
    options: ['~45%', '~10%', '~2%', '~80%'],
    correctIndex: 0,
    explanation: 'About 45% of the human genome consists of transposable element sequences, making them one of the most important forces in genome evolution.',
    realWorld: 'CRISPR-Cas systems evolved from transposable elements, connecting McClintock\'s discovery to the most transformative biotech tool of the 21st century.',
    hint: 'Far more than the ~1.5% that codes for proteins.',
  },
  {
    id: 20124, topic: 'barbara-mcclintock', difficulty: 'hard',
    question: 'The transposase enzyme that McClintock\'s Ac element encodes catalyzes a "cut-and-paste" reaction. What is the key chemical mechanism of DNA transposition?',
    options: [
      'Transposase binds inverted terminal repeats (ITRs), creates staggered double-strand breaks via nucleophilic attack by water on the phosphodiester backbone, then ligates the element into a new target site — generating target site duplications (TSDs).',
      'Transposase unwinds the DNA helix using ATP-dependent helicase activity, copies the element via reverse transcription, and inserts the cDNA copy at a random genomic position.',
      'Transposase methylates the element\'s ITRs, causing the surrounding DNA to loop out via homologous recombination with Alu repeat sequences elsewhere in the genome.',
      'Transposase cleaves a single strand, rotates the element 180° via topoisomerase activity, and re-ligates it in the reverse orientation at the same locus.'
    ],
    correctIndex: 0,
    explanation: 'Class II (DNA) transposons like Ac/Ds use a cut-and-paste mechanism. The transposase recognizes inverted terminal repeats flanking the element, excises it with staggered cuts at the target site, and ligates the element in. The staggered cuts are filled in by host DNA repair, creating characteristic target site duplications (TSDs) of 5–9 bp.',
    realWorld: 'This mechanism is exploited in the Sleeping Beauty and PiggyBac transposon systems used in gene therapy clinical trials and CAR-T cell engineering.',
    hint: 'The enzyme cuts the element out and pastes it elsewhere — leaving a "signature" duplication at the insertion site.',
  },
  {
    id: 20125, topic: 'barbara-mcclintock', difficulty: 'sota',
    question: 'McClintock proposed that transposable elements act as "controlling elements" that regulate gene expression — decades before epigenetics. How do transposons regulate genes in modern molecular terms?',
    options: [
      'Transposon insertions can carry regulatory sequences (enhancers, promoters, insulators) that rewire gene expression, and host silencing of transposons via DNA methylation and histone modification can spread to silence nearby genes — creating heritable epigenetic states.',
      'Transposons exclusively function by physically disrupting coding sequences, producing loss-of-function mutations that reduce gene dosage and alter phenotypic ratios.',
      'Transposons encode small interfering RNAs (siRNAs) that bind to complementary mRNA sequences throughout the genome, creating a universal post-transcriptional silencing network.',
      'Transposons alter the codon usage of adjacent genes by inserting AT-rich sequences, slowing translation elongation and reducing protein output.'
    ],
    correctIndex: 0,
    explanation: 'McClintock\'s "controlling elements" hypothesis is now understood through epigenetics. Transposons carry cis-regulatory modules; when they insert near genes, they can donate enhancers or boundary elements. The host silences transposons via DNA methylation (CpG) and H3K9me3 histone marks, which can spread to adjacent genes — exactly the gene regulation McClintock observed in maize kernel color patterns.',
    realWorld: 'The human gene $FMR1$ (fragile X syndrome) is silenced by methylation spreading from an upstream CGG repeat expansion — a transposon-derived regulatory mechanism. Over 20% of human gene promoters contain transposon-derived regulatory sequences.',
    hint: 'They don\'t just break genes — they bring new regulatory switches and can be silenced by the cell\'s epigenetic machinery.',
  },
  {
    id: 20126, topic: 'barbara-mcclintock', difficulty: 'easy',
    question: 'McClintock won the 1983 Nobel Prize in Physiology or Medicine — as a solo laureate. Why was her recognition delayed by over 30 years after her initial discovery?',
    options: [
      'The scientific community initially dismissed her findings as peculiar to maize genetics. It wasn\'t until the 1970s–80s, when transposons were found in bacteria, flies, and humans, that her work was universally recognized as a fundamental discovery about all genomes.',
      'Her experimental methods were later found to contain statistical errors that required correction before the Nobel committee would consider her work.',
      'She refused to publish in English-language journals, limiting her audience to a small community of German-speaking plant geneticists.',
      'The Nobel committee had a policy against awarding prizes for botanical research until the rules were changed in 1980.'
    ],
    correctIndex: 0,
    explanation: 'McClintock presented her transposon findings at Cold Spring Harbor in 1951 to a skeptical audience. Most geneticists viewed genes as fixed on chromosomes and couldn\'t accept "jumping genes." When IS elements were found in E. coli (1970s) and P elements in Drosophila (1980s), the universality of her discovery became undeniable.',
    realWorld: 'McClintock\'s story is a landmark case in the sociology of science — showing how paradigm-shifting discoveries by women scientists faced compounded resistance from both conceptual conservatism and gender bias.',
    hint: 'Her maize results were considered too strange to be universal — until the same phenomenon appeared in bacteria and animals.',
  },
];
