import { createRoute, createRootRoute, createRouter } from '@tanstack/react-router';
import { LoginPage } from '@/pages/login';
import { DashboardPage } from '@/pages/dashboard';
import { UsersPage } from '@/pages/users';

// Root Route
const rootRoute = createRootRoute();

// Route Definitions
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UsersPage,
});

// Route Tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  loginRoute,
  usersRoute,
]);

// Router Instance
export const router = createRouter({ routeTree });

// Type Registration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
