import type { Question } from '../types';

export const maclaurinQuestions: Question[] = [
  {
    id: 31050,
    topic: 'maclaurin',
    difficulty: 'easy',
    question: 'A "Maclaurin series" is a massive staple of modern calculus. How does it specifically differ from a standard Taylor series?',
    options: [
      'It is simply a Taylor series where the point of expansion (the center) is specifically set to exactly zero.',
      'It uses strictly alternating positive and negative signs, whereas a Taylor series uses only positive addition.',
      'It is designed to approximate functions using trigonometric sines and cosines rather than algebraic polynomials.',
      'It only applies to discrete integer functions, whereas the Taylor series models continuous infinite variables.'
    ],
    correctIndex: 0,
    explanation: 'A Taylor series can be used to approximate a function around any specific point (a). A Maclaurin series is just a special, highly useful case of the Taylor series where you decide to evaluate the function exactly at x = 0.',
    realWorld: 'Centering approximations at zero heavily simplifies calculations, making the Maclaurin series the default tool for evaluating complex functions near their origin point.',
    hint: 'It is a special case of the Taylor series that starts right in the middle of the graph at the origin.',
  },
  {
    id: 31051,
    topic: 'maclaurin',
    difficulty: 'hard',
    question: 'The Euler-Maclaurin formula is a profound mathematical discovery that provides a powerful theoretical connection between what two fundamental operations?',
    options: [
      'Discrete finite sums and continuous definite integrals.',
      'Complex imaginary numbers and real trigonometric ratios.',
      'Algebraic matrix transformations and geometric rotations.',
      'Prime number factorization and modular arithmetic congruences.'
    ],
    correctIndex: 0,
    explanation: 'The Euler-Maclaurin formula allows mathematicians to approximate an incredibly difficult discrete sum (adding up distinct numbers) by calculating a continuous integral (finding the area under a smooth curve), using Bernoulli numbers to correct the error margin.',
    realWorld: 'This exact formula is used extensively in computational physics and computer science to quickly estimate the sum of massive datasets without having to calculate every single individual term.',
    hint: 'It builds a bridge between adding up step-by-step numbers and finding the smooth area under a curve.',
  },
  {
    id: 31052,
    topic: 'maclaurin',
    difficulty: 'sota',
    question: 'Maclaurin\'s inequality is a classic result in abstract algebra. It establishes a strict mathematical ordering between which specific values?',
    options: [
      'The elementary symmetric means of a set of non-negative real numbers.',
      'The continuous eigenvalues of a strictly positive-definite Hermitian matrix.',
      'The maximum possible error bounds of a truncated infinite geometric sequence.',
      'The topological genus of a surface and its corresponding Euler characteristic.'
    ],
    correctIndex: 0,
    explanation: 'Maclaurin\'s inequality generalizes the famous AM-GM (Arithmetic Mean-Geometric Mean) inequality. It proves that the sequences of elementary symmetric means of a set of positive numbers are strictly decreasing.',
    realWorld: 'These types of symmetric inequalities are crucial in probability theory and advanced optimization algorithms, ensuring that certain statistical averages stay within strict boundaries.',
    hint: 'It proves that certain types of mathematical averages are always larger than other types of averages.',
  },
  {
    id: 31053,
    topic: 'maclaurin',
    difficulty: 'hard',
    question: 'In 1742, Maclaurin wrote his *Treatise of Fluxions* specifically to defend Isaac Newton\'s calculus against fierce philosophical criticism from which notable figure?',
    options: [
      'Bishop George Berkeley, who mocked Newton\'s infinitesimals as "the ghosts of departed quantities."',
      'Gottfried Wilhelm Leibniz, who claimed Newton\'s notation was logically contradictory and visually absurd.',
      'Voltaire, who argued that purely algebraic methods were vastly superior to geometric fluxions.',
      'Christiaan Huygens, who believed the entire concept of a continuous mathematical limit was religiously heretical.'
    ],
    correctIndex: 0,
    explanation: 'Bishop Berkeley published an incredibly sharp critique of calculus, pointing out that Newton\'s "infinitesimals" were mathematically sloppy—they were treated as zero when convenient, and non-zero when dividing. Maclaurin wrote his massive treatise to prove Newton\'s calculus was geometrically rigorous.',
    realWorld: 'Berkeley was completely right about the sloppy logic; it took another 100 years for Cauchy and Weierstrass to finally invent the rigorous "limit" definition of calculus we use today.',
    hint: 'A religious philosopher attacked calculus for using "magical" shrinking numbers that weren\'t quite zero.',
  },
  {
    id: 31054,
    topic: 'maclaurin',
    difficulty: 'hard',
    question: 'Maclaurin made a significant contribution to geophysics by proving theoretically that a homogeneous rotating fluid mass will take what specific physical shape?',
    options: [
      'An oblate spheroid, perfectly confirming Newton\'s controversial theory about the true shape of the Earth.',
      'A perfect geometric sphere, completely disproving the contemporary French theory of equatorial bulging.',
      'A toroid (donut shape), assuming the rotational velocity exceeds the internal gravitational binding energy.',
      'A continuously elongating prolate ellipsoid that eventually fractures into two distinct binary satellites.'
    ],
    correctIndex: 0,
    explanation: 'Using massive amounts of geometric calculus, Maclaurin proved that a fluid mass bound by gravity but spinning on its axis will bulge at the equator and flatten at the poles, forming an oblate spheroid. This proved Newton was right about the Earth not being perfectly round.',
    realWorld: 'Because the Earth spins, the distance from the center of the Earth to the equator is actually 13 miles further than the distance to the poles—meaning mountains in Ecuador are physically "higher" than Mount Everest.',
    hint: 'He proved that spinning planets bulge out in the middle.',
  }
];