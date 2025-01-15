import * as graphql from "@nestjs/graphql";
import { DestinationResolverBase } from "./base/destination.resolver.base";
import { Destination } from "./base/Destination";
import { DestinationService } from "./destination.service";

@graphql.Resolver(() => Destination)
export class DestinationResolver extends DestinationResolverBase {
  constructor(protected readonly service: DestinationService) {
    super(service);
  }
}
