# Región donde se desplegará la infraestructura
variable "region" {
  description = "Región de AWS donde se desplegará la infraestructura"
  type        = string
  default     = "us-east-1"
}

# Nombre del par de claves para los nodos del EKS
variable "key_pair_name" {
  description = "Nombre del par de claves EC2 para acceder a los nodos del clúster EKS"
  type        = string
}

# CIDR principal de la VPC
variable "vpc_cidr" {
  description = "CIDR de la VPC"
  type        = string
  default     = "10.0.0.0/16"
}

# Subredes públicas
variable "public_subnets" {
  description = "Lista de subredes públicas en la VPC"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

# Subredes privadas
variable "private_subnets" {
  description = "Lista de subredes privadas en la VPC"
  type        = list(string)
  default     = ["10.0.3.0/24", "10.0.4.0/24"]
}

# Configuración del clúster EKS
variable "eks_cluster_name" {
  description = "Nombre del clúster EKS"
  type        = string
  default     = "hotel-event-cluster"
}

variable "eks_version" {
  description = "Versión del clúster EKS"
  type        = string
  default     = "1.27"
}

variable "eks_node_instance_type" {
  description = "Tipo de instancia EC2 para los nodos del clúster EKS"
  type        = string
  default     = "t3.medium"
}

variable "eks_node_desired_capacity" {
  description = "Capacidad deseada para el grupo de nodos"
  type        = number
  default     = 2
}

variable "eks_node_min_capacity" {
  description = "Capacidad mínima para el grupo de nodos"
  type        = number
  default     = 1
}

variable "eks_node_max_capacity" {
  description = "Capacidad máxima para el grupo de nodos"
  type        = number
  default     = 3
}

# Configuración de la base de datos RDS
variable "rds_instance_class" {
  description = "Clase de la instancia RDS"
  type        = string
  default     = "db.t3.micro"
}

variable "rds_engine" {
  description = "Motor de base de datos para RDS"
  type        = string
  default     = "mysql"
}

variable "rds_engine_version" {
  description = "Versión del motor de la base de datos RDS"
  type        = string
  default     = "8.0"
}

variable "rds_allocated_storage" {
  description = "Almacenamiento asignado a la base de datos RDS (en GB)"
  type        = number
  default     = 20
}

variable "rds_username" {
  description = "Nombre de usuario para la base de datos RDS"
  type        = string
  default     = "admin"
}

variable "rds_password" {
  description = "Contraseña para la base de datos RDS"
  type        = string
  sensitive   = true
}

# Etiquetas generales para los recursos
variable "tags" {
  description = "Etiquetas comunes para los recursos"
  type        = map(string)
  default     = {
    Project     = "hotel-event-system"
    Environment = "production"
  }
}
