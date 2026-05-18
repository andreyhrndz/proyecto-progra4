import { Box, Typography, Grid, Paper } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';

export const DashboardPage = () => {
  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Vista general del sistema y estadísticas principales.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {[1, 2, 3].map((item) => (
          <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Métrica {item}
              </Typography>
              <Typography variant="h4" color="primary">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dato representativo ficticio
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};
