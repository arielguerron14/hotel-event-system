resource "aws_security_group" "rds_security_group" {
  name        = "rds-sg"
  description = "Grupo de seguridad para la base de datos RDS"
  vpc_id      = module.vpc.vpc_id

  # Permitir tráfico entrante solo desde las subredes privadas de la VPC
  ingress {
    description = "Permitir tráfico desde la VPC privada"
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = module.vpc.private_subnets_cidr_blocks
  }

  # Permitir tráfico saliente a cualquier destino
  egress {
    description = "Permitir todo el tráfico de salida"
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
