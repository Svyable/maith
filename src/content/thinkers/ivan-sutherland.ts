// sutherland.ts
import type { Question } from '../types';

export const sutherlandQuestions: Question[] = [
  {
    id: 40020,
    topic: 'ivan-sutherland',
    difficulty: 'easy',
    question: 'Sketchpad (1963) introduced what?',
    options: [
      'GUI + lightpen + constraints + object drawing',
      'Text editor w/ syntax highlighting',
      'Spacewar! video game',
      'CAD/CAM manufacturing'
    ],
    correctIndex: 0,
    explanation: 'Lightpen ($x(t),y(t)$ tracking) drew circles/squares. Constraints: "if circle radius doubles, square scales".',
    realWorld: 'AutoCAD, Photoshop, Illustrator, PowerPoint all trace to Sketchpad.',
    hint: 'Draw shapes, set geometric rules, computer enforces them.',
  },
  {
    id: 40021,
    topic: 'ivan-sutherland',
    difficulty: 'hard',
    question: 'Sketchpad constraint propagation works how?',
    options: [
      'Instant update: $C_{new} = f(C_{old}, \\Delta_{user})$',
      'Raytracing intersections ($t=0\\to1$)',
      'Collision detection kd-trees',
      'GPU fragment shading'
    ],
    correctIndex: 0,
    explanation: 'User drags circle → radius constraint auto-rescales connected square/line lengths immediately.',
    realWorld: 'SolidWorks, parametric CAD core technique.',
    hint: 'Drag one thing, everything connected updates instantly.',
  },
  {
    id: 40022,
    topic: 'ivan-sutherland',
    difficulty: 'sota',
    question: 'Sutherland\'s "master-slave" manipulation = ?',
    options: [
      'Lightpen controls miniature ($1:10$) model, computer scales to full drawing',
      'Force-feedback haptics',
      '3D stereoscopic viewing',
      'Head-tracked perspective'
    ],
    correctIndex: 0,
    explanation: 'Draw small on screen → computer scales to exact engineering drawing ($1/10^{th}$ manipulation).',
    realWorld: 'Modern touch pinch-to-zoom + CAD precision drafting.',
    hint: 'Draw tiny model, get full-size engineering drawing.',
  }
];
