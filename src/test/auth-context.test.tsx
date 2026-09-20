import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AuthProvider } from '@/contexts/AuthContext';
import { useAuth } from '@/hooks/useAuth';
import type { AuthUser } from '@/domain/auth/auth';
import type { AuthRepository } from '@/domain/auth/repository';

function makeRepository(
  overrides: Partial<AuthRepository> = {},
): AuthRepository {
  return {
    getCurrentUser: vi.fn(async () => null),
    subscribe: vi.fn(() => () => {}),
    signUp: vi.fn(async () => ({ error: null })),
    signIn: vi.fn(async () => ({ error: null })),
    signOut: vi.fn(async () => {}),
    ...overrides,
  };
}

function Probe({ testId }: { testId: string }) {
  const { user, loading } = useAuth();

  return (
    <div data-testid={testId}>
      {loading ? 'loading' : user?.id ?? 'anonymous'}
    </div>
  );
}

let root: Root | null = null;
let container: HTMLDivElement | null = null;

async function renderAuth(
  repository: AuthRepository,
  children: React.ReactNode,
) {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);

  await act(async () => {
    root!.render(
      <AuthProvider repository={repository}>
        {children}
      </AuthProvider>,
    );
    await Promise.resolve();
    await Promise.resolve();
  });

  return container;
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

describe('AuthProvider', () => {
  it('shares one repository subscription across multiple auth consumers', async () => {
    const user: AuthUser = {
      id: 'user-1',
      email: 'ada@example.test',
      metadata: { display_name: 'Ada' },
    };
    const repository = makeRepository({
      getCurrentUser: vi.fn(async () => user),
    });

    const view = await renderAuth(
      repository,
      <>
        <Probe testId="first" />
        <Probe testId="second" />
      </>,
    );

    expect(view.querySelector('[data-testid="first"]')?.textContent).toBe('user-1');
    expect(view.querySelector('[data-testid="second"]')?.textContent).toBe('user-1');
    expect(repository.subscribe).toHaveBeenCalledTimes(1);
    expect(repository.getCurrentUser).toHaveBeenCalledTimes(1);
  });

  it('does not let a stale initial lookup overwrite a newer auth event', async () => {
    const initialUser: AuthUser = {
      id: 'initial-user',
      email: 'initial@example.test',
      metadata: {},
    };
    const eventUser: AuthUser = {
      id: 'event-user',
      email: 'event@example.test',
      metadata: {},
    };

    let resolveInitial!: (user: AuthUser | null) => void;
    const initialPromise = new Promise<AuthUser | null>((resolve) => {
      resolveInitial = resolve;
    });

    let listener: ((user: AuthUser | null) => void) | null = null;
    const repository = makeRepository({
      getCurrentUser: vi.fn(() => initialPromise),
      subscribe: vi.fn((next) => {
        listener = next;
        return () => {};
      }),
    });

    const view = await renderAuth(
      repository,
      <Probe testId="auth-state" />,
    );

    await act(async () => {
      listener?.(eventUser);
    });

    expect(
      view.querySelector('[data-testid="auth-state"]')?.textContent,
    ).toBe('event-user');

    await act(async () => {
      resolveInitial(initialUser);
      await initialPromise;
      await Promise.resolve();
    });

    expect(
      view.querySelector('[data-testid="auth-state"]')?.textContent,
    ).toBe('event-user');
  });
});
