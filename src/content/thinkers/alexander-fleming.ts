import type { Question } from '../types';

export const alexanderFlemingQuestions: Question[] = [
  {
    id: 96040, topic: 'alexander-fleming', difficulty: 'easy',
    question: 'Alexander Fleming accidentally discovered penicillin when he noticed:',
    options: ['A mold (Penicillium) killing bacteria on a petri dish he\'d left uncovered', 'A virus destroying cancer cells', 'Sunlight sterilizing water', 'Heat killing all microorganisms'],
    correctIndex: 0,
    explanation: 'In 1928, Fleming returned from vacation to find a mold contamination on a Staphylococcus plate — with a clear zone where bacteria couldn\'t grow.',
    realWorld: 'Penicillin has saved an estimated 200+ million lives and launched the antibiotic era.',
    hint: 'A famously "messy" lab led to one of medicine\'s greatest discoveries.',
  },
  {
    id: 96041, topic: 'alexander-fleming', difficulty: 'hard',
    question: 'Penicillin works by:',
    options: ['Inhibiting bacterial cell wall synthesis (transpeptidase/PBP binding)', 'Destroying bacterial DNA', 'Blocking protein synthesis at ribosomes', 'Disrupting cell membranes'],
    correctIndex: 0,
    explanation: 'Penicillin binds to penicillin-binding proteins (PBPs), inhibiting transpeptidase and preventing cross-linking of peptidoglycan — the bacterial cell wall weakens and bursts.',
    realWorld: 'Understanding this mechanism led to the development of hundreds of β-lactam antibiotics (amoxicillin, cephalosporins).',
    hint: 'It targets something animal cells don\'t have — a rigid cell wall.',
  },
  {
    id: 96042, topic: 'alexander-fleming', difficulty: 'sota',
    question: 'Antimicrobial resistance (AMR) is projected by WHO to cause annually by 2050:',
    options: ['Up to 10 million deaths, surpassing cancer', '1 million deaths', '100,000 deaths', '500,000 deaths'],
    correctIndex: 0,
    explanation: 'The O\'Neill Report (2016) estimates AMR could kill 10 million people/year by 2050 and cost $100 trillion in lost GDP — Fleming himself warned of resistance in his 1945 Nobel speech.',
    realWorld: 'AI-driven antibiotic discovery (e.g., halicin, 2020) and phage therapy are emerging as solutions to the AMR crisis.',
    hint: 'Fleming warned about this in his Nobel Prize acceptance speech.',
  },
];
