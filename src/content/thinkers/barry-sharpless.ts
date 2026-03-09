import type { Question } from '../types';

export const barrySharplessQuestions: Question[] = [
  {
    id: 22201, topic: 'barry-sharpless', difficulty: 'easy',
    question: 'Barry Sharpless coined the term "click chemistry" to describe reactions that are:',
    options: ['High-yielding, wide in scope, stereospecific, simple to perform, and generate only harmless byproducts', 'Extremely slow but highly selective', 'Only possible in organic solvents', 'Requiring expensive palladium catalysts'],
    correctIndex: 0,
    explanation: 'Click chemistry describes reactions that are modular, thermodynamically favorable, and give near-quantitative yields with minimal purification. The copper-catalyzed azide-alkyne cycloaddition (CuAAC) is the prototypical click reaction.',
    realWorld: 'Click chemistry is used in drug discovery, bioconjugation (attaching drugs to antibodies), materials science, and even DNA nanotechnology.',
    hint: 'Like clicking Lego bricks together — easy, reliable, and the pieces fit perfectly.',
  },
  {
    id: 22202, topic: 'barry-sharpless', difficulty: 'hard',
    question: 'Sharpless\'s asymmetric epoxidation uses titanium tetraisopropoxide, diethyl tartrate, and TBHP to convert allylic alcohols to epoxides with:',
    options: ['Predictable enantioselectivity (>90% ee) determined by the chirality of the tartrate ligand', 'Racemic products always', 'No selectivity for the epoxide geometry', 'Only cis-epoxides regardless of substrate'],
    correctIndex: 0,
    explanation: 'The Sharpless epoxidation delivers one enantiomer of the epoxide preferentially (often >95% ee). A simple mnemonic predicts which face of the alkene gets oxidized based on whether (+)- or (-)-tartrate is used.',
    realWorld: 'Asymmetric epoxidation enabled the synthesis of single-enantiomer drugs, including the anti-HIV drug indinavir.',
    hint: 'The tartrate acts as a chiral template — its handedness determines which face of the double bond gets oxidized.',
  },
  {
    id: 22203, topic: 'barry-sharpless', difficulty: 'sota',
    question: 'Sharpless won his second Nobel Prize (2022) for developing click chemistry. The copper-catalyzed azide-alkyne cycloaddition (CuAAC) produces:',
    options: ['Exclusively the 1,4-disubstituted 1,2,3-triazole regioisomer, unlike the thermal Huisgen reaction which gives a mixture', 'A mixture of 1,4- and 1,5-regioisomers', 'Only open-chain products', 'Exclusively the 1,5-regioisomer'],
    correctIndex: 0,
    explanation: 'Cu(I) catalysis directs the cycloaddition to give only the 1,4-triazole product with >99% regioselectivity. The thermal (uncatalyzed) Huisgen 1,3-dipolar cycloaddition gives ~1:1 mixtures of both regioisomers.',
    realWorld: 'CuAAC is the most widely used click reaction — employed in chemical biology for labeling proteins, nucleic acids, and cells with fluorescent tags.',
    hint: 'The copper catalyst controls which nitrogen of the azide bonds to which carbon of the alkyne.',
  },
];
