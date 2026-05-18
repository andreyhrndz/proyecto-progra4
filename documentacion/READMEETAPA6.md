# Etapa 6: Capa Features (Acciones del Usuario)

## Objetivo
Implementar las funcionalidades interactivas que representan intenciones o capacidades del usuario, integrando validación de formularios, gestión de estado y llamadas asíncronas ficticias.

## Tareas Realizadas
1. **Autenticación (auth-by-email):**
   - **Esquema de Validación:** Uso de **Zod** para definir reglas estrictas en el formulario de login.
   - **Gestión de Formulario:** Integración de **React Hook Form** con el esquema de Zod.
   - **UI:** Componente `LoginForm` con manejo de errores y estados de carga.
   - **API:** Función `loginByEmail` usando el cliente HTTP compartido.
2. **Búsqueda (user-search):**
   - **Lógica de Estado:** Hook `useUserSearch` para controlar el término de búsqueda y su limpieza.
   - **UI:** Input de búsqueda reutilizable (`UserSearchBox`).
3. **Preferencias (theme-mode):**
   - **Estado Global:** Implementación de un store con **Zustand** para manejar el modo de tema (`light`/`dark`).
   - **UI:** Interruptor visual para alternar el modo de la aplicación.
4. **Refactorización de Tipos:** Se corrigieron conflictos de sobrecarga en componentes de MUI (`Stack`, `Typography`) moviendo estilos a la propiedad `sx`.

## Herramientas Utilizadas
- **React Hook Form:** Manejo eficiente de formularios.
- **Zod:** Validación de esquemas y tipado de datos de entrada.
- **Zustand:** Estado global ligero para preferencias del usuario.
- **Material UI:** Componentes visuales interactivos.

## Resultado
Capacidades funcionales aisladas y tipadas, listas para ser ensambladas en widgets y páginas, manteniendo la autonomía de cada slice.
