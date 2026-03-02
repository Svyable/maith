import type { Question } from '../types';

export const richardFitzhughQuestions: Question[] = [
  {
    id: 9519,
    topic: 'richard-fitzhugh',
    difficulty: 'sota',
    question: 'The FitzHugh-Nagumo model $\\frac{dv}{dt} = v - \\frac{v^3}{3} - w + I$, $\\frac{dw}{dt} = \\varepsilon(v + a - bw)$ is a reduction of the Hodgkin-Huxley model from how many to how many dimensions?',
    options: [
      '4 dimensions to 2 dimensions',
      '3 dimensions to 1 dimension',
      '6 dimensions to 3 dimensions',
      '2 dimensions to 1 dimension',
    ],
    correctIndex: 0,
    explanation: 'Hodgkin-Huxley has 4 variables $(V, m, h, n)$. FitzHugh collapsed the fast variables into $v$ (excitation) and slow variables into $w$ (recovery), preserving the essential excitable dynamics in a 2D phase plane.',
    realWorld: 'The FitzHugh-Nagumo model explains cardiac arrhythmias, neural bursting patterns, and is used in defibrillator design to understand how electrical shocks reset heart rhythm.',
    hint: 'Count the state variables in the original Hodgkin-Huxley system $(V, m, h, n)$ and the reduced FitzHugh-Nagumo $(v, w)$.',
  },
  {
    id: 9520,
    topic: 'richard-fitzhugh',
    difficulty: 'sota',
    question: 'In the FitzHugh-Nagumo model, the cubic nullcline $w = v - v^3/3 + I$ creates excitability because:',
    options: [
      'A small perturbation triggers a large excursion before returning to rest',
      'The system has a globally attracting fixed point',
      'All trajectories are periodic regardless of parameters',
      'The nullclines never intersect',
    ],
    correctIndex: 0,
    explanation: 'The cubic shape of the $v$-nullcline creates a threshold: sub-threshold perturbations decay, but super-threshold perturbations force the trajectory on a large loop through phase space — an "action potential" in neural terms.',
    realWorld: 'This all-or-nothing response is the hallmark of neurons and cardiac cells: a stimulus either triggers a full spike or nothing at all.',
    hint: 'Excitability means there\'s a threshold — small inputs fade, but inputs beyond the threshold produce a disproportionately large response.',
  },
  {
    id: 9521,
    topic: 'richard-fitzhugh',
    difficulty: 'sota',
    question: 'The parameter $\\varepsilon \\ll 1$ in FitzHugh-Nagumo creates a separation of timescales that produces:',
    options: [
      'Relaxation oscillations with fast jumps and slow sweeps',
      'Simple harmonic oscillations',
      'Chaotic dynamics',
      'Damped exponential decay',
    ],
    correctIndex: 0,
    explanation: 'When $\\varepsilon \\ll 1$, $v$ changes rapidly (fast subsystem) while $w$ evolves slowly. This creates relaxation oscillations: fast jumps between branches of the cubic nullcline connected by slow sweeps along them.',
    realWorld: 'Relaxation oscillations model heartbeats, neuronal bursting, and even geophysical stick-slip earthquake cycles — anywhere a slow buildup triggers a fast release.',
    hint: 'Small $\\varepsilon$ means one variable moves much faster than the other — what kind of oscillation does this asymmetry produce?',
  },
];
