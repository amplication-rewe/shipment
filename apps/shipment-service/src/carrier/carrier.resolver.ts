import * as graphql from "@nestjs/graphql";
import { CarrierResolverBase } from "./base/carrier.resolver.base";
import { Carrier } from "./base/Carrier";
import { CarrierService } from "./carrier.service";

@graphql.Resolver(() => Carrier)
export class CarrierResolver extends CarrierResolverBase {
  constructor(protected readonly service: CarrierService) {
    super(service);
  }
}
