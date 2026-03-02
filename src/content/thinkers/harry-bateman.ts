import type { Question } from '../types';

export const batemanQuestions: Question[] = [
  {
    id: 9528,
    topic: 'harry-bateman',
    difficulty: 'sota',
    question: 'For quadratic drag $m\\frac{dv}{dt} = mg - kv^2$, the terminal velocity is:',
    options: [
      '$v_t = \\sqrt{mg/k}$',
      '$v_t = mg/k$',
      '$v_t = m/k$',
      '$v_t = \\sqrt{2mg/k}$',
    ],
    correctIndex: 0,
    explanation: 'At terminal velocity, acceleration is zero: $mg = kv_t^2$, giving $v_t = \\sqrt{mg/k}$. The quadratic drag model applies at high Reynolds numbers where turbulent drag dominates.',
    realWorld: 'A skydiver reaches ~55 m/s (120 mph) terminal velocity in spread position; deploying a parachute increases the effective $k$ dramatically, reducing $v_t$ to ~5 m/s.',
    hint: 'Set $dv/dt = 0$ and solve for $v$ — that\'s the velocity where gravity and drag balance.',
  },
  {
    id: 9529,
    topic: 'harry-bateman',
    difficulty: 'sota',
    question: 'Bateman\'s equations for radioactive decay chains $\\frac{dN_i}{dt} = \\lambda_{i-1}N_{i-1} - \\lambda_i N_i$ describe:',
    options: [
      'Sequential decay through a chain of radioactive isotopes',
      'Simultaneous independent decay of multiple species',
      'Nuclear fusion reaction rates',
      'Neutron diffusion in a reactor',
    ],
    correctIndex: 0,
    explanation: 'Bateman\'s 1910 solution gives the exact activity of each daughter nuclide in a decay chain as a sum of exponentials. Each nuclide is produced by its parent\'s decay and consumed by its own.',
    realWorld: 'These equations are essential in nuclear medicine (PET scan isotope production), uranium mining (secular equilibrium), and nuclear waste management (predicting long-term isotope inventories).',
    hint: 'Think of a cascade: parent decays to daughter, daughter decays to granddaughter, etc.',
  },
  {
    id: 9530,
    topic: 'harry-bateman',
    difficulty: 'sota',
    question: 'Bateman showed that conformal transformations of Maxwell\'s equations in Minkowski spacetime form:',
    options: [
      'A 15-parameter conformal group (larger than the Poincaré group)',
      'The 10-parameter Poincaré group exactly',
      'A 6-parameter rotation group',
      'An infinite-dimensional symmetry group',
    ],
    correctIndex: 0,
    explanation: 'Bateman (1910) and Cunningham independently discovered that Maxwell\'s equations are invariant under the full conformal group — 15 parameters including the Poincaré group plus dilatations and special conformal transformations.',
    realWorld: 'Conformal symmetry became central to string theory, conformal field theory, and the AdS/CFT correspondence — one of the most productive ideas in modern theoretical physics.',
    hint: 'The Poincaré group has 10 parameters; conformal symmetry adds 5 more (1 scale + 4 special conformal).',
  },
];
