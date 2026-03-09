import type { Question } from '../types';

export const williamPerkinQuestions: Question[] = [
  {
    id: 21301, topic: 'william-perkin', difficulty: 'easy',
    question: 'William Perkin accidentally discovered mauveine in 1856 while trying to synthesize:',
    options: ['Quinine — the antimalarial drug — from coal tar aniline', 'Aspirin from salicylic acid', 'Indigo dye from plant extracts', 'Sulfuric acid from sulfur'],
    correctIndex: 0,
    explanation: 'The 18-year-old Perkin was attempting to synthesize quinine by oxidizing aniline with potassium dichromate. Instead, he got a purple residue that turned out to be the first synthetic aniline dye — mauveine.',
    realWorld: 'Mauveine launched the entire synthetic dye industry, which evolved into the modern pharmaceutical and chemical industries (Bayer, BASF, Hoechst all started as dye companies).',
    hint: 'He was trying to make a medicine but accidentally created a color.',
  },
  {
    id: 21302, topic: 'william-perkin', difficulty: 'hard',
    question: 'Perkin\'s industrial synthesis of mauveine was significant because it demonstrated:',
    options: ['That coal tar — an industrial waste product — could be the feedstock for valuable synthetic chemicals', 'That natural dyes were chemically identical to synthetic ones', 'That aniline could only be extracted from living organisms', 'That purple dyes were impossible to make cheaply'],
    correctIndex: 0,
    explanation: 'Coal tar, a byproduct of gas lighting, contained aniline and other aromatic amines. Perkin showed these "waste" chemicals could be transformed into commercially valuable products — birthing the coal tar chemistry industry.',
    realWorld: 'The coal tar → dye → pharma pipeline created the German chemical industry. Aspirin, heroin, and most early drugs came from companies that started making dyes from coal tar.',
    hint: 'One era\'s industrial waste became the next era\'s chemical feedstock.',
  },
  {
    id: 21303, topic: 'william-perkin', difficulty: 'sota',
    question: 'Later in his career, Perkin developed a reaction now named after him. The Perkin reaction involves:',
    options: ['Condensation of an aromatic aldehyde with an acid anhydride in the presence of a base to form an α,β-unsaturated acid', 'Reduction of a ketone to an alcohol using sodium borohydride', 'Free radical polymerization of styrene', 'Diels-Alder cycloaddition of a diene with a dienophile'],
    correctIndex: 0,
    explanation: 'The Perkin reaction: $\\text{ArCHO} + (\\text{RCO})_2\\text{O} \\xrightarrow{\\text{base}} \\text{ArCH=C(R)COOH}$. It forms cinnamic acid derivatives through an aldol-type condensation followed by dehydration.',
    realWorld: 'Cinnamic acid derivatives are precursors to flavoring agents, fragrances, and pharmaceutical intermediates used worldwide.',
    hint: 'An aldehyde + an anhydride + a base catalyst → an unsaturated acid.',
  },
];
