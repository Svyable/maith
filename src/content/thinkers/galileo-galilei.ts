import type { Question } from '../types';

export const galileoGalileiQuestions: Question[] = [
  {
    id: 31130,
    topic: 'galileo-galilei',
    difficulty: 'easy',
    question: 'Galileo Galilei completely overturned Aristotelian physics by mathematically proving what fundamental property of falling bodies in a vacuum?',
    options: [
      'The distance fallen is strictly proportional to the square of the elapsed time ($\\Delta x = \\frac{1}{2}gt^2$), meaning all objects accelerate equally regardless of their mass.',
      'The terminal velocity of any falling object is strictly dictated by the geometric ratio of its surface area to its absolute total mass ($\\frac{A}{m}$).',
      'The gravitational attraction between two bodies is strictly inversely proportional to the square of the radial distance between their absolute centers.',
      'The exact kinetic energy of a falling mass is strictly conserved as an absolute scalar value equal to $E = mc^2$ throughout its entire descent.'
    ],
    correctIndex: 0,
    explanation: 'Aristotle claimed heavy objects fall faster than light ones. Galileo used mathematically precise inclined planes to prove that gravity applies a constant, uniform acceleration ($g$) to all objects, meaning distance grows with the square of time ($\\Delta x \\propto t^2$).',
    realWorld: 'This exact quadratic equation dictates how a dropped wrench falls on Earth, and was famously proven on the Moon during Apollo 15 when a hammer and feather were dropped and hit the lunar dust simultaneously.',
    hint: 'He proved that a massive cannonball and a tiny musket ball hit the ground at the exact same time.',
  },
  {
    id: 31131,
    topic: 'galileo-galilei',
    difficulty: 'hard',
    question: 'The principle of "Galilean Invariance" (or Galilean Relativity) establishes an absolutely critical foundation for all modern physics. What does this principle mathematically assert?',
    options: [
      'The fundamental laws of motion are strictly identical in all inertial (non-accelerating) frames of reference, meaning absolute velocity cannot be physically detected.',
      'The speed of light $c$ remains perfectly constant in all reference frames, strictly enforcing time dilation at velocities approaching $v = c$.',
      'The total mechanical energy of an isolated system must remain invariant unless an external non-conservative frictional force acts upon the boundary.',
      'The orbital paths of the planets remain strictly invariant purely because the geometric space surrounding a massive body is physically curved.'
    ],
    correctIndex: 0,
    explanation: 'Galileo proposed a thought experiment: if you are in the windowless hull of a smoothly sailing ship, no mechanical experiment (dropping a ball, watching a pendulum) can tell you if the ship is moving or stationary. The laws of physics are identical in any constant-velocity frame.',
    realWorld: 'This is why you can pour a cup of coffee perfectly straight down while flying in a jet traveling at 500 mph. Your local physics "ignore" the steady speed.',
    hint: 'It proves that there is no such thing as "absolute stillness" in the universe; everything is relative to the observer.',
  },
  {
    id: 31132,
    topic: 'galileo-galilei',
    difficulty: 'sota',
    question: 'When analyzing the period of a swinging pendulum, $T \\approx 2\\pi\\sqrt{\\frac{L}{g}}$, Galileo discovered "isochronism." What surprising physical property of the pendulum does this mathematical approximation reveal?',
    options: [
      'The period $T$ is strictly independent of the initial amplitude (the starting angle), provided the angle remains relatively small.',
      'The period $T$ is directly proportional to the absolute mass of the swinging bob attached to the pendulum string.',
      'The pendulum\'s kinetic energy perfectly oscillates into purely chaotic non-linear dynamics when the string length $L$ exceeds the gravitational constant $g$.',
      'The angular momentum of the bob decays exponentially in a strict vacuum due to the microscopic stretching of the metallic string.'
    ],
    correctIndex: 0,
    explanation: 'Galileo realized that whether a pendulum takes a wide swing or a very tiny swing, the time it takes to complete one full cycle (the period $T$) remains exactly the same. The period only depends on the length of the string ($L$) and gravity ($g$).',
    realWorld: 'This discovery directly allowed Christiaan Huygens to invent the pendulum clock, solving the absolute crisis of keeping highly accurate time for naval navigation and astronomy.',
    hint: 'It takes the exact same amount of time to swing back and forth, regardless of whether you pull it back one inch or one foot.',
  },
  {
    id: 31133,
    topic: 'galileo-galilei',
    difficulty: 'hard',
    question: 'Through his advanced telescopic observations, Galileo discovered the "Medicean Stars." What were these celestial objects, and what massive geometric paradigm did they shatter?',
    options: [
      'They were the four largest moons of Jupiter, definitively proving that not all celestial bodies physically orbit the Earth.',
      'They were the strictly distinct phases of Venus, proving that planetary illumination requires a mathematically perfect elliptical orbit.',
      'They were the highly localized sunspots rotating on the solar surface, proving that the heavens were not composed of perfectly immutable ether.',
      'They were the dense rings of Saturn, mathematically proving that celestial matter can form highly flat, continuous topological disks.'
    ],
    correctIndex: 0,
    explanation: 'Galileo discovered Io, Europa, Ganymede, and Callisto orbiting Jupiter. The Catholic Church and Aristotelians held that all celestial motion *must* center on the Earth. Watching moons clearly orbit another planet utterly destroyed the geocentric model\'s absolute monopoly.',
    realWorld: 'These four moons are still called the "Galilean moons" today. Studying their eclipses later allowed Ole Rømer to mathematically calculate the speed of light for the first time in history.',
    hint: 'He found tiny objects circling a giant gas planet, proving Earth was not the center of all orbits.',
  },
  {
    id: 31134,
    topic: 'galileo-galilei',
    difficulty: 'hard',
    question: 'Galileo famously declared in *The Assayer* that the universe "cannot be read until we have learnt the language and become familiar with the characters in which it is written." What did he define as the language of the universe?',
    options: [
      'The pure language of Mathematics, specifically written in the geometric characters of triangles, circles, and other fundamental figures.',
      'The divine language of strictly proportional Theology, written in the harmonic orbital spheres established strictly by a Creator.',
      'The absolute physical language of Empiricism, requiring completely unguided human sensory observation to decode natural philosophy.',
      'The chaotic language of complex Algebraic polynomials, requiring the solving of infinitesimally infinite nested recursive equations.'
    ],
    correctIndex: 0,
    explanation: 'Galileo famously stated: "It is written in mathematical language, and the letters are triangles, circles and other geometrical figures, without which means it is humanly impossible to comprehend a single word." This formally birthed modern theoretical physics.',
    realWorld: 'Before Galileo, natural philosophy was primarily debated using philosophical rhetoric and classical poetry. Galileo demanded that the universe be measured, calculated, and geometrically proven.',
    hint: 'He believed the code of the cosmos was written strictly in shapes, lines, and numbers.',
  }
];