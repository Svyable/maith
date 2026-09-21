import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type {
  CheckResult,
  PublicQuestion,
} from '@/domain/quiz';
import { calculatePoints } from '@/domain/scoring';
import type { AnswerAssistance } from '@/domain/mastery';
import { useQuizQuestionInteraction } from '@/hooks/useQuizQuestionInteraction';

function question(
  id: number,
  overrides: Partial<PublicQuestion> = {},
): PublicQuestion {
  return {
    id,
    topic: 'algebra',
    difficulty: 'hard',
    question: '2 + 2 = ?',
    options: ['4', '3', '5'],
    hint: 'Add two and two.',
    originalIndices: [2, 0, 1],
    ...overrides,
  };
}

function result(
  overrides: Partial<CheckResult> = {},
): CheckResult {
  return {
    correct: true,
    correctIndex: 2,
    explanation: 'Because arithmetic.',
    realWorld: 'Counting.',
    ...overrides,
  };
}

interface ProbeProps {
  question: PublicQuestion;
  streak?: number;
  onAnswer: (index: number, assistance?: AnswerAssistance) => Promise<CheckResult | null>;
  onSessionUpdate?: (correct: boolean) => void;
}

function Probe({
  question: currentQuestion,
  streak = 0,
  onAnswer,
  onSessionUpdate = () => {},
}: ProbeProps) {
  const interaction = useQuizQuestionInteraction({
    question: currentQuestion,
    streak,
    onAnswer,
    onEliminate: () => [1],
    onNext: () => {},
    onSkip: () => {},
    onSessionUpdate,
  });

  return (
    <div>
      <span data-testid="answer-state">
        {interaction.answerState}
      </span>
      <span data-testid="selected">
        {String(interaction.selectedOption)}
      </span>
      <span data-testid="correct-index">
        {String(interaction.checkResult?.correctIndex ?? 'none')}
      </span>
      <span data-testid="points">
        {String(interaction.pointsAwarded)}
      </span>
      <button
        data-testid="select"
        onClick={() => void interaction.handleSelect(0)}
      >
        select
      </button>
      <button
        data-testid="hint"
        onClick={interaction.handleShowHint}
      >
        hint
      </button>
      <button
        data-testid="eliminate"
        onClick={interaction.handleEliminate}
      >
        eliminate
      </button>
      <button
        data-testid="select-eliminated"
        onClick={() => void interaction.handleSelect(1)}
      >
        select eliminated
      </button>
    </div>
  );
}

let root: Root | null = null;
let container: HTMLDivElement | null = null;

async function renderProbe(props: ProbeProps) {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);

  await act(async () => {
    root!.render(<Probe {...props} />);
    await Promise.resolve();
  });

  return container;
}

function read(testId: string): string | null {
  return container?.querySelector(
    `[data-testid="${testId}"]`,
  )?.textContent ?? null;
}

async function click(testId: string) {
  await act(async () => {
    (
      container?.querySelector(
        `[data-testid="${testId}"]`,
      ) as HTMLButtonElement | null
    )?.click();
    await Promise.resolve();
    await Promise.resolve();
  });
}

afterEach(async () => {
  if (root) {
    await act(async () => {
      root?.unmount();
    });
  }
  container?.remove();
  root = null;
  container = null;
});

describe('useQuizQuestionInteraction', () => {
  it('maps visible answers to canonical indices and back for review', async () => {
    const onAnswer = vi.fn(async () => result());
    const onSessionUpdate = vi.fn();

    await renderProbe({
      question: question(1),
      streak: 2,
      onAnswer,
      onSessionUpdate,
    });

    await click('select');

    expect(onAnswer).toHaveBeenCalledWith(2, {
      hintUsed: false,
      eliminateUsed: false,
    });
    expect(onSessionUpdate).toHaveBeenCalledWith(true);
    expect(read('answer-state')).toBe('correct');
    expect(read('selected')).toBe('0');
    expect(read('correct-index')).toBe('0');
    expect(read('points')).toBe(
      String(calculatePoints('hard', 3)),
    );
  });

  it('passes hint and elimination usage into answer evidence', async () => {
    const onAnswer = vi.fn(async () => result());

    await renderProbe({
      question: question(1),
      onAnswer,
    });

    await click('hint');
    await click('eliminate');
    await click('select');

    expect(onAnswer).toHaveBeenCalledWith(2, {
      hintUsed: true,
      eliminateUsed: true,
    });
  });

  it('does not submit an option removed by elimination', async () => {
    const onAnswer = vi.fn(async () => result());

    await renderProbe({
      question: question(1),
      onAnswer,
    });

    await click('eliminate');
    await click('select-eliminated');

    expect(onAnswer).not.toHaveBeenCalled();
    expect(read('answer-state')).toBe('pending');
  });

  it('ignores an answer response from a question that is no longer active', async () => {
    let resolveAnswer!: (value: CheckResult | null) => void;
    const answerPromise = new Promise<CheckResult | null>((resolve) => {
      resolveAnswer = resolve;
    });
    const onAnswer = vi.fn(() => answerPromise);
    const onSessionUpdate = vi.fn();

    await renderProbe({
      question: question(1),
      onAnswer,
      onSessionUpdate,
    });

    await act(async () => {
      (
        container?.querySelector(
          '[data-testid="select"]',
        ) as HTMLButtonElement
      ).click();
      await Promise.resolve();
    });

    expect(read('answer-state')).toBe('checking');

    await act(async () => {
      root!.render(
        <Probe
          question={question(2)}
          onAnswer={onAnswer}
          onSessionUpdate={onSessionUpdate}
        />,
      );
      await Promise.resolve();
    });

    expect(read('answer-state')).toBe('pending');

    await act(async () => {
      resolveAnswer(result());
      await answerPromise;
      await Promise.resolve();
    });

    expect(read('answer-state')).toBe('pending');
    expect(onSessionUpdate).not.toHaveBeenCalled();
  });
});
