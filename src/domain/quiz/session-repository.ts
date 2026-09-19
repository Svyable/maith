import type { SessionSubmitParams } from './types';

export interface QuizSessionRepository {
  submit(
    userId: string,
    sessionTag: string,
    params: SessionSubmitParams,
  ): Promise<void>;
}
