import type { Question } from '../types';

export const platoQuestions: Question[] = [
  {
    id: 60020, topic: 'plato', difficulty: 'easy',
    question: 'Plato\'s Theory of Forms argues that the physical world is:',
    options: [
      'An imperfect shadow of eternal, perfect abstract Forms ($eidos$)',
      'The only reality, with no higher plane of existence',
      'A random arrangement of atoms in void',
      'A dream projected by a divine mind',
    ],
    correctIndex: 0,
    explanation: 'Plato held that abstract Forms (e.g., the Form of a Circle, the Form of Justice) are more real than physical objects. Physical circles are imperfect copies; the mathematical circle $x^2 + y^2 = r^2$ is closer to the Form.',
    realWorld: 'Mathematical Platonism — the belief that mathematical objects exist independently of human minds — is held by many working mathematicians, including Gödel and Penrose.',
    hint: 'Think about the difference between a perfect mathematical circle and any circle drawn on paper.',
  },
  {
    id: 60021, topic: 'plato', difficulty: 'hard',
    question: 'In Plato\'s "Allegory of the Cave," prisoners mistake shadows for reality. This illustrates:',
    options: [
      'That sensory experience is unreliable — true knowledge requires abstract reasoning beyond appearances',
      'That empirical observation is the only path to knowledge',
      'That mathematics is merely a human invention',
      'That democracy always produces the best decisions',
    ],
    correctIndex: 0,
    explanation: 'The cave allegory from "Republic" Book VII depicts prisoners who see only shadows on a wall and mistake them for reality. The philosopher who escapes sees the sun (the Form of the Good) — representing the journey from opinion ($doxa$) to knowledge ($episteme$).',
    realWorld: 'The allegory anticipates modern epistemology, Kant\'s phenomena/noumena distinction, and even simulation theory. In ML, it parallels the difference between observed data and underlying generative models.',
    hint: 'Prisoners see shadows and think that\'s all there is — until one escapes to see the real world.',
  },
  {
    id: 60022, topic: 'plato', difficulty: 'sota',
    question: 'The inscription above Plato\'s Academy reportedly read "Let no one ignorant of geometry enter." This reflects his belief that:',
    options: [
      'Mathematics is the essential training for philosophical reasoning — geometry reveals eternal truths accessible to pure thought',
      'Only professional mathematicians should study philosophy',
      'Geometry is useful solely for land surveying and architecture',
      'Mathematical knowledge is innate and requires no study',
    ],
    correctIndex: 0,
    explanation: 'Plato placed mathematics, especially geometry, at the center of education because it trains the mind to reason about abstract, unchanging truths — a prerequisite for grasping the Forms. In "Republic," he outlines a curriculum: arithmetic → geometry → astronomy → dialectic.',
    realWorld: 'Plato\'s emphasis on mathematical abstraction shaped the entire Western educational tradition and influenced the axiomatic method that Euclid formalized in the "Elements" shortly after.',
    hint: 'For Plato, geometry wasn\'t practical — it was training for the highest form of reasoning.',
  },
];
