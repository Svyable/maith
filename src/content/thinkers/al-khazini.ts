import type { Question } from '../types';

export const alKhaziniQuestions: Question[] = [
  {
    id: 31860, topic: 'al-khazini', difficulty: 'easy',
    question: 'Al-Khazini (12th century) wrote *The Book of the Balance of Wisdom*, one of the most important medieval scientific works. What was its subject?',
    options: [
      'A comprehensive treatise on hydrostatics, specific gravity, and the physics of balances — including precise tables of specific gravities for metals, gems, and liquids, and the mathematical theory of balance mechanisms.',
      'A philosophical work on the balance between reason and faith in Islamic theology.',
      'An astronomical work computing the balance points (Lagrange points) between celestial bodies.',
      'A medical text on the balance of the four humors in human health.'
    ],
    correctIndex: 0,
    explanation: 'Al-Khazini measured specific gravities of 50+ substances with remarkable precision — his value for mercury (13.56) is within 0.1% of the modern value (13.534). He also developed the mathematical theory of the steelyard balance and the hydrostatic balance, deriving conditions for equilibrium.',
    realWorld: 'Specific gravity measurements are used today in gemology (identifying gems), mining (ore quality), food science (sugar content of beverages), and petroleum engineering (API gravity of crude oil).',
    hint: 'He weighed substances in air and water to compute their densities — with accuracy rivaling 19th-century instruments.',
  },
  {
    id: 31861, topic: 'al-khazini', difficulty: 'hard',
    question: 'Al-Khazini applied Archimedes\' principle quantitatively. What mathematical relationship did he use to determine specific gravity?',
    options: [
      'Specific gravity $\\rho_s = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}$, where $W_{\\text{air}}$ is the weight in air and $W_{\\text{water}}$ is the weight when submerged. The denominator equals the weight of displaced water, giving the ratio of the substance\'s density to water\'s density.',
      '$\\rho_s = m/V$, where he measured mass on a balance and volume by water displacement in a graduated cylinder.',
      '$\\rho_s = P/gh$, where he measured the hydrostatic pressure $P$ at depth $h$ in a column of the substance.',
      '$\\rho_s = \\sqrt{W \\cdot V}$, where $W$ is weight and $V$ is volume, a geometric mean formula he derived.'
    ],
    correctIndex: 0,
    explanation: 'By weighing in air and submerged in water, al-Khazini eliminated the need to measure volume directly. Since the buoyant force equals the weight of displaced water (Archimedes\' principle), $W_{\\text{air}} - W_{\\text{water}} = \\rho_{\\text{water}} V g$, and $\\rho_s/\\rho_{\\text{water}} = W_{\\text{air}}/(W_{\\text{air}} - W_{\\text{water}})$. His dual-weighing balance was a precision instrument.',
    realWorld: 'This hydrostatic weighing method is still used in materials science and gemology. It\'s also the basis for body composition measurement (underwater weighing for body fat percentage).',
    hint: 'Weigh in air, weigh in water — the ratio tells you the density without ever measuring volume.',
  },
  {
    id: 31862, topic: 'al-khazini', difficulty: 'sota',
    question: 'Al-Khazini made a remarkable observation about the variation of weight with location. What did he discover?',
    options: [
      'He noted that the weight of an object varies slightly with geographic location and altitude — objects weigh less at higher altitudes and at the equator. He attributed this to varying distance from Earth\'s center, anticipating the concept of gravitational variation with $g \\propto 1/r^2$.',
      'He proved that weight is proportional to mass universally, with a constant $g$ independent of location.',
      'He discovered that objects weigh more during solar eclipses due to the aligned gravitational pull of the Sun and Moon.',
      'He showed that magnetic objects weigh less when oriented north-south due to interaction with Earth\'s magnetic field.'
    ],
    correctIndex: 0,
    explanation: 'Al-Khazini\'s observation that weight varies with location was extraordinary for the 12th century. He correctly attributed it to distance from Earth\'s center — at higher altitudes and (due to Earth\'s oblate shape) at the equator, $r$ is larger and gravity is weaker. This intuition predates Newton\'s universal gravitation by 500 years.',
    realWorld: 'Gravitational variation with location affects precision measurements, satellite orbits, and geodesy. The WGS84 geoid model accounts for these variations, with $g$ ranging from 9.780 m/s² (equator) to 9.832 m/s² (poles).',
    hint: 'He noticed that the same object weighs slightly differently at different places — 500 years before Newton explained why.',
  },
];
