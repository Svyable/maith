import type { Question } from '../types';

export const marconiQuestions: Question[] = [
  {
    id: 11121,
    topic: 'guglielmo-marconi',
    difficulty: 'easy',
    question: 'Guglielmo Marconi\'s key achievement in 1901 was:',
    options: [
      'Transmitting the first wireless radio signal across the Atlantic Ocean — proving radio waves could follow Earth\'s curvature',
      'Inventing the telephone for voice communication over wires',
      'Discovering radio waves in a laboratory experiment',
      'Building the first television broadcast system',
    ],
    correctIndex: 0,
    explanation: 'Marconi transmitted the letter "S" (three dots in Morse code) from Poldhu, Cornwall to St. John\'s, Newfoundland — about 3,500 km. This shocked physicists who expected radio waves to travel in straight lines. The ionosphere was later discovered to explain the reflection.',
    realWorld: 'This experiment launched the wireless communications industry. Within years, ships carried radios (the Titanic\'s distress call in 1912 saved hundreds of lives), leading to broadcast radio, TV, and ultimately mobile phones.',
    hint: 'He proved that radio signals don\'t just go in straight lines — they can bend around the Earth.',
  },
  {
    id: 11122,
    topic: 'guglielmo-marconi',
    difficulty: 'hard',
    question: 'Marconi\'s transatlantic transmission succeeded because radio waves were reflected by:',
    options: [
      'The ionosphere — a layer of ionised gas in the upper atmosphere that reflects radio waves below certain frequencies back to Earth',
      'The ozone layer absorbing and re-emitting radio frequency energy',
      'Diffraction around the Earth\'s curved surface (ground wave propagation)',
      'Magnetic field lines of the Earth acting as waveguides',
    ],
    correctIndex: 0,
    explanation: 'The ionosphere (discovered by Heaviside and Kennelly in 1902) reflects radio waves below the plasma frequency $f_p = 9\\sqrt{n_e}$ Hz, where $n_e$ is electron density. Medium and short-wave radio bounces between ionosphere and ground ("sky wave"), enabling long-distance communication.',
    realWorld: 'AM radio can be heard hundreds of miles away at night because the ionosphere\'s D-layer (which absorbs) disappears, letting signals bounce off the higher F-layer. This is why distant AM stations fade in at sunset.',
    hint: 'There\'s an electrically conductive layer high in the atmosphere that acts like a mirror for radio waves.',
  },
  {
    id: 11123,
    topic: 'guglielmo-marconi',
    difficulty: 'sota',
    question: 'The Shannon–Hartley theorem sets the maximum data rate $C$ for a channel with bandwidth $B$ and signal-to-noise ratio $SNR$ as:',
    options: [
      '$C = B \\log_2(1 + SNR)$ bits/second — an absolute limit no coding scheme can exceed',
      '$C = B \\cdot SNR$ bits/second — linear scaling with signal quality',
      '$C = 2B \\log_2(M)$ for $M$-ary signalling — Nyquist\'s formula',
      '$C = B / \\log_2(1 + 1/SNR)$ — inverse logarithmic scaling',
    ],
    correctIndex: 0,
    explanation: 'Shannon (1948) proved this fundamental limit. Doubling bandwidth doubles capacity, but doubling SNR adds only one bit per Hz. Modern codes (Turbo codes, LDPC, Polar codes) approach within fractions of a dB of the Shannon limit — the theoretical maximum is nearly achieved.',
    realWorld: '5G networks, deep-space communication (Voyager), and undersea fibre optics all design systems to approach the Shannon limit. It tells engineers when to stop optimising — you can\'t beat the math.',
    hint: 'Capacity grows logarithmically with signal power but linearly with bandwidth — bandwidth is more valuable.',
  },
];
