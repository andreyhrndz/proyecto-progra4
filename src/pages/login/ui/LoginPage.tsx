import { Box, Typography, Container } from '@mui/material';
import { LoginForm } from '@/features/auth-by-email';

export const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};
