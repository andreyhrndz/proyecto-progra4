import { Box } from '@mui/material';
import { AppHeader } from '../../app-header';
import { AppSidebar } from '../../app-sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppHeader />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <AppSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
