import type { Question } from '../types';

export const wernherVonBraunQuestions: Question[] = [
  {
    id: 496022, topic: 'wernher-von-braun', difficulty: 'easy',
    question: 'Wernher von Braun designed the Saturn V rocket, which was used for:',
    options: ['The Apollo Moon landings', 'The International Space Station assembly', 'The first satellite launch (Sputnik)', 'The Space Shuttle program'],
    correctIndex: 0,
    explanation: 'The Saturn V, standing 111 meters tall, remains the most powerful rocket ever successfully flown. It launched all Apollo missions that carried astronauts to the Moon.',
    realWorld: 'The Saturn V launched 13 times with zero payload failures — an extraordinary engineering achievement that put 12 humans on the Moon.',
    hint: 'The giant rocket that sent Armstrong, Aldrin, and Collins to the Moon.',
  },
  {
    id: 96023, topic: 'wernher-von-braun', difficulty: 'hard',
    question: 'The Tsiolkovsky rocket equation Δv = vₑ ln(m₀/mf) shows that achieving high velocity requires:',
    options: ['Exponentially increasing fuel mass relative to payload, making multi-staging essential', 'Linearly increasing fuel mass', 'Higher combustion temperature only', 'Larger nozzle diameter only'],
    correctIndex: 0,
    explanation: 'The logarithmic relationship means that for each additional unit of Δv, fuel mass must increase exponentially. Multi-staging (discarding empty tanks) is the engineering solution that makes orbit possible.',
    realWorld: 'Saturn V used three stages: S-IC, S-II, and S-IVB. Each was discarded when empty, dramatically improving payload-to-orbit ratio.',
    hint: 'The natural log means diminishing returns — that\'s why staging helps.',
  },
  {
    id: 96024, topic: 'wernher-von-braun', difficulty: 'sota',
    question: 'Von Braun\'s lunar orbit rendezvous (LOR) approach was chosen over direct ascent because:',
    options: ['It required far less total mass launched from Earth by leaving the command module in orbit', 'It was simpler, needing only one spacecraft', 'It avoided orbital mechanics entirely', 'It used nuclear propulsion for the return trip'],
    correctIndex: 0,
    explanation: 'LOR meant only a small lunar module landed on the Moon, while the heavier command module orbited above. This reduced total launch mass by ~50% compared to direct ascent.',
    realWorld: 'This architectural decision, championed by John Houbolt, made Apollo possible with 1960s technology. Modern Artemis missions use a similar approach.',
    hint: 'Don\'t land everything — leave the heavy parts in orbit.',
  },
];
