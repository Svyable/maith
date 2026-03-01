import type { Question } from '../types';

export const michelsonQuestions: Question[] = [
  {
    id: 31220,
    topic: 'michelson',
    difficulty: 'easy',
    question: 'What did the 1887 Michelson-Morley experiment fail to detect?',
    options: [
      '"Luminiferous Aether" - invisible medium for light waves',
      '"Phlogiston" - fire-like substance from combustion',
      '"Graviton" - quantum gravity particle',
      '"Solar Neutrino" - sun fusion mediator'
    ],
    correctIndex: 0,
    explanation: 'Physicists believed light needed an aether medium like water waves need water. Michelson\'s interferometer detected no "aether wind" from Earth\'s motion.',
    realWorld: '"The most famous failed experiment in science" paved way for Einstein\'s Special Relativity.',
    hint: 'Invisible space-filling jelly for light propagation.',
  },
  {
    id: 31221,
    topic: 'michelson',
    difficulty: 'hard',
    question: 'How does Michelson interferometer measure tiny phase shifts?',
    options: [
      'Split beam into 2 perpendicular paths, recombine to measure interference fringes',
      'Prism refraction angle measurement',
      'Rotating mirror phase lag',
      'Zeeman spectral splitting'
    ],
    correctIndex: 0,
    explanation: 'Half-silvered mirror splits beam 50/50 into $90^\\circ$ paths. Recombined waves create interference fringes if path lengths differ.',
    realWorld: 'Same principle scaled up = LIGO gravitational wave detector.',
    hint: 'Light beam race: 2 perpendicular paths, recombine, measure fringe shift.',
  },
  {
    id: 31222,
    topic: 'michelson',
    difficulty: 'sota',
    question: 'Michelson\'s 1926 Mt. Wilson $c$ measurement used what?',
    options: [
      '528 rps octagonal mirror, 22mi baseline to Mt. San Antonio',
      '10mi evacuated vacuum tunnel',
      '50mi synchronized atomic clocks + fiber',
      'Liquid helium resonant cavity'
    ],
    correctIndex: 0,
    explanation: '22-mile baseline. Octagonal mirror at 528 rps timed to catch return beam on next face: $c = 299,796$ km/s.',
    realWorld: 'Definitive $c$ value for 50+ years.',
    hint: 'Insanely fast spinning octagon catches 44-mile roundtrip light beam.',
  },
  {
    id: 31223,
    topic: 'michelson',
    difficulty: 'hard',
    question: 'Michelson achieved greatness by becoming what?',
    options: [
      'First American to win Nobel Prize in Science',
      'First to weigh an electron',
      'First purely theoretical physicist Nobel winner',
      'First to win double Nobel Prizes'
    ],
    correctIndex: 0,
    explanation: '1907 Nobel in Physics for optical precision instruments and metrology.',
    realWorld: 'First American scientist Nobel laureate.',
    hint: 'First American scientist with Nobel.',
  },
  {
    id: 31224,
    topic: 'michelson',
    difficulty: 'hard',
    question: 'Michelson-Morley expected fringe shift of $\\Delta = ?$',
    options: [
      '$\\frac{v^2}{c^2} \\approx 0.0003$ fringes (Earth through aether)',
      '$\\lambda/2 = 0.3$ μm (wavelength shift)',
      '$10^{-6}$ rad phase (detector resolution)',
      '$v/c = 10^{-4}$ velocity ratio'
    ],
    correctIndex: 0,
    explanation: 'Earth velocity $v \\approx 30$ km/s through aether gives expected shift $\\Delta \\approx \\frac{v^2}{c^2} \\sim 10^{-8}$ but scaled to observable 0.4 fringes.',
    realWorld: 'Null result ($\\Delta < 0.01$ fringes) disproved aether theory.',
    hint: '$v_{\\Earth}/c \\approx 10^{-4}$, squared gives expected shift.',
  }
];
