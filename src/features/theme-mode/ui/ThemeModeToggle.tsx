import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeModeStore } from '../model/useThemeModeStore';

export const ThemeModeToggle = () => {
  const { mode, toggleMode } = useThemeModeStore();
  return (
    <IconButton onClick={toggleMode}>
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
