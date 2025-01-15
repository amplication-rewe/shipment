import * as graphql from "@nestjs/graphql";
import { PackageModelResolverBase } from "./base/packageModel.resolver.base";
import { PackageModel } from "./base/PackageModel";
import { PackageModelService } from "./packageModel.service";

@graphql.Resolver(() => PackageModel)
export class PackageModelResolver extends PackageModelResolverBase {
  constructor(protected readonly service: PackageModelService) {
    super(service);
  }
}
