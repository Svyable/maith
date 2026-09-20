import type {
  AuthActionResult,
  AuthSignInRequest,
  AuthSignUpRequest,
  AuthUser,
} from '@/domain/auth/auth';
import type { AuthRepository } from '@/domain/auth/repository';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';

function toAuthUser(user: User | null | undefined): AuthUser | null {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email ?? null,
    metadata: (user.user_metadata ?? {}) as Record<string, unknown>,
  };
}

function toResult(error: { message: string } | null): AuthActionResult {
  return {
    error: error ? { message: error.message } : null,
  };
}

export const supabaseAuthRepository: AuthRepository = {
  async getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw new Error(error.message);
    return toAuthUser(data.session?.user);
  },

  subscribe(listener) {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        listener(toAuthUser(session?.user));
      },
    );

    return () => subscription.unsubscribe();
  },

  async signUp(request: AuthSignUpRequest) {
    const { error } = await supabase.auth.signUp({
      email: request.email,
      password: request.password,
      options: {
        emailRedirectTo: request.redirectUrl,
        data: {
          display_name:
            request.displayName || request.email.split('@')[0],
        },
      },
    });

    return toResult(error);
  },

  async signIn(request: AuthSignInRequest) {
    const { error } = await supabase.auth.signInWithPassword({
      email: request.email,
      password: request.password,
    });

    return toResult(error);
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  },
};
