import type { Question } from '../types';

export const bellBurnellQuestions: Question[] = [
  {
    id: 21090,
    topic: 'jocelyn-bell-burnell',
    difficulty: 'sota',
    question: 'Jocelyn Bell Burnell\'s 1967 discovery of pulsars initially appeared on her chart recorder as which kind of signal?',
    options: ['A repeating signal with precise 1.337-second periodicity ("scruff")', 'A continuous broadband radio hiss', 'A single powerful transient burst', 'A slowly varying sinusoidal wave'],
    correctIndex: 0,
    explanation: 'Bell Burnell noticed a "bit of scruff" — a regularly pulsing radio signal repeating every 1.337 seconds — that didn\'t match any known natural or artificial source. It was initially jokingly called "LGM-1" (Little Green Men).',
    realWorld: 'Pulsars are now used as cosmic clocks for testing general relativity and searching for gravitational waves (pulsar timing arrays).',
    hint: 'The signal pulsed with clockwork regularity, initially suggesting an artificial origin.',
  },
  {
    id: 21091,
    topic: 'jocelyn-bell-burnell',
    difficulty: 'sota',
    question: 'Pulsars are now understood to be which type of astrophysical object?',
    options: ['Rapidly rotating neutron stars with strong magnetic fields', 'White dwarfs undergoing nuclear flashes', 'Stellar-mass black holes with accretion disks', 'Main-sequence stars with periodic sunspot cycles'],
    correctIndex: 0,
    explanation: 'A pulsar is a highly magnetized, rapidly spinning neutron star that emits beams of electromagnetic radiation from its magnetic poles. As the star rotates, these beams sweep across Earth like a lighthouse.',
    realWorld: 'The Hulse-Taylor binary pulsar provided the first indirect evidence for gravitational waves, earning the 1993 Nobel Prize.',
    hint: 'These are the collapsed remnants of massive stars, spinning up to hundreds of times per second.',
  },
  {
    id: 21092,
    topic: 'jocelyn-bell-burnell',
    difficulty: 'sota',
    question: 'The 1974 Nobel Prize for the discovery of pulsars was controversially awarded to whom, excluding Bell Burnell?',
    options: ['Antony Hewish and Martin Ryle', 'Antony Hewish and Fred Hoyle', 'Martin Ryle and Roger Penrose', 'Fred Hoyle and Jocelyn Bell Burnell'],
    correctIndex: 0,
    explanation: 'The Nobel Committee awarded the prize to Bell Burnell\'s thesis advisor Antony Hewish and radio astronomer Martin Ryle, sparking decades of debate about the exclusion of the person who actually made the discovery.',
    realWorld: 'Bell Burnell later stated she was not upset, but the snub is widely regarded as one of the most unjust Nobel omissions in history.',
    hint: 'Her thesis advisor received the credit and the prize.',
  },
];
