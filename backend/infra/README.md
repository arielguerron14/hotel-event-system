📌 8️⃣ Pasos para Desplegar en AWS
📌 1. Crear Infraestructura Manualmente

VPC y Subredes en AWS Networking
RDS MySQL/PostgreSQL en AWS RDS
S3 Bucket en AWS S3
ECS Cluster en AWS ECS
📌 2. Crear Repositorio en ECR

sh
Copiar
Editar
aws ecr create-repository --repository-name hotel-event-backend
📌 3. Construir y Subir Imagen

sh
Copiar
Editar
docker build -t hotel-event-backend .
docker tag hotel-event-backend:latest <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/hotel-event-backend:latest
docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/hotel-event-backend:latest
📌 4. Crear Servicio en ECS

sh
Copiar
Editar
aws ecs create-service \
  --cluster hotel-event-cluster \
  --service-name hotel-event-service \
  --task-definition hotel-event-backend \
  --launch-type FARGATE
📌 5. Configurar CloudWatch

Crear alertas para errores, CPU y latencia.
📌 6. Configurar Load Balancer (ALB)

Redirigir tráfico al servicio ECS.
