import type { Question } from '../types';

export const robertGrubbsQuestions: Question[] = [
  {
    id: 22101, topic: 'robert-grubbs', difficulty: 'easy',
    question: 'Robert Grubbs shared the 2005 Nobel Prize for developing catalysts for olefin metathesis. This reaction involves:',
    options: ['Exchange of substituents between two alkenes via breaking and reforming C=C double bonds', 'Addition of hydrogen across a double bond', 'Oxidation of alkenes to epoxides', 'Polymerization through radical chain mechanisms'],
    correctIndex: 0,
    explanation: 'Olefin metathesis swaps groups across C=C bonds: $\\text{R}_1\\text{CH=CHR}_2 + \\text{R}_3\\text{CH=CHR}_4 \\rightleftharpoons \\text{R}_1\\text{CH=CHR}_3 + \\text{R}_2\\text{CH=CHR}_4$. Grubbs\' ruthenium catalysts made this reaction practical for organic synthesis.',
    realWorld: 'Metathesis is used to make pharmaceuticals (hepatitis C drug simeprevir), advanced polymers, and insect pheromones for pest control.',
    hint: 'The word "metathesis" comes from Greek meaning "transposition" — groups change partners.',
  },
  {
    id: 22102, topic: 'robert-grubbs', difficulty: 'hard',
    question: 'Grubbs\' catalysts (e.g., Grubbs 2nd generation) are preferred over Schrock\'s molybdenum catalysts because:',
    options: ['They are air- and moisture-stable, functional-group tolerant, and work in protic solvents', 'They are cheaper per gram of metal', 'They work only at extremely high temperatures', 'They are purely heterogeneous catalysts'],
    correctIndex: 0,
    explanation: 'Grubbs\' Ru-based catalysts tolerate water, air, and a wide range of functional groups (alcohols, amides, esters). Schrock\'s Mo-based catalysts are more reactive but extremely air/moisture sensitive, requiring gloveboxes.',
    realWorld: 'The robustness of Grubbs catalysts enabled metathesis in pharmaceutical manufacturing, where functional group compatibility is essential.',
    hint: 'Ruthenium is a "late" transition metal — its catalysts are often more tolerant of polar functional groups.',
  },
  {
    id: 22103, topic: 'robert-grubbs', difficulty: 'sota',
    question: 'The Chauvin mechanism for olefin metathesis proceeds through:',
    options: ['A [2+2] cycloaddition between a metal carbene and an alkene, forming a metallacyclobutane intermediate that fragments', 'A concerted [4+2] Diels-Alder mechanism', 'A radical chain process', 'An SN2 displacement at the double bond'],
    correctIndex: 0,
    explanation: 'Yves Chauvin proposed (1971) that metathesis involves: (1) [2+2] cycloaddition of M=CHR with alkene → metallacyclobutane, (2) retro-[2+2] fragmentation to give new M=CHR\' + new alkene. Grubbs\' catalysts operate via this mechanism.',
    realWorld: 'Understanding the Chauvin mechanism enabled rational catalyst design — each generation of Grubbs catalyst was designed to optimize metallacyclobutane stability and turnover.',
    hint: 'A four-membered ring containing the metal forms and breaks in each catalytic cycle.',
  },
];
