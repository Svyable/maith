import type { Question } from '../types';

export const heinrichLenzQuestions: Question[] = [
  {
    id: 21850,
    topic: 'heinrich-lenz',
    difficulty: 'sota',
    question: 'Lenz\'s law states that an induced current flows in the direction that does what?',
    options: [
      'Opposes the change in magnetic flux that caused it',
      'Reinforces the changing magnetic flux',
      'Minimizes the total resistance in the circuit',
      'Maximizes the power dissipated in the conductor'
    ],
    correctIndex: 0,
    explanation: 'Lenz\'s law (the negative sign in Faraday\'s law ε = −dΦ_B/dt) ensures the induced current creates a magnetic field opposing the flux change. This is a consequence of energy conservation: if the induced current reinforced the change, you\'d get runaway energy creation.',
    realWorld: 'Lenz\'s law explains electromagnetic braking (eddy current brakes in trains and roller coasters), metal detectors, and why dropping a magnet through a copper tube makes it fall slowly.',
    hint: 'Nature resists change — the minus sign in Faraday\'s law IS Lenz\'s law.'
  },
  {
    id: 21851,
    topic: 'heinrich-lenz',
    difficulty: 'sota',
    question: 'A conducting ring falls through a non-uniform magnetic field. According to Lenz\'s law, the induced current creates a force that does what?',
    options: [
      'Always opposes the motion — acting as a magnetic brake',
      'Accelerates the ring beyond free-fall',
      'Has no net effect on the ring\'s motion',
      'Causes the ring to rotate but not decelerate'
    ],
    correctIndex: 0,
    explanation: 'As the ring enters a stronger field region, increasing flux induces a current whose field opposes the external field (by Lenz\'s law), repelling the ring. As it exits, decreasing flux induces a current that attracts. Both effects oppose the motion, creating a braking force.',
    realWorld: 'This principle is used in electromagnetic braking: trains, roller coasters, and exercise bikes use eddy current brakes that require no friction pads and never wear out.',
    hint: 'The induced current always creates a force that tries to maintain the status quo.'
  },
  {
    id: 21852,
    topic: 'heinrich-lenz',
    difficulty: 'sota',
    question: 'The energy dissipated by induced currents (Lenz\'s law) in a conductor moving through a magnetic field comes from what source?',
    options: [
      'The kinetic energy of the moving conductor — it decelerates',
      'The magnetic field energy — the field weakens',
      'Thermal energy of the conductor — it cools down',
      'The electric potential energy of free charges'
    ],
    correctIndex: 0,
    explanation: 'By energy conservation, the work done against the Lenz braking force converts kinetic energy into Joule heating (I²R) in the conductor. The magnetic field itself is not consumed — it\'s the mechanical energy of motion that is dissipated as heat.',
    realWorld: 'Induction cooktops work this way: oscillating magnetic fields induce eddy currents in the pan, converting electromagnetic energy into heat for cooking.',
    hint: 'Something has to slow down for energy to be dissipated — that\'s the moving conductor.'
  },
];
