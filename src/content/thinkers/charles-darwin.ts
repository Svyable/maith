import type { Question } from '../types';

export const darwinQuestions: Question[] = [
  {
    id: 96028, topic: 'charles-darwin', difficulty: 'easy',
    question: 'Charles Darwin\'s theory of natural selection states that organisms with traits better suited to their environment:',
    options: ['Are more likely to survive and reproduce, passing those traits on', 'Always grow larger than their competitors', 'Consciously choose to adapt', 'Evolve within a single generation'],
    correctIndex: 0,
    explanation: 'Natural selection is the differential survival and reproduction of individuals due to differences in phenotype — traits that help survival get passed to offspring more often.',
    realWorld: 'Natural selection explains antibiotic resistance in bacteria, pesticide resistance in insects, and the diversity of life from a common ancestor.',
    hint: 'Survival of the fittest — but "fittest" means best adapted, not strongest.',
  },
  {
    id: 96029, topic: 'charles-darwin', difficulty: 'hard',
    question: 'Darwin\'s finches on the Galápagos Islands provided key evidence for evolution because their beak shapes:',
    options: ['Varied systematically with food sources on different islands, showing adaptive radiation', 'Were all identical despite different environments', 'Changed within individual birds\' lifetimes', 'Were inherited from mainland species unchanged'],
    correctIndex: 0,
    explanation: 'Different islands had different food sources (seeds, insects, cacti), and finch beaks diversified to exploit each niche — a textbook example of adaptive radiation from a common ancestor.',
    realWorld: 'The Grants\' 40-year study on Galápagos finches directly observed natural selection in action — beak sizes shifted measurably during droughts within a single generation.',
    hint: 'Same ancestor, different islands, different beaks.',
  },
  {
    id: 96030, topic: 'charles-darwin', difficulty: 'sota',
    question: 'Modern phylogenomics has confirmed Darwin\'s "tree of life" hypothesis using:',
    options: ['Whole-genome DNA sequence comparisons across all domains of life', 'Fossil morphology alone', 'Protein crystal structures', 'Behavioral similarity indices'],
    correctIndex: 0,
    explanation: 'Comparing entire genomes reveals shared mutations, gene duplications, and synteny blocks that precisely reconstruct evolutionary relationships — confirming and refining Darwin\'s tree.',
    realWorld: 'Phylogenomics revealed that archaea and eukaryotes share a more recent common ancestor than previously thought, reshaping the tree of life into two primary domains.',
    hint: 'DNA is the ultimate historical record of evolution.',
  },
];
