import type { Question } from '../types';

export const annieEasleyQuestions: Question[] = [
  {
    id: 20505,
    topic: 'annie-easley',
    difficulty: 'hard',
    question: 'Annie Easley developed code for the Centaur upper-stage rocket. Centaur was the first rocket to use which type of propellant combination?',
    options: ['Liquid hydrogen and liquid oxygen (LH2/LOX)', 'Solid fuel boosters', 'Kerosene and liquid oxygen', 'Hypergolic propellants'],
    correctIndex: 0,
    explanation: 'Centaur pioneered cryogenic LH2/LOX propulsion, achieving much higher specific impulse than earlier propellants — enabling deep space missions.',
    realWorld: 'Centaur\'s technology flew on Atlas and Titan rockets, launching Voyager, Cassini, and New Horizons to the outer planets.',
    hint: 'The lightest element combined with oxygen gives the highest exhaust velocity.',
  },
  {
    id: 20506,
    topic: 'annie-easley',
    difficulty: 'hard',
    question: 'Easley also worked on energy conversion research at NASA. Her code contributed to analyzing which alternative energy technology?',
    options: ['Battery and fuel cell technology for electric vehicles', 'Nuclear fission reactors', 'Tidal energy generators', 'Geothermal power plants'],
    correctIndex: 0,
    explanation: 'She wrote numerical simulations for battery storage and fuel cell efficiency — work that fed directly into early hybrid and electric vehicle research.',
    realWorld: 'NASA\'s fuel cell research from this era powers today\'s hydrogen fuel cell vehicles and spacecraft power systems.',
    hint: 'Her work bridged space technology and terrestrial clean energy.',
  },
  {
    id: 20507,
    topic: 'annie-easley',
    difficulty: 'easy',
    question: 'Annie Easley started her career at NASA\'s predecessor agency as a "human computer." What was that agency called?',
    options: ['NACA (National Advisory Committee for Aeronautics)', 'DARPA', 'NSF', 'JPL'],
    correctIndex: 0,
    explanation: 'NACA was founded in 1915 and became NASA in 1958. Easley joined in 1955 as one of only four African American employees.',
    realWorld: 'The transition from human computers to electronic ones is one of the great untold stories of the space race.',
    hint: 'It became NASA in 1958.',
  },
];
