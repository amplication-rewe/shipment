module "ecs_service_shipment-service" {
  source  = "terraform-aws-modules/ecs/aws//modules/service"
  version = "5.2.2"

  name        = "shipment-service"
  cluster_arn = module.ecs_cluster_shipment-service.arn

  cpu    = 1024
  memory = 4096

  container_definitions = [
    
    {
      name      = "shipment-service"
      essential = true
      cpu       = 512
      memory    = 1024
      image     = module.ecr_shipment-service.repository_url

      port_mappings = [
        {
          name          = "shipment-service"
          containerPort = 3000
          hostPort      = 3000
          protocol      = "tcp"
        }
      ]

      readonly_root_filesystem  = false
      enable_cloudwatch_logging = false

      log_configuration = {
        logDriver = "awslogs"
        options = {
          awslogs-create-group  = "true"
          awslogs-group         = "/ecs/shipment-service"
          awslogs-region        = local.region
          awslogs-stream-prefix = "ecs"
        }
      }

      memory_reservation = 100
    },
    {
      name      = "shipment-service-migrate"
      essential = false
      cpu       = 512
      memory    = 1024
      image     = module.ecr_shipment-service.repository_url
      command   = ["prisma", "migrate", "deploy"]
      log_configuration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/shipment-service"
          awslogs-region        = local.region
          awslogs-stream-prefix = "ecs"
        }
      }
    }
  ]

  load_balancer = {
    service = {
      target_group_arn = element(module.ecs_alb_shipment-service.target_group_arns, 0)
      container_name   = "shipment-service"
      container_port   = 3000
    }
  }

  subnet_ids = module.vpc.private_subnets

  security_group_rules = {
    alb_ingress = {
      type                     = "ingress"
      from_port                = 3000
      to_port                  = 3000
      protocol                 = "tcp"
      source_security_group_id = module.ecs_alb_sg_shipment-service.security_group_id
    }
    egress_all = {
      type        = "egress"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }
}

resource "aws_service_discovery_http_namespace" "shipment-service" {
  name = "shipment-service"
}

output "service_id_shipment-service" {
  description = "ARN that identifies the service"
  value       = module.ecs_service_shipment-service.id
}

output "service_name_shipment-service" {
  description = "Name of the service"
  value       = module.ecs_service_shipment-service.name
}

output "service_iam_role_name_shipment-service" {
  description = "Service IAM role name"
  value       = module.ecs_service_shipment-service.iam_role_name
}

output "service_iam_role_arn_shipment-service" {
  description = "Service IAM role ARN"
  value       = module.ecs_service_shipment-service.iam_role_arn
}

output "service_iam_role_unique_id_shipment-service" {
  description = "Stable and unique string identifying the service IAM role"
  value       = module.ecs_service_shipment-service.iam_role_unique_id
}

output "service_container_definitions_shipment-service" {
  description = "Container definitions"
  value       = module.ecs_service_shipment-service.container_definitions
}

output "service_task_definition_arn_shipment-service" {
  description = "Full ARN of the Task Definition (including both `family` and `revision`)"
  value       = module.ecs_service_shipment-service.task_definition_arn
}
