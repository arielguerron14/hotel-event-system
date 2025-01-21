output "rds_instance_endpoint" {
  description = "Endpoint de la base de datos RDS"
  value       = aws_db_instance.mysql.endpoint
}

output "rds_instance_id" {
  description = "ID de la instancia RDS"
  value       = aws_db_instance.mysql.id
}

output "rds_security_group_id" {
  description = "ID del grupo de seguridad de RDS"
  value       = aws_security_group.rds_sg.id
}
