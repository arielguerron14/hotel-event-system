provider "aws" {
  region = var.aws_region
}

module "network" {
  source      = "./modules/network"
  cidr_block  = var.cidr_block
  public_subnets  = var.public_subnets
  private_subnets = var.private_subnets
}

module "ecs" {
  source              = "./modules/ecs"
  cluster_name        = var.cluster_name
  desired_count       = var.desired_count
  subnets             = module.network.private_subnets_ids
}

module "rds" {
  source      = "./modules/rds"
  db_name     = var.db_name
  db_username = var.db_username
  db_password = var.db_password
  subnets     = module.network.private_subnets_ids
}