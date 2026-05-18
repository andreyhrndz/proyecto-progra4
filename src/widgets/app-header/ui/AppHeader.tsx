import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { ThemeModeToggle } from '@/features/theme-mode';
import type { AppHeaderProps } from '../model/appHeader.types';

export const AppHeader = ({ title, userName }: AppHeaderProps) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {userName && (
            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Hola, {userName}
            </Typography>
          )}
          <ThemeModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
