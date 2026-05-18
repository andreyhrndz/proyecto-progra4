# Etapa 4: Capa Shared (Infraestructura Reutilizable)

## Objetivo
Desarrollar componentes y utilidades genéricas que sirvan de base para todas las capas superiores sin depender de la lógica de negocio.

## Tareas Realizadas
1. **Componentes UI Base:** Wrappers tipados de Material UI (`AppButton`, `AppTextField`, `AppCard`).
2. **Tabla de Datos Genérica:** Implementación de `AppDataTable` utilizando **TanStack Table**, permitiendo renderizar cualquier conjunto de datos de forma tipada.
3. **Cliente HTTP:** Configuración de `httpClient.ts` con Axios, usando la `apiBaseUrl` definida en las variables de entorno.
4. **Utilidades (Lib):**
   - `formatDate.ts`: Formateo de fechas con `Intl.DateTimeFormat`.
   - `createInitials.ts`: Generación de iniciales para avatares.
5. **Hooks & Tipos:**
   - `useToggle.ts`: Hook para manejar estados booleanos con acciones semánticas.
   - `api.types.ts`: Definición de interfaces genéricas para respuestas de API (`ApiResponse`).

## Resultado
Una biblioteca de infraestructura interna altamente reutilizable y agnóstica al negocio.
