# Etapa 2: Estructura Base FSD y Configuración de Alias

## Objetivo
Implementar la estructura de carpetas de Feature-Sliced Design (FSD) y configurar los alias de ruta para permitir importaciones limpias y escalables.

## Tareas Realizadas
1. **Creación de Capas:** Se generaron los directorios para `app`, `pages`, `widgets`, `features`, `entities` y `shared`.
2. **Configuración de Alias `@/`:**
   - Modificación de `vite.config.ts` para resolver el alias `@`.
   - Actualización de `tsconfig.app.json` para que TypeScript reconozca los paths.
3. **APIs Públicas:** Se crearon archivos `index.ts` en cada slice para controlar qué se expone hacia otras capas.
4. **Corrección TSConfig:** Se añadió `"ignoreDeprecations": "6.0"` para silenciar el aviso de obsolescencia de `baseUrl` en versiones nuevas de TS.

## Estructura Generada
- `src/app/`
- `src/pages/`
- `src/widgets/`
- `src/features/`
- `src/entities/`
- `src/shared/`

## Resultado
Una estructura de proyecto estandarizada que cumple con las reglas de importación de FSD.
