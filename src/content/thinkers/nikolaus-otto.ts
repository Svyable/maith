import type { Question } from '../types';

export const nikolausOttoQuestions: Question[] = [
  {
    id: 13310,
    topic: 'nikolaus-otto',
    difficulty: 'easy',
    question:
      'The ideal Otto cycle is the canonical thermodynamic model for what kind of engine, and what key idealization does it make about heat addition?',
    options: [
      'Spark-ignition gasoline engines; it idealizes combustion as constant-volume heat addition',
      'Compression-ignition diesel engines; it idealizes combustion as constant-pressure heat addition',
      'Gas turbines; it idealizes combustion as constant-entropy heat addition',
      'Steam engines; it idealizes heat addition as constant-mass boiling'
    ],
    correctIndex: 0,
    explanation:
      'The Otto cycle is a 4-process idealization: isentropic compression, constant-volume heat addition, isentropic expansion, constant-volume heat rejection—capturing the “spark then rapid burn” abstraction.',
    realWorld:
      'While real combustion is not perfectly constant-volume, the Otto model predicts how compression ratio and $\\gamma$ shape efficiency.',
    hint: 'Otto ≈ spark ignition + constant-volume heat addition.'
  },
  {
    id: 13311,
    topic: 'nikolaus-otto',
    difficulty: 'easy',
    question:
      'For an ideal Otto cycle, the thermal efficiency is often written as $\\eta = 1-\\tfrac{1}{r^{\\gamma-1}}$. What do $r$ and $\\gamma$ represent?',
    options: [
      '$r=\\tfrac{V_1}{V_2}$ is compression ratio; $\\gamma=\\tfrac{c_p}{c_v}$ is ratio of specific heats',
      '$r$ is air–fuel ratio; $\\gamma$ is spark advance in degrees',
      '$r$ is RPM; $\\gamma$ is the throttle position',
      '$r$ is octane rating; $\\gamma$ is exhaust backpressure'
    ],
    correctIndex: 0,
    explanation:
      'In the ideal model, increasing $r$ increases peak temperature/pressure and increases the fraction of heat converted to work. $\\gamma$ reflects gas thermodynamics; higher $\\gamma$ also increases efficiency.',
    realWorld:
      'Real engines deviate (heat loss, finite burn, variable $\\gamma$), but the trend “higher $r$ → higher efficiency” is a core design driver.',
    hint: 'It’s the famous $1-1/r^{\\gamma-1}$ formula: $r$ is geometric.'
  },
  {
    id: 13312,
    topic: 'nikolaus-otto',
    difficulty: 'hard',
    question:
      'Why does engine knock constrain the maximum usable compression ratio in spark-ignition engines? Give the mechanism in terms of end-gas auto-ignition and pressure/temperature.',
    options: [
      'As $r$ increases, end-gas $T$ and $p$ rise, increasing auto-ignition tendency; spontaneous combustion creates damaging pressure waves',
      'As $r$ increases, flame speed goes to zero so the engine stalls',
      'As $r$ increases, fuel stops vaporizing entirely, preventing any burn',
      'Knock is caused only by mechanical imbalance, not combustion'
    ],
    correctIndex: 0,
    explanation:
      'During compression and early combustion, the unburned “end gas” can reach conditions where chemical kinetics trigger auto-ignition. This creates rapid, nearly explosive heat release, producing high-frequency pressure oscillations and mechanical stress.',
    realWorld:
      'Higher octane, direct injection, cooled EGR, and optimized chamber design mitigate knock to allow higher effective compression or boost.',
    hint: 'Knock is *uncontrolled* auto-ignition of the end gas.'
  },
  {
    id: 13313,
    topic: 'nikolaus-otto',
    difficulty: 'hard',
    question:
      'A turbocharged gasoline engine can raise effective compression pressure but still avoid knock. Which strategy most directly reduces knock for a given boost by lowering charge temperature?',
    options: [
      'Intercooling the compressed intake air (reducing $T_{in}$ so end-gas temperature is lower)',
      'Increasing spark advance dramatically at all loads',
      'Reducing fuel injection so the mixture is extremely lean everywhere',
      'Removing the radiator to keep the engine hotter'
    ],
    correctIndex: 0,
    explanation:
      'For a given boost, reducing intake charge temperature lowers the compressed end-gas temperature, delaying auto-ignition. Intercoolers plus direct injection (charge cooling) both help keep $T$ down.',
    realWorld:
      'Modern downsized turbo engines rely on intercooling and careful ignition control to balance power and knock limits.',
    hint: 'Cooler air → lower end-gas $T$ after compression.'
  },
  {
    id: 13314,
    topic: 'nikolaus-otto',
    difficulty: 'sota',
    question:
      'Many hybrids run an “Atkinson-style” gasoline engine. In modern engines, this is often achieved by late intake valve closing (LIVC). What is the thermodynamic intuition (use effective compression vs expansion ratio)?',
    options: [
      'Lower effective compression ratio while keeping a larger expansion ratio, increasing efficiency by extracting more work during expansion',
      'Increase compression ratio beyond expansion ratio to maximize peak power',
      'Eliminate expansion entirely to reduce friction losses',
      'Make the cycle isothermal so $\\eta\\to 1$'
    ],
    correctIndex: 0,
    explanation:
      'By keeping the intake valve open longer, some charge is pushed back, reducing effective compression while maintaining full geometric expansion. This approximates an Atkinson-like cycle where expansion ratio > compression ratio, improving efficiency at the cost of peak torque.',
    realWorld:
      'Electric motors fill in torque at low speeds, letting the gasoline engine operate in high-efficiency regions more often.',
    hint: 'Hybrids sacrifice peak power for higher average efficiency.'
  }
];