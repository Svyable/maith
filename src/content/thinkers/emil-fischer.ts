import type { Question } from '../types';

export const emilFischerQuestions: Question[] = [
  {
    id: 22401, topic: 'emil-fischer', difficulty: 'easy',
    question: 'Emil Fischer\'s "lock-and-key" model of enzyme specificity proposes that:',
    options: ['An enzyme\'s active site has a rigid shape complementary to its substrate, like a lock fitting a specific key', 'Enzymes can catalyze any reaction regardless of substrate shape', 'Substrates change the enzyme\'s shape completely', 'Enzymes work by thermal activation alone'],
    correctIndex: 0,
    explanation: 'Fischer proposed in 1894 that enzyme-substrate binding requires geometric complementarity. Though later refined by Koshland\'s "induced fit" model, the lock-and-key concept remains foundational for understanding molecular recognition.',
    realWorld: 'Modern drug design exploits lock-and-key principles — drugs are designed to fit enzyme active sites with atomic precision (e.g., HIV protease inhibitors).',
    hint: 'If the substrate doesn\'t fit the enzyme\'s shape, no catalysis occurs — specificity through geometry.',
  },
  {
    id: 22402, topic: 'emil-fischer', difficulty: 'hard',
    question: 'Fischer determined the stereochemistry of all 16 aldohexose sugars. His convention for representing stereochemistry uses:',
    options: ['Fischer projections — vertical bonds go behind the plane, horizontal bonds come forward, with the most oxidized carbon at top', 'Newman projections showing rotational conformations', 'Ball-and-stick models only', 'Electron density maps from X-ray crystallography'],
    correctIndex: 0,
    explanation: 'Fischer projections flatten a tetrahedral carbon into 2D: vertical lines recede from the viewer, horizontal lines project toward. This convention let Fischer systematically classify all sugar stereoisomers using a beautiful logical framework.',
    realWorld: 'Fischer projections are still taught in every organic chemistry course and used daily by biochemists to represent amino acid and sugar stereochemistry.',
    hint: 'A cross represents a chiral center: horizontal = coming toward you, vertical = going away.',
  },
  {
    id: 22403, topic: 'emil-fischer', difficulty: 'sota',
    question: 'Fischer\'s proof that glucose is an aldohexose with the D-configuration at C-5 required:',
    options: ['Systematic degradation (Ruff degradation) and chain extension (Kiliani-Fischer synthesis) combined with oxidation to dicarboxylic acids to determine relative configurations', 'X-ray crystallography of glucose crystals', 'NMR spectroscopy of glucose solutions', 'Mass spectrometry fragmentation patterns'],
    correctIndex: 0,
    explanation: 'Fischer used chemical logic: Ruff degradation shortened sugars by one carbon, Kiliani-Fischer synthesis lengthened them. Oxidizing both ends to dicarboxylic acids tested for internal symmetry. This tour de force assigned configurations to all stereocenters without any spectroscopic methods.',
    realWorld: 'Fischer\'s chemical-logic approach to stereochemistry predated X-ray by decades and remains a model of scientific reasoning — proving complex structures through indirect evidence.',
    hint: 'He couldn\'t "see" the molecules — he deduced their 3D shapes entirely through chemical reactions and logical elimination.',
  },
];
