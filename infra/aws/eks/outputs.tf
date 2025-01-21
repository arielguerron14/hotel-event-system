output "eks_cluster_name" {
  description = "Nombre del clúster EKS"
  value       = module.eks.cluster_name
}

output "eks_cluster_endpoint" {
  description = "Endpoint de la API del clúster EKS"
  value       = module.eks.cluster_endpoint
}

output "eks_cluster_security_group_id" {
  description = "ID del grupo de seguridad del clúster EKS"
  value       = module.eks.cluster_security_group_id
}

output "node_group_arns" {
  description = "Lista de ARNs de los grupos de nodos"
  value       = module.eks.node_group_arns
}

output "node_group_role_arns" {
  description = "Lista de ARNs de roles para los grupos de nodos"
  value       = module.eks.node_group_role_arns
}
