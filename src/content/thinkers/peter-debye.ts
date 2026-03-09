import type { Question } from '../types';

export const peterDebyeQuestions: Question[] = [
  {
    id: 50022,
    topic: 'peter-debye',
    difficulty: 'easy',
    question: 'Peter Debye introduced the concept of molecular dipole moments. The Debye unit (D) measures:',
    options: [
      'The electric dipole moment of a molecule, quantifying the separation of positive and negative charge centers',
      'The magnetic susceptibility of paramagnetic materials',
      'The viscosity of a fluid in centipoise',
      'The thermal conductivity of crystalline solids'
    ],
    correctIndex: 0,
    explanation: 'The dipole moment $\\mu = q \\cdot d$ (charge × separation distance) measures charge asymmetry. Water has $\\mu \\approx 1.85$ D, reflecting its bent geometry. The unit 1 D $= 3.336 \\times 10^{-30}$ C·m honors Debye\'s pioneering work on polar molecules.',
    realWorld: 'Dipole moments predict solubility (like dissolves like), boiling points, dielectric properties of materials, and molecular interactions in drug binding.',
    hint: 'Named after Debye, it measures how "polar" a molecule is.'
  },
  {
    id: 50023,
    topic: 'peter-debye',
    difficulty: 'hard',
    question: 'The Debye-Hückel theory models the behavior of dilute electrolyte solutions. The key result for the activity coefficient $\\gamma_\\pm$ of an ion is:',
    options: [
      '$\\ln \\gamma_\\pm = -A |z_+ z_-| \\sqrt{I}$, where $I$ is the ionic strength and $A$ is a solvent-dependent constant',
      '$\\gamma_\\pm = 1$ for all solutions regardless of concentration',
      '$\\ln \\gamma_\\pm = B \\cdot c^2$ — quadratic in molar concentration',
      '$\\gamma_\\pm = z_+ / z_-$ — simply the ratio of ionic charges'
    ],
    correctIndex: 0,
    explanation: 'Debye-Hückel limiting law:\n$$\\log \\gamma_\\pm = -A |z_+ z_-| \\sqrt{I}, \\quad I = \\frac{1}{2} \\sum c_i z_i^2.$$\nIt models each ion as surrounded by an oppositely charged "ionic atmosphere" of characteristic thickness (Debye length $\\kappa^{-1}$). The theory breaks down above ~0.01 M.',
    realWorld: 'Essential in electrochemistry, environmental chemistry (seawater ion activity), and biochemistry (protein-ion interactions at physiological ionic strength).',
    hint: 'Activity coefficient depends on the square root of ionic strength — the "limiting law."'
  },
  {
    id: 50024,
    topic: 'peter-debye',
    difficulty: 'sota',
    question: 'The Debye model of heat capacity improves on Einstein\'s model by treating the solid as having a continuous spectrum of vibrational modes up to a cutoff frequency $\\omega_D$. The Debye heat capacity at low temperature scales as:',
    options: [
      '$C_V \\propto T^3$ (the Debye $T^3$ law), matching experimental observations',
      '$C_V = 3Nk_B$ (constant, the Dulong-Petit value) at all temperatures',
      '$C_V \\propto e^{-\\Theta_D / T}$ (exponential decay like the Einstein model)',
      '$C_V \\propto T^{-1}$ (inversely proportional to temperature)'
    ],
    correctIndex: 0,
    explanation: 'The Debye model uses a density of states $g(\\omega) \\propto \\omega^2$ up to the Debye cutoff $\\omega_D$. At low $T$:\n$$C_V = \\frac{12 \\pi^4}{5} N k_B \\left(\\frac{T}{\\Theta_D}\\right)^3,$$\nwhere $\\Theta_D = \\hbar \\omega_D / k_B$ is the Debye temperature. This $T^3$ law agrees with experiment far better than Einstein\'s exponential prediction.',
    realWorld: 'The Debye temperature characterizes the stiffness of crystalline materials. Diamond ($\\Theta_D \\approx 2230$ K) retains quantum behavior at room temperature, while lead ($\\Theta_D \\approx 105$ K) is classical.',
    hint: 'At low temperature, the cubic power law arises from the quadratic density of states.'
  }
];
