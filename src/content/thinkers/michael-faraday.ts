import type { Question } from '../types';

export const faradayQuestions: Question[] = [
  {
    id: 96301, topic: 'michael-faraday', difficulty: 'easy',
    question: 'Michael Faraday\'s discovery of electromagnetic induction showed that:',
    options: ['A changing magnetic field produces an electric current — the basis of all electric generators', 'Electric current always produces heat', 'Magnets only attract iron and steel', 'Light is a particle, not a wave'],
    correctIndex: 0,
    explanation: 'Faraday discovered in 1831 that moving a magnet through a coil of wire induces an electric current. This is described by Faraday\'s law: EMF = −dΦ_B/dt, where Φ_B is the magnetic flux.',
    realWorld: 'Every power plant on Earth — coal, gas, nuclear, hydro, wind — generates electricity using Faraday\'s principle of electromagnetic induction.',
    hint: 'Move a magnet near a wire and current flows.',
  },
  {
    id: 96302, topic: 'michael-faraday', difficulty: 'hard',
    question: 'Faraday\'s laws of electrolysis established that the mass of substance deposited at an electrode is:',
    options: ['Directly proportional to the total electric charge passed and the molar mass, and inversely proportional to the valence', 'Independent of the current and depends only on voltage', 'Proportional to the temperature of the solution', 'Determined solely by the concentration of the electrolyte'],
    correctIndex: 0,
    explanation: 'Faraday\'s laws: m = (Q·M)/(z·F), where Q is charge, M is molar mass, z is valence number, and F ≈ 96,485 C/mol is Faraday\'s constant. This was one of the first quantitative links between electricity and chemistry.',
    realWorld: 'Electroplating, aluminum smelting, lithium-ion battery chemistry, and industrial chlorine production all rely on Faraday\'s electrolysis laws.',
    hint: 'More charge = more material deposited, but heavier atoms need proportionally more.',
  },
  {
    id: 96303, topic: 'michael-faraday', difficulty: 'sota',
    question: 'Faraday introduced the concept of "lines of force" and the electromagnetic field. This conceptual revolution was important because:',
    options: ['It replaced action-at-a-distance with local field theory, enabling Maxwell to formulate his equations and predict electromagnetic waves', 'It proved that gravity is an electromagnetic phenomenon', 'It showed that electric and magnetic fields are identical', 'It eliminated the need for mathematical equations in physics'],
    correctIndex: 0,
    explanation: 'Faraday\'s field concept — that forces are mediated by continuous fields filling space rather than instantaneous action at a distance — was the conceptual foundation Maxwell formalized mathematically. Without Faraday\'s physical intuition, Maxwell\'s equations might never have been written.',
    realWorld: 'The field concept is now the foundation of all modern physics: electromagnetic fields, gravitational fields, quantum fields — the entire Standard Model is a field theory.',
    hint: 'Forces don\'t act across empty space — something fills the space between charges.',
  },
];
