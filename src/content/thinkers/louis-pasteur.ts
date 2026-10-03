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
    question: 'Which claim best captures the germ theory of infectious disease?',
    options: [
      'All microbes are harmful under normal conditions',
      'Disease arises only from chemical imbalance',
      'Specific microorganisms can cause infectious disease',
      'Microbes appear spontaneously in sterile tissue',
    ],
    correctIndex: 2,
    explanation: 'Germ theory established that microorganisms can be causal agents of infectious disease. Pasteur\'s experiments helped displace spontaneous-generation and miasma-only explanations; Koch later formalized criteria for linking particular microbes to particular diseases.',
    realWorld: 'Germ theory underpins aseptic technique, microbiological diagnosis, vaccination, and infection control.',
    hint: 'The key idea is causation by microorganisms, not that every microbe is harmful.',
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
