import { Box, Toolbar, Container } from '@mui/material';
import { AppHeader } from '@/widgets/app-header';
import { AppSidebar } from '@/widgets/app-sidebar';
import type { MainLayoutProps } from '../model/mainLayout.types';

const sidebarItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Usuarios', path: '/users' },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader title="Mi Aplicación" userName="Usuario Demo" />
      <AppSidebar items={sidebarItems} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </Box>
  );
};
