resource "random_password" "shipment-service_secret_password" {
  length  = 20
  special = false
}

resource "aws_secretsmanager_secret" "secrets_shipment-service" {
  name = "shipment-service_secrets"
}

resource "aws_secretsmanager_secret_version" "secrets_version_shipment-service" {
  secret_id     = aws_secretsmanager_secret.secrets_shipment-service.id
  secret_string = jsonencode({
    BCRYPT_SALT       = "10"
    JWT_EXPIRATION    = "2d"
    JWT_SECRET_KEY    = random_password.shipment-service_secret_password.result
    DB_URL     = "postgres://${module.rds_shipment-service.db_instance_username}:${random_password.shipment-service_database_password.result}@${module.rds_shipment-service.db_instance_address}:5432/${module.rds_shipment-service.db_instance_name}"
  })
}
