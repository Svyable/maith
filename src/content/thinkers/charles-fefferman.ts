import type { Question } from '../types';

export const charlesFeffermanQuestions: Question[] = [
  {
    id: 22010,
    topic: 'charles-fefferman',
    difficulty: 'hard',
    question: 'Fefferman\'s theorem characterises the dual of the Hardy space $H^1(\\mathbb{R}^n)$. What is this dual space?',
    options: [
      'BMO — bounded mean oscillation',
      '$L^\\infty(\\mathbb{R}^n)$',
      'The Sobolev space $W^{1,2}$',
      'The Schwartz space $\\mathcal{S}$',
    ],
    correctIndex: 0,
    explanation: 'Fefferman proved $(H^1)^* = \\text{BMO}$, a landmark result connecting real-variable harmonic analysis to function spaces of bounded mean oscillation.',
    realWorld: 'BMO appears naturally in fluid mechanics when analysing vorticity distributions in turbulent flows.',
    hint: 'This space measures how much a function deviates from its local average.',
  },
  {
    id: 22011,
    topic: 'charles-fefferman',
    difficulty: 'sota',
    question: 'Fefferman\'s uncertainty principle in PDE theory states that the potential $V$ is form-bounded relative to $-\\Delta$ if and only if $V$ belongs to which class?',
    options: [
      'The Fefferman–Phong class (reverse Hölder inequality on cubes)',
      '$L^{n/2}(\\mathbb{R}^n)$ for $n \\geq 3$',
      'The Kato class $K_n$',
      'The Morrey space $M^{1,n-2}$',
    ],
    correctIndex: 0,
    explanation: 'The Fefferman–Phong inequality provides sharp conditions on potentials via a geometric uncertainty principle, relating localisation in phase space to potential energy bounds.',
    realWorld: 'These estimates underpin spectral theory of Schrödinger operators used in quantum chemistry.',
    hint: 'Think about averaging $V$ over cubes and comparing to the kinetic energy.',
  },
  {
    id: 22012,
    topic: 'charles-fefferman',
    difficulty: 'sota',
    question: 'At age 22, Fefferman became the youngest full professor in the US. His Fields Medal work centred on which area?',
    options: [
      'Multi-dimensional complex analysis and the Bergman kernel',
      'Algebraic K-theory',
      'Langlands programme for GL(2)',
      'Rational homotopy theory',
    ],
    correctIndex: 0,
    explanation: 'Fefferman\'s Fields Medal (1978) recognised his work on the boundary behaviour of holomorphic functions in several complex variables, including the Bergman kernel asymptotics on strictly pseudoconvex domains.',
    realWorld: 'Bergman kernel estimates are used in complex geometry to construct Kähler–Einstein metrics.',
    hint: 'His award cited contributions in several complex variables, not one.',
  },
];
