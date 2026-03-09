import type { Question } from '../types';

export const justusVonLiebigQuestions: Question[] = [
  {
    id: 21201, topic: 'justus-von-liebig', difficulty: 'easy',
    question: 'Justus von Liebig\'s "Law of the Minimum" in agricultural chemistry states:',
    options: ['Plant growth is limited by the scarcest essential nutrient, not the total amount of nutrients available', 'Plants grow fastest when all nutrients are at maximum concentration', 'Only nitrogen matters for plant growth', 'Soil pH is the sole determinant of crop yield'],
    correctIndex: 0,
    explanation: 'Liebig\'s Law states that growth is controlled by the most limiting resource, not the total. Even if nitrogen and potassium are abundant, a phosphorus deficiency will cap growth.',
    realWorld: 'This principle guides modern fertilizer design, precision agriculture, and even ecological modeling of population limits.',
    hint: 'Think of a barrel with staves of different lengths — it holds water only to the shortest stave.',
  },
  {
    id: 21202, topic: 'justus-von-liebig', difficulty: 'hard',
    question: 'Liebig\'s Kaliapparat (potash bulb apparatus) revolutionized organic chemistry by enabling:',
    options: ['Quantitative elemental analysis of carbon and hydrogen in organic compounds via combustion', 'The synthesis of urea from inorganic materials', 'Distillation of essential oils at low pressure', 'Chromatographic separation of amino acids'],
    correctIndex: 0,
    explanation: 'The Kaliapparat absorbed CO₂ from combustion of organic samples in KOH solution, allowing precise gravimetric determination of carbon content. This made organic analysis routine and quantitative.',
    realWorld: 'Liebig\'s method trained a generation of chemists and standardized how molecular formulas were determined — the foundation for all of structural chemistry.',
    hint: 'Burn the compound, capture the CO₂, weigh it — then calculate the carbon content.',
  },
  {
    id: 21203, topic: 'justus-von-liebig', difficulty: 'sota',
    question: 'Liebig transformed chemistry education by establishing:',
    options: ['The first systematic teaching laboratory where students performed hands-on experiments, at the University of Giessen', 'The first chemistry textbook without any experiments', 'A purely lecture-based curriculum with no lab work', 'An apprenticeship system with no university involvement'],
    correctIndex: 0,
    explanation: 'Liebig\'s Giessen laboratory (est. 1826) was revolutionary — students learned by doing experiments, not just listening to lectures. His model of hands-on laboratory instruction was copied worldwide and remains the standard today.',
    realWorld: 'Every chemistry teaching lab in the world is a descendant of Liebig\'s model. He personally trained over 700 chemists who spread his methods across Europe and America.',
    hint: 'Before Liebig, chemistry was learned through lectures and private tutoring, not systematic lab work.',
  },
];
