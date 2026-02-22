import type { Question } from '../types';

export const lavoisierQuestions: Question[] = [
  {
    id: 96020, topic: 'lavoisier', difficulty: 'easy',
    question: 'Lavoisier is called the "Father of Modern Chemistry" primarily for:',
    options: ['Disproving phlogiston theory and discovering the role of oxygen in combustion', 'Inventing the periodic table', 'Discovering radioactivity', 'Synthesizing the first organic compound'],
    correctIndex: 0,
    explanation: 'Lavoisier showed that combustion is a reaction with oxygen, not the release of a mythical substance called "phlogiston" — transforming chemistry into a quantitative science.',
    realWorld: 'His oxygen theory of combustion is the foundation of all modern combustion engineering, from car engines to rocket propulsion.',
    hint: 'He proved that burning requires a specific gas in air.',
  },
  {
    id: 96021, topic: 'lavoisier', difficulty: 'hard',
    question: 'Lavoisier\'s law of conservation of mass states:',
    options: ['Mass is neither created nor destroyed in a chemical reaction', 'Energy equals mass times the speed of light squared', 'Entropy always increases', 'Gases expand proportionally to temperature'],
    correctIndex: 0,
    explanation: 'By carefully weighing reactants and products in sealed vessels, Lavoisier proved that total mass is conserved in all chemical reactions — the bedrock of stoichiometry.',
    realWorld: 'Every balanced chemical equation in every textbook relies on this principle.',
    hint: 'He used precision balances to track every gram of matter.',
  },
  {
    id: 96022, topic: 'lavoisier', difficulty: 'sota',
    question: 'Lavoisier\'s systematic naming of chemical compounds (with Guyton de Morveau) introduced:',
    options: ['Nomenclature based on elemental composition (e.g., "sulfate" for sulfur-oxygen compounds)', 'Naming by alchemical symbols', 'Numbering compounds sequentially', 'Classification by color and taste'],
    correctIndex: 0,
    explanation: 'The Méthode de Nomenclature Chimique (1787) replaced alchemical names with systematic names reflecting composition — creating the rational naming system still used today.',
    realWorld: 'IUPAC nomenclature, used by every chemist worldwide, descends directly from Lavoisier\'s system.',
    hint: 'Names like "sulfuric acid" and "copper sulfate" tell you what elements are present.',
  },
];
