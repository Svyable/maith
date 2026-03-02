import type { Question } from '../types';

export const williamRowanHamiltonQuestions: Question[] = [
  {
    id: 12401,
    topic: 'william-rowan-hamilton',
    difficulty: 'easy',
    question: 'William Rowan Hamilton mastered 13 languages by age 13. His most famous mathematical invention came to him on a walk. What was it?',
    options: [
      'Quaternions — a 4D number system extending complex numbers, with i² = j² = k² = ijk = -1',
      'Matrix multiplication — the rule for combining rectangular arrays',
      'Vector calculus — div, grad, and curl operators',
      'The Hamiltonian function — total energy of a physical system',
    ],
    correctIndex: 0,
    explanation: 'On October 16, 1843, Hamilton had a flash of insight while walking along the Royal Canal in Dublin: i² = j² = k² = ijk = -1. He carved the formula into Brougham Bridge on the spot.',
    realWorld: 'Quaternions are used today in 3D game engines (Unity, Unreal), drone flight controllers, spacecraft attitude control, and VR headset orientation tracking — they avoid gimbal lock.',
    hint: 'He literally carved the formula into a bridge in Dublin because he was so excited.',
  },
  {
    id: 12402,
    topic: 'william-rowan-hamilton',
    difficulty: 'hard',
    question: 'Hamilton\'s reformulation of classical mechanics uses a function H(q,p,t). How does the Hamiltonian approach differ from Newton\'s F=ma?',
    options: [
      'It treats position q and momentum p as independent variables evolving via first-order differential equations, revealing conserved quantities through symmetries',
      'It replaces forces with energy but produces identical second-order equations',
      'It only works for conservative systems without friction',
      'It requires Lagrangian mechanics as a prerequisite and adds no new insight',
    ],
    correctIndex: 0,
    explanation: 'Hamilton\'s equations dq/dt = ∂H/∂p, dp/dt = -∂H/∂q are first-order and reveal phase space structure. Noether\'s theorem connects symmetries of H to conservation laws. This formulation is essential for quantum mechanics.',
    realWorld: 'Hamiltonian mechanics is the bridge to quantum mechanics (replace Poisson brackets with commutators). It\'s also used in molecular dynamics simulations for drug discovery.',
    hint: 'Newton uses forces and acceleration (2nd order). Hamilton uses energy and phase space (1st order).',
  },
  {
    id: 12403,
    topic: 'william-rowan-hamilton',
    difficulty: 'sota',
    question: 'Hamiltonian Monte Carlo (HMC) is a modern MCMC algorithm inspired by Hamilton\'s mechanics. Its key advantage over random-walk Metropolis is:',
    options: [
      'It uses gradient information to propose distant, high-probability states — reducing random walk behavior and improving sampling efficiency in high dimensions',
      'It guarantees convergence in polynomial time for all distributions',
      'It eliminates the need for a target distribution by using energy conservation',
      'It replaces Markov chains with deterministic trajectories, removing all randomness',
    ],
    correctIndex: 0,
    explanation: 'HMC augments the target with momentum variables and simulates Hamiltonian dynamics using leapfrog integration. The trajectory explores the distribution efficiently because it follows the energy surface rather than taking random steps.',
    realWorld: 'HMC powers Stan (the probabilistic programming language) used in epidemiology, climate modeling, and Bayesian deep learning. It\'s how scientists fit complex statistical models.',
    hint: 'Random walks in high dimensions are inefficient. HMC uses physics to make smart proposals.',
  },
];
