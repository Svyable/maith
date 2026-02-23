import type { Question } from '../types';

export const joanClarkeQuestions: Question[] = [
  {
    id: 21050,
    topic: 'joan-clarke',
    difficulty: 'sota',
    question: 'Joan Clarke worked in which section at Bletchley Park to break the naval Enigma cipher?',
    options: ['Hut 8', 'Hut 6', 'Hut 3', 'The Newmanry'],
    correctIndex: 0,
    explanation: 'Hut 8 was responsible for breaking German naval Enigma, which was significantly harder than the Army/Air Force Enigma handled by Hut 6 due to the additional rotor and stricter operating procedures.',
    realWorld: 'Breaking naval Enigma was critical to winning the Battle of the Atlantic and protecting Allied supply convoys.',
    hint: 'This was Alan Turing\'s section, focused on the most complex variant of Enigma.',
  },
  {
    id: 21051,
    topic: 'joan-clarke',
    difficulty: 'sota',
    question: 'Clarke developed expertise in which cryptanalytic technique central to breaking Enigma?',
    options: ['Banburismus — a Bayesian sequential analysis method', 'Differential cryptanalysis', 'Linear cryptanalysis', 'Frequency analysis'],
    correctIndex: 0,
    explanation: 'Banburismus was a manual statistical technique (using Bayesian reasoning on punched sheets from Banbury) that reduced the work needed for the Bombe machines by eliminating impossible rotor settings.',
    realWorld: 'Banburismus was an early practical application of Bayesian statistics in a life-or-death context.',
    hint: 'Named after the town where the special sheets were printed.',
  },
  {
    id: 21052,
    topic: 'joan-clarke',
    difficulty: 'sota',
    question: 'Why was Joan Clarke officially classified as a "linguist" rather than a cryptanalyst at Bletchley Park?',
    options: ['The civil service had no pay grade for female cryptanalysts', 'She was fluent in German', 'Linguists had higher security clearance', 'Cryptanalyst was a military-only title'],
    correctIndex: 0,
    explanation: 'The British civil service classification system had no provisions for women in technical cryptanalysis roles, so Clarke was given the title "linguist" despite not speaking any additional languages — resulting in lower pay.',
    realWorld: 'Clarke\'s story exemplifies the systemic barriers faced by women in STEM throughout the 20th century.',
    hint: 'It was a bureaucratic fiction caused by gender discrimination in the pay system.',
  },
];
