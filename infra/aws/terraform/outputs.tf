output "vpc_id" {
  description = "ID de la VPC creada"
  value       = module.vpc.vpc_id
}

output "public_subnets" {
  description = "Lista de subredes públicas creadas"
  value       = module.vpc.public_subnets
}

output "private_subnets" {
  description = "Lista de subredes privadas creadas"
  value       = module.vpc.private_subnets
}
