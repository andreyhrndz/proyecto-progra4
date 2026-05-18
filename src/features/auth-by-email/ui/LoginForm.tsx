import { Box } from '@mui/material';
import { AppButton, AppTextField } from '@/shared/ui';

export const LoginForm = () => {
  return (
    <Box component="form">
      <AppTextField label="Email" fullWidth margin="normal" />
      <AppTextField label="Password" type="password" fullWidth margin="normal" />
      <AppButton variant="contained" fullWidth>Login</AppButton>
    </Box>
  );
};
