import type { Question } from '../types';

export const einsteinQuestions: Question[] = [
  {
    id: 10201,
    topic: 'albert-einstein',
    difficulty: 'easy',
    question: 'Einstein\'s mass-energy equivalence $E = mc^2$ implies:',
    options: [
      'Mass and energy are interconvertible — a small mass contains enormous energy',
      'Energy can only travel at the speed of light',
      'Massive objects cannot move at relativistic speeds',
      'Light has mass proportional to its frequency',
    ],
    correctIndex: 0,
    explanation: '$E = mc^2$ shows that mass is a form of concentrated energy. Since $c^2 \\approx 9 \\times 10^{16}$ m²/s², even 1 kg of matter contains about 90 petajoules — equivalent to a 21-megaton nuclear explosion.',
    realWorld: 'Nuclear reactors and atomic weapons directly convert mass to energy. The Sun converts 4 million tons of mass to energy every second.',
    hint: 'A tiny amount of mass × the speed of light squared = an astronomical amount of energy.',
  },
  {
    id: 10202,
    topic: 'albert-einstein',
    difficulty: 'hard',
    question: 'General relativity describes gravity as:',
    options: [
      'Curvature of spacetime caused by mass-energy, described by the Einstein field equations $G_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}$',
      'A force between masses proportional to $1/r^2$',
      'Exchange of virtual gravitons between massive particles',
      'A consequence of quantum vacuum fluctuations',
    ],
    correctIndex: 0,
    explanation: 'Einstein replaced Newton\'s gravitational force with a geometric theory: mass-energy curves spacetime, and objects follow geodesics (straightest paths) through that curved geometry. "Matter tells space how to curve; space tells matter how to move."',
    realWorld: 'GPS satellites must account for general relativistic time dilation — without it, GPS positions would drift by ~10 km per day.',
    hint: 'Gravity isn\'t a force — it\'s the shape of spacetime itself.',
  },
  {
    id: 10203,
    topic: 'albert-einstein',
    difficulty: 'sota',
    question: 'Einstein\'s 1905 paper on the photoelectric effect proposed:',
    options: [
      'Light consists of discrete quanta (photons) with energy $E = h\\nu$, explaining why electron emission depends on frequency, not intensity',
      'Light is a transverse electromagnetic wave as described by Maxwell\'s equations',
      'Electrons orbit atomic nuclei in quantized energy levels',
      'The speed of light is constant in all reference frames',
    ],
    correctIndex: 0,
    explanation: 'Einstein explained the photoelectric effect by proposing that light comes in quanta (later called photons). Below a threshold frequency, no electrons are emitted regardless of intensity — only photon energy (frequency) matters, not the number of photons.',
    realWorld: 'This paper (which won Einstein the Nobel Prize, not relativity!) launched quantum mechanics and underlies solar cells, digital cameras, and photodetectors.',
    hint: 'Classical wave theory couldn\'t explain why dim blue light ejects electrons but bright red light doesn\'t.',
  },
];
