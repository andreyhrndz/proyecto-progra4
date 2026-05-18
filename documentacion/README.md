# Documentación del Proyecto: Plantilla Arquitectónica FSD

Este documento detalla la evolución del proyecto a través de sus etapas de desarrollo, siguiendo la arquitectura **Feature-Sliced Design (FSD)** con un stack moderno basado en **React + TypeScript + Vite**.

## Resumen del Proyecto
- **Objetivo:** Crear una base profesional, escalable y tipada para aplicaciones frontend.
- **Stack:** MUI, TanStack (Router, Query, Table), Zustand, Axios, Zod.
- **Arquitectura:** Feature-Sliced Design (Híbrida).

---

## 🟢 Etapa 1: Diagnóstico y Validación del Stack
**Objetivo:** Verificar la integridad del proyecto y asegurar que las dependencias instaladas coincidan con el stack profesional solicitado.

- **Acciones realizadas:**
  - Análisis de `package.json`.
  - Desinstalación de **Tailwind CSS** y sus plugins para evitar redundancias con **Material UI**.
  - Identificación de dependencias faltantes (`@tanstack/react-table`, `@mui/icons-material`).
  - Ejecución de build inicial para confirmar estabilidad.
- **Resultado:** Proyecto limpio de librerías innecesarias y alineado al stack oficial.

---

## 🟢 Etapa 2: Estructura Base FSD y Alias
**Objetivo:** Implementar la jerarquía de carpetas FSD y configurar el entorno de desarrollo para importaciones limpias.

- **Acciones realizadas:**
  - Creación de las 6 capas: `app`, `pages`, `widgets`, `features`, `entities` y `shared`.
  - Configuración de **alias de ruta (`@/`)** en Vite y TypeScript.
  - Creación de archivos `index.ts` (Public APIs) para cada slice.
  - Corrección de la depreciación de `baseUrl` en `tsconfig.app.json`.
- **Resultado:** Estructura de carpetas estandarizada y resolución de rutas configurada.

---

## 🟢 Etapa 3: Configuración de la Capa App
**Objetivo:** Orquestar la inicialización global de la aplicación.

- **Acciones realizadas:**
  - **MUI Theme:** Configuración de colores, tipografía (Roboto) y formas.
  - **Providers:** Implementación de `AppProviders` unificando `ThemeProvider`, `CssBaseline` y `QueryProvider`.
  - **TanStack Router:** Configuración del árbol de rutas (`routeTree`) y registro de tipos para navegación segura.
  - **Entry Points:** Migración de la lógica de montaje a `src/app/main.tsx` y redirección desde `src/main.tsx`.
- **Resultado:** Corazón técnico de la aplicación configurado y listo para renderizar rutas.

---

## 🟢 Etapa 4: Capa Shared (Infraestructura Reutilizable)
**Objetivo:** Construir los cimientos técnicos agnósticos al negocio.

- **Acciones realizadas:**
  - **UI Atómica:** Creación de wrappers tipados para componentes de MUI (`AppButton`, `AppTextField`, `AppCard`).
  - **Data Table:** Implementación de una tabla genérica (`AppDataTable`) usando **TanStack Table** y MUI.
  - **API:** Cliente `httpClient` basado en **Axios** con configuración de entorno.
  - **Utils & Hooks:** Utilidades de formato (`formatDate`, `createInitials`) y hooks de UI (`useToggle`).
  - **Tipos Globales:** Definición de contratos de API (`ApiResponse`, `PaginatedResponse`).
- **Resultado:** Biblioteca interna de utilidades y componentes genéricos de alta calidad.

---

## 🟢 Etapa 5: Capa Entities (Dominio User)
**Objetivo:** Implementar el primer concepto del dominio del negocio como ejemplo arquitectónico.

- **Acciones realizadas:**
  - **Modelado:** Definición de tipos de negocio (`User`, `UserRole`, `UserStatus`).
  - **API Local:** Definición de `UserDto` y funciones de servicio (`getUsers`, `getUserById`).
  - **Mapper:** Creación de `mapUserDto` para proteger la aplicación de cambios en el contrato del backend.
  - **UI de Entidad:** Componentes `UserAvatar` y `UserCard` que consumen el modelo de dominio.
- **Resultado:** Entidad `user` completamente funcional, tipada y aislada, sirviendo como patrón para futuras entidades.

---

## Próximos Pasos (Etapa 6)
- Implementación de la capa **Features** para manejar la lógica de interacción (autenticación, búsqueda, etc.).
- Consumo de los componentes de `entities` y `shared` dentro de unidades funcionales.
