# Grupo de seguridad para EKS
resource "aws_security_group" "eks_security_group" {
  name        = "eks-cluster-sg"
  description = "Grupo de seguridad para el clúster EKS"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 1025
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "eks-security-group"
    Environment = "production"
  }
}

# Grupo de seguridad para RDS
resource "aws_security_group" "rds_security_group" {
  name        = "rds-sg"
  description = "Grupo de seguridad para la base de datos RDS"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"] # Limita acceso a recursos internos de la VPC
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "rds-security-group"
    Environment = "production"
  }
}

# Grupo de seguridad para DynamoDB (para referencia)
# DynamoDB no necesita un grupo de seguridad específico porque es un servicio gestionado
