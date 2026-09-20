import { act, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
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

    render(
      <AuthProvider repository={repository}>
        <Probe testId="first" />
        <Probe testId="second" />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('first')).toHaveTextContent('user-1');
      expect(screen.getByTestId('second')).toHaveTextContent('user-1');
    });

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

    render(
      <AuthProvider repository={repository}>
        <Probe testId="auth-state" />
      </AuthProvider>,
    );

    act(() => {
      listener?.(eventUser);
    });

    await waitFor(() => {
      expect(screen.getByTestId('auth-state')).toHaveTextContent('event-user');
    });

    await act(async () => {
      resolveInitial(initialUser);
      await initialPromise;
    });

    expect(screen.getByTestId('auth-state')).toHaveTextContent('event-user');
  });
});
