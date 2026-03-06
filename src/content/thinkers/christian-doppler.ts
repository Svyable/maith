import type { Question } from "../types";

export const christianDopplerQuestions: Question[] = [
  {
    id: 304012,
    topic: "christian-doppler",
    difficulty: "easy",
    question:
      "The Doppler effect is primarily a change in observed:",
    options: [
      "Frequency due to relative motion between source and observer",
      "Wave speed in the medium due to source acceleration",
      "Polarization due to the source color",
      "Amplitude only, with no change in wavelength",
    ],
    correctIndex: 0,
    explanation:
      "The Doppler effect changes the observed frequency when the source and observer move relative to each other. Approaching motion raises the observed frequency, while receding motion lowers it.",
    realWorld:
      "You hear this when an ambulance siren sounds higher as it approaches and lower as it drives away.",
    hint: "Think pitch shift from a passing siren.",
    symbolLinks: {
      "f": "phi",
      "\\\\lambda": "lambda",
    },
    formulaLinks: ["Doppler shift"],
    glossaryLinks: ["doppler-effect", "frequency", "wavelength"],
  },
  {
    id: 304013,
    topic: "christian-doppler",
    difficulty: "hard",
    question:
      "Why does astronomical redshift usually indicate recession along the line of sight?",
    options: [
      "Because the observed wavelength is stretched to longer values",
      "Because the source emits only low-energy photons when moving away",
      "Because gravity always increases the frequency of light from distant objects",
      "Because the speed of light decreases in intergalactic vacuum",
    ],
    correctIndex: 0,
    explanation:
      "Redshift means the observed wavelength is longer and the observed frequency is lower. In many contexts this is interpreted as the source receding relative to the observer, though cosmological redshift is more precisely tied to expansion of space.",
    realWorld:
      "Measurements of galactic redshift are central to observational cosmology and the evidence for an expanding universe.",
    hint: "Red means longer wavelength.",
    symbolLinks: {
      "\\\\lambda": "lambda",
    },
    formulaLinks: ["Doppler shift", "Redshift"],
    glossaryLinks: ["redshift", "cosmology", "electromagnetic-spectrum"],
  },
  {
    id: 304014,
    topic: "christian-doppler",
    difficulty: "sota",
    question:
      "In medical Doppler ultrasound, what quantity is inferred from the frequency shift of reflected sound waves?",
    options: [
      "The velocity of moving blood along the ultrasound beam direction",
      "The density of blood plasma alone",
      "The absolute temperature of the tissue",
      "The magnetic susceptibility of hemoglobin",
    ],
    correctIndex: 0,
    explanation:
      "Doppler ultrasound measures the frequency shift caused by reflection from moving blood cells. That shift is used to infer the component of blood velocity along the beam direction.",
    realWorld:
      "Doctors use Doppler ultrasound to assess blood flow, detect arterial narrowing, and monitor fetal circulation.",
    hint: "The shift reveals motion, not composition.",
    symbolLinks: {
      "f": "phi",
      "v": "nu",
    },
    formulaLinks: ["Doppler shift"],
    glossaryLinks: ["doppler-ultrasound", "hemodynamics", "signal-processing"],
  },
];
