output "vpc_id" {
  value = module.network.vpc_id
}

output "ecs_cluster_arn" {
  value = module.ecs.cluster_arn
}

output "rds_endpoint" {
  value = module.rds.endpoint
}