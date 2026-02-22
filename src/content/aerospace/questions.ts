import type { Question } from '../types';

export const aerospaceQuestions: Question[] = [
  {
    id: 40901, topic: 'aerospace', difficulty: 'easy',
    question: 'The Tsiolkovsky rocket equation $\\Delta v = v_e \\ln(m_0/m_f)$ shows that:',
    options: [
      'A rocket\'s velocity change depends logarithmically on its mass ratio — you need exponentially more fuel for linearly more speed',
      'Rockets accelerate at a constant rate regardless of fuel',
      'Heavier rockets are always faster',
      'Fuel mass doesn\'t affect rocket performance',
    ],
    correctIndex: 0,
    explanation: 'The tyranny of the rocket equation: to double Δv, you need to square the mass ratio. This is why multi-stage rockets exist — each stage sheds dead weight. Getting to orbit requires Δv ≈ 9.4 km/s.',
    realWorld: 'SpaceX\'s Falcon 9 is 96% fuel by mass at launch. The Saturn V was 85% fuel. Reusable first stages (SpaceX) save the most expensive hardware instead of throwing it away.',
    hint: 'The logarithm means diminishing returns — each extra km/s of speed costs exponentially more fuel.',
  },
  {
    id: 40902, topic: 'aerospace', difficulty: 'hard',
    question: 'Orbital mechanics requires understanding that objects in orbit are:',
    options: [
      'Continuously falling toward Earth but moving fast enough sideways that they keep missing it — free-fall at orbital velocity creates apparent weightlessness',
      'Floating because there is no gravity in space',
      'Held up by atmospheric pressure',
      'Pushed outward by centrifugal force that cancels gravity',
    ],
    correctIndex: 0,
    explanation: 'At the ISS altitude (~400 km), gravity is still ~90% of surface gravity. Astronauts feel weightless because they\'re in free-fall — falling around Earth. Orbital velocity (~7.8 km/s at LEO) ensures the curved trajectory matches Earth\'s curvature.',
    realWorld: 'Understanding orbits enables GPS (needs orbital mechanics + relativistic corrections), satellite internet (Starlink\'s 5,000+ satellites), and interplanetary missions using gravitational slingshots.',
    hint: 'Newton\'s cannonball thought experiment: fire fast enough and you fall around the Earth.',
  },
  {
    id: 40903, topic: 'aerospace', difficulty: 'sota',
    question: 'SpaceX\'s Starship full-stack reusability changes space economics because:',
    options: [
      'Reducing launch cost from ~$10,000/kg (expendable) to potentially ~$100/kg (fully reusable) enables economically viable Mars colonization and space manufacturing',
      'It is the first rocket ever built',
      'It uses nuclear propulsion',
      'It eliminates the need for the rocket equation',
    ],
    correctIndex: 0,
    explanation: 'Starship\'s 150-ton payload to LEO with full booster and ship reusability could reduce costs 100×. The key innovation: catching the booster with the launch tower ("chopsticks") eliminates landing legs and maximizes payload.',
    realWorld: 'At $100/kg, a human mission to Mars costs ~$10M in launch costs (vs. ~$1B today). This also enables orbital manufacturing, space solar power, and asteroid mining to become economically viable.',
    hint: 'If you could reuse an airplane only once, flights would cost $100,000. Reusability changes everything.',
  },
];
