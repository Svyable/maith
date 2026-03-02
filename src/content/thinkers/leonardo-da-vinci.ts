import type { Question } from '../types';

export const leonardoDaVinciQuestions: Question[] = [
  {
    id: 60030, topic: 'leonardo-da-vinci', difficulty: 'easy',
    question: 'Leonardo da Vinci\'s notebooks reveal that he pioneered:',
    options: [
      'Empirical observation combined with detailed technical drawing — a proto-scientific method centuries ahead of his time',
      'Abstract mathematical proofs in the style of Euclid',
      'Chemical synthesis of new materials',
      'Formal logic and syllogistic reasoning',
    ],
    correctIndex: 0,
    explanation: 'Leonardo filled over 7,000 notebook pages with observations, experiments, and technical drawings covering anatomy, flight, hydraulics, optics, and engineering — all based on direct observation rather than received authority.',
    realWorld: 'His approach of "observation → hypothesis → design → test" anticipated the scientific method formalized by Bacon and Galileo over a century later.',
    hint: 'He drew what he saw — dissections, water flow, bird wings — with obsessive precision.',
  },
  {
    id: 60031, topic: 'leonardo-da-vinci', difficulty: 'hard',
    question: 'Leonardo\'s anatomical studies of the heart were remarkable because he discovered:',
    options: [
      'Vortex flow patterns in the aortic sinuses that help close the aortic valve — confirmed by MRI 500 years later',
      'The electrical conduction system of the heart',
      'That the heart has four chambers (already known since Galen)',
      'Blood types and transfusion compatibility',
    ],
    correctIndex: 0,
    explanation: 'Leonardo made glass models of the aortic root and observed swirling vortices (now called "sinuses of Valsalva") that help close the aortic valve. This was dismissed for centuries until 4D MRI confirmed his observations around 2014.',
    realWorld: 'Modern cardiac surgery and prosthetic valve design directly benefit from understanding these vortex dynamics that Leonardo first sketched.',
    hint: 'He built glass models of blood vessels and watched how water swirled through them.',
  },
  {
    id: 60032, topic: 'leonardo-da-vinci', difficulty: 'sota',
    question: 'Leonardo\'s use of $sfumato$ in painting (e.g., the Mona Lisa) mathematically corresponds to:',
    options: [
      'A Gaussian blur — smooth gradients with no sharp edges, approximating $G(x,y) = \\frac{1}{2\\pi\\sigma^2}e^{-(x^2+y^2)/2\\sigma^2}$',
      'A Fourier transform decomposing the image into frequency components',
      'A fractal self-similar pattern at multiple scales',
      'Linear perspective with a single vanishing point',
    ],
    correctIndex: 0,
    explanation: 'Sfumato ("smoky") creates imperceptible transitions between tones — Leonardo applied up to 40 translucent oil layers. The result is mathematically equivalent to a Gaussian convolution, softening edges exactly as a Gaussian kernel does.',
    realWorld: 'Gaussian blur is the most common smoothing operation in computer vision and image processing. Leonardo intuitively implemented what became a cornerstone of digital signal processing.',
    hint: 'The technique creates smooth, smoky transitions — like blurring an image with a bell-curve kernel.',
  },
];
