import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PackageModelService } from "./packageModel.service";
import { PackageModelControllerBase } from "./base/packageModel.controller.base";

@swagger.ApiTags("packageModels")
@common.Controller("packageModels")
export class PackageModelController extends PackageModelControllerBase {
  constructor(protected readonly service: PackageModelService) {
    super(service);
  }
}
