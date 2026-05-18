# Etapa 3: Configuración de la Capa App

## Objetivo
Configurar el punto de entrada global de la aplicación, unificando los proveedores de contexto, el tema visual y el sistema de enrutamiento.

## Tareas Realizadas
1. **Material UI Theme:** Creación de `muiTheme.ts` con personalización de paleta, tipografía y bordes.
2. **Proveedores Globales:**
   - `QueryProvider.tsx`: Configuración de TanStack Query con políticas de caché base.
   - `AppProviders.tsx`: Orquestador que incluye `ThemeProvider`, `CssBaseline` y `QueryProvider`.
3. **Enrutamiento Tipado:** Implementación de `router.tsx` con TanStack Router, registrando las rutas `/`, `/login`, `/dashboard` y `/users`.
4. **Refactorización de Entrada:**
   - `src/app/App.tsx`: Ahora solo se encarga de renderizar el `RouterProvider`.
   - `src/app/main.tsx`: Nuevo punto de montaje React que inyecta los `AppProviders`.
   - `src/main.tsx`: Convertido en un puente hacia la capa `app`.

## Resultado
Un sistema de inicialización robusto donde la infraestructura global está centralizada y tipada.
