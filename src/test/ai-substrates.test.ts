import { describe, it, expect } from "vitest";

import { aiSubstratesQuestions } from "@/content/ai-substrates";
import { allQuestions } from "@/content";
import { aiSubstratesTerms } from "@/content/glossary/ai-substrates";
import { getAllGlossaryTerms } from "@/content/glossary";
import { TOPICS } from "@/config/constants";
import { FIELDS } from "@/config/fields";
import { EQUATIONS } from "@/config/equations";
import { THINKERS } from "@/config/thinkers";

/**
 * Integration guards for the ai-substrates content pack.
 *
 * The failure mode this protects against is the one called out in
 * docs/add-content-template.md: content that is imported but never spread (or
 * registered in only two of the three places) shows up in the UI as an empty
 * topic rather than as an error.
 */

const TOPIC = "ai-substrates";

describe("ai-substrates: quiz pack integrity", () => {
  it("has questions at every difficulty tier", () => {
    const byDifficulty = (d: string) =>
      aiSubstratesQuestions.filter((q) => q.difficulty === d).length;
    expect(byDifficulty("easy")).toBeGreaterThanOrEqual(1);
    expect(byDifficulty("hard")).toBeGreaterThanOrEqual(1);
    expect(byDifficulty("sota")).toBeGreaterThanOrEqual(1);
  });

  it("uses only valid difficulty values", () => {
    for (const q of aiSubstratesQuestions) {
      expect(["easy", "hard", "sota"]).toContain(q.difficulty);
    }
  });

  it("tags every question with the matching topic slug", () => {
    for (const q of aiSubstratesQuestions) {
      expect(q.topic).toBe(TOPIC);
    }
  });

  it("gives every question exactly four options and an in-range answer", () => {
    for (const q of aiSubstratesQuestions) {
      expect(q.options).toHaveLength(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
      expect(new Set(q.options).size).toBe(4); // no duplicate options
    }
  });

  it("populates the teaching fields on every question", () => {
    for (const q of aiSubstratesQuestions) {
      expect(q.question.trim().length).toBeGreaterThan(0);
      expect(q.explanation.trim().length).toBeGreaterThan(0);
      expect(q.realWorld.trim().length).toBeGreaterThan(0);
      expect(q.hint.trim().length).toBeGreaterThan(0);
    }
  });

  it("keeps question ids unique across the entire pool", () => {
    const ids = allQuestions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("is actually spread into allQuestions, not merely imported", () => {
    const inPool = allQuestions.filter((q) => q.topic === TOPIC);
    expect(inPool).toHaveLength(aiSubstratesQuestions.length);
  });
});

describe("ai-substrates: registration wiring", () => {
  it("is registered in the TOPICS registry under an existing field", () => {
    const topic = TOPICS.find((t) => t.slug === TOPIC);
    expect(topic).toBeDefined();
    const field = FIELDS.find((f) => f.slug === topic!.field);
    expect(field).toBeDefined();
  });

  it("is listed in its parent field's topics array", () => {
    const topic = TOPICS.find((t) => t.slug === TOPIC)!;
    const field = FIELDS.find((f) => f.slug === topic.field)!;
    expect(field.topics).toContain(TOPIC);
  });
});

describe("ai-substrates: glossary integrity", () => {
  it("is spread into the aggregated glossary", () => {
    const all = getAllGlossaryTerms();
    for (const term of aiSubstratesTerms) {
      expect(all.some((t) => t.id === term.id)).toBe(true);
    }
  });

  it("keeps its own term ids unique", () => {
    const ids = aiSubstratesTerms.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("does not collide with any pre-existing glossary id", () => {
    const mine = new Set(aiSubstratesTerms.map((t) => t.id));
    const others = getAllGlossaryTerms().filter((t) => !aiSubstratesTerms.includes(t));
    for (const t of others) {
      expect(mine.has(t.id), `collides with existing term '${t.id}'`).toBe(false);
    }
  });

  it("contains no elided array entries", () => {
    // Guards the failure mode fixed in math.ts/physics.ts: a stray double
    // comma in a large literal array creates an `undefined` hole, which makes
    // the aggregated glossary unsafe to map over.
    for (const t of getAllGlossaryTerms()) {
      expect(t).toBeDefined();
      expect(typeof t.id).toBe("string");
    }
  });

  it("uses glossary difficulty values, not question ones", () => {
    for (const t of aiSubstratesTerms) {
      if (t.difficulty !== undefined) {
        expect(["intro", "intermediate", "advanced"]).toContain(t.difficulty);
      }
    }
  });

  it("declares a field slug that exists in the FIELDS registry", () => {
    const slugs = new Set(FIELDS.map((f) => f.slug));
    for (const t of aiSubstratesTerms) {
      expect(slugs.has(t.field)).toBe(true);
    }
  });

  it("resolves every `related` reference to a real glossary term", () => {
    const ids = new Set(getAllGlossaryTerms().map((t) => t.id));
    for (const t of aiSubstratesTerms) {
      for (const rel of t.related ?? []) {
        expect(ids.has(rel), `${t.id} -> related '${rel}'`).toBe(true);
      }
    }
  });

  it("resolves every `thinkerLinks` reference to a real thinker slug", () => {
    const slugs = new Set(THINKERS.map((t) => t.slug));
    for (const t of aiSubstratesTerms) {
      for (const link of t.thinkerLinks ?? []) {
        expect(slugs.has(link), `${t.id} -> thinker '${link}'`).toBe(true);
      }
    }
  });
});

describe("ai-substrates: cross-links from questions", () => {
  it("resolves every glossaryLinks target to a real term", () => {
    const ids = new Set(getAllGlossaryTerms().map((t) => t.id));
    for (const q of aiSubstratesQuestions) {
      for (const link of q.glossaryLinks ?? []) {
        expect(ids.has(link), `q${q.id} -> glossary '${link}'`).toBe(true);
      }
    }
  });

  it("resolves every formulaLinks target to a real equation name", () => {
    const names = new Set(EQUATIONS.map((e) => e.name));
    const all = [
      ...aiSubstratesQuestions.flatMap((q) => q.formulaLinks ?? []),
      ...aiSubstratesTerms.flatMap((t) => t.formulaLinks ?? []),
    ];
    expect(all.length).toBeGreaterThan(0);
    for (const link of all) {
      expect(names.has(link), `formula link '${link}'`).toBe(true);
    }
  });

  it("cites a paper on the SOTA questions that claim one", () => {
    for (const q of aiSubstratesQuestions) {
      if (q.paper) {
        expect(q.difficulty).toBe("sota");
        expect(q.paper.title.trim().length).toBeGreaterThan(0);
        expect(q.paper.url).toMatch(/^https?:\/\//);
      }
    }
  });
});

describe("ai-substrates: new equations", () => {
  const added = [
    "Layerwise Quantization Hessian",
    "Speculative Decoding Acceptance Rate",
    "Reverse Water-Filling Bit Allocation",
    "Muon Spectral Descent Update",
  ];

  it("registers all four equations", () => {
    for (const name of added) {
      expect(EQUATIONS.some((e) => e.name === name), name).toBe(true);
    }
  });

  it("keeps equation ranks unique", () => {
    const ranks = EQUATIONS.map((e) => e.rank);
    expect(new Set(ranks).size).toBe(ranks.length);
  });

  it("populates the required display fields", () => {
    for (const name of added) {
      const eq = EQUATIONS.find((e) => e.name === name)!;
      expect(eq.equation.trim().length).toBeGreaterThan(0);
      expect(eq.significance.trim().length).toBeGreaterThan(0);
      expect(eq.constants.trim().length).toBeGreaterThan(0);
      expect(eq.applications.trim().length).toBeGreaterThan(0);
      expect(eq.tags.length).toBeGreaterThan(0);
      expect(eq.beauty).toBeGreaterThanOrEqual(1);
      expect(eq.beauty).toBeLessThanOrEqual(10);
      expect(["easy", "hard", "sota"]).toContain(eq.difficulty);
    }
  });
});
