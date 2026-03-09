import type { Question } from '../types';

export const robertWoodwardQuestions: Question[] = [
  {
    id: 50010,
    topic: 'robert-woodward',
    difficulty: 'easy',
    question: 'Robert Burns Woodward is considered the greatest organic synthetic chemist of the 20th century. Which monumental molecule did he achieve the first total synthesis of in 1965?',
    options: [
      'Vitamin B$_{12}$ (cobalamin), one of the most structurally complex non-polymeric natural products',
      'Aspirin (acetylsalicylic acid), a simple analgesic',
      'Table salt ($NaCl$), an ionic compound',
      'Methane ($CH_4$), the simplest hydrocarbon'
    ],
    correctIndex: 0,
    explanation: 'Woodward\'s total synthesis of vitamin B$_{12}$ (with Albert Eschenmoser) involved ~100 steps and required extraordinary stereochemical control. The corrin ring system with its cobalt center and numerous chiral centers made it a supreme challenge.',
    realWorld: 'This synthesis drove the development of the Woodward-Hoffmann rules (orbital symmetry conservation) and demonstrated that essentially any natural product could, in principle, be synthesized.',
    hint: 'A complex cobalt-containing vitamin with a corrin ring system.'
  },
  {
    id: 50011,
    topic: 'robert-woodward',
    difficulty: 'hard',
    question: 'Woodward\'s empirical rules for predicting UV absorption maxima of conjugated dienes and enones are known as:',
    options: [
      'Woodward\'s rules (Woodward-Fieser rules), which add incremental wavelength contributions from substituents and ring residues to a base $\\lambda_{max}$',
      'Beer-Lambert law, relating absorbance to concentration',
      'Bragg\'s law for X-ray diffraction angles',
      'Selection rules from quantum mechanical transition dipole moments'
    ],
    correctIndex: 0,
    explanation: 'Woodward\'s rules provide a remarkably accurate empirical method: start with a base value (e.g., $217$ nm for a homoannular diene) and add increments for each alkyl substituent (+5 nm), exocyclic double bond (+5 nm), or auxochrome. The predicted $\\lambda_{max}$ typically matches experiment within ±5 nm.',
    realWorld: 'Before computational chemistry was widespread, these rules were essential for structure elucidation — organic chemists could identify functional groups from UV spectra using pen and paper.',
    hint: 'Empirical rules that predict where conjugated systems absorb UV light by summing substituent contributions.'
  },
  {
    id: 50012,
    topic: 'robert-woodward',
    difficulty: 'sota',
    question: 'The Woodward-Hoffmann rules predict the stereochemical outcome of pericyclic reactions. For a thermal electrocyclic ring closure of a conjugated system with $4n$ π electrons, the allowed process is:',
    options: [
      'Conrotatory, where both terminal p-orbitals rotate in the same direction',
      'Disrotatory, where terminal p-orbitals rotate in opposite directions',
      'Suprafacial on both components regardless of electron count',
      'Forbidden under all thermal conditions'
    ],
    correctIndex: 0,
    explanation: 'The Woodward-Hoffmann rules use frontier molecular orbital theory: for $4n$ electron systems, the HOMO has opposite-phase terminal lobes, requiring conrotatory motion for constructive overlap. For $4n+2$ electron systems, the HOMO has same-phase terminals, allowing disrotatory closure. Under photochemical conditions, the rules reverse.',
    realWorld: 'These rules guide synthetic strategy — chemists choose thermal or photochemical conditions to control stereochemistry in ring-forming reactions for natural product synthesis.',
    hint: 'For 4n electrons thermally: same-direction rotation. For 4n+2: opposite-direction.'
  }
];
