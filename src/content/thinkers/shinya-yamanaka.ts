import type { Question } from '../types';

export const shinyaYamanakaQuestions: Question[] = [
  {
    id: 31530, topic: 'shinya-yamanaka', difficulty: 'easy',
    question: 'Shinya Yamanaka won the 2012 Nobel Prize for discovering that mature cells can be reprogrammed to become pluripotent. What are these reprogrammed cells called?',
    options: [
      'Induced pluripotent stem cells (iPSCs) — adult cells (e.g., skin fibroblasts) reprogrammed to an embryonic-like state by introducing just four transcription factors.',
      'Totipotent stem cells — cells derived from the morula stage of embryonic development that can form any cell type including placenta.',
      'Mesenchymal stem cells (MSCs) — multipotent cells isolated from bone marrow that can differentiate into bone, cartilage, and fat.',
      'Hematopoietic stem cells (HSCs) — blood-forming cells in bone marrow that generate all blood and immune cell lineages.'
    ],
    correctIndex: 0,
    explanation: 'Yamanaka showed that introducing four transcription factors — Oct4, Sox2, Klf4, and c-Myc (the "Yamanaka factors") — into differentiated mouse fibroblasts could reprogram them into cells resembling embryonic stem cells, capable of forming any tissue in the body.',
    realWorld: 'iPSCs revolutionized medicine: patient-specific disease modeling, drug screening, and regenerative therapies without the ethical concerns of embryonic stem cells.',
    hint: 'Four genes can rewind a skin cell back to a stem cell — like resetting a clock.',
  },
  {
    id: 31531, topic: 'shinya-yamanaka', difficulty: 'hard',
    question: 'Yamanaka identified his four factors from an initial screen of 24 candidate genes. What are the "Yamanaka factors" and what role does each play in reprogramming?',
    options: [
      'Oct4 (master pluripotency regulator), Sox2 (co-activator of pluripotency genes), Klf4 (chromatin remodeler that opens silenced loci), and c-Myc (global transcriptional amplifier that accelerates proliferation and epigenetic resetting).',
      'p53 (tumor suppressor that gates cell cycle entry), Rb (retinoblastoma protein for G1 arrest), TERT (telomerase for immortalization), and Nanog (pluripotency maintenance factor).',
      'Wnt3a (canonical Wnt pathway activator), LIF (leukemia inhibitory factor for STAT3 signaling), BMP4 (bone morphogenetic protein for mesoderm suppression), and FGF2 (fibroblast growth factor for self-renewal).',
      'DNMT3a (de novo DNA methyltransferase), TET1 (methylcytosine dioxygenase), HDAC1 (histone deacetylase), and p300 (histone acetyltransferase).'
    ],
    correctIndex: 0,
    explanation: 'Oct4 and Sox2 form a heterodimer that activates pluripotency gene networks. Klf4 acts as a pioneer factor that opens compacted chromatin. c-Myc amplifies transcription genome-wide and accelerates cell proliferation, though it is also an oncogene — making early iPSCs tumorigenic. Later protocols replaced c-Myc with small molecules.',
    realWorld: 'Thomson\'s group independently found that Lin28 and Nanog could replace Klf4 and c-Myc, showing multiple reprogramming routes exist. Current protocols use mRNA delivery or small molecules to avoid genomic integration entirely.',
    hint: 'O, S, K, M — a master regulator, a co-activator, a chromatin opener, and a transcription amplifier.',
  },
  {
    id: 31532, topic: 'shinya-yamanaka', difficulty: 'sota',
    question: 'iPSC reprogramming involves dramatic epigenetic remodeling. What is the key epigenetic barrier that must be overcome, and what is the typical reprogramming efficiency?',
    options: [
      'Somatic cell identity is locked by DNA methylation at pluripotency gene promoters and H3K9me3 heterochromatin marks. These must be erased for reprogramming. Efficiency is typically only ~0.01–0.1% of transduced cells, reflecting the stochastic nature of complete epigenetic resetting.',
      'The nuclear lamina physically tethers differentiation genes to the nuclear periphery. Reprogramming requires complete lamin B1 degradation, occurring in ~5% of cells.',
      'Ribosomal RNA gene dosage limits reprogramming: only cells with >200 rDNA copies can sustain the high translation rates needed for pluripotency. This occurs in ~10% of fibroblasts.',
      'Mitochondrial DNA heteroplasmy must be resolved to a single haplotype for reprogramming to succeed, which occurs stochastically in ~1% of cells.'
    ],
    correctIndex: 0,
    explanation: 'Differentiated cells have methylated CpG islands at Oct4, Nanog, and other pluripotency promoters, plus repressive histone marks (H3K9me3, H3K27me3) maintaining lineage commitment. The Yamanaka factors must overcome these barriers — but most cells fail, yielding partially reprogrammed colonies. The low efficiency (~0.01–0.1%) reflects the stochastic, multi-step nature of complete epigenetic erasure.',
    realWorld: 'Understanding reprogramming barriers led to the use of small molecules (e.g., valproic acid, vitamin C) that enhance efficiency 10–100×. In 2023, chemical-only reprogramming without any transcription factors was achieved.',
    hint: 'Chemical "locks" on DNA (methylation) and histones (H3K9me3) guard cell identity — only ~1 in 1,000–10,000 cells fully overcome them.',
  },
];
