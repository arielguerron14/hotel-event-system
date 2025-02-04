# Infraestructura del Proyecto Hotel Event System

Esta carpeta contiene los recursos para desplegar la infraestructura en AWS.

## Contenido

- **ecs-config/**: Configuración del clúster ECS y definiciones de tareas.
- **rds/**: Configuración de la instancia RDS y su grupo de seguridad.
- **vpc/**: Configuración de la red VPC, subnets y grupos de seguridad.

## Uso

1. Implementar los recursos en AWS utilizando AWS CLI o AWS CloudFormation:
   ```bash
   aws cloudformation create-stack --stack-name hotel-event-infra --template-body file://<path_to_file>
