import type { Question } from '../types';

export const environmentalScienceQuestions: Question[] = [
  {
    id: 41401, topic: 'environmental-science', difficulty: 'easy',
    question: 'The greenhouse effect works because:',
    options: [
      'Certain gases (CO₂, CH₄, H₂O) absorb outgoing infrared radiation and re-emit it in all directions, warming the surface by ~33°C above what it would be without an atmosphere',
      'The Sun is getting hotter every year',
      'The ozone hole lets in more solar radiation',
      'Heat from the Earth\'s core warms the surface',
    ],
    correctIndex: 0,
    explanation: 'Solar radiation (visible light) passes through the atmosphere and warms the surface. The surface emits infrared radiation, which greenhouse gases absorb and re-radiate. Without this effect, Earth\'s average temperature would be -18°C instead of +15°C.',
    realWorld: 'CO₂ has risen from 280 ppm (pre-industrial) to 424 ppm (2024). The enhanced greenhouse effect has warmed the planet by ~1.2°C, driving sea level rise, extreme weather, and ecosystem disruption.',
    hint: 'The atmosphere acts like a blanket — it lets sunlight in but traps heat going out.',
  },
  {
    id: 41402, topic: 'environmental-science', difficulty: 'hard',
    question: 'Climate feedback loops amplify warming because:',
    options: [
      'Initial warming triggers secondary effects (ice melt reduces albedo → more absorption, permafrost thaw releases CH₄ → more warming) that accelerate the original change',
      'The Sun\'s output increases in response to CO₂',
      'Volcanoes erupt more frequently when temperature rises',
      'Feedback loops always reduce warming',
    ],
    correctIndex: 0,
    explanation: 'Positive feedbacks include: ice-albedo (less ice → darker surface → more absorption), water vapor (warmer air holds more H₂O, a greenhouse gas), and permafrost methane release. These can amplify the direct CO₂ warming by 2-3×.',
    realWorld: 'The Arctic is warming 4× faster than the global average due to ice-albedo feedback. Permafrost contains ~1.5 trillion tons of carbon — potentially doubling atmospheric CO₂ if fully released.',
    hint: 'Warming causes changes that cause more warming — a vicious cycle.',
  },
  {
    id: 41403, topic: 'environmental-science', difficulty: 'sota',
    question: 'AI-driven climate modeling advances include:',
    options: [
      'Neural operator emulators (FourCastNet, ClimaX) that learn PDE dynamics from data, providing 1000× faster climate projections while maintaining physical consistency through physics-informed loss functions',
      'Replacing all climate observations with AI predictions',
      'Using AI to control the weather directly',
      'Training models exclusively on historical temperature records',
    ],
    correctIndex: 0,
    explanation: 'Neural operators learn the solution operator of climate PDEs directly from simulation data. Physics-informed neural networks (PINNs) add PDE residuals as loss terms, ensuring predictions respect conservation laws even between training points.',
    realWorld: 'NVIDIA\'s FourCastNet produces global weather forecasts in seconds. ClimaX can be fine-tuned for regional climate projections. These tools enable ensemble analyses with millions of scenarios for climate policy decisions.',
    hint: 'Instead of solving equations from scratch, AI learns the patterns — 1000× faster with physics built into the training.',
  },
];
