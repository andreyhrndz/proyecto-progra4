export type UserDto = {
  id: string;
  full_name: string;
  email_address: string;
  user_role: 'admin' | 'user';
};
