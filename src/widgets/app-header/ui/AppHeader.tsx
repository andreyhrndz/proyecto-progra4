import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { UserSearchBox } from '@/features/user-search';
import { ThemeModeToggle } from '@/features/theme-mode';

export const AppHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          App Template
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <UserSearchBox />
          <ThemeModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
