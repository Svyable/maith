// claude-bernard.ts
import type { Question } from '../types';

export const claudeBernardQuestions: Question[] = [
  {
    id: 50070,
    topic: 'claude-bernard',
    difficulty: 'easy',
    question: 'Claude Bernard discovered?',
    options: [
      'Internal environment (milieu intérieur) - blood homeostasis',
      'Germ theory of disease',
      'DNA as genetic material',
      'Action potentials in nerves'
    ],
    correctIndex: 0,
    explanation: '[glucose]_blood = 4-6 mM despite meals/fasting via liver regulation.',
    realWorld: 'Basis of modern endocrinology and homeostasis.',
    hint: 'Body chemistry stays constant despite outside changes.'
  },
  {
    id: 50071,
    topic: 'claude-bernard',
    difficulty: 'hard',
    question: 'Bernard demonstrated liver glycogenesis by?',
    options: [
      'Puncturing rabbit livers → glucose syrup (glycogen breakdown)',
      'Muscle anaerobic glycolysis',
      'Kidney gluconeogenesis (C3→C6)',
      'Pancreas glycogenolysis regulation'
    ],
    correctIndex: 0,
    explanation: 'Surgical liver puncture yielded pure glucose solution → proved glycogen storage discovered.',
    realWorld: 'First direct evidence of metabolic reserves.',
    hint: 'Found sugar factory hidden in liver.'
  },
  {
    id: 50072,
    topic: 'claude-bernard',
    difficulty: 'sota',
    question: 'Bernard\'s curare acts by?',
    options: [
      'Blocking nicotinic ACh receptors at neuromuscular junction (no depolarization)',
      'Inhibiting Na⁺ channels (local anesthetic)',
      'GABA agonist (central sedation)',
      'Ca²⁺ channel blocker (muscle relaxation)'
    ],
    correctIndex: 0,
    explanation: 'Paralyzes skeletal muscle (respiratory diaphragm relatively resistant → breathing preserved).',
    realWorld: 'Ancestor of modern neuromuscular blockers in surgery.',
    hint: 'Stops muscle signals at nerve-muscle synapse, spares breathing.'
  }
];
