import type { Question } from '../types';

export const davidGrossQuestions: Question[] = [
  {
    id: 10646,
    topic: 'david-gross',
    difficulty: 'easy',
    question: 'Asymptotic freedom, discovered by Gross, Wilczek, and Politzer, means:',
    options: [
      'The strong force becomes weaker at short distances (high energies)',
      'Quarks become more tightly bound at high energies',
      'All forces unify at low energies',
      'Gravity becomes dominant inside protons',
    ],
    correctIndex: 0,
    explanation: 'In QCD, the coupling constant α_s decreases logarithmically with energy: α_s(Q²) → 0 as Q² → ∞. This allows perturbative calculations at high energies despite the strong force being "strong."',
    realWorld: 'Asymptotic freedom is why we can calculate deep inelastic scattering at the LHC — at high energies, quarks behave almost freely inside protons.',
    hint: 'Quarks are freest when closest together.',
  },
  {
    id: 10647,
    topic: 'david-gross',
    difficulty: 'hard',
    question: 'The QCD beta function at one loop is $\\beta(g) = -\\frac{g^3}{16\\pi^2}(11 - \\frac{2}{3}n_f)$. For asymptotic freedom to hold:',
    options: [
      'The number of quark flavors must satisfy $n_f < 16.5$ (we have 6)',
      'The number of colors must be exactly 3',
      'The quark masses must all be equal',
      'The coupling must be greater than 1',
    ],
    correctIndex: 0,
    explanation: 'The coefficient (11 - 2n_f/3) must be positive for the coupling to decrease at high energies. With 6 flavors, 11 - 4 = 7 > 0, so QCD is asymptotically free. More than 16 flavors would destroy this property.',
    realWorld: 'This constraint limits possible extensions of the Standard Model — adding too many new colored particles would ruin asymptotic freedom.',
    hint: 'The sign of the beta function depends on the number of quark flavors.',
  },
  {
    id: 10648,
    topic: 'david-gross',
    difficulty: 'sota',
    question: 'Gross co-discovered the heterotic string, which combines:',
    options: [
      'Left-moving bosonic string (26D) with right-moving superstring (10D), yielding consistent 10D physics with E₈×E₈ or SO(32) gauge groups',
      'Open and closed strings into a single framework',
      'Type IIA and IIB superstrings',
      'Strings with membranes (M-theory)',
    ],
    correctIndex: 0,
    explanation: 'The heterotic string (1985) exploits different left/right structures: 26D bosonic modes (with 16 compactified) carry gauge degrees of freedom, while 10D superstring modes provide spacetime supersymmetry. The result: N=1 supergravity with E₈×E₈ gauge symmetry.',
    realWorld: 'Heterotic strings were the leading candidate for a "Theory of Everything" in the late 1980s and remain important in string phenomenology.',
    hint: 'It\'s a hybrid: different physics for left-moving and right-moving modes.',
  },
];
