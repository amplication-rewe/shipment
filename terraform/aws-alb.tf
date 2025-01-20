
module "ecs_alb_sg_shipment-service" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "5.1.0"

  name   = "shipment-service-alb2"
  vpc_id = module.vpc.vpc_id

  ingress_rules       = ["http-80-tcp"]
  ingress_cidr_blocks = ["0.0.0.0/0"]

  egress_rules       = ["all-all"]
  egress_cidr_blocks = module.vpc.private_subnets_cidr_blocks
}

module "ecs_alb_shipment-service" {
  source  = "terraform-aws-modules/alb/aws"
  version = "8.7.0"

  name = "shipment-service"

  load_balancer_type = "application"

  vpc_id          = module.vpc.vpc_id
  subnets         = module.vpc.public_subnets
  security_groups = [module.ecs_alb_sg_shipment-service.security_group_id]

  http_tcp_listeners = [
    {
      port               = 80
      protocol           = "HTTP"
      target_group_index = 0
    },
  ]

  target_groups = [
    {
      name             = "shipment-service"
      backend_protocol = "HTTP"
      backend_port     = 3000
      target_type      = "ip"

      health_check = {
        enabled             = true
        interval            = 30
        path                = "/api/_health/ready"
        port                = "traffic-port"
        healthy_threshold   = 3
        unhealthy_threshold = 3
        timeout             = 6
        protocol            = "HTTP"
        matcher             = "200-299"
      }
    },
  ]
}

output "dns_name_load_balancer" {
  description = "DNS name under which the service is exposed"
  value       = module.ecs_alb_shipment-service.lb_dns_name
}