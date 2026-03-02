import type { Question } from '../types';

export const donaldKnuthQuestions: Question[] = [
  {
    id: 20801, topic: 'donald-knuth', difficulty: 'easy',
    question: 'Donald Knuth is best known for:',
    options: ['The Art of Computer Programming (TAOCP) and creating TeX typesetting', 'Inventing the internet', 'Creating the C programming language', 'Founding Google'],
    correctIndex: 0,
    explanation: 'TAOCP is the definitive multi-volume analysis of algorithms. Knuth also created TeX (which became LaTeX) because he was dissatisfied with the typesetting of his own books.',
    realWorld: 'Every scientific paper in mathematics, physics, and CS is typeset using TeX/LaTeX — Knuth\'s system has been the standard for 40+ years.',
    hint: 'He wrote THE book on algorithms and also built the system used to typeset scientific papers worldwide.',
  },
  {
    id: 20802, topic: 'donald-knuth', difficulty: 'hard',
    question: 'Knuth\'s "literate programming" paradigm advocates:',
    options: ['Writing programs as human-readable documents with interspersed code, prioritizing explanation over compilation order', 'Writing the shortest possible code', 'Using only assembly language for performance', 'Avoiding all comments in code'],
    correctIndex: 0,
    explanation: 'Literate programming treats a program as a work of literature — the source combines prose explanation with code chunks, woven together for human understanding and tangled for machine compilation.',
    realWorld: 'Jupyter notebooks and R Markdown are modern descendants of literate programming — mixing narrative, code, and results in a single document.',
    hint: 'Programs should be written for humans to read, and only incidentally for machines to execute.',
  },
  {
    id: 20803, topic: 'donald-knuth', difficulty: 'sota',
    question: 'The Knuth-Morris-Pratt (KMP) string matching algorithm achieves O(n+m) by:',
    options: ['Precomputing a failure function that avoids re-examining characters after a mismatch', 'Using hash functions to compare substrings', 'Sorting the text before searching', 'Applying dynamic programming to all substrings'],
    correctIndex: 0,
    explanation: 'KMP\'s failure function π[j] tells how far to shift the pattern after a mismatch at position j, exploiting the pattern\'s internal structure. No character in the text is examined more than twice.',
    realWorld: 'Text editors, DNA sequence alignment, and network intrusion detection (matching malware signatures in packet streams) all use KMP or its descendants.',
    hint: 'When a mismatch occurs, the pattern has already told you how far to skip — no need to back up in the text.',
  },
];
