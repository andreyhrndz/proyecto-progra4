import { Typography } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';
import { UserCard } from '@/entities/user';

export const UsersPage = () => {
  return (
    <MainLayout>
      <Typography variant="h4" gutterBottom>Users</Typography>
      <UserCard user={{ id: '1', fullName: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' }} />
    </MainLayout>
  );
};
