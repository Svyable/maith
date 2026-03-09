import type { Question } from '../types';

export const banuMusaQuestions: Question[] = [
  {
    id: 31820, topic: 'banu-musa', difficulty: 'easy',
    question: 'The Banū Mūsā brothers (Muhammad, Ahmad, and al-Hasan, 9th century) worked at the House of Wisdom in Baghdad. What was their most famous work?',
    options: [
      'The *Book of Ingenious Devices* (Kitāb al-Ḥiyal) — describing over 100 mechanical devices including automatic controls, trick vessels, and fountains, many using principles of feedback and hydraulic switching that anticipate modern control theory.',
      'The *Book of Optics* — explaining vision by light rays entering the eye, overturning the Greek emission theory.',
      'The *Book of Algebra* — extending al-Khwarizmi\'s methods to cubic and quartic equations.',
      'The *Book of Stars* — the most comprehensive star catalog of the medieval period.'
    ],
    correctIndex: 0,
    explanation: 'The Banū Mūsā described automatic fountains with self-regulating water levels (feedback control), valves that switch flow based on water height (binary logic), and siphon-based tricks. Their *Book on the Measurement of Plane and Spherical Figures* also proved formulas for areas and volumes, including correct formulas for the ellipse area and hemisphere volume.',
    realWorld: 'Their mechanical devices are considered precursors to modern automation. The self-regulating mechanisms in their fountains embody the same feedback principles used in thermostats, cruise control, and PID controllers.',
    hint: 'Three brothers who built 100+ automatic machines — with self-regulating mechanisms that anticipate modern engineering.',
  },
  {
    id: 31821, topic: 'banu-musa', difficulty: 'hard',
    question: 'The Banū Mūsā\'s *Book on the Measurement of Plane and Spherical Figures* proved geometric formulas rigorously. What key result did they establish about the circle?',
    options: [
      'They proved that the ratio of a circle\'s circumference to its diameter ($\\pi$) is the same constant for all circles, and derived the formula $A = \\pi r^2$ with a rigorous limit argument — one of the first explicit proofs of this fundamental result in Arabic mathematics.',
      'They computed $\\pi$ to 20 decimal places using inscribed and circumscribed 96-gons.',
      'They proved that $\\pi$ is irrational by assuming $\\pi = p/q$ and deriving a contradiction.',
      'They proved that the area of a circle equals the area of a right triangle with legs equal to the radius and circumference.'
    ],
    correctIndex: 0,
    explanation: 'The Banū Mūsā used an Archimedean exhaustion argument to prove $A = \\pi r^2$, but presented it more clearly than Archimedes. They also proved formulas for the surface area and volume of a sphere ($4\\pi r^2$ and $\\frac{4}{3}\\pi r^3$), and the area of an ellipse ($\\pi ab$). Their proofs were among the most rigorous mathematical arguments in the medieval world.',
    realWorld: 'Their measurement treatise was translated into Latin by Gerard of Cremona and became a standard reference in European mathematics for centuries.',
    hint: 'They rigorously proved the circle area formula — the one you learned in school — using Greek exhaustion methods presented with Arabic clarity.',
  },
  {
    id: 31822, topic: 'banu-musa', difficulty: 'sota',
    question: 'The Banū Mūsā\'s mechanical devices used several principles that became foundational in engineering. What control mechanism did they employ in their automatic devices?',
    options: [
      'Float-valve feedback regulators — a float rises with water level, closing an inlet valve when a target level is reached and opening it when the level drops. This is a negative feedback loop: $\\text{error} = \\text{setpoint} - \\text{measured} \\to \\text{corrective action}$, the same principle underlying all modern control systems.',
      'Spring-loaded escapement mechanisms — alternating storage and release of elastic energy to regulate rotational speed.',
      'Centrifugal governors — rotating weights that open a throttle valve when speed drops below a threshold.',
      'Pneumatic logic circuits — using air pressure differences to implement AND, OR, and NOT gates for sequential control.'
    ],
    correctIndex: 0,
    explanation: 'The Banū Mūsā\'s float-valve regulator is one of the earliest known implementations of automatic feedback control. When water rises above the setpoint, the float lifts a conical valve into its seat, stopping inflow. When the level drops, gravity lowers the float, reopening the valve. This closed-loop control maintains a constant water level without human intervention.',
    realWorld: 'The same float-valve principle is used in modern toilet cisterns, carburetor float bowls, and industrial liquid level controllers. James Watt\'s centrifugal governor (1788) extended this principle to rotational speed control.',
    hint: 'A floating ball controls a valve — when the water rises, the valve closes; when it falls, the valve opens. Automatic regulation.',
  },
];
