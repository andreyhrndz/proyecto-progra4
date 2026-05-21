import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { useLoginForm } from '../model/useLoginForm';
import type { LoginFormValues } from '../model/auth.schema';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login attempt:', data);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit(onSubmit)} 
      noValidate 
      sx={{ width: '100%' }}
    >
      <Stack spacing={3}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Iniciar Sesión
        </Typography>
        
        <TextField
          {...register('email')}
          label="Correo electrónico"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          type="email"
        />

        <TextField
          {...register('password')}
          label="Contraseña"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          type="password"
        />

        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          size="large"
        >
          Acceder
        </Button>
      </Stack>
    </Box>
  );
};
