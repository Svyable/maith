import type { Question } from '../types';

export const gaspardMongeQuestions: Question[] = [
  {
    id: 31055,
    topic: 'gaspard-monge',
    difficulty: 'easy',
    question: 'Gaspard Monge is widely considered the undisputed mathematical father of what specific branch of geometry, essential to modern engineering and architecture?',
    options: [
      'Descriptive geometry, which allows three-dimensional objects to be accurately represented on two-dimensional planes.',
      'Fractal geometry, which models the infinitely recursive and self-similar shapes found frequently in nature.',
      'Projective geometry, which mathematically proves that parallel lines will eventually intersect at an infinite horizon.',
      'Differential geometry, which applies the principles of calculus to study the curvature of complex abstract manifolds.'
    ],
    correctIndex: 0,
    explanation: 'Monge invented descriptive geometry, utilizing orthogonal projections (viewing an object from the front, top, and side simultaneously) to mathematically capture exactly how to build a 3D object using flat 2D blueprints.',
    realWorld: 'Every CAD (Computer-Aided Design) program, architectural blueprint, and mechanical engineering schematic on Earth relies entirely on Monge\'s projection principles.',
    hint: 'It is the mathematics of drawing incredibly accurate blueprints.',
  },
  {
    id: 31056,
    topic: 'gaspard-monge',
    difficulty: 'hard',
    question: 'Monge\'s work on the famous "Monge-Kantorovich transportation problem" originated from his attempt to solve what highly practical 18th-century military issue?',
    options: [
      'The most efficient way to move large piles of soil to build fortifications and massive defensive earthworks.',
      'The optimal trigonometric trajectory for firing explosive artillery shells over highly mountainous terrain.',
      'The mathematically perfect deployment of naval ships to maximize the blockade of an enemy coastal port.',
      'The safest cryptological routing algorithm for sending coded messages across heavily occupied enemy territory.'
    ],
    correctIndex: 0,
    explanation: 'Monge was tasked with figuring out the absolute cheapest, fastest way to move piles of dirt (the *déblais*) into the holes/fortifications where they were needed (the *remblais*). He created a brilliant geometric theory of optimal transport to solve it.',
    realWorld: 'Optimal transport theory is now a massive subfield of AI and machine learning, used for comparing image distributions, managing logistics networks, and balancing ride-sharing algorithms like Uber.',
    hint: 'He was trying to figure out how to dig dirt and build walls without wasting any effort.',
  },
  {
    id: 31057,
    topic: 'gaspard-monge',
    difficulty: 'sota',
    question: 'In differential geometry, what exactly is a "Monge patch"?',
    options: [
      'A specific way to parameterize a surface as a graph of a function $z = f(x, y)$ over a flat two-dimensional domain.',
      'A topological singularity where the Gaussian curvature of a smooth continuous surface abruptly becomes infinite.',
      'A specific boundary condition required to solve highly complex non-linear partial differential equations.',
      'A closed geometric loop that cannot be continuously shrunk to a single point without tearing the underlying manifold.'
    ],
    correctIndex: 0,
    explanation: 'A Monge patch is the simplest way to describe a curved 3D surface locally: you simply treat the height (z) as a direct function of the coordinates (x, y) on the flat plane beneath it. It acts as a local coordinate chart for the manifold.',
    realWorld: 'This is exactly how height maps are generated in 3D video games to render mountains and valleys on flat polygonal terrain grids.',
    hint: 'It maps a complex 3D surface by simply assigning a height value to a flat 2D grid.',
  },
  {
    id: 31058,
    topic: 'gaspard-monge',
    difficulty: 'hard',
    question: 'During the French Revolution, Monge served as Minister of the Marine, but he was also deeply instrumental in establishing which massive, globally adopted scientific standard?',
    options: [
      'The metric system, defining standard base units for length, mass, and volume to unify European commerce.',
      'The Gregorian calendar, resetting the mathematical leap year cycle to perfectly align with solar equinoxes.',
      'The Prime Meridian, mathematically standardizing global longitudinal navigation to a single fixed geographic point.',
      'The Fahrenheit temperature scale, providing the first mathematically rigorous calibration for thermodynamics.'
    ],
    correctIndex: 0,
    explanation: 'Monge was a massive advocate for scientific rationalization and served on the commission that established the metric system. They defined the meter mathematically as one ten-millionth of the distance from the equator to the North Pole.',
    realWorld: 'The metric system is now used by 95% of the global population, replacing thousands of chaotic, highly localized medieval measurement systems.',
    hint: 'He helped standardize how we measure centimeters, kilograms, and liters.',
  },
  {
    id: 31059,
    topic: 'gaspard-monge',
    difficulty: 'hard',
    question: 'Monge\'s revolutionary methods in geometry were considered so highly valuable by the French military that they:',
    options: [
      'Classified his mathematical research as a strict state secret for over 15 years to prevent enemies from building better forts.',
      'Forced him to burn all his original manuscripts so that British spies could not reverse-engineer his structural algorithms.',
      'Appointed him as the supreme commander of the French artillery, despite him having zero combat experience.',
      'Used his formulas to completely redesign the rifling of their muskets, doubling the effective range of their infantry.'
    ],
    correctIndex: 0,
    explanation: 'When Monge developed descriptive geometry at the military school in Mézières, his methods allowed fortresses to be designed exponentially faster. The French military immediately classified it as a top-secret weapon of war.',
    realWorld: 'It wasn\'t until Monge became a professor at the newly formed École Polytechnique in 1794 that he was finally allowed to teach his geometry to the public.',
    hint: 'They treated his math the same way a modern military treats nuclear launch codes.',
  }
];