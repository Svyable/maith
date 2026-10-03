// pasteur.ts
import type { Question } from '../types';

export const louisPasteurQuestions: Question[] = [
  {
    id: 50010,
    topic: 'louis-pasteur',
    difficulty: 'easy',
    question: 'Pasteur disproved what with swan-neck flasks?',
    options: [
      'Spontaneous generation (sterile broth stays clear)',
      'Cell theory',
      'Germ theory of disease',
      'Fermentation requires yeast'
    ],
    correctIndex: 0,
    explanation: 'Curved necks trap dust/microbes; broth stays sterile indefinitely when unopened.',
    realWorld: 'Birth of aseptic technique, modern sterilization.',
    hint: 'Goose-neck bottle kills invisible broth spoilers.',
  },
  {
    id: 50011,
    topic: 'louis-pasteur',
    difficulty: 'hard',
    question: 'Which idea did Pasteur\'s experiments most strongly support in the development of germ theory?',
    options: [
      'Microorganisms arise spontaneously whenever nutrients are present',
      'Microorganisms can drive biological processes and contribute to disease',
      'All infectious diseases are caused by the same universal microorganism',
      'Disease transmission depends only on inherited traits of the host',
    ],
    correctIndex: 1,
    explanation: 'Pasteur showed that microorganisms come from existing microorganisms and demonstrated their roles in processes such as fermentation, helping establish the broader germ theory later sharpened by Koch and others.',
    realWorld: 'The shift toward microbial causation transformed sterilization, infection control, vaccination, and laboratory microbiology.',
    hint: 'The key change was from spontaneous generation toward causal roles for microorganisms.',
    reviewedAt: '2026-10-02',
  },
  {
    id: 50012,
    topic: 'louis-pasteur',
    difficulty: 'sota',
    question: 'Pasteurization kills what ($62.8^\\circ C$, 30min)?',
    options: [
      'Mycobacterium tuberculosis, Salmonella ($D_{63^\\circ C} \\approx 2.5$min)',
      'Clostridium botulinum spores',
      'Yeast ($S. cerevisiae$)',
      'Viruses (polio)'
    ],
    correctIndex: 0,
    explanation: 'Log-linear kill: $N_t = N_0 10^{-t/D}$. TB/Salmonella destroyed, milk safe.',
    realWorld: '$72^\\circ C/15s$ (HTST) standard today.',
    hint: 'Milk treatment named after him.',
  }
];
