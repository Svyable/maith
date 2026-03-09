import type { Question } from '../types';

export const pierreGillesDeGennesQuestions: Question[] = [
  {
    id: 10661,
    topic: 'pierre-gilles-de-gennes',
    difficulty: 'easy',
    question: 'De Gennes received the Nobel Prize for applying physics to:',
    options: [
      'Soft matter — polymers, liquid crystals, colloids, and wetting phenomena',
      'Superconductivity in metals',
      'Black hole thermodynamics',
      'Particle physics and the Standard Model',
    ],
    correctIndex: 0,
    explanation: 'De Gennes showed that the same scaling and symmetry-breaking concepts from phase transitions apply to "soft" systems: polymer chains, soap bubbles, liquid crystals, and droplets spreading on surfaces.',
    realWorld: 'His work underpins the physics of LCD screens, adhesives, paints, and biological membranes.',
    hint: 'He made physics work for squishy, everyday materials.',
  },
  {
    id: 10662,
    topic: 'pierre-gilles-de-gennes',
    difficulty: 'hard',
    question: 'The de Gennes exponent ν describes how polymer size R scales with chain length N:',
    options: [
      '$R \\sim N^\\nu$ with ν ≈ 3/5 in good solvent (Flory exponent)',
      '$R \\sim N$ — linear scaling always',
      '$R \\sim \\ln N$ — logarithmic growth',
      '$R \\sim N^2$ — quadratic scaling',
    ],
    correctIndex: 0,
    explanation: 'In a good solvent, polymer coils swell due to self-avoidance. Flory\'s mean-field estimate gives ν = 3/5, while renormalization group gives ν ≈ 0.588 in 3D. De Gennes unified this with critical phenomena scaling.',
    realWorld: 'This scaling determines DNA packing in cells, protein folding, and the viscosity of polymer solutions.',
    hint: 'Self-avoiding random walks expand faster than ideal random walks.',
  },
  {
    id: 10663,
    topic: 'pierre-gilles-de-gennes',
    difficulty: 'sota',
    question: 'De Gennes\' "reptation" theory describes polymer dynamics as:',
    options: [
      'Chains sliding through a tube formed by neighboring chains — diffusion time scales as $\\tau \\sim N^3$',
      'Chains rotating rigidly like rods',
      'Instantaneous equilibration of all monomers',
      'Chains breaking and reforming continuously',
    ],
    correctIndex: 0,
    explanation: 'In a polymer melt or concentrated solution, each chain is confined by its neighbors to a "tube." It can only move by sliding along the tube (reptating like a snake). This gives $D \\sim N^{-2}$ and $\\tau \\sim N^3$, matching experiments.',
    realWorld: 'Reptation theory is essential for understanding polymer processing, viscoelasticity of rubber, and the slow dynamics of DNA in gels (used in electrophoresis).',
    hint: 'Chains slither through a confining tube made by their neighbors.',
  },
];
