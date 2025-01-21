resource "aws_db_instance" "main" {
  identifier          = var.db_name
  engine              = "postgres"
  instance_class      = "db.t3.micro"
  allocated_storage   = 20
  name                = var.db_name
  username            = var.db_username
  password            = var.db_password
  skip_final_snapshot = true
  publicly_accessible = false
}