import type { UserDto } from '../api/user.dto';
import type { User } from '../model/user.types';

export const mapUserDto = (dto: UserDto): User => ({
  id: dto.id,
  name: dto.full_name,
  email: dto.email_address,
  role: dto.user_role,
});
