import { Avatar } from '@mui/material';
import type { User } from '../model/user.types';
import { createInitials } from '@/shared/lib/createInitials';

type UserAvatarProps = {
  user: User;
};

export const UserAvatar = ({ user }: UserAvatarProps) => {
  return <Avatar alt={user.name}>{createInitials(user.name)}</Avatar>;
};
