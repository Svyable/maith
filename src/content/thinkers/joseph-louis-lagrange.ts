import type { Question } from '../types';

export const josephLouisLagrangeQuestions: Question[] = [
  {
    id: 60050, topic: 'joseph-louis-lagrange', difficulty: 'easy',
    question: 'Lagrange reformulated Newtonian mechanics using:',
    options: [
      'Energy functions instead of forces — the Lagrangian $L = T - V$ (kinetic minus potential energy)',
      'Vector forces and free-body diagrams',
      'Hamiltonian phase space with $p$ and $q$ coordinates',
      'Relativistic four-vectors and spacetime metrics',
    ],
    correctIndex: 0,
    explanation: 'Lagrangian mechanics replaces Newton\'s $F = ma$ with the principle of stationary action: the path taken minimizes $S = \\int L\\,dt$ where $L = T - V$. This works in any coordinate system — a massive advantage over Newtonian methods.',
    realWorld: 'Lagrangian mechanics is used in robotics (joint coordinates), computer graphics (constrained animation), and is the foundation of modern theoretical physics including quantum field theory.',
    hint: 'Instead of tracking forces, track the difference between kinetic and potential energy.',
  },
  {
    id: 60051, topic: 'joseph-louis-lagrange', difficulty: 'hard',
    question: 'The Euler-Lagrange equation, derived from the principle of stationary action, states:',
    options: [
      '$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}} - \\frac{\\partial L}{\\partial q} = 0$ — a differential equation for the path of least action',
      '$F = -\\nabla V$ — force equals negative gradient of potential',
      '$H = T + V$ — total energy is conserved',
      '$\\Delta S \\geq 0$ — entropy never decreases',
    ],
    correctIndex: 0,
    explanation: 'The Euler-Lagrange equation is the fundamental equation of classical mechanics in Lagrangian form. It\'s derived by requiring that the action functional $S[q] = \\int L(q, \\dot{q}, t)\\,dt$ is stationary under variations of the path $q(t)$.',
    realWorld: 'This equation governs everything from pendulums to particle physics. The Standard Model Lagrangian encodes all known fundamental interactions in a single expression.',
    hint: 'It comes from calculus of variations — finding the path that makes the action integral stationary.',
  },
  {
    id: 60052, topic: 'joseph-louis-lagrange', difficulty: 'sota',
    question: 'Lagrange points are positions where a small body\'s gravitational and centrifugal forces balance. How many exist in a two-body system?',
    options: [
      'Five — three collinear ($L_1, L_2, L_3$) and two triangular ($L_4, L_5$ at $60°$)',
      'Three — one between the bodies and two behind each',
      'Two — one on each side of the smaller body',
      'Infinitely many — forming a continuous ring',
    ],
    correctIndex: 0,
    explanation: 'In the restricted three-body problem, Lagrange proved exactly five equilibrium points exist. $L_1$–$L_3$ are unstable (collinear), while $L_4$ and $L_5$ form equilateral triangles with the two massive bodies and are stable for mass ratios $> 24.96$.',
    realWorld: 'The James Webb Space Telescope orbits $L_2$ (Sun-Earth). Jupiter\'s $L_4$ and $L_5$ points host thousands of Trojan asteroids. $L_1$ is used for solar observation satellites.',
    hint: 'Three are along the line connecting the two bodies; two form equilateral triangles.',
  },
];
