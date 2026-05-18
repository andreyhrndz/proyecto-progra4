import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, type AuthSchema } from './auth.schema';

export const useLoginForm = () => {
  return useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });
};
