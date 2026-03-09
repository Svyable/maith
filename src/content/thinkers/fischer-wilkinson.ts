import type { Question } from '../types';

export const fischerWilkinsonQuestions: Question[] = [
  {
    id: 21901, topic: 'fischer-wilkinson', difficulty: 'easy',
    question: 'Ernst Otto Fischer and Geoffrey Wilkinson shared the 1973 Nobel Prize for their work on ferrocene. Ferrocene ($\\text{Fe(C}_5\\text{H}_5\\text{)}_2$) has a "sandwich" structure because:',
    options: ['An iron atom is sandwiched between two parallel cyclopentadienyl rings, bonded to all 10 carbons simultaneously', 'Iron is bonded to only one carbon on each ring', 'The rings are perpendicular to each other', 'Iron sits outside both rings'],
    correctIndex: 0,
    explanation: 'Ferrocene was the first recognized "sandwich compound" — Fe²⁺ sits symmetrically between two planar C₅H₅⁻ rings, with η⁵ (eta-5) bonding to all five carbons of each ring simultaneously.',
    realWorld: 'Ferrocene derivatives are used as fuel additives, cancer drug candidates (ferroquine), and electrochemical reference standards.',
    hint: 'The metal is η⁵-bonded — meaning it interacts with all five carbons of each ring, not just one.',
  },
  {
    id: 21902, topic: 'fischer-wilkinson', difficulty: 'hard',
    question: 'The 18-electron rule in organometallic chemistry predicts that ferrocene is stable because:',
    options: ['Fe²⁺ (6 d-electrons) + 2 × Cp⁻ (6 π-electrons each) = 18 electrons, filling all bonding orbitals', 'It has exactly 8 valence electrons like a noble gas', 'Iron always forms 18-electron complexes', 'The 18-electron rule only applies to carbonyl complexes'],
    correctIndex: 0,
    explanation: 'Fe²⁺ has 6 d-electrons. Each Cp⁻ donates 6 electrons (3 pairs from π system). Total: 6 + 12 = 18 electrons. This fills all nine metal-based molecular orbitals, giving maximum stability — analogous to the octet rule for main-group elements.',
    realWorld: 'The 18-electron rule guides catalyst design — catalytic intermediates often have 16 electrons (one empty site for substrate binding).',
    hint: 'Count the metal\'s d-electrons plus all electrons donated by the ligands.',
  },
  {
    id: 21903, topic: 'fischer-wilkinson', difficulty: 'sota',
    question: 'Fischer-type and Schrock-type carbene complexes differ fundamentally in:',
    options: ['Their electronic structure: Fischer carbenes have electrophilic carbon (singlet, π-donor heteroatom), Schrock carbenes have nucleophilic carbon (triplet, no heteroatom stabilization)', 'Their color only', 'Fischer carbenes contain carbon while Schrock carbenes do not', 'Their solubility in water'],
    correctIndex: 0,
    explanation: 'Fischer carbenes ($\\text{M}=\\text{CR(OR\')}$) have a singlet carbene stabilized by π-donation from a heteroatom, making the carbon electrophilic. Schrock carbenes ($\\text{M}=\\text{CR}_2$) have a triplet carbene with nucleophilic character — essential for olefin metathesis.',
    realWorld: 'Schrock-type carbenes in molybdenum and tungsten complexes enabled the development of olefin metathesis — the basis for new polymers and pharmaceuticals.',
    hint: 'The presence or absence of a π-donor substituent on carbon determines whether the carbene is electrophilic or nucleophilic.',
  },
];
