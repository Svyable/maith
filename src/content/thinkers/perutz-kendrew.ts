import type { Question } from '../types';

export const perutzKendrewQuestions: Question[] = [
  {
    id: 22501, topic: 'perutz-kendrew', difficulty: 'easy',
    question: 'Max Perutz and John Kendrew shared the 1962 Nobel Prize in Chemistry for determining the first atomic-resolution structures of:',
    options: ['Hemoglobin (Perutz) and myoglobin (Kendrew) using X-ray crystallography', 'DNA and RNA using electron microscopy', 'Insulin and glucagon using NMR', 'Chlorophyll and carotenoids using mass spectrometry'],
    correctIndex: 0,
    explanation: 'Kendrew solved myoglobin\'s structure in 1958 (the first protein structure ever determined) and Perutz solved hemoglobin shortly after. These showed that proteins have specific 3D architectures — not random tangles.',
    realWorld: 'Their work launched structural biology. Today, the Protein Data Bank contains over 200,000 structures, enabling drug design, enzyme engineering, and understanding of disease.',
    hint: 'Both are oxygen-carrying proteins — one in muscle (myo-), one in blood (hemo-).',
  },
  {
    id: 22502, topic: 'perutz-kendrew', difficulty: 'hard',
    question: 'Perutz discovered that hemoglobin exhibits cooperative oxygen binding described by the Hill equation: $\\theta = \\frac{[O_2]^n}{K_d^n + [O_2]^n}$. What does cooperativity mean?',
    options: ['Binding of the first O₂ molecule increases the affinity of remaining subunits for O₂ (n > 1), creating a sigmoidal binding curve', 'Each subunit binds O₂ independently with the same affinity', 'Oxygen binding decreases with each subsequent molecule', 'Hemoglobin can only bind one O₂ at a time'],
    correctIndex: 0,
    explanation: 'Hemoglobin\'s four subunits communicate: O₂ binding to one subunit triggers a conformational change (T→R transition) that increases affinity in the others. The Hill coefficient n ≈ 2.8 reflects this positive cooperativity.',
    realWorld: 'Cooperativity is why hemoglobin efficiently loads O₂ in the lungs and unloads it in tissues — the sigmoidal curve creates a molecular "switch" sensitive to small O₂ changes.',
    hint: 'The binding curve is S-shaped (sigmoidal), not hyperbolic — that\'s the signature of cooperativity.',
  },
  {
    id: 22503, topic: 'perutz-kendrew', difficulty: 'sota',
    question: 'Perutz\'s work revealed hemoglobin\'s allosteric mechanism. The T (tense) → R (relaxed) transition involves:',
    options: ['A quaternary structural change where subunit interfaces rotate ~15°, breaking salt bridges and opening the O₂ binding sites', 'Only tertiary structural changes within individual subunits', 'Covalent bond breaking between subunits', 'Complete unfolding and refolding of the protein'],
    correctIndex: 0,
    explanation: 'In the T-state, salt bridges constrain the Fe²⁺-proximal histidine geometry, reducing O₂ affinity. O₂ binding pulls Fe²⁺ into the porphyrin plane, shifting the proximal histidine, breaking salt bridges, and triggering the T→R quaternary rotation — a masterpiece of molecular engineering.',
    realWorld: 'Understanding allostery revolutionized drug design. Allosteric drugs (e.g., for sickle cell disease) modulate hemoglobin\'s T/R equilibrium to improve oxygen delivery.',
    hint: 'The iron atom moves only ~0.4 Å when O₂ binds, but this tiny motion is amplified into a global structural change.',
  },
];
