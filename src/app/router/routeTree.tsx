import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { LoginPage } from '@/pages/login';
import { DashboardPage } from '@/pages/dashboard';
import { UsersPage } from '@/pages/users';

// Root Route: Renderiza un Outlet para las rutas hijas
export const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Route Definitions
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UsersPage,
});

// Exportación del Árbol de Rutas
export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  dashboardRoute,
  usersRoute,
]);
