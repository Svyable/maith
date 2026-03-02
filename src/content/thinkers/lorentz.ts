// lorentz.ts
import type { Question } from '../types';

export const lorentzQuestions: Question[] = [
  {
    id: 67050,
    topic: 'lorentz',
    difficulty: 'easy',
    question:
      'Hendrik Lorentz’s name is attached to the Lorentz transformation. For motion along $x$ with speed $v$, which pair of formulas is correct (using $\\gamma=1/\\sqrt{1-v^2/c^2}$)?',
    options: [
      "$x' = \\gamma(x-vt),\\quad t' = \\gamma\\left(t-\\frac{vx}{c^2}\\right)$",
      "$x' = x-vt,\\quad t' = t$",
      "$x' = \\gamma(x+vt),\\quad t' = \\gamma\\left(t+\\frac{vx}{c^2}\\right)$",
      "$x' = x,\\quad t' = \\gamma t$"
    ],
    correctIndex: 0,
    explanation:
      'These transformations preserve the spacetime interval and encode time dilation and length contraction.',
    realWorld:
      'Core of special relativity and any high-speed particle/accelerator calculation.',
    hint: 'Look for the $-vx/c^2$ term in time.'
  },
  {
    id: 67051,
    topic: 'lorentz',
    difficulty: 'hard',
    question:
      'Lorentz invariance says the spacetime interval is preserved. Which quantity is invariant under Lorentz transformations?',
    options: [
      '$s^2=c^2\\Delta t^2-\\Delta x^2-\\Delta y^2-\\Delta z^2$',
      '$c\\Delta t+\\Delta x$',
      '$\\Delta x^2+\\Delta y^2+\\Delta z^2$ for all frames',
      '$\\Delta t$ by itself'
    ],
    correctIndex: 0,
    explanation:
      'All inertial observers agree on $s^2$ (though they may disagree on $\\Delta t$ and $\\Delta x$ separately).',
    realWorld:
      'Lets physicists classify separations as time-like, light-like, or space-like.',
    hint: 'It’s the Minkowski “difference of squares.”'
  },
  {
    id: 67052,
    topic: 'lorentz',
    difficulty: 'hard',
    question:
      'The Lorentz force law gives the force on a charge $q$ moving with velocity $\\mathbf{v}$ in fields $\\mathbf{E},\\mathbf{B}$. Which is correct?',
    options: [
      '$\\mathbf{F}=q\\,(\\mathbf{E}+\\mathbf{v}\\times\\mathbf{B})$',
      '$\\mathbf{F}=q\\,(\\mathbf{B}+\\mathbf{v}\\times\\mathbf{E})$',
      '$\\mathbf{F}=q\\,(\\mathbf{E}\\times\\mathbf{B})$',
      '$\\mathbf{F}=q\\,\\mathbf{v}$'
    ],
    correctIndex: 0,
    explanation:
      'Electric fields accelerate along $\\mathbf{E}$; magnetic fields deflect via $\\mathbf{v}\\times\\mathbf{B}$.',
    realWorld:
      'Explains cyclotrons, mass spectrometers, and charged-particle motion in plasmas.',
    hint: 'Magnetic part is a cross product.'
  },
  {
    id: 67053,
    topic: 'lorentz',
    difficulty: 'sota',
    question:
      'Time dilation follows from Lorentz transformations. If a clock moves at speed $v$, how are proper time $\\Delta\\tau$ and coordinate time $\\Delta t$ related?',
    options: [
      '$\\Delta t = \\gamma\\,\\Delta\\tau$',
      '$\\Delta\\tau = \\gamma\\,\\Delta t$',
      '$\\Delta t = \\Delta\\tau$ always',
      '$\\Delta t = \\Delta\\tau^2$'
    ],
    correctIndex: 0,
    explanation:
      'Moving clocks tick slower: observers measure a longer time interval $\\Delta t$ than the clock’s proper time $\\Delta\\tau$.',
    realWorld:
      'Muon lifetime dilation and GPS timing corrections rely on this.',
    hint: '$\\gamma\\ge 1$ makes moving time longer.'
  },
  {
    id: 67054,
    topic: 'lorentz',
    difficulty: 'sota',
    question:
      'The Lorentz group is the set of linear transformations preserving the Minkowski metric. In matrix form, what condition characterizes $\\Lambda$ (with metric $\\eta$)?',
    options: [
      '$\\Lambda^{\\top}\\eta\\,\\Lambda=\\eta$',
      '$\\Lambda^{\\top}\\Lambda=I$ (Euclidean orthogonality)',
      '$\\det(\\Lambda)=0$',
      '$\\Lambda\\eta=I$'
    ],
    correctIndex: 0,
    explanation:
      'This is the defining invariance condition: it preserves the bilinear form $x^{\\top}\\eta x$.',
    realWorld:
      'Underlying symmetry of relativistic field theories and particle physics.',
    hint: 'It’s “orthogonal,” but with $\\eta$ instead of $I$.'
  }
];