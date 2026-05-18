import { ThemeProvider } from '@mui/material/styles';
import { QueryProvider } from './QueryProvider';
import { muiTheme } from '../theme/muiTheme';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider theme={muiTheme}>
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
};
