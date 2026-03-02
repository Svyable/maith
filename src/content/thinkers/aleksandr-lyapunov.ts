import type { Question } from '../types';

export const lyapunovQuestions: Question[] = [
  {
    id: 31115,
    topic: 'lyapunov',
    difficulty: 'easy',
    question: 'In dynamical systems defined by $\\dot{x} = f(x)$ with an equilibrium at $x^*=0$, what specific mathematical condition defines "strict asymptotic stability" using a constructed Lyapunov function $V(x)$?',
    options: [
      'The function must act like an energy bowl: $V(x) > 0$ for all $x \\neq 0$, and its time derivative must be strictly negative, $\\dot{V}(x) < 0$.',
      'The function must be completely time-invariant: $V(x)$ remains strictly constant across all evaluated time domains, $\\dot{V}(x) = 0$.',
      'The function must mathematically bound the system\'s infinite growth: $V(x) < 0$ for all $x$, while its derivative rapidly exponentially increases.',
      'The function must oscillate continuously: $V(x)$ possesses alternating positive and negative eigenvalues corresponding to phase transitions.'
    ],
    correctIndex: 0,
    explanation: 'A Lyapunov function acts like a measure of "energy." If the energy is strictly positive everywhere except at the exact resting point ($x=0$), and the system is constantly losing energy over time ($\\dot{V}(x) < 0$), the system is mathematically guaranteed to eventually slide down the bowl and stop perfectly at the equilibrium point.',
    realWorld: 'Lyapunov stability is the absolute foundational math used to program cruise control systems, autopilot algorithms, and rocket landing thrusters to ensure they smoothly reach their target without infinitely oscillating.',
    hint: 'The system must always possess positive energy, and that energy must constantly be bleeding away over time.',
  },
  {
    id: 31116,
    topic: 'lyapunov',
    difficulty: 'hard',
    question: 'The "Lyapunov Exponent" ($\\lambda$) rigorously measures the onset of chaos in a dynamical system. How is chaos mathematically defined using this exponent?',
    options: [
      'A system is definitively chaotic if its maximal Lyapunov exponent is strictly positive ($\\lambda > 0$), meaning infinitesimally close trajectories separate exponentially fast.',
      'A system is uniquely chaotic when its maximal Lyapunov exponent is strictly identically zero ($\\lambda = 0$), implying absolutely zero geometric predictability.',
      'A system is deemed chaotic if the sum of all its negative Lyapunov exponents mathematically exceeds the absolute magnitude of its initial conditions.',
      'A system is proven chaotic if its Lyapunov exponent oscillates between complex imaginary values and strictly negative real numbers.'
    ],
    correctIndex: 0,
    explanation: 'The Lyapunov exponent measures how fast two points that start incredibly close together drift apart. If $\\lambda < 0$, they pull together (stable). If $\\lambda > 0$, they fly apart exponentially fast. This exponential divergence from tiny initial differences is the exact mathematical definition of chaos (the butterfly effect).',
    realWorld: 'This exponent dictates exactly how far into the future we can accurately forecast the weather before the chaotic drift makes the prediction mathematically useless.',
    hint: 'Chaos means tiny errors blow up exponentially. The exponent measures the exact speed of that explosion.',
  },
  {
    id: 31117,
    topic: 'lyapunov',
    difficulty: 'sota',
    question: 'Lyapunov provided a massive upgrade to the Central Limit Theorem (CLT) by proving the "Lyapunov condition." What severe restriction on the random variables did this condition successfully eliminate?',
    options: [
      'It eliminated the requirement that the random variables must be identically distributed, proving the CLT works for entirely different distributions as long as their higher moments ($\\geq 2+\\delta$) are bounded.',
      'It eliminated the strict assumption of statistical independence, proving the CLT holds perfectly even for highly correlated Markov chain sequences.',
      'It removed the necessity for the variables to possess a finite variance, extending the theorem into infinite-variance Cauchy probability domains.',
      'It bypassed the requirement for continuous sample paths, successfully proving the CLT holds absolutely true for strictly discrete Poisson jump processes.'
    ],
    correctIndex: 0,
    explanation: 'The classic CLT required every data point to come from the exact same random distribution (IID). Lyapunov proved that as long as the distributions aren\'t too "wild" (specifically, the sum of their absolute moments of order $2+\\delta$ shrinks relative to the variance), you can mix totally different probability distributions together and still mathematically form a perfect bell curve.',
    realWorld: 'Because of Lyapunov, statisticians can build normal curves out of highly varied real-world data (like mixing stock prices with weather data and traffic times).',
    hint: 'It proved that the variables do not all have to be cloned from the exact same mathematical distribution.',
  },
  {
    id: 31118,
    topic: 'lyapunov',
    difficulty: 'hard',
    question: 'In modern control theory, evaluating the continuous Lyapunov equation $A^T P + P A + Q = 0$ is a standard stability test. What does the existence of a unique positive-definite solution $P$ for any positive-definite $Q$ mathematically guarantee?',
    options: [
      'It guarantees that the matrix $A$ is strictly Hurwitz, meaning all its complex eigenvalues possess strictly negative real parts.',
      'It proves that the original dynamical system possesses highly stable, non-decaying orbital limit cycles within the evaluated phase space.',
      'It asserts that the state-space transformation matrix $A$ is highly orthogonal and fundamentally preserves all vector volume trajectories.',
      'It dictates that the closed-loop feedback system will asymptotically converge strictly in absolute finite time, rather than infinite limits.'
    ],
    correctIndex: 0,
    explanation: 'If you can plug any symmetric positive-definite matrix into $Q$ and successfully solve for a positive-definite matrix $P$, Lyapunov\'s equation mathematically proves that the dynamic matrix $A$ is "Hurwitz." This means every single mode of the system naturally decays back to zero stability.',
    realWorld: 'This exact matrix equation is constantly solved by the software inside autonomous drones to prove that their flight stabilization algorithms will not suddenly destabilize and crash.',
    hint: 'It guarantees that the core DNA of the system (matrix A) is programmed to strictly decay towards stability.',
  },
  {
    id: 31119,
    topic: 'lyapunov',
    difficulty: 'easy',
    question: 'The stunningly beautiful "Lyapunov Fractals" are generated by tracking the stability of the logistic map $x_{n+1} = r x_n(1-x_n)$. What unique algorithmic twist creates the Lyapunov fractal specifically?',
    options: [
      'The growth rate parameter $r$ is not held constant, but strictly alternates over time following a repeating binary sequence (like A-B-A-B).',
      'The iterative map is fundamentally shifted from evaluating real scalar numbers into evaluating massive two-dimensional complex quaternions.',
      'The discrete iterations are entirely replaced by a continuous continuous-time differential flow integrated using Runge-Kutta numerical steps.',
      'The underlying topological fractal geometry is subjected to random stochastic Brownian noise at every discrete mathematical iteration.'
    ],
    correctIndex: 0,
    explanation: 'Standard fractals (like the Mandelbrot set) iterate a single equation. A Lyapunov fractal takes the logistic map (a model for population growth) and forces the environment to periodically change between two growth rates (A and B). The colors in the fractal literally map whether the resulting population stabilizes (negative Lyapunov exponent) or descends into chaos (positive exponent).',
    realWorld: 'These fractals provide a breathtaking visual map of how alternating environmental conditions can either perfectly stabilize or violently destroy a biological population.',
    hint: 'The parameter controlling the equation constantly switches back and forth between two different values as it runs.',
  }
];