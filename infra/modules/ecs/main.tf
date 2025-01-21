resource "aws_ecs_cluster" "main" {
  name = var.cluster_name
}

resource "aws_ecs_service" "main" {
  name            = "${var.cluster_name}-service"
  cluster         = aws_ecs_cluster.main.id
  desired_count   = var.desired_count
  launch_type     = "FARGATE"
}