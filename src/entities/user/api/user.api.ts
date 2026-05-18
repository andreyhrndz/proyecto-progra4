import { httpClient } from '@/shared/api/httpClient';
import type { UserDto } from './user.dto';
import { mapUserDto } from '../lib/mapUserDto';

export const getUsers = async () => {
  const response = await httpClient.get<UserDto[]>('/users');
  return response.data.map(mapUserDto);
};
