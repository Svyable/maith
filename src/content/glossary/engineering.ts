import type { GlossaryTerm } from './types';

export const engineeringTerms: GlossaryTerm[] = [
  { id: 'fourier-transform', field: 'engineering', term: 'Fourier Transform', definition: 'Decomposes a signal into its constituent frequencies: $F(\\omega) = \\int f(t)\\,e^{-i\\omega t}\\,dt$.', example: 'Audio equalizers, MRI imaging, and JPEG compression all use FFTs.' },
  { id: 'feedback-loop', field: 'engineering', term: 'Feedback Loop', definition: 'A system where the output is routed back as input, either amplifying (positive) or stabilising (negative) behaviour.', example: 'A thermostat uses negative feedback to maintain room temperature.' },
  { id: 'reynolds-number', field: 'engineering', term: 'Reynolds Number', definition: 'Dimensionless ratio $Re = \\frac{\\rho v L}{\\mu}$ predicting whether fluid flow is laminar (smooth) or turbulent.', example: 'Aircraft wing design uses Reynolds number to predict drag.' },
  { id: 'tensile-strength', field: 'engineering', term: 'Tensile Strength', definition: 'The maximum stress a material can withstand while being stretched or pulled before breaking.', example: 'Spider silk has a higher tensile strength per weight than steel.' },
  { id: 'pid-controller', field: 'engineering', term: 'PID Controller', definition: 'A control loop mechanism using Proportional, Integral, and Derivative terms to minimise error between desired and actual output.', example: 'Cruise control in cars adjusts throttle using PID feedback.' },
  { id: 'signal-noise-ratio', field: 'engineering', term: 'Signal-to-Noise Ratio (SNR)', definition: 'The ratio of useful signal power to background noise power, often in decibels: $SNR = 10\\log_{10}(P_s/P_n)$.', example: 'WiFi routers need high SNR for fast, reliable data transmission.' },
  { id: 'fatigue-failure', field: 'engineering', term: 'Fatigue Failure', definition: 'Progressive structural damage from repeated cyclic loading, even at stresses well below ultimate tensile strength.', example: 'Aircraft fuselages are inspected for fatigue cracks after flight cycles.' },
];
