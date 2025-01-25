# Hotel Event Management System

Este proyecto es un sistema de gestión de eventos para una cadena de hoteles. Está diseñado como un conjunto de 20 microservicios desplegados en AWS ECS utilizando Docker.

## Estructura del Proyecto

- **services/**: Código de los microservicios.
- **docker/**: Configuración de Docker Compose para desarrollo y producción.
- **infra/**: Configuración de infraestructura en AWS.
- **shared-libraries/**: Librerías y utilidades compartidas entre los microservicios.
- **docs/**: Documentación adicional, como referencias de la API.

## Configuración

### Variables de Entorno

Asegúrate de configurar los archivos de entorno en `env/dev.env` y `env/prod.env`.

### Instrucciones

1. Clona este repositorio.
2. Configura las variables de entorno necesarias.
3. Usa `docker-compose` para ejecutar los microservicios:
   - Desarrollo:
     ```bash
     docker-compose -f docker/docker-compose.dev.yml up
     ```
   - Producción:
     ```bash
     docker-compose -f docker/docker-compose.prod.yml up
     ```

## Despliegue

El proyecto está configurado para ser desplegado en AWS ECS utilizando GitHub Actions.
