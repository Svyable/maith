// emil-post.ts
import type { Question } from '../types';

export const emilPostQuestions: Question[] = [
  {
    id: 65000,
    topic: 'emil-post',
    difficulty: 'easy',
    question: 'Emil Post independently proved what alongside Turing?',
    options: [
      'Halting Problem undecidability (no TM decides H(M,w)=halt?)',
      'Rice Theorem (non-trivial properties undecidable)',
      'Busy Beaver uncomputability',
      'Kolmogorov complexity incomputability'
    ],
    correctIndex: 0,
    explanation: 'No algorithm exists determining if TM M halts on input w. Post-Turing equivalence.',
    realWorld: 'Fundamental limit of computation; antivirus/termination analysis impossible.',
    hint: 'No program predicts if another program stops running.'
  },
  {
    id: 65001,
    topic: 'emil-post',
    difficulty: 'hard',
    question: 'Post Correspondence Problem (PCP) asks?',
    options: [
      '∃ sequence i₁,i₂,… where upper strings uᵢₖ = lower strings vᵢₖ',
      'CFG equivalence decision',
      'Regular language intersection emptiness',
      'Parsing ambiguous grammars'
    ],
    correctIndex: 0,
    explanation: 'Given domino pairs (uᵢ,vᵢ), find matching sequence. Undecidable even for |uᵢ|,|vᵢ|≤3.',
    realWorld: 'Simplest undecidable problem; models DNA/tiling limits.',
    hint: 'String tiles must match top=bottom in some order.'
  },
  {
    id: 65002,
    topic: 'emil-post',
    difficulty: 'sota',
    question: 'Post canonical systems are?',
    options: [
      'Production rules P: α→β prove Γ⊢α (semi-Thue precursor to TM)',
      'Lambda calculus β-reduction',
      'Markov normal algorithms',
      'Tag systems (3-symbol input)'
    ],
    correctIndex: 0,
    explanation: 'Axioms + productions generate theorems. Post proved undecidability for Turing-complete systems.',
    realWorld: 'Formal grammar ancestor; word problem undecidability.',
    hint: 'Rewrite rules prove undecidability pre-Turing.'
  }
];
