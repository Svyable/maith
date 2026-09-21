import { CONCEPT_MAP } from '@/config/concepts';
import type { QuestionDifficulty } from '@/content/types';
import type {
  AnswerAssistance,
  ConceptEvidence,
  ConceptMastery,
} from './types';

interface ConceptQuestion {
  id: number;
  topic: string;
  difficulty: QuestionDifficulty;
  conceptIds?: readonly string[];
}

function normalizedAssistance(assistance: AnswerAssistance = {}) {
  return {
    hintUsed: Boolean(assistance.hintUsed),
    eliminateUsed: Boolean(assistance.eliminateUsed),
    timedOut: Boolean(assistance.timedOut),
  };
}

export function buildAnswerConceptEvidence(
  question: ConceptQuestion,
  correct: boolean,
  assistance: AnswerAssistance = {},
): ConceptEvidence[] {
  const conceptIds = question.conceptIds ?? [];
  const assist = normalizedAssistance(assistance);

  return conceptIds.map((conceptId, index) => ({
    conceptId,
    questionId: question.id,
    topic: question.topic,
    difficulty: question.difficulty,
    outcome: 'answered',
    correct,
    ...assist,
    primary: index === 0,
  }));
}

export function buildSkipConceptEvidence(
  question: ConceptQuestion | undefined,
): ConceptEvidence[] {
  if (!question) return [];

  return (question.conceptIds ?? []).map((conceptId, index) => ({
    conceptId,
    questionId: question.id,
    topic: question.topic,
    difficulty: question.difficulty,
    outcome: 'skipped',
    correct: false,
    hintUsed: false,
    eliminateUsed: false,
    timedOut: false,
    primary: index === 0,
  }));
}

export function deriveConceptMastery(
  evidence: readonly ConceptEvidence[],
): ConceptMastery[] {
  const byConcept = new Map<string, ConceptEvidence[]>();

  for (const item of evidence) {
    const existing = byConcept.get(item.conceptId) ?? [];
    existing.push(item);
    byConcept.set(item.conceptId, existing);
  }

  return [...byConcept.entries()]
    .map(([conceptId, items]): ConceptMastery | null => {
      const concept = CONCEPT_MAP[conceptId];
      if (!concept || items.length === 0) return null;

      const correctItems = items.filter((item) => item.correct);
      const independentCorrect = correctItems.filter(
        (item) => !item.hintUsed && !item.eliminateUsed && !item.timedOut,
      ).length;
      const assistedCorrect = correctItems.length - independentCorrect;
      const hardOrSotaCorrect = correctItems.filter(
        (item) => item.difficulty === 'hard' || item.difficulty === 'sota',
      ).length;
      const accuracy = correctItems.length / items.length;

      let status: ConceptMastery['status'] = 'learning';
      if (
        items.length >= 4
        && accuracy >= 0.8
        && independentCorrect >= 3
        && hardOrSotaCorrect >= 1
      ) {
        status = 'mastered';
      } else if (
        items.length >= 3
        && accuracy >= 2 / 3
        && independentCorrect >= 2
      ) {
        status = 'strong';
      } else if (correctItems.length >= 1) {
        status = 'developing';
      }

      return {
        conceptId,
        label: concept.label,
        status,
        attempts: items.length,
        correct: correctItems.length,
        independentCorrect,
        assistedCorrect,
        hardOrSotaCorrect,
        accuracy,
        prerequisiteIds: concept.prerequisites,
      };
    })
    .filter((item): item is ConceptMastery => item !== null)
    .sort((a, b) => b.attempts - a.attempts || a.label.localeCompare(b.label));
}

export function expandConceptsWithPrerequisites(
  conceptIds: readonly string[],
): string[] {
  const ordered: string[] = [];
  const seen = new Set<string>();

  const visit = (conceptId: string) => {
    if (seen.has(conceptId)) return;
    seen.add(conceptId);
    ordered.push(conceptId);

    const concept = CONCEPT_MAP[conceptId];
    concept?.prerequisites.forEach(visit);
  };

  conceptIds.forEach(visit);
  return ordered;
}

export function getPracticeConceptIds(
  questions: readonly Pick<ConceptQuestion, 'conceptIds'>[],
): string[] {
  const primaryIds = questions.flatMap((question) => question.conceptIds?.slice(0, 1) ?? []);
  const fallbackIds = questions.flatMap((question) => question.conceptIds ?? []);
  return expandConceptsWithPrerequisites(primaryIds.length > 0 ? primaryIds : fallbackIds);
}

export interface PracticeCandidate {
  id: number;
  difficulty: QuestionDifficulty;
  conceptIds?: readonly string[];
}

export function selectPracticeCandidates<T extends PracticeCandidate>(
  pool: readonly T[],
  targetConceptIds: readonly string[],
  allowedDifficulties: readonly QuestionDifficulty[],
  excludeIds: ReadonlySet<number>,
  cap: number,
): T[] {
  if (targetConceptIds.length === 0 || cap <= 0) return [];

  const targetSet = new Set(targetConceptIds);
  const difficultySet = new Set(allowedDifficulties);
  const eligible = pool.filter((question) =>
    (difficultySet.size === 0 || difficultySet.has(question.difficulty))
    && question.conceptIds?.some((conceptId) => targetSet.has(conceptId)),
  );

  const selected: T[] = [];
  const selectedIds = new Set<number>();

  const takeForConcept = (conceptId: string, preferFresh: boolean) => {
    const candidate = eligible.find((question) =>
      !selectedIds.has(question.id)
      && question.conceptIds?.includes(conceptId)
      && (preferFresh ? !excludeIds.has(question.id) : true),
    );
    if (!candidate) return;
    selected.push(candidate);
    selectedIds.add(candidate.id);
  };

  for (const conceptId of targetConceptIds) {
    if (selected.length >= cap) break;
    takeForConcept(conceptId, true);
  }

  for (const conceptId of targetConceptIds) {
    if (selected.length >= cap) break;
    takeForConcept(conceptId, false);
  }

  const remaining = eligible.filter((question) => !selectedIds.has(question.id));
  for (const question of remaining) {
    if (selected.length >= cap) break;
    if (excludeIds.has(question.id)) continue;
    selected.push(question);
    selectedIds.add(question.id);
  }

  for (const question of remaining) {
    if (selected.length >= cap) break;
    if (selectedIds.has(question.id)) continue;
    selected.push(question);
    selectedIds.add(question.id);
  }

  return selected;
}
