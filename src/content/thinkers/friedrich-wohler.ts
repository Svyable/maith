import type { Question } from '../types';

export const friedrichWohlerQuestions: Question[] = [
  {
    id: 21001, topic: 'friedrich-wohler', difficulty: 'easy',
    question: 'Friedrich Wöhler\'s 1828 synthesis of urea from ammonium cyanate ($\\text{NH}_4\\text{OCN} \\xrightarrow{\\Delta} \\text{(NH}_2\\text{)}_2\\text{CO}$) disproved:',
    options: ['Vitalism — the idea that organic compounds require a "vital force" from living organisms', 'The law of conservation of mass', 'Dalton\'s atomic theory', 'The phlogiston theory of combustion'],
    correctIndex: 0,
    explanation: 'Wöhler showed that an organic compound (urea) could be made from purely inorganic starting materials, demolishing the vitalist belief that organic molecules needed a mysterious life force.',
    realWorld: 'This experiment launched synthetic organic chemistry — without it, we wouldn\'t have synthetic drugs, plastics, or fertilizers.',
    hint: 'Before Wöhler, chemists believed only living organisms could produce "organic" substances.',
  },
  {
    id: 21002, topic: 'friedrich-wohler', difficulty: 'hard',
    question: 'Wöhler\'s urea synthesis is an example of which type of chemical rearrangement?',
    options: ['An isomeric rearrangement — ammonium cyanate and urea are isomers with formula $\\text{CH}_4\\text{N}_2\\text{O}$', 'A redox reaction involving electron transfer', 'An acid-base neutralization', 'A radical chain mechanism'],
    correctIndex: 0,
    explanation: 'Ammonium cyanate (NH₄OCN) and urea ((NH₂)₂CO) share the molecular formula CH₄N₂O but differ in atomic connectivity. The conversion is an isomeric rearrangement driven by thermodynamic stability — urea is the more stable isomer.',
    realWorld: 'Understanding isomerism is fundamental to pharmaceutical design, where different isomers of the same formula can have vastly different biological activities.',
    hint: 'Both compounds have the same atoms — they\'re just arranged differently.',
  },
  {
    id: 21003, topic: 'friedrich-wohler', difficulty: 'sota',
    question: 'Wöhler also co-discovered which element and isolated which metal, both in 1827–1828?',
    options: ['He co-discovered aluminum isolation (via potassium reduction of AlCl₃) and independently isolated beryllium', 'He discovered oxygen and isolated platinum', 'He discovered nitrogen and isolated titanium', 'He co-discovered silicon and isolated chromium'],
    correctIndex: 0,
    explanation: 'Wöhler isolated aluminum by reducing anhydrous aluminum chloride with potassium metal, and independently isolated beryllium by the same approach — demonstrating that his chemical skills extended far beyond organic chemistry.',
    realWorld: 'Aluminum is now the most widely used non-ferrous metal on Earth. Wöhler\'s reduction method was a precursor to the Hall-Héroult process that made aluminum cheap.',
    hint: 'He used alkali metal reduction to isolate light metals from their chlorides.',
  },
];
