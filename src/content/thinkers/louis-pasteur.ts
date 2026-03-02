// pasteur.ts
import type { Question } from '../types';

export const pasteurQuestions: Question[] = [
  {
    id: 50010,
    topic: 'pasteur',
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
    topic: 'pasteur',
    difficulty: 'hard',
    question: 'Pasteur\'s germ theory showed?',
    options: [
      'Specific microbes cause specific diseases ($1\\leftrightarrow 1$)'
    ],
    correctIndex: 0,
    explanation: 'Anthrax (Bacillus anthracis), chicken cholera (Pasteurella) - isolated pure cultures.',
    realWorld: 'Koch built directly on this foundation.',
    hint: 'Each germ = each disease.',
  },
  {
    id: 50012,
    topic: 'pasteur',
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
