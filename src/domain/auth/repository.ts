import type {
  AuthActionResult,
  AuthSignInRequest,
  AuthSignUpRequest,
  AuthUser,
} from './auth';

export interface AuthRepository {
  getCurrentUser(): Promise<AuthUser | null>;
  subscribe(listener: (user: AuthUser | null) => void): () => void;
  signUp(request: AuthSignUpRequest): Promise<AuthActionResult>;
  signIn(request: AuthSignInRequest): Promise<AuthActionResult>;
  signOut(): Promise<void>;
}
