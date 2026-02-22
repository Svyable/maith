import type { GlossaryTerm } from './types';

export const physicsTerms: GlossaryTerm[] = [
  { id: 'entropy-phys', field: 'physics', term: 'Entropy', definition: 'A measure of disorder or the number of microscopic configurations consistent with a macroscopic state: $S = k_B \\ln \\Omega$.', example: 'Ice melting increases entropy as molecules gain freedom of movement.' },
  { id: 'wave-particle', field: 'physics', term: 'Wave–Particle Duality', definition: 'Quantum objects exhibit both wave-like interference and particle-like detection depending on the experiment.', example: 'Electrons create interference patterns in the double-slit experiment.' },
  { id: 'spacetime', field: 'physics', term: 'Spacetime', definition: 'The four-dimensional continuum merging three spatial dimensions with time, curved by mass-energy per General Relativity.', example: 'GPS satellites correct for spacetime curvature to stay accurate.' },
  { id: 'conservation-energy', field: 'physics', term: 'Conservation of Energy', definition: 'Energy cannot be created or destroyed, only transformed from one form to another. Total energy in a closed system is constant.', example: 'A pendulum converts potential energy to kinetic and back.' },
  { id: 'superposition', field: 'physics', term: 'Superposition', definition: 'A quantum system exists in a combination of all possible states simultaneously until measured.', example: 'Schrödinger\'s cat is both alive and dead until the box is opened.' },
  { id: 'planck-constant', field: 'physics', term: 'Planck\'s Constant', definition: 'Fundamental constant $h \\approx 6.626 \\times 10^{-34}$ J·s relating photon energy to frequency: $E = hf$.', example: 'Determines the minimum energy a photon of a given colour can carry.' },
  { id: 'schwarzschild-radius', field: 'physics', term: 'Schwarzschild Radius', definition: 'The radius $r_s = 2GM/c^2$ at which an object\'s escape velocity equals the speed of light, defining a black hole\'s event horizon.', example: 'Earth\'s Schwarzschild radius is about 9 mm.' },
  { id: 'doppler-effect', field: 'physics', term: 'Doppler Effect', definition: 'The change in frequency of a wave relative to an observer moving relative to the wave source.', example: 'An ambulance siren sounds higher-pitched as it approaches you.' },
];
