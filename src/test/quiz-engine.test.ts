import { describe, expect, it } from 'vitest';
import {
  applyAnswer,
  buildInitialState,
  buildRemediationState,
  getSafeEliminationIndices,
  getVisibleOptionIndex,
  reshufflePublicQuestion,
  skipCurrentQuestion,
  toVisibleCheckResult,
  type CheckResult,
  type PublicQuestion,
} from '@/domain/quiz';

function makeQuestion(
  id: number,
  options = ['C', 'A', 'D', 'B'],
  originalIndices = [2, 0, 3, 1],
): PublicQuestion {
  return {
    id,
    topic: 'algebra',
    difficulty: 'hard',
    question: `Question ${id}`,
    options,
    hint: 'hint',
    originalIndices,
  };
}

describe('getSafeEliminationIndices', () => {
  it('never eliminates the correct visible option', () => {
    const originalIndices = [2, 0, 3, 1];
    const correctIndex = 3;
    const correctVisibleIndex = originalIndices.indexOf(correctIndex);

    for (let i = 0; i < 50; i++) {
      const eliminated = getSafeEliminationIndices(correctIndex, originalIndices);
      expect(eliminated).toHaveLength(2);
      expect(new Set(eliminated).size).toBe(2);
      expect(eliminated).not.toContain(correctVisibleIndex);
    }
  });

  it('fails closed when the correct answer is missing from the visible mapping', () => {
    expect(getSafeEliminationIndices(3, [0, 1, 2])).toEqual([]);
  });
});

describe('review index normalization', () => {
  it('maps canonical selected and correct indices to visible positions', () => {
    const originalIndices = [2, 0, 3, 1];
    const result: CheckResult = {
      correct: false,
      correctIndex: 3,
      explanation: 'explanation',
      realWorld: 'application',
    };

    expect(getVisibleOptionIndex(0, originalIndices)).toBe(1);
    expect(getVisibleOptionIndex(-1, originalIndices)).toBe(-1);
    expect(toVisibleCheckResult(result, originalIndices).correctIndex).toBe(2);
    expect(result.correctIndex).toBe(3);
  });
});

describe('reshufflePublicQuestion', () => {
  it('preserves canonical option mapping while changing only public ordering', () => {
    const question = makeQuestion(1);
    const canonicalOptions = ['A', 'B', 'C', 'D'];
    const reshuffled = reshufflePublicQuestion(question);

    expect(reshuffled.id).toBe(question.id);
    expect(reshuffled.options).toHaveLength(question.options.length);
    expect(new Set(reshuffled.originalIndices)).toEqual(new Set([0, 1, 2, 3]));

    reshuffled.originalIndices.forEach((originalIndex, visibleIndex) => {
      expect(reshuffled.options[visibleIndex]).toBe(canonicalOptions[originalIndex]);
    });
  });

  it('fails closed for a malformed option mapping', () => {
    const question = makeQuestion(1, ['A', 'B', 'C', 'D'], [0, 0, 2, 3]);
    expect(reshufflePublicQuestion(question)).toBe(question);
  });
});

describe('concept evidence in quiz state', () => {
  it('records mapped answer evidence with assistance metadata', () => {
    const q = makeQuestion(10, undefined, undefined);
    q.topic = 'linear-algebra';
    q.conceptIds = ['matrix-multiplication'];

    const result: CheckResult = {
      correct: true,
      correctIndex: 0,
      explanation: 'explanation',
      realWorld: 'application',
    };

    const next = applyAnswer(
      { ...buildInitialState(), loading: false, currentQuestions: [q] },
      result,
      q,
      0,
      { hintUsed: true, eliminateUsed: false },
    );

    expect(next.conceptEvidence).toEqual([
      expect.objectContaining({
        conceptId: 'matrix-multiplication',
        questionId: 10,
        correct: true,
        hintUsed: true,
        eliminateUsed: false,
      }),
    ]);
  });

  it('records mapped skips as unresolved evidence', () => {
    const q = makeQuestion(11);
    q.topic = 'calculus';
    q.conceptIds = ['derivatives'];

    const next = skipCurrentQuestion({
      ...buildInitialState(),
      loading: false,
      currentQuestions: [q],
    });

    expect(next.conceptEvidence).toEqual([
      expect.objectContaining({
        conceptId: 'derivatives',
        questionId: 11,
        outcome: 'skipped',
        correct: false,
      }),
    ]);
  });
});

describe('buildRemediationState', () => {
  it('creates a fresh round from unique wrong and skipped questions', () => {
    const missed = makeQuestion(1);
    const skipped = makeQuestion(2, ['B', 'D', 'A', 'C'], [1, 3, 0, 2]);
    const checkResult: CheckResult = {
      correct: false,
      correctIndex: 2,
      explanation: 'explanation',
      realWorld: 'application',
    };

    const previous = {
      ...buildInitialState(),
      loading: false,
      isFinished: true,
      score: 80,
      streak: 4,
      bestStreak: 4,
      totalAnswered: 6,
      correctAnswered: 4,
      answeredIds: [1],
      currentQuestions: [missed, skipped],
      missedQuestions: [{ question: missed, selectedIndex: 1, checkResult }],
      skippedQuestions: [{ question: skipped }, { question: missed }],
    };

    const next = buildRemediationState(previous);

    expect(next).not.toBe(previous);
    expect(next.loading).toBe(false);
    expect(next.isFinished).toBe(false);
    expect(next.score).toBe(0);
    expect(next.streak).toBe(0);
    expect(next.bestStreak).toBe(0);
    expect(next.totalAnswered).toBe(0);
    expect(next.correctAnswered).toBe(0);
    expect(next.answeredIds).toEqual([]);
    expect(next.missedQuestions).toEqual([]);
    expect(next.skippedQuestions).toEqual([]);
    expect(next.currentQuestions).toHaveLength(2);
    expect(new Set(next.currentQuestions.map((question) => question.id))).toEqual(new Set([1, 2]));
  });

  it('leaves a completed state unchanged when nothing needs remediation', () => {
    const previous = { ...buildInitialState(), loading: false, isFinished: true };
    expect(buildRemediationState(previous)).toBe(previous);
  });
});
