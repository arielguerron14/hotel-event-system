module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "hotel-event-cluster"
  cluster_version = "1.27"

  # Subredes privadas donde se desplegarán los nodos del clúster
  subnets         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id

  # Configuración de los grupos de nodos
  node_groups = {
    default = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1
      instance_type    = "t3.medium"
      key_name         = var.key_pair_name
    }
  }

  # Configuración del rol de IAM para el clúster
  cluster_role_arn = aws_iam_role.eks_role.arn
}

# Rol de IAM para EKS
resource "aws_iam_role" "eks_role" {
  name = "eks-cluster-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "eks.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# Políticas asociadas al rol de EKS
resource "aws_iam_role_policy_attachment" "eks_policy" {
  for_each = toset([
    "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
    "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
  ])
  role       = aws_iam_role.eks_role.name
  policy_arn = each.value
}

# Grupo de seguridad para EKS
resource "aws_security_group" "eks_security_group" {
  name        = "eks-cluster-sg"
  description = "Seguridad del clúster EKS"
  vpc_id      = module.vpc.vpc_id

  # Permitir tráfico interno para el clúster
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Políticas para los nodos de EKS
resource "aws_iam_role" "node_group_role" {
  name = "eks-node-group-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "node_group_policies" {
  for_each = toset([
    "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
    "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
    "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  ])
  role       = aws_iam_role.node_group_role.name
  policy_arn = each.value
}
