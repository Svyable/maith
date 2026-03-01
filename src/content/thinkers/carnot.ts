import type { Question } from '../types';

export const carnotQuestions: Question[] = [
  {
    id: 31135,
    topic: 'carnot',
    difficulty: 'easy',
    question: 'Sadi Carnot mathematically established the absolute maximum efficiency of any heat engine in the universe. What incredibly profound constraint does the formula $\\eta = 1 - \\frac{T_C}{T_H}$ reveal?',
    options: [
      'Perfect $100\\%$ efficiency is physically impossible unless the cold reservoir reaches Absolute Zero ($0\\text{ K}$), meaning waste heat is a fundamental law of nature.',
      'The mechanical efficiency of the engine strictly depends on the specific molecular mass of the steam or working fluid being actively pumped.',
      'The thermal efficiency of an engine scales infinitely provided the internal geometric volume of the piston expands at a continuous exponential rate.',
      'An engine can theoretically reach exactly $100\\%$ efficiency if the internal friction of the metallic mechanical components is reduced perfectly to zero.'
    ],
    correctIndex: 0,
    explanation: 'Carnot\'s formula proves that efficiency depends solely on the temperature difference between the heat source ($T_H$) and the cold sink ($T_C$). Because you can never reach Absolute Zero ($T_C = 0$), you can *never* convert $100\\%$ of heat into work. Some energy must always be dumped as waste.',
    realWorld: 'This is why car radiators and nuclear cooling towers exist. They are not fixing a mechanical flaw; they are obeying the unbreakable mathematical laws of the universe demanding that heat must be exhausted to create motion.',
    hint: 'It proves that no matter how perfectly you build an engine, you will always lose energy to the surrounding environment.',
  },
  {
    id: 31136,
    topic: 'carnot',
    difficulty: 'hard',
    question: 'The idealized "Carnot Cycle" is theoretically the most efficient thermodynamic cycle possible. Which four perfectly reversible mathematical processes comprise this geometric cycle on a Pressure-Volume ($P-V$) diagram?',
    options: [
      'Two reversible isothermal (constant temperature) processes, and two reversible adiabatic (zero heat transfer) processes.',
      'Two reversible isobaric (constant pressure) processes, and two reversible isochoric (constant volume) processes.',
      'Two reversible isentropic (constant entropy) processes, and two reversible isenthalpic (constant enthalpy) processes.',
      'Two reversible polytropic (variable heat) processes, and two strictly non-linear chaotic turbulent expansions.'
    ],
    correctIndex: 0,
    explanation: 'The Carnot cycle expands the gas at a constant hot temperature (isothermal), lets it expand further without heat exchange (adiabatic), compresses it at a constant cold temperature (isothermal), and compresses it back to the start without heat exchange (adiabatic).',
    realWorld: 'While purely theoretical and impossible to build (because "reversible" means it must run infinitely slowly), engineers use the Carnot Cycle as the absolute mathematical yardstick to grade the efficiency of real-world jet engines and power plants.',
    hint: 'Two steps keep the temperature perfectly flat, and two steps refuse to let any heat escape or enter.',
  },
  {
    id: 31137,
    topic: 'carnot',
    difficulty: 'sota',
    question: 'Carnot’s theorem contains a massive, counterintuitive universal truth regarding the "working fluid" (e.g., steam, air, or plasma) used inside an idealized reversible engine. What does the theorem state about this fluid?',
    options: [
      'The maximum theoretical thermal efficiency of the engine is strictly and completely independent of the nature of the working fluid used.',
      'The engine\'s mechanical efficiency mathematically scales directly with the specific molar heat capacity $C_v$ of the fluid being vaporized.',
      'A strictly monatomic gas (like Helium) will always yield a geometrically higher theoretical efficiency bound than a diatomic gas (like Oxygen).',
      'The fluid must possess a strictly negative Joule-Thomson coefficient for the engine\'s continuous reversible cycle to close mathematically.'
    ],
    correctIndex: 0,
    explanation: 'Carnot mathematically proved that it doesn\'t matter if you run your idealized engine on boiling water, compressed air, liquid sodium, or ionized plasma. The maximum possible efficiency is dictated *only* by the hot and cold temperatures. The fluid is irrelevant.',
    realWorld: 'This realization unified the entirety of thermodynamics. It meant that thermal energy (heat) obeys universal physical laws that completely transcend chemistry and material science.',
    hint: 'The math of the engine simply does not care what type of gas you put inside the piston.',
  },
  {
    id: 31138,
    topic: 'carnot',
    difficulty: 'hard',
    question: 'Despite laying the absolute foundation for the Second Law of Thermodynamics, Carnot\'s original 1824 treatise contained a major conceptual flaw regarding the nature of heat. What was his incorrect assumption?',
    options: [
      'He believed in the "caloric theory," assuming heat was a massless, indestructible fluid that physically poured from hot bodies to cold bodies without being consumed.',
      'He assumed that total thermal entropy must strictly decrease during continuous compression, violating the modern understanding of the arrow of time.',
      'He mathematically modeled heat as purely an electromagnetic wave, ignoring the strict kinetic energy of randomly colliding physical molecules.',
      'He asserted that the absolute zero point of temperature was geometrically impossible to define, leaving his equations without a rigid localized mathematical baseline.'
    ],
    correctIndex: 0,
    explanation: 'Carnot imagined heat as a physical fluid ("caloric"). He thought his engine worked like a water wheel: the caloric "fell" from a high temperature to a low temperature, turning the engine without actually being used up. Decades later, Joule and Clausius proved heat is actually kinetic energy that gets converted into work.',
    realWorld: 'Miraculously, Carnot\'s mathematical logic and efficiency equations were so brilliant that they remained perfectly correct even after the underlying physical "caloric" theory was completely discarded.',
    hint: 'He treated heat exactly the same way an engineer treats water flowing over a dam.',
  },
  {
    id: 31139,
    topic: 'carnot',
    difficulty: 'sota',
    question: 'In modern thermodynamic calculus, Clausius formalized Carnot\'s insights into the concept of entropy. How does Carnot\'s perfectly reversible cycle mathematically define the cyclic integral of heat transfer over temperature?',
    options: [
      '$\\oint \\frac{\\delta Q_{\\text{rev}}}{T} = 0$',
      '$\\oint \\delta Q_{\\text{rev}} = \\oint \\delta W$',
      '$\\oint \\frac{\\delta Q_{\\text{rev}}}{T} \\ge 1$',
      '$\\oint \\delta Q_{\\text{rev}} \\cdot T = \\Delta S_{\\text{universe}}$'
    ],
    correctIndex: 0,
    explanation: 'For any perfectly reversible cycle (like the Carnot cycle), the total sum of the heat transferred divided by the temperature at which the transfer happens is exactly zero. Clausius realized this mathematical zero meant there was a hidden "state function" perfectly returning to its starting point—he named this function "Entropy" ($S$).',
    realWorld: 'This equation is the mathematical birth of Entropy. If the cycle is real (irreversible), the integral is strictly less than zero ($\\le 0$), proving that total entropy in the universe must always increase.',
    hint: 'Because the idealized engine returns perfectly to its exact starting state without creating any permanent chaos, the total cyclic sum is mathematically empty.',
  }
];