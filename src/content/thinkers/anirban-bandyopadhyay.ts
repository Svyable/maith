import type { Question } from '../types';

export const anirbanBandyopadhyayQuestions: Question[] = [
  {
    id: 311101, topic: 'anirban-bandyopadhyay', difficulty: 'easy',
    question: 'Bandyopadhyay\'s key experimental claim regarding microtubules is that:',
    options: [
      'Single microtubules exhibit multi-scale resonances at GHz-to-THz frequencies, suggesting quantum coherent oscillations at biological temperatures',
      'Microtubules are superconducting at room temperature',
      'Microtubules emit visible light when neurons fire',
      'Tubulin proteins fold into quantum dots that emit fluorescence',
    ],
    correctIndex: 0,
    explanation: 'Using scanning tunneling microscopy and custom spectroscopy, Bandyopadhyay detected resonant oscillations in individual microtubules spanning GHz to THz frequencies. These multi-scale resonances, with coherence times exceeding classical thermal predictions, are interpreted as evidence for Fröhlich-type quantum condensation.',
    realWorld: 'If confirmed, these results would be the first direct evidence of macroscopic quantum coherence in biological structures at body temperature.',
    hint: 'The oscillations span many frequency decades and last longer than thermal physics predicts.',
    glossaryLinks: ['microtubule-quantum-coherence', 'frohlich-condensate'],
  },
  {
    id: 311102, topic: 'anirban-bandyopadhyay', difficulty: 'hard',
    question: 'Bandyopadhyay\'s "fractal resonance" model of microtubules proposes that:',
    options: [
      'Microtubules support nested electromagnetic resonances at multiple scales — from tubulin monomers (THz) through dimers (GHz) to entire microtubules (MHz) — forming a self-similar frequency hierarchy',
      'Microtubules have fractal dimension 1.5, between a line and a surface',
      'Each tubulin protein is a fractal antenna receiving cosmic radiation',
      'The Mandelbrot set describes the cross-section of a microtubule',
    ],
    correctIndex: 0,
    explanation: 'Bandyopadhyay proposes that the hierarchical structure of microtubules (tubulin → dimer → protofilament → cylinder → bundle) creates nested resonant cavities at each scale, with frequency ratios following geometric progressions. This "fractal resonance" could enable information processing across scales.',
    realWorld: 'This model predicts specific frequency signatures that can be tested with THz spectroscopy — making it experimentally falsifiable.',
    hint: 'Each structural level of the microtubule resonates at its own characteristic frequency.',
  },
  {
    id: 311103, topic: 'anirban-bandyopadhyay', difficulty: 'sota',
    question: 'Bandyopadhyay\'s experimental technique for probing single-microtubule quantum properties uses:',
    options: [
      'A custom-built scanning tunneling microscope (STM) with resonance frequency mapping, measuring I-V characteristics and AC conductance spectra from MHz to THz',
      'Cryo-electron microscopy at near-absolute-zero temperatures',
      'Nuclear magnetic resonance (NMR) spectroscopy of isotope-labeled tubulins',
      'X-ray crystallography of frozen microtubule crystals',
    ],
    correctIndex: 0,
    explanation: 'Bandyopadhyay\'s group at NIMS (Japan) developed a modified STM with broadband AC measurement capability. By contacting single microtubules and sweeping excitation frequencies from MHz through THz, they map resonance spectra that reveal the electromagnetic mode structure of the tubulin lattice.',
    realWorld: 'This technique is unique — most biophysics labs lack the instrumentation to probe single-protein electromagnetic resonances at THz frequencies.',
    hint: 'The key is an STM modified to scan across an enormous frequency range on individual tubes.',
  },
];
