import { httpClient } from '@/shared/api/httpClient';
import type { LoginFormValues } from '../model/auth.schema';

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};

export const loginByEmail = async (credentials: LoginFormValues): Promise<AuthResponse> => {
  const response = await httpClient.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};
