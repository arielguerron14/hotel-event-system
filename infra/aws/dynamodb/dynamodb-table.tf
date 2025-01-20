resource "aws_dynamodb_table" "events" {
  name           = "event-data"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "event_id"
  range_key      = "timestamp"

  attribute {
    name = "event_id"
    type = "S"
  }

  attribute {
    name = "timestamp"
    type = "N"
  }

  tags = {
    Environment = "production"
    Project     = "hotel-event-system"
  }
}