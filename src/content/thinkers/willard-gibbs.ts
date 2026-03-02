import type { Question } from '../types';

export const willardGibbsQuestions: Question[] = [
  {
    id: 31140,
    topic: 'willard-gibbs',
    difficulty: 'easy',
    question: 'Josiah Willard Gibbs mathematically defined "Gibbs Free Energy" ($\\Delta G = \\Delta H - T\\Delta S$). What deeply profound physical question does this simple equation perfectly answer?',
    options: [
      'It dictates whether a chemical reaction will occur completely spontaneously without requiring any external energy input.',
      'It calculates the absolute total thermal kinetic energy stored within the microscopic vibrations of a bounded chemical lattice.',
      'It proves mathematically that the speed of a fluid dynamic reaction increases exponentially with local atmospheric pressure.',
      'It calculates the precise voltage required to completely separate an atomic nucleus into its highly charged fundamental protons and neutrons.'
    ],
    correctIndex: 0,
    explanation: 'Gibbs unified Enthalpy (heat, $H$) and Entropy (chaos, $S$). If the resulting Gibbs Free Energy ($\\Delta G$) is negative, the reaction will happen spontaneously. The universe favors releasing heat and increasing chaos.',
    realWorld: 'This equation is the absolute foundation of all biochemistry. Your body constantly couples non-spontaneous reactions (like building muscle) to highly spontaneous reactions (like burning ATP) to keep your net $\\Delta G$ negative and keep you alive.',
    hint: 'It tells chemists instantly whether mixing two chemicals will result in an explosion, or absolutely nothing at all.',
  },
  {
    id: 31141,
    topic: 'willard-gibbs',
    difficulty: 'hard',
    question: 'Gibbs introduced the "Phase Rule," $F = C - P + 2$, to thermodynamics. What does the variable $F$ (Degrees of Freedom) mathematically represent in a complex chemical mixture?',
    options: [
      'The number of independent intensive variables (like temperature and pressure) that can be altered without physically changing the number of phases in equilibrium.',
      'The strict geometric dimensionality of the localized topological phase space required to accurately plot the reaction\'s continuous rate of decay.',
      'The exact integer number of completely distinct molecular bonds that can be broken before the strictly defined chemical lattice collapses.',
      'The specific number of fundamentally discrete subatomic fermionic states available to the local macroscopic thermodynamic ensemble.'
    ],
    correctIndex: 0,
    explanation: 'The Phase Rule calculates exactly how many dials (like temp and pressure) you can spin before you accidentally destroy a state of matter. For pure water ($C=1$) as a liquid ($P=1$), $F = 1 - 1 + 2 = 2$. You can change both temperature and pressure independently without boiling or freezing it.',
    realWorld: 'At the "triple point" of water (where ice, liquid, and steam perfectly coexist), $P=3$, meaning $F = 0$. You cannot touch the temperature or the pressure even slightly without destroying one of the phases. Material scientists rely on this rule to forge complex metal alloys.',
    hint: 'It tells you how many variables you are mathematically "free" to mess with before the physical state of the material radically changes.',
  },
  {
    id: 31142,
    topic: 'willard-gibbs',
    difficulty: 'sota',
    question: 'Gibbs essentially invented Statistical Mechanics. He mathematically formalized the "Grand Canonical Ensemble" to perfectly describe what highly specific thermodynamic scenario?',
    options: [
      'A macroscopic system that is completely open, freely exchanging both thermal energy and physical particles with an infinite external reservoir.',
      'A system perfectly isolated from the surrounding universe, possessing an absolutely strict, non-fluctuating total energy and exact particle count.',
      'A continuous quantum field where massive subatomic particles decay strictly into weightless photons without altering the localized geometric spacetime metric.',
      'An enclosed mechanical system that exchanges pure thermal heat with a reservoir, but mathematically blocks the transfer of any discrete physical matter.'
    ],
    correctIndex: 0,
    explanation: 'Gibbs created three ensembles to model chaos using probability. The Microcanonical is totally sealed. The Canonical exchanges only heat. The Grand Canonical is totally open—it allows both heat and actual particles to flow in and out, tracked by the chemical potential ($\\mu$).',
    realWorld: 'The Grand Canonical ensemble is the exact mathematics used to model the chaotic flow of electrons through the silicon transistors in a computer chip, where energy and particles are constantly moving in and out of the local system.',
    hint: 'It is the most chaotic, open system imaginable, where both the temperature and the actual number of molecules are constantly fluctuating.',
  },
  {
    id: 31143,
    topic: 'willard-gibbs',
    difficulty: 'sota',
    question: 'The "Gibbs Paradox" highlighted a severe logical flaw in classical thermodynamics involving the entropy of mixing two identical ideal gases. How is this paradox mathematically resolved in modern physics?',
    options: [
      'By dividing the continuous partition function strictly by $N!$ (N factorial), acknowledging that identical quantum particles are fundamentally indistinguishable.',
      'By multiplying the system\'s local volume by the fine-structure constant, ensuring the macroscopic spatial bounds collapse perfectly at the absolute zero limit.',
      'By replacing the strictly linear Euclidean distance metric with a highly curved Gaussian topological probability distribution.',
      'By assuming the kinetic velocity of the individual gas molecules strictly follows a discrete complex non-abelian Lie algebraic group.'
    ],
    correctIndex: 0,
    explanation: 'Classical math calculated that if you mix two identical boxes of identical gas, the entropy (chaos) magically increases. But mixing identical things shouldn\'t change anything! Gibbs (and later quantum mechanics) realized that because you physically cannot tell identical atoms apart, you must divide the total probability space by $N!$ (the number of ways to swap them) to prevent double-counting the chaos.',
    realWorld: 'This mathematical fix ($1/N!$) was the very first massive clue that classical physics was deeply flawed and that the bizarre rules of quantum indistinguishability were required to explain the real world.',
    hint: 'Because you cannot mathematically paint numbers on identical gas molecules, you have to divide the equation by the total number of identical permutations.',
  },
  {
    id: 31144,
    topic: 'willard-gibbs',
    difficulty: 'hard',
    question: 'Completely independently of his thermodynamic breakthroughs, Gibbs was deeply frustrated by the complex mathematics of quaternions. What foundational mathematical framework did he invent to replace them?',
    options: [
      'Modern Vector Analysis, defining the highly intuitive Dot Product ($\\mathbf{a} \\cdot \\mathbf{b}$) and Cross Product ($\\mathbf{a} \\times \\mathbf{b}$) used by physicists globally today.',
      'The modern algebra of non-commutative square matrices, allowing massive multi-variable simultaneous differential equations to be trivially diagonalized.',
      'The strict topological theory of fractional dimensional fractals, mathematically modeling the incredibly complex jaggedness of continuous natural coastlines.',
      'The discrete geometry of highly symmetrical Penrose tilings, proving that the flat Euclidean plane could be tiled perfectly without any repeating translational patterns.'
    ],
    correctIndex: 0,
    explanation: 'Hamilton\'s 4D quaternions were notoriously difficult for physicists to use. Gibbs (independently of Oliver Heaviside) stripped them down into the highly intuitive 3D vector calculus we use today, specifically inventing the dot product and cross product notation to make physics equations vastly simpler to read.',
    realWorld: 'Every modern university physics student, mechanical engineer, and 3D graphics programmer relies entirely on Gibbs\'s clean, elegant vector notation to calculate trajectories, forces, and lighting engines.',
    hint: 'He took an incredibly confusing 4D mathematical system and stripped it down to the highly intuitive 3D arrows used in basic physics classes.',
  }
];