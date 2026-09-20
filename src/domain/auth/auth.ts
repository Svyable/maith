export interface AuthUser {
  id: string;
  email: string | null;
  metadata: Record<string, unknown>;
}

export interface AuthError {
  message: string;
}

export interface AuthSignUpRequest {
  email: string;
  password: string;
  displayName?: string;
  redirectUrl?: string;
}

export interface AuthSignInRequest {
  email: string;
  password: string;
}

export interface AuthActionResult {
  error: AuthError | null;
}
