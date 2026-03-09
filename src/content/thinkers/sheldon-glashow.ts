import type { Question } from '../types';

export const sheldonGlashowQuestions: Question[] = [
  {
    id: 10643,
    topic: 'sheldon-glashow',
    difficulty: 'easy',
    question: 'Glashow contributed to which unification in particle physics?',
    options: [
      'The electroweak unification — combining electromagnetism with the weak force',
      'Grand unification of all four forces',
      'Unification of special and general relativity',
      'The strong force with gravity',
    ],
    correctIndex: 0,
    explanation: 'Glashow\'s 1961 work laid the groundwork for electroweak theory, proposing the SU(2)×U(1) gauge structure. Weinberg and Salam later incorporated the Higgs mechanism to give masses to the W and Z bosons.',
    realWorld: 'The W and Z bosons predicted by this theory were discovered at CERN in 1983, exactly as the theory predicted.',
    hint: 'He unified the force of light with the force of radioactive decay.',
  },
  {
    id: 10644,
    topic: 'sheldon-glashow',
    difficulty: 'hard',
    question: 'The GIM mechanism (Glashow-Iliopoulos-Maiani) explains why:',
    options: [
      'Flavor-changing neutral currents are suppressed — the charm quark cancels dangerous loop contributions',
      'Protons are stable against decay',
      'Neutrinos have mass',
      'CP violation occurs in kaon decays',
    ],
    correctIndex: 0,
    explanation: 'Without charm, kaon decays like K⁰ → μ⁺μ⁻ would be much larger than observed. The GIM mechanism showed that a fourth quark (charm) creates cancellations that suppress these processes, predicting m_c before its discovery.',
    realWorld: 'The J/ψ particle (cc̄) was discovered in 1974, confirming the charm quark and validating the GIM mechanism — the "November Revolution" in particle physics.',
    hint: 'A fourth quark was needed to cancel unwanted decay processes.',
  },
  {
    id: 10645,
    topic: 'sheldon-glashow',
    difficulty: 'sota',
    question: 'In the electroweak theory, the relationship between the W mass, Z mass, and Weinberg angle is:',
    options: [
      '$M_W = M_Z \\cos\\theta_W$, following from the gauge structure SU(2)_L × U(1)_Y',
      '$M_W = M_Z$ exactly',
      '$M_W = 2M_Z$ due to isospin symmetry',
      '$M_W/M_Z = \\alpha$, the fine structure constant',
    ],
    correctIndex: 0,
    explanation: 'The W and Z masses arise from electroweak symmetry breaking: $M_W = gv/2$ and $M_Z = \\sqrt{g^2+g\'^2}v/2$. Their ratio gives $M_W/M_Z = \\cos\\theta_W \\approx 0.88$, matching experiment.',
    realWorld: 'Precision measurements of this ratio at LEP tested the Standard Model to 0.1% accuracy and constrained the Higgs mass before its discovery.',
    hint: 'The mixing angle relates the masses of the two heavy gauge bosons.',
  },
];
