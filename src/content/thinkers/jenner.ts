import type { Question } from '../types';

export const jennerQuestions: Question[] = [
  {
    id: 96050, topic: 'jenner', difficulty: 'easy',
    question: 'Edward Jenner\'s 1796 experiment demonstrated that inoculation with cowpox:',
    options: ['Provided immunity against smallpox', 'Cured tuberculosis', 'Prevented the common cold', 'Eliminated malaria'],
    correctIndex: 0,
    explanation: 'Jenner inoculated 8-year-old James Phipps with cowpox material, then showed he was immune to smallpox — creating the world\'s first vaccine.',
    realWorld: 'Vaccination (from "vacca" = cow) eradicated smallpox by 1980 — the only human disease completely eradicated.',
    hint: 'The word "vaccine" comes from the Latin word for cow.',
  },
  {
    id: 96051, topic: 'jenner', difficulty: 'hard',
    question: 'Jenner\'s vaccination works because cowpox and smallpox viruses:',
    options: ['Share enough antigenic similarity for cross-protective immunity', 'Are the same virus at different stages', 'Both produce identical symptoms', 'Share the same DNA sequence entirely'],
    correctIndex: 0,
    explanation: 'Cowpox virus (Variola vaccinia) is antigenically similar enough to smallpox (Variola major) that the immune system\'s response to cowpox cross-protects against smallpox.',
    realWorld: 'This principle of cross-reactivity underpins modern vaccine design, including using related viruses as vaccine vectors (e.g., adenovirus-based COVID vaccines).',
    hint: 'The immune system can\'t tell the difference between similar viruses.',
  },
  {
    id: 96052, topic: 'jenner', difficulty: 'sota',
    question: 'mRNA vaccine technology (used in COVID-19 vaccines) differs from Jenner\'s approach by:',
    options: ['Delivering genetic instructions for the body to produce antigens, rather than using whole pathogens', 'Using live viruses at full strength', 'Requiring multiple booster shots only', 'Working only against bacterial infections'],
    correctIndex: 0,
    explanation: 'mRNA vaccines encode spike protein instructions; ribosomes produce the antigen in situ, triggering immunity without any pathogen — a paradigm shift from Jenner\'s whole-virus approach.',
    realWorld: 'The Pfizer-BioNTech and Moderna COVID-19 vaccines were developed in record time using this technology, saving millions of lives.',
    hint: 'Instead of giving the virus, you give the recipe for one protein.',
  },
];
