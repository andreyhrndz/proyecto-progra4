import { Typography } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';

export const DashboardPage = () => {
  return (
    <MainLayout>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">Welcome to the application.</Typography>
    </MainLayout>
  );
};
