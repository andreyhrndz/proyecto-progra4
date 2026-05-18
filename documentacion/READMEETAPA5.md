# Etapa 5: Capa Entities (Dominio User)

## Objetivo
Implementar el modelado del dominio `user` para demostrar la separación entre el modelo de negocio y los datos externos de la API.

## Tareas Realizadas
1. **Modelado de Dominio:** Creación de tipos estrictos para `User`, `UserRole` y `UserStatus`.
2. **Contratos de API:** Definición de `UserDto` (formato snake_case del servidor) y servicios asíncronos en `user.api.ts`.
3. **Mapper de Datos:** Implementación de `mapUserDto.ts` para transformar los datos externos al modelo interno de la aplicación.
4. **Componentes de Dominio:**
   - `UserAvatar.tsx`: Visualización de perfil con lógica de iniciales/imagen.
   - `UserCard.tsx`: Tarjeta de información de usuario basada en el modelo de dominio.
5. **API Pública:** Exportación centralizada desde `index.ts` siguiendo las reglas de FSD.

## Resultado
Una entidad de dominio aislada, protegida por mappers y con componentes visuales listos para ser usados en capas superiores.
