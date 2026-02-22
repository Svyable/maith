import type { Question } from '../types';

export const oceanographyQuestions: Question[] = [
  {
    id: 40701, topic: 'oceanography', difficulty: 'easy',
    question: 'The thermohaline circulation (global "conveyor belt") is driven by:',
    options: [
      'Differences in water density caused by temperature (thermo) and salinity (haline) — cold, salty water sinks in the North Atlantic and flows south along the ocean floor',
      'Wind alone pushing water around the globe',
      'The Moon\'s gravitational pull creating permanent currents',
      'Volcanic heating at mid-ocean ridges',
    ],
    correctIndex: 0,
    explanation: 'Cold, salty water in the North Atlantic is dense enough to sink to the ocean floor, driving the Atlantic Meridional Overturning Circulation (AMOC). This deep water flows south, surfaces in the Southern Ocean, and returns north — a cycle taking ~1,000 years.',
    realWorld: 'The AMOC transports ~1.3 petawatts of heat northward, keeping Europe ~5°C warmer than equivalent latitudes. Its potential weakening due to climate change is a major concern.',
    hint: 'Density differences from temperature and salt content drive a global-scale circulation.',
  },
  {
    id: 40702, topic: 'oceanography', difficulty: 'hard',
    question: 'Ocean acidification threatens marine ecosystems because:',
    options: [
      'Absorbed CO₂ reacts with seawater to form carbonic acid ($\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CO}_3$), lowering pH and reducing carbonate ions needed for shell formation',
      'The ocean is becoming more alkaline over time',
      'Fish cannot survive in water with any dissolved CO₂',
      'Acidification only affects freshwater lakes',
    ],
    correctIndex: 0,
    explanation: 'The ocean has absorbed ~30% of anthropogenic CO₂, reducing surface pH from 8.2 to 8.1 (a 26% increase in H⁺ concentration). Lower carbonate saturation makes it harder for corals, mollusks, and plankton to build CaCO₃ shells.',
    realWorld: 'Coral reefs support 25% of marine species and $375B in annual economic activity. At current rates, most tropical reefs will experience dissolution conditions by 2050.',
    hint: 'CO₂ dissolves in water and becomes an acid — bad news for anything with a calcium carbonate shell.',
  },
  {
    id: 40703, topic: 'oceanography', difficulty: 'sota',
    question: 'Autonomous underwater vehicles (AUVs) equipped with AI are revolutionizing oceanography by:',
    options: [
      'Performing adaptive sampling — using onboard ML to detect anomalies (algal blooms, thermal fronts) in real-time and autonomously redirect to collect high-value data',
      'Simply following pre-programmed paths without any intelligence',
      'Replacing all satellite ocean observation',
      'Only operating in shallow coastal waters',
    ],
    correctIndex: 0,
    explanation: 'Modern AUVs like the Argo fleet (4,000+ floats) and AI-equipped gliders use onboard edge ML to identify features of interest and adapt their sampling strategy in real-time, maximizing scientific value per mission.',
    realWorld: 'The Argo network provides 400+ profiles per day of ocean temperature and salinity to 2,000m depth. AI-equipped AUVs discovered deep-sea hydrothermal vents and mapped under-ice Arctic conditions.',
    hint: 'Smart robots that decide where to look based on what they\'re finding — not just following a script.',
  },
];
