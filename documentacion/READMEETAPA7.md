# Etapa 7: Capa Widgets (Composición Estructural)

## Objetivo
Desarrollar componentes de alto nivel (widgets) y layouts que organicen la interfaz de la aplicación, integrando "features" y "entities" en bloques funcionales complejos.

## Tareas Realizadas
1. **Layout Principal (main-layout):**
   - Implementación de `MainLayout` como contenedor global.
   - Orquestación de `AppHeader` y `AppSidebar`.
   - Gestión de áreas de contenido con `Container` de Material UI.
2. **Encabezado de Aplicación (app-header):**
   - Uso de `AppBar` de MUI.
   - Integración de la feature `theme-mode`.
   - Soporte para mostrar información de usuario y título dinámico.
3. **Barra Lateral (app-sidebar):**
   - Implementación de `Drawer` persistente.
   - Navegación declarativa basada en una lista tipada de `SidebarItem`.
4. **Tabla de Usuarios (user-table):**
   - Configuración de columnas tipadas mediante `createColumnHelper` de **TanStack Table**.
   - Integración de la entidad `User` en una vista tabular.
   - Consumo del componente genérico `AppDataTable` de la capa `shared`.

## Decisiones Técnicas
- **Z-Index Management:** Se configuró el `AppBar` para estar por encima del `Drawer` siguiendo las guías de diseño de Material UI.
- **Tipado de Tablas:** Se ajustó el genérico de `ColumnDef` para permitir flexibilidad en los tipos de datos de las celdas (strings, enums, componentes) manteniendo el contrato del modelo original.
- **Composición:** El layout es agnóstico al contenido, permitiendo inyectar cualquier página mediante el prop `children`.

## Resultado
Un esqueleto visual profesional y funcional, con una tabla de dominio robusta y layouts preparados para ensamblar las páginas finales del proyecto.
