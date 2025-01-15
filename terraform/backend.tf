terraform {
  backend "s3" {
    bucket = "terraform-state-demonstration"
    key    = "development/shipment-service"
    region = "us-east-1"
  }
}