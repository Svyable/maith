import type { Question } from '../types';

export const theodorSchwannQuestions: Question[] = [
  {
    id: 97150, topic: 'theodor-schwann', difficulty: 'easy',
    question: 'Theodor Schwann co-founded cell theory by demonstrating that:',
    options: ['Animals, like plants (Schleiden), are composed of cells — establishing cells as the universal unit of life', 'Only plants are made of cells', 'Cells arise spontaneously from non-living matter', 'Animals are made of continuous tissue, not discrete cells'],
    correctIndex: 0,
    explanation: 'Schwann extended Schleiden\'s botanical cell theory to animals in 1839, proposing that all organisms are composed of cells and cell products — one of biology\'s most fundamental unifying principles.',
    realWorld: 'Cell theory is the foundation of all modern biology, from histology to stem cell research to cancer biology.',
    hint: 'Plants have cells — he showed animals do too.',
  },
  {
    id: 97151, topic: 'theodor-schwann', difficulty: 'hard',
    question: 'Schwann also discovered the myelin sheath (Schwann cells) in the peripheral nervous system. Myelination increases conduction velocity by:',
    options: ['Enabling saltatory conduction — action potentials jump between nodes of Ranvier, where ion channels are concentrated, rather than propagating continuously', 'Increasing axon diameter directly', 'Reducing the number of ion channels needed', 'Providing nutrients to the axon'],
    correctIndex: 0,
    explanation: 'Myelin insulates the axon (increases membrane resistance $r_m$, decreases capacitance $c_m$), forcing current to flow to the next node of Ranvier. Conduction velocity: $v \\propto d$ (linear with diameter) vs. $v \\propto \\sqrt{d}$ unmyelinated.',
    realWorld: 'Demyelinating diseases (multiple sclerosis, Guillain-Barré) cause devastating neurological symptoms by disrupting saltatory conduction.',
    hint: 'Signals leap from gap to gap along the insulated nerve fiber.',
  },
  {
    id: 97152, topic: 'theodor-schwann', difficulty: 'sota',
    question: 'Schwann also discovered pepsin, the first animal enzyme. Modern enzyme kinetics describes enzyme catalysis using the Michaelis-Menten equation:',
    options: ['$v = \\frac{V_{max} [S]}{K_m + [S]}$, where $K_m$ is the substrate concentration at half-maximal velocity and $V_{max} = k_{cat} [E]_T$', '$v = k[S]$ (first-order only)', '$v = V_{max}$ (zero-order only)', '$v = k[E][S]^2$ (second-order in substrate)'],
    correctIndex: 0,
    explanation: 'Derived from steady-state: $E + S \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} ES \\xrightarrow{k_{cat}} E + P$. $K_m = \\frac{k_{-1} + k_{cat}}{k_1}$. Catalytic efficiency = $k_{cat}/K_m$ (diffusion limit ~$10^8$ M⁻¹s⁻¹).',
    realWorld: 'Michaelis-Menten kinetics guides drug dosing (competitive inhibitors increase apparent $K_m$), enzyme engineering, and metabolic modeling.',
    hint: 'The hyperbolic curve that describes how enzymes speed up reactions.',
  },
];
