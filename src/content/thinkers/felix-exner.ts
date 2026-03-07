import type { Question } from '../types';

export const felixExnerQuestions: Question[] = [
  {
    id: 307010,
    topic: 'felix-exner',
    difficulty: 'easy',
    question: 'Felix Maria Exner is most associated with which equation in Earth and sediment systems?',
    options: [
      'The Exner equation',
      'The Navier–Stokes equation',
      'The Schrödinger equation',
      'The Lotka–Volterra equation'
    ],
    correctIndex: 0,
    explanation: 'The Exner equation describes conservation of sediment mass in a bed, linking changes in bed elevation to divergence of sediment flux.',
    realWorld: 'It is used to model how riverbeds and channels erode, aggrade, and reshape over time.',
    hint: 'Think sediment transport.',
    symbolLinks: { 'η': 'eta' },
    formulaLinks: ['exner-equation'],
    glossaryLinks: ['exner-equation', 'sediment-flux', 'bed-aggradation'],
  },
  {
    id: 307011,
    topic: 'felix-exner',
    difficulty: 'hard',
    question: 'What does the Exner equation fundamentally express?',
    options: [
      'Conservation of sediment mass in a deforming bed',
      'Conservation of electric charge in a conductor',
      'The shortest path between two points',
      'Equilibrium in predator-prey populations'
    ],
    correctIndex: 0,
    explanation: 'The Exner equation states that bed elevation changes according to whether sediment is depositing or being removed, i.e. the divergence of sediment transport.',
    realWorld: 'Engineers use it to predict river incision, delta growth, and channel migration.',
    hint: 'It is a conservation law.',
    symbolLinks: { 'η': 'eta' },
    formulaLinks: ['exner-equation'],
    glossaryLinks: ['sediment-transport', 'sediment-flux', 'bed-aggradation'],
  },
  {
    id: 307012,
    topic: 'felix-exner',
    difficulty: 'sota',
    question: 'Why is Exner’s work still important in modern environmental and geomorphology modeling?',
    options: [
      'Because bed evolution models still rely on sediment continuity to couple flow and landscape change',
      'Because it proves rivers always reach equilibrium',
      'Because it removes the need for fluid dynamics',
      'Because it shows erosion is independent of transport'
    ],
    correctIndex: 0,
    explanation: 'Modern morphodynamic models couple hydraulics and sediment continuity, and the Exner equation remains the standard bed-evolution core.',
    realWorld: 'It appears in flood-risk modeling, river restoration, delta dynamics, and reservoir sedimentation studies.',
    hint: 'Think bed change through sediment balance.',
    symbolLinks: { 'η': 'eta' },
    formulaLinks: ['exner-equation'],
    glossaryLinks: ['geomorphology', 'sediment-transport', 'exner-equation'],
  },
];
