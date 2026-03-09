import type { Question } from '../types';

export const gilbertLewisQuestions: Question[] = [
  {
    id: 50001,
    topic: 'gilbert-lewis',
    difficulty: 'easy',
    question: 'Gilbert N. Lewis revolutionized our understanding of chemical bonding. What is the central idea of a "Lewis structure"?',
    options: [
      'Atoms achieve stability by sharing or transferring valence electrons to satisfy the octet rule, depicted as dot diagrams',
      'Atoms bond exclusively through gravitational attraction between their nuclei',
      'All bonds are ionic — electrons are always fully transferred, never shared',
      'Chemical bonds arise from nuclear fusion of adjacent atoms'
    ],
    correctIndex: 0,
    explanation: 'Lewis dot structures represent valence electrons as dots around atomic symbols. Covalent bonds are shown as shared electron pairs, giving each atom a filled octet (or duet for H). This simple model remains foundational in introductory and advanced chemistry.',
    realWorld: 'Every organic chemistry student draws Lewis structures to predict molecular geometry, reactivity, and polarity — from drug design to polymer engineering.',
    hint: 'Think about dots representing outermost electrons shared between atoms.'
  },
  {
    id: 50002,
    topic: 'gilbert-lewis',
    difficulty: 'hard',
    question: 'Lewis also proposed a broader definition of acids and bases. According to Lewis acid-base theory:',
    options: [
      'An acid is an electron-pair acceptor and a base is an electron-pair donor',
      'An acid donates protons ($H^+$) and a base donates hydroxide ($OH^-$)',
      'Acids and bases are defined solely by pH — below 7 is acid, above 7 is base',
      'A Lewis acid must contain at least one halogen atom'
    ],
    correctIndex: 0,
    explanation: 'Lewis generalized the acid-base concept beyond proton transfer. A Lewis acid has an empty orbital that can accept an electron pair (e.g., $BF_3$), while a Lewis base donates a lone pair (e.g., $NH_3$). The reaction $BF_3 + NH_3 \\to F_3B{-}NH_3$ is a classic example.',
    realWorld: 'Lewis acid catalysis is ubiquitous in organic synthesis — Friedel-Crafts reactions use $AlCl_3$ as a Lewis acid catalyst in pharmaceutical and petrochemical manufacturing.',
    hint: 'This definition focuses on electron pairs, not protons.'
  },
  {
    id: 50003,
    topic: 'gilbert-lewis',
    difficulty: 'sota',
    question: 'Lewis introduced the concept of "activity" ($a$) in thermodynamics. The chemical potential of a species in a non-ideal solution is expressed as:',
    options: [
      '$\\mu = \\mu^\\circ + RT \\ln a$, where $a = \\gamma \\cdot x$ accounts for non-ideal behavior via the activity coefficient $\\gamma$',
      '$\\mu = \\mu^\\circ + PV$, using only pressure and volume',
      '$\\mu = \\mu^\\circ - RT / a$, with activity in the denominator',
      '$\\mu = \\mu^\\circ + RT \\ln P$ regardless of solution phase'
    ],
    correctIndex: 0,
    explanation: 'Lewis defined thermodynamic activity to generalize the ideal expression $\\mu = \\mu^\\circ + RT \\ln x$ to real systems. The activity coefficient $\\gamma$ captures deviations from ideality:\n$$\\mu_i = \\mu_i^\\circ + RT \\ln(\\gamma_i x_i).$$\nThis framework is essential for equilibrium calculations in concentrated solutions, electrolytes, and high-pressure gases.',
    realWorld: 'Activity coefficients are critical in electrochemistry (battery design), geology (mineral equilibria), and pharmaceutical formulation (drug solubility in biological media).',
    hint: 'He replaced concentration with a corrected quantity that accounts for molecular interactions.'
  }
];
