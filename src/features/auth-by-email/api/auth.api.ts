import { httpClient } from '@/shared/api/httpClient';
import type { AuthSchema } from '../model/auth.schema';

export const login = async (credentials: AuthSchema) => {
  const response = await httpClient.post('/auth/login', credentials);
  return response.data;
};
