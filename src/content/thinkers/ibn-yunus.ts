import type { Question } from '../types';

export const ibnYunusQuestions: Question[] = [
  {
    id: 31790, topic: 'ibn-yunus', difficulty: 'easy',
    question: 'Ibn Yunus (950–1009), the Egyptian astronomer, compiled one of the most accurate astronomical tables of the medieval period. What was his masterwork called?',
    options: [
      'The *Zij al-Kabir al-Hakimi* (Great Hakimite Tables) — containing solar, lunar, and planetary tables of unprecedented precision, based on decades of observations at the al-Hakim observatory in Cairo.',
      'The *Almagest* — a comprehensive astronomical treatise surpassing Ptolemy\'s original work.',
      'The *Tabulae Rudolphinae* — precision tables based on Tycho Brahe\'s observations.',
      'The *Zīj-i Sultānī* — the astronomical tables of Ulugh Beg\'s Samarkand observatory.'
    ],
    correctIndex: 0,
    explanation: 'Ibn Yunus used over 40 years of observations (his own and predecessors\') to compile extraordinarily accurate astronomical tables. His ecliptic observations were so precise that 19th-century astronomers (Simon Newcomb) used them to study the long-term acceleration of the Moon.',
    realWorld: 'Ibn Yunus\'s observations provide a crucial ~1000-year baseline for modern studies of Earth\'s rotation rate, tidal deceleration, and the secular acceleration of the Moon.',
    hint: 'Named after the Fatimid Caliph al-Hakim who commissioned the observatory where he worked.',
  },
  {
    id: 31791, topic: 'ibn-yunus', difficulty: 'hard',
    question: 'Ibn Yunus derived a key trigonometric identity that simplified astronomical calculations. What product-to-sum formula did he discover?',
    options: [
      '$\\cos a \\cdot \\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]$ — he used this to convert multiplications of trigonometric values into additions, enormously simplifying astronomical computations (a method later called "prosthaphaeresis" in Europe).',
      '$\\sin a \\cdot \\sin b = \\frac{1}{2}[\\cos(a-b) - \\cos(a+b)]$ — he proved this using the Pythagorean identity.',
      '$\\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$ — he derived this from the sine and cosine addition formulas.',
      '$\\sin 2a = 2\\sin a \\cos a$ — he proved this by geometric construction on the unit circle.'
    ],
    correctIndex: 0,
    explanation: 'Ibn Yunus\'s product-to-sum formula converts a multiplication of two cosines into a sum of two cosines — turning a hard operation (multiplication of multi-digit numbers) into an easy one (addition). This was the key technique used by European astronomers (Tycho Brahe) 500 years later under the name "prosthaphaeresis" — the precursor to logarithms.',
    realWorld: 'Prosthaphaeresis was the fastest method for multiplying large numbers before Napier invented logarithms in 1614. The concept of converting multiplication to addition is also the foundation of the slide rule and logarithmic tables.',
    hint: 'He turned multiplication into addition using a trig identity — the same trick that logarithms would later accomplish.',
  },
  {
    id: 31792, topic: 'ibn-yunus', difficulty: 'sota',
    question: 'Ibn Yunus made careful observations of solar and lunar eclipses spanning decades. What modern scientific use have his eclipse records served?',
    options: [
      'His precise eclipse timings (accurate to within minutes) provide historical data points for computing the rate of change of Earth\'s rotation period ($\\Delta T$). The discrepancy between predicted and observed eclipse times reveals that Earth\'s rotation is slowing by ~2.3 ms/century due to tidal friction.',
      'His eclipse records proved that the Moon\'s orbital period has remained constant for 1000 years, ruling out tidal evolution models.',
      'His eclipse records were used to calibrate radiocarbon dating by correlating tree-ring chronologies with known astronomical events.',
      'His eclipse records demonstrated that solar luminosity has increased by ~0.1% per century, confirming stellar evolution models.'
    ],
    correctIndex: 0,
    explanation: 'Historical eclipse records are uniquely valuable because eclipse timing depends on Earth\'s rotation angle. If Earth\'s rotation has slowed since 1000 CE, eclipses would occur at slightly different longitudes than predicted by a constant rotation rate. Ibn Yunus\'s records, along with Chinese and Babylonian data, confirm tidal deceleration of ~$\\dot{\\omega}/\\omega \\approx -6 \\times 10^{-22}$ rad/s².',
    realWorld: 'These measurements of $\\Delta T$ are essential for predicting future eclipses, calibrating atomic vs. astronomical time (UTC vs. UT1), and understanding the tidal transfer of angular momentum from Earth to the Moon\'s orbit.',
    hint: 'If Earth spins slower now than 1000 years ago, eclipses should appear at different longitudes than predicted — and they do.',
  },
];
