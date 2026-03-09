import type { Question } from '../types';

export const anastasWarnerQuestions: Question[] = [
  {
    id: 22601, topic: 'anastas-warner', difficulty: 'easy',
    question: 'Paul Anastas and John Warner\'s 12 Principles of Green Chemistry include the principle of "atom economy," which means:',
    options: ['Designing reactions so that maximum atoms from reactants end up in the desired product, minimizing waste', 'Using the cheapest possible reagents', 'Minimizing the number of atoms in the final product', 'Using only natural (non-synthetic) starting materials'],
    correctIndex: 0,
    explanation: 'Atom economy = (mass of desired product / mass of all reactants) × 100%. A Diels-Alder reaction has 100% atom economy (all atoms incorporated), while a Wittig reaction produces stoichiometric Ph₃P=O waste.',
    realWorld: 'Pharmaceutical companies now evaluate reactions by atom economy alongside yield — reducing waste saves millions in disposal costs and reduces environmental impact.',
    hint: 'It\'s about efficiency: what fraction of the atoms you start with end up in the product you want?',
  },
  {
    id: 22602, topic: 'anastas-warner', difficulty: 'hard',
    question: 'Green chemistry Principle #4 states that chemical products should be designed to:',
    options: ['Preserve efficacy of function while reducing toxicity — designing safer chemicals by molecular modification', 'Maximize potency regardless of safety', 'Be as complex as possible to avoid counterfeiting', 'Use only naturally occurring molecular scaffolds'],
    correctIndex: 0,
    explanation: 'Designing Safer Chemicals means understanding structure-toxicity relationships and modifying molecules to eliminate hazardous properties while maintaining function. E.g., replacing toxic solvents with ionic liquids or supercritical CO₂.',
    realWorld: 'SC Johnson reformulated their products using green chemistry principles, eliminating harmful solvents while maintaining cleaning performance — proving green chemistry is commercially viable.',
    hint: 'The goal is to make chemicals that work just as well but are inherently less harmful.',
  },
  {
    id: 22603, topic: 'anastas-warner', difficulty: 'sota',
    question: 'The E-factor (environmental factor), developed by Roger Sheldon and complementing green chemistry principles, is defined as:',
    options: ['$E = \\frac{\\text{mass of total waste}}{\\text{mass of desired product}}$, where lower is better', '$E = \\frac{\\text{energy consumed}}{\\text{product yield}}$', '$E = \\frac{\\text{number of steps}}{\\text{overall yield}}$', '$E = \\frac{\\text{CO}_2 \\text{ emitted}}{\\text{product mass}}$'],
    correctIndex: 0,
    explanation: 'The E-factor quantifies waste generation. Bulk chemicals: E ≈ 1-5, fine chemicals: E ≈ 5-50, pharmaceuticals: E ≈ 25-100+. A blockbuster drug producing 100 kg waste per kg product has an E-factor of 100.',
    realWorld: 'Pfizer reduced the E-factor of sildenafil (Viagra) synthesis from 105 to 7 by redesigning the route — saving thousands of tons of waste annually.',
    hint: 'If you produce 50 kg of waste for every 1 kg of product, your E-factor is 50.',
  },
];
