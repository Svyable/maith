import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type {
  AuthActionResult,
  AuthUser,
} from '@/domain/auth/auth';
import type { AuthRepository } from '@/domain/auth/repository';
import { supabaseAuthRepository } from '@/integrations/supabase/auth-repository';

export interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signUp(
    email: string,
    password: string,
    displayName?: string,
  ): Promise<AuthActionResult>;
  signIn(email: string, password: string): Promise<AuthActionResult>;
  signOut(): Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
  repository?: AuthRepository;
}

export function AuthProvider({
  children,
  repository = supabaseAuthRepository,
}: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let authEventVersion = 0;

    const unsubscribe = repository.subscribe((nextUser) => {
      authEventVersion += 1;
      if (!active) return;
      setUser(nextUser);
      setLoading(false);
    });

    const initialVersion = authEventVersion;

    void repository.getCurrentUser()
      .then((currentUser) => {
        if (!active || authEventVersion !== initialVersion) return;
        setUser(currentUser);
      })
      .catch(() => {
        if (!active || authEventVersion !== initialVersion) return;
        setUser(null);
      })
      .finally(() => {
        if (
          active
          && authEventVersion === initialVersion
        ) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
      unsubscribe();
    };
  }, [repository]);

  const signUp = useCallback(
    (
      email: string,
      password: string,
      displayName?: string,
    ) => repository.signUp({
      email,
      password,
      displayName,
      redirectUrl:
        typeof window === 'undefined'
          ? undefined
          : window.location.origin,
    }),
    [repository],
  );

  const signIn = useCallback(
    (email: string, password: string) => repository.signIn({
      email,
      password,
    }),
    [repository],
  );

  const signOut = useCallback(async () => {
    await repository.signOut();
    setUser(null);
  }, [repository]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      signUp,
      signIn,
      signOut,
    }),
    [loading, signIn, signOut, signUp, user],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
