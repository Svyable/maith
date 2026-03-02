import type { Question } from '../types';

export const robertHookeQuestions: Question[] = [
  {
    id: 11151,
    topic: 'robert-hooke',
    difficulty: 'easy',
    question: 'Hooke\'s Law states that:',
    options: [
      'The force needed to extend or compress a spring is proportional to the displacement: $F = -kx$, where $k$ is the spring constant',
      'Every action has an equal and opposite reaction',
      'The pressure of a gas is inversely proportional to its volume',
      'The period of a pendulum depends only on its length, not its mass',
    ],
    correctIndex: 0,
    explanation: 'Hooke (1660) discovered that elastic materials obey $F = -kx$ for small deformations. This linear relationship is the foundation of elasticity theory. Beyond the elastic limit, materials yield plastically and Hooke\'s Law no longer applies.',
    realWorld: 'Every mechanical spring, structural beam, and vibrating system relies on Hooke\'s Law. It also governs atomic bonds (for small displacements), molecular vibrations measured by IR spectroscopy, and seismic wave propagation.',
    hint: 'Stretch a spring twice as far — it pulls back twice as hard. Simple proportionality.',
  },
  {
    id: 11152,
    topic: 'robert-hooke',
    difficulty: 'hard',
    question: 'Young\'s modulus $E = \\sigma/\\epsilon$ (stress/strain) characterises a material\'s stiffness. Diamond has $E \\approx 1200$ GPa while rubber has $E \\approx 0.01$ GPa. This means:',
    options: [
      'Diamond requires ~120,000× more stress than rubber to achieve the same fractional deformation — it is extraordinarily stiff',
      'Diamond can store 120,000× more elastic energy than rubber before breaking',
      'Diamond is 120,000× stronger (harder to break) than rubber',
      'Diamond conducts forces 120,000× faster than rubber',
    ],
    correctIndex: 0,
    explanation: 'Young\'s modulus measures stiffness (resistance to elastic deformation), not strength (resistance to breaking). $\\sigma = E\\epsilon$: for the same strain $\\epsilon = \\Delta L/L$, diamond needs enormously more stress. Steel ($E \\approx 200$ GPa) is stiff but can break at relatively low strain.',
    realWorld: 'Engineers select materials by Young\'s modulus for structural applications. Carbon fibre ($E \\approx 230$ GPa) offers steel-like stiffness at 1/5 the weight — used in aircraft, F1 cars, and bicycle frames.',
    hint: 'Stiffness ≠ strength. A stiff material resists deformation; a strong one resists breaking. Different properties.',
  },
  {
    id: 11153,
    topic: 'robert-hooke',
    difficulty: 'sota',
    question: 'In materials science, the generalised Hooke\'s Law relates the stress tensor $\\sigma_{ij}$ to strain tensor $\\epsilon_{kl}$ via:',
    options: [
      '$\\sigma_{ij} = C_{ijkl}\\,\\epsilon_{kl}$ — a 4th-rank elasticity tensor with up to 21 independent components (reduced by crystal symmetry)',
      '$\\sigma_{ij} = E\\,\\epsilon_{ij}$ — a simple scalar multiplication by Young\'s modulus',
      '$\\sigma_{ij} = \\lambda\\,\\text{tr}(\\epsilon)\\,\\delta_{ij}$ — only volumetric strain matters',
      '$\\sigma_{ij} = 2\\mu\\,\\epsilon_{ij}$ — pure shear with no volumetric contribution',
    ],
    correctIndex: 0,
    explanation: 'The full anisotropic Hooke\'s law uses the stiffness tensor $C_{ijkl}$ with 81 components, reduced to 21 by symmetry ($C_{ijkl} = C_{jikl} = C_{ijlk} = C_{klij}$). For isotropic materials, only 2 independent constants remain (Lamé parameters $\\lambda, \\mu$): $\\sigma_{ij} = \\lambda\\,\\text{tr}(\\epsilon)\\,\\delta_{ij} + 2\\mu\\,\\epsilon_{ij}$.',
    realWorld: 'Anisotropic elasticity is critical for composite materials (carbon fibre, wood), single crystals (silicon wafers), and geological formations. Seismic wave analysis uses the full tensor to map Earth\'s interior.',
    hint: 'A 3D material can be squeezed, stretched, and sheared independently — you need a 4th-rank tensor to capture all couplings.',
  },
];
