import type { Question } from '../types';

export const ernestRutherfordQuestions: Question[] = [
  {
    id: 31145,
    topic: 'ernest-rutherford',
    difficulty: 'easy',
    question: 'Ernest Rutherford completely shattered the previous "plum pudding" model of the atom through his legendary Gold Foil experiment. What did he mathematically deduce from the scattering of alpha particles?',
    options: [
      'That nearly $100\\%$ of the atom\'s mass and all of its positive charge is incredibly concentrated within a mathematically microscopic central nucleus.',
      'That the absolute mass of an atom is perfectly, uniformly distributed throughout the entirety of its continuous electron cloud volume.',
      'That highly energetic alpha particles perfectly annihilate upon colliding with heavy metals, proving the absolute equivalence of mass and pure thermal energy.',
      'That the atom possesses absolutely zero internal geometric structure, existing mathematically as an indivisible, perfectly solid 3D sphere.'
    ],
    correctIndex: 0,
    explanation: 'Most alpha particles blasted right through the gold foil, but a tiny fraction violently bounced straight back. Rutherford realized this was only mathematically possible if the atom was $99.99\\%$ empty space, with a massively dense, positively charged bullet (the nucleus) hiding at the exact center.',
    realWorld: 'Rutherford famously said it was "as if you fired a 15-inch naval shell at a piece of tissue paper and it came back and hit you." This single experiment invented modern nuclear physics.',
    hint: 'He discovered that the atom is almost entirely empty space, anchored by an impossibly tiny, incredibly heavy core.',
  },
  {
    id: 31146,
    topic: 'ernest-rutherford',
    difficulty: 'sota',
    question: 'The Rutherford scattering formula $\\frac{d\\sigma}{d\\Omega} \\propto \\frac{1}{\\sin^4(\\theta/2)}$ mathematically predicts the highly specific geometric distribution of the bounced alpha particles. What fundamental physical force did Rutherford rely on to derive this exact cross-section?',
    options: [
      'The purely classical Coulomb electrostatic repulsive force operating squarely under an inverse-square distance law ($F \\propto 1/r^2$).',
      'The highly localized Strong Nuclear Force, operating strictly at sub-femtometer geometric distances through continuous meson exchange.',
      'The relativistic distortion of the local Minkowski spacetime metric caused by the extreme mass density of the massive gold nucleus.',
      'The discrete quantum mechanical weak force, calculating the highly precise probability of localized beta decay during the subatomic collision.'
    ],
    correctIndex: 0,
    explanation: 'Rutherford derived his wildly successful formula using nothing but classical Newtonian mechanics and Coulomb\'s law of electrostatic repulsion (positive repels positive). Quantum mechanics didn\'t even exist yet, but because the Coulomb force is an inverse-square law ($1/r^2$), the classical math miraculously matched the later quantum mechanical derivations perfectly.',
    realWorld: 'This equation is still the mathematical template for how modern particle accelerators (like the LHC at CERN) map the invisible internal structure of subatomic particles by smashing them together and measuring the angles of the debris.',
    hint: 'He didn\'t use complex quantum mechanics; he just assumed the incoming bullet and the nucleus were two massive positive magnets violently repelling each other.',
  },
  {
    id: 31147,
    topic: 'ernest-rutherford',
    difficulty: 'hard',
    question: 'In 1919, Rutherford achieved the ultimate dream of ancient alchemists by performing the very first intentional artificial transmutation of an element. What precise mathematical nuclear reaction did he successfully trigger?',
    options: [
      'He bombarded stable Nitrogen with energetic alpha particles, successfully absorbing the alpha particle and violently ejecting a proton to create Oxygen: $^{14}_7\\text{N} + \\alpha \\to ^{17}_8\\text{O} + p$.',
      'He irradiated pure Uranium with extremely slow-moving thermal neutrons, mathematically splitting the nucleus into Barium and Krypton while releasing massive kinetic energy.',
      'He compressed strictly local Hydrogen gas using highly calibrated magnetic fields, initiating continuous nuclear fusion and generating pure stable Helium.',
      'He saturated heavy stable Lead with high-frequency gamma radiation, violently ejecting localized neutrons to mathematically decay the lead into stable pure Gold.'
    ],
    correctIndex: 0,
    explanation: 'Rutherford fired alpha particles (helium nuclei) into nitrogen gas. He detected the emission of hydrogen nuclei (which he subsequently named "protons"). He had successfully fused the alpha particle into the nitrogen, transforming it into an entirely new element: Oxygen-17.',
    realWorld: 'This was the absolute birth of human-controlled nuclear reactions, proving that the chemical elements are not immutable, but can be mathematically added and subtracted like geometric blocks.',
    hint: 'He fired helium bullets into nitrogen, knocking out a single proton and creating a heavy version of the gas we breathe.',
  },
  {
    id: 31148,
    topic: 'ernest-rutherford',
    difficulty: 'hard',
    question: 'Early in his career, Rutherford completely mathematically defined the concept of radioactive "half-life." What profoundly strange natural mechanism does the exponential decay equation $N(t) = N_0 e^{-\\lambda t}$ reveal?',
    options: [
      'That radioactive decay is a purely statistical, deeply probabilistic process where the exact death of any single individual atom is mathematically impossible to predict.',
      'That radioactive elements strictly decay in highly discrete, synchronized waves triggered specifically by the Earth\'s shifting ambient magnetic field.',
      'That the absolute physical mass of the decaying element continuously increases geometrically as the ambient thermal temperature asymptotically approaches absolute zero.',
      'That nuclear decay is entirely deterministic, allowing physicists to calculate the exact millisecond any specific subatomic nucleus will physically fracture.'
    ],
    correctIndex: 0,
    explanation: 'The decay formula mathematically models a crowd, not an individual. Rutherford realized that while you can predict with absolute perfect mathematical certainty that half a block of uranium will decay in 4.5 billion years, it is physically impossible to know when any one specific atom will "pop." It is pure quantum chance.',
    realWorld: 'This equation is the exact mathematical foundation of Carbon-14 dating, allowing archaeologists to precisely calculate the age of ancient Egyptian mummies and dinosaur bones based purely on the statistical decay of carbon.',
    hint: 'The math accurately tracks the behavior of the massive crowd, but admits total ignorance about the fate of any single individual.',
  },
  {
    id: 31149,
    topic: 'ernest-rutherford',
    difficulty: 'hard',
    question: 'Despite being recognized globally as the absolute "father of nuclear physics," Rutherford\'s 1908 Nobel Prize contains a famous, deeply ironic historical twist. In what highly specific category was he awarded the prize?',
    options: [
      'Chemistry, for his mathematical investigations into the disintegration of the elements and the chemistry of radioactive substances.',
      'Physiology or Medicine, for successfully utilizing localized radioactive isotopes to mathematically target and destroy necrotic biological tissue.',
      'Physics, specifically for theoretically calculating the absolute localized mass of the completely invisible subatomic neutrino.',
      'Mathematics, for deriving the highly complex continuous non-linear equations mapping the fractal trajectories of Brownian motion.'
    ],
    correctIndex: 0,
    explanation: 'Rutherford was a hardcore, die-hard physicist who famously stated, "All science is either physics or stamp collecting." Ironically, the Nobel committee awarded him the Prize in Chemistry for proving that radioactive elements naturally transform into entirely different chemical elements.',
    realWorld: 'Rutherford found this intensely amusing, noting in his Nobel banquet speech that he had dealt with many rapid transformations in his experiments, but none so rapid as his own transformation from a physicist into a chemist.',
    hint: 'He won the prize in a field of science he actively and frequently insulted.',
  }
];