// sanger.ts
import type { Question } from '../types';

export const frederickSangerQuestions: Question[] = [
  {
    id: 50040,
    topic: 'frederick-sanger',
    difficulty: 'easy',
    question: 'Sanger sequencing uses what termination mechanism?',
    options: [
      'Chain-terminating 2′,4′-dideoxynucleotides (ddNTPs) block 3′-OH',
      'Maxam-Gilbert chemical cleavage at G, A+G, C, C+T',
      'Pyrosequencing luciferase glow per incorporation',
      'DNA pol I Klenow fragment complete genome synthesis'
    ],
    correctIndex: 0,
    explanation: 'ddNTPs lack 3′-OH; terminate synthesis at each A/C/G/T position. Four reactions → size-separated fragments.',
    realWorld: 'Human Genome Project benchmark; still clinical gold standard.',
    hint: 'Special nucleotides stop copying at every possible base.'
  },
  {
    id: 50041,
    topic: 'frederick-sanger',
    difficulty: 'hard',
    question: 'Sanger read length limit determined by?',
    options: [
      'Dye blob resolution collapse beyond ≈1000 bp (σ_peak>1 bp)',
      'GC bias causing polymerase stalling',
      'Homopolymer compression (AAA→A)',
      'Capillary electrophoresis voltage ramp'
    ],
    correctIndex: 0,
    explanation: 'Spectral overlap of dye-labeled ddNTPs creates indistinguishable peaks beyond ∼800-1000 bp.',
    realWorld: 'Defines Sanger vs NGS read length tradeoff.',
    hint: 'Color blobs merge in chromatogram after ∼1k bases.'
  },
  {
    id: 50042,
    topic: 'frederick-sanger',
    difficulty: 'sota',
    question: 'Optimal ddNTP:dNTP ratio for uniform coverage?',
    options: [
      'α=[ddNTP]/[dNTP]≈1% creates geometric distribution P(k)=(1-α)^(k-1)α',
      '10% (high termination density)',
      '0.1% (sparse coverage)',
      '50% (binary termination)'
    ],
    correctIndex: 0,
    explanation: 'Geometric distribution ensures ≈1 termination per 100 bp → uniform peak heights across read.',
    realWorld: 'Precise α calibration = publication-quality chromatograms.',
    hint: 'Rare terminators give smooth even coverage.'
  }
];
