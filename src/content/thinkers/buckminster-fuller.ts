import type { Question } from '../types';

export const buckminsterFullerQuestions: Question[] = [
  {
    id: 13335,
    topic: 'buckminster-fuller',
    difficulty: 'easy',
    question:
      'Buckminster Fuller is most associated with geodesic domes. What structural principle makes a geodesic dome strong for its weight?',
    options: [
      'Triangulation: networks of triangles distribute loads efficiently and resist deformation',
      'Square grids: rectangles cannot change shape under load',
      'Pure compression: no member ever experiences tension',
      'Random angles: irregularity guarantees strength'
    ],
    correctIndex: 0,
    explanation:
      'Triangles are rigid units: once side lengths are fixed, shape is constrained. A dome made from many triangles spreads forces through the network, giving high strength-to-weight.',
    realWorld:
      'Space frames and trusses in roofs, bridges, and towers rely on triangulation for stiffness with minimal material.',
    hint: 'Triangles don’t “rack” like rectangles.'
  },
  {
    id: 13336,
    topic: 'buckminster-fuller',
    difficulty: 'easy',
    question:
      'Fuller popularized “ephemeralization,” often summarized as “doing more with less.” Which idea best captures it?',
    options: [
      'Technological and design progress can increase performance per unit resource (mass/energy/cost)',
      'The best designs use maximum material to ensure safety',
      'Efficiency is impossible because of the second law',
      'Only aesthetics matter; engineering constraints are irrelevant'
    ],
    correctIndex: 0,
    explanation:
      'Ephemeralization is a systems/design claim: over time, we can achieve higher capability while using fewer resources through better structure, materials, and integration.',
    realWorld:
      'LED lighting delivers more lumens per watt; lightweight composites deliver high stiffness per kg.',
    hint: 'More function per resource.'
  },
  {
    id: 13337,
    topic: 'buckminster-fuller',
    difficulty: 'hard',
    question:
      'In “synergetics,” Fuller emphasized whole-systems behavior. Which statement best expresses the “systems” point in a quasi-mathematical way?',
    options: [
      'System performance $P$ is not always additive: often $P\\neq \\sum_i P_i$ because interactions/geometry create emergent constraints or capabilities',
      'System performance is always exactly $P=\\sum_i P_i$',
      'Emergence violates physics and must be supernatural',
      'Interactions only matter in biology, not in engineering'
    ],
    correctIndex: 0,
    explanation:
      'Synergetics stresses that coupling terms matter. In modeling, interactions show up as cross-terms (e.g., $x^\\top A x$) rather than separable sums, so optimizing parts independently can be suboptimal.',
    realWorld:
      'Optimizing an EV battery alone may hurt vehicle-level efficiency if it changes weight distribution, thermal management, or aerodynamics.',
    hint: 'Look for “interaction terms,” not just independent components.'
  },
  {
    id: 13338,
    topic: 'buckminster-fuller',
    difficulty: 'hard',
    question:
      'A key design lesson from geodesic/triangulated structures is stiffness scaling. Very roughly, why can increasing depth/geometry improve stiffness more than simply adding material?',
    options: [
      'Bending stiffness often scales with the second moment of area; changing geometry increases it dramatically (conceptually $EI$), not just linearly with mass',
      'Stiffness depends only on paint color',
      'Stiffness always scales strictly linearly with material mass regardless of shape',
      'Geometry matters only for aesthetics, not mechanics'
    ],
    correctIndex: 0,
    explanation:
      'Structural efficiency often comes from geometry: by arranging material farther from the neutral axis (increasing $I$), you raise $EI$ (flexural rigidity) substantially without proportional mass increase.',
    realWorld:
      'I-beams and box beams exploit the same principle: geometry beats brute material.',
    hint: 'Think $EI$ and the moment of inertia $I$.'
  },
  {
    id: 13339,
    topic: 'buckminster-fuller',
    difficulty: 'sota',
    question:
      'A “Fuller-ish” sustainability objective might be expressed as maximizing a ratio like $\\frac{\\text{service delivered}}{\\text{resources used}}$. Which is the best example of that kind of whole-system metric?',
    options: [
      'Minimize lifecycle CO₂ per passenger-km: $\\min \\; \\frac{\\mathrm{kg\\ CO_2e}}{\\mathrm{passenger\\cdot km}}$ over design choices',
      'Maximize the number of decorative features regardless of energy use',
      'Minimize cost of one component without considering the rest of the system',
      'Ignore measurement and trust “vibes” about sustainability'
    ],
    correctIndex: 0,
    explanation:
      'Whole-system metrics embed function delivered in the denominator and capture lifecycle effects (materials, manufacturing, use-phase energy, end-of-life). This aligns with “doing more with less.”',
    realWorld:
      'Transit planning and vehicle design use per-passenger-km and per-ton-km metrics to compare technologies fairly.',
    hint: 'Put “useful output” in the denominator.'
  }
];