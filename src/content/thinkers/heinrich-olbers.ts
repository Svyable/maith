import type { Question } from '../types';

export const olbersQuestions: Question[] = [
  {
    id: 21800,
    topic: 'heinrich-olbers',
    difficulty: 'sota',
    question: 'Olbers\' paradox asks: if the universe is infinite, static, and uniformly filled with stars, the night sky should be what?',
    options: [
      'Infinitely bright — every line of sight eventually hits a stellar surface',
      'Completely dark due to gravitational redshift',
      'Bright only near the galactic plane',
      'Dim but uniformly gray from scattered starlight'
    ],
    correctIndex: 0,
    explanation: 'In an infinite static universe with uniform stellar density, every line of sight eventually intersects a star\'s surface. The total flux diverges logarithmically: integrating shells of stars at distance r gives constant surface brightness per shell, and ∑(1/r²)(r²)(dr) diverges.',
    realWorld: 'Olbers\' paradox is resolved by the Big Bang: the universe has a finite age (~13.8 Gyr), so light from distant stars hasn\'t reached us yet, and cosmic expansion redshifts distant light beyond visibility.',
    hint: 'Think about what happens when you look in ANY direction in an infinite forest of luminous trees.'
  },
  {
    id: 21801,
    topic: 'heinrich-olbers',
    difficulty: 'sota',
    question: 'The modern resolution of Olbers\' paradox primarily relies on which cosmological fact?',
    options: [
      'The universe has a finite age, so the observable universe is finite',
      'Interstellar dust absorbs all distant starlight',
      'Stars have finite luminosity that decreases with age',
      'Gravity bends light away from Earth'
    ],
    correctIndex: 0,
    explanation: 'The finite age of the universe (~13.8 billion years) means we can only see stars within our past light cone. Additionally, cosmic expansion redshifts distant light into the microwave (CMB at 2.7K), making it invisible. Dust absorption fails as a resolution because dust would heat up and re-radiate.',
    realWorld: 'The CMB IS the "glow" Olbers predicted — but redshifted from ~3000K (visible) to 2.7K (microwave) by cosmic expansion over 13.8 billion years.',
    hint: 'Dust can\'t solve it — it would heat up. The answer is about cosmic age and expansion.'
  },
  {
    id: 21802,
    topic: 'heinrich-olbers',
    difficulty: 'sota',
    question: 'If we model Olbers\' paradox mathematically with stellar density n and luminosity L, the flux from a shell at distance r with thickness dr is what?',
    options: [
      'dF = nL dr / (4πr²) × 4πr² = nL dr — independent of distance',
      'dF = nL / r² dr — decreasing with distance',
      'dF = nL r² dr — increasing with distance',
      'dF = nL e^(−r/λ) dr — exponentially decaying'
    ],
    correctIndex: 0,
    explanation: 'Each star contributes flux L/(4πr²). A shell at radius r has volume 4πr²dr containing n·4πr²dr stars. Total shell flux = n·4πr²dr · L/(4πr²) = nLdr. Since this is constant per dr, integrating over infinite r gives infinite total flux.',
    realWorld: 'This calculation shows why the paradox is genuinely puzzling — the r² in the shell volume perfectly cancels the 1/r² in the inverse-square law.',
    hint: 'The r² factors cancel perfectly — that\'s what makes this a real paradox.'
  },
];
