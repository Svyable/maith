import type { Question } from '../types';

export const carlSaganQuestions: Question[] = [
  {
    id: 96001, topic: 'carl-sagan', difficulty: 'easy',
    question: 'Carl Sagan\'s famous "Pale Blue Dot" photograph was taken by which spacecraft?',
    options: ['Voyager 1 from 6 billion km away', 'Hubble Space Telescope from orbit', 'Apollo 17 from the Moon', 'Pioneer 10 from Jupiter'],
    correctIndex: 0,
    explanation: 'In 1990, at Sagan\'s request, Voyager 1 turned its camera back toward Earth from beyond Neptune, capturing our planet as a tiny speck — the "Pale Blue Dot."',
    realWorld: 'This image became one of the most iconic photographs in history and inspired a generation to think about Earth\'s fragility in the cosmos.',
    hint: 'The spacecraft was already past Neptune when it looked back.',
  },
  {
    id: 96002, topic: 'carl-sagan', difficulty: 'hard',
    question: 'Sagan and colleagues proposed that burning oil wells in Kuwait could cause a regional "nuclear winter" effect. This relied on understanding:',
    options: ['Atmospheric aerosol transport and radiative forcing', 'Electromagnetic pulse propagation', 'Ozone layer chemistry only', 'Tidal gravitational effects'],
    correctIndex: 0,
    explanation: 'Sagan\'s nuclear winter hypothesis showed that soot aerosols lofted into the stratosphere could block sunlight, dramatically cooling the surface — applicable to both nuclear war and large-scale fires.',
    realWorld: 'While his Kuwait predictions were overstated, the nuclear winter model fundamentally changed Cold War strategy and arms reduction negotiations.',
    hint: 'Tiny particles blocking sunlight at high altitude.',
  },
  {
    id: 96003, topic: 'carl-sagan', difficulty: 'sota',
    question: 'The Drake Equation, which Sagan popularized, estimates the number of communicating civilizations in the Milky Way. Which factor remains the most uncertain?',
    options: ['The fraction of civilizations that develop detectable technology (fc)', 'The rate of star formation (R*)', 'The fraction of stars with planets (fp)', 'The number of habitable planets per star (ne)'],
    correctIndex: 0,
    explanation: 'While exoplanet discoveries have constrained R*, fp, and ne, the fraction of life that develops detectable technology (fc) and civilization longevity (L) remain almost entirely speculative.',
    realWorld: 'Modern SETI programs like Breakthrough Listen use updated Drake estimates to prioritize targets, but fc and L span orders of magnitude in uncertainty.',
    hint: 'We\'ve found thousands of exoplanets, but the sociological factors are still guesses.',
  },
];
