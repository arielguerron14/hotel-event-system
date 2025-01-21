variable "aws_region" {
  description = "AWS Region"
  default     = "us-east-1"
}

variable "cidr_block" {
  description = "VPC CIDR Block"
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "Public Subnets"
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  description = "Private Subnets"
  default     = ["10.0.3.0/24", "10.0.4.0/24"]
}

variable "cluster_name" {
  description = "ECS Cluster Name"
  default     = "hotel-event-cluster"
}

variable "desired_count" {
  description = "Number of ECS tasks"
  default     = 2
}

variable "db_name" {
  description = "Database name"
  default     = "hotel_event_db"
}

variable "db_username" {
  description = "Database username"
  default     = "admin"
}

variable "db_password" {
  description = "Database password"
}