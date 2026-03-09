import type { Question } from '../types';

export const ritaLeviMontalciniQuestions: Question[] = [
  {
    id: 97160, topic: 'rita-levi-montalcini', difficulty: 'easy',
    question: 'Rita Levi-Montalcini\'s Nobel Prize-winning discovery of Nerve Growth Factor (NGF) showed that:',
    options: [
      'Developing neurons require specific protein signals (neurotrophins) to survive — without NGF, sympathetic and sensory neurons undergo programmed cell death (apoptosis)',
      'All neurons survive regardless of external signals',
      'Nerve growth is entirely genetically predetermined',
      'Growth factors only affect non-neural cells',
    ],
    correctIndex: 0,
    explanation: 'NGF (discovered 1952) was the first neurotrophin identified. It binds TrkA receptors, activating Ras → MAPK and PI3K → Akt survival pathways. The "neurotrophic hypothesis": neurons compete for limited target-derived NGF — losers die.',
    realWorld: 'The neurotrophic hypothesis explains why ~50% of neurons die during development. NGF-based therapies are being developed for Alzheimer\'s, and anti-NGF antibodies (tanezumab) treat chronic pain.',
    hint: 'She discovered the protein that tells growing neurons "live" or "die."',
  },
  {
    id: 97161, topic: 'rita-levi-montalcini', difficulty: 'hard',
    question: 'The neurotrophic factor survival model follows a ligand-receptor binding kinetic:',
    options: [
      '$\\frac{d[N]}{dt} = r \\cdot N \\cdot \\frac{[\\text{NGF}]}{K_d + [\\text{NGF}]} - \\mu \\cdot N \\cdot \\frac{K_d}{K_d + [\\text{NGF}]}$ — neurons proliferate/survive when NGF exceeds $K_d$ and die via apoptosis when it doesn\'t',
      'Neuron survival is independent of NGF concentration',
      'All neurons die at the same rate regardless of growth factors',
      'NGF binding follows zero-order kinetics with no saturation',
    ],
    correctIndex: 0,
    explanation: 'The Michaelis-Menten-like term $\\frac{[\\text{NGF}]}{K_d + [\\text{NGF}]}$ captures receptor saturation (TrkA has $K_d \\approx 10^{-11}$ M). When $[\\text{NGF}] \\gg K_d$, survival dominates; when $[\\text{NGF}] \\ll K_d$, apoptosis wins — creating the competitive elimination observed in development.',
    realWorld: 'This competition model explains why innervation density matches target tissue size and why tumor-derived excess NGF causes pathological nerve sprouting in cancer pain.',
    hint: 'Michaelis-Menten kinetics applied to life-or-death decisions: enough growth factor means survival.',
  },
  {
    id: 97162, topic: 'rita-levi-montalcini', difficulty: 'sota',
    question: 'Modern computational models of NGF-dependent axon guidance use a chemotactic gradient-sensing equation:',
    options: [
      '$\\frac{d\\theta}{dt} = \\kappa \\cdot \\frac{\\nabla [\\text{NGF}] \\times \\hat{v}}{|\\nabla [\\text{NGF}]|} + \\sigma \\xi(t)$, where the growth cone turns toward the NGF gradient with sensitivity $\\kappa$, corrupted by stochastic noise $\\xi(t)$',
      'Axons always grow in perfectly straight lines toward NGF',
      'Growth cones cannot detect concentration gradients',
      'Axon guidance is purely random with no directional bias',
    ],
    correctIndex: 0,
    explanation: 'The growth cone acts as a gradient sensor: filopodia sample NGF across their ~10 μm width, detecting concentration differences as small as 1-2%. The cross product gives turning direction, $\\kappa$ sets sensitivity (~receptor density), and $\\sigma\\xi(t)$ captures Brownian-like exploration.',
    realWorld: 'This stochastic steering model is used in computational neuroscience to simulate neural circuit formation and has inspired gradient-following algorithms in swarm robotics and autonomous navigation.',
    hint: 'A growth cone steers like a noisy compass — biased toward higher NGF concentration but never perfectly straight.',
  },
];
