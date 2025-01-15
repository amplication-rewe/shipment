import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DestinationService } from "./destination.service";
import { DestinationControllerBase } from "./base/destination.controller.base";

@swagger.ApiTags("destinations")
@common.Controller("destinations")
export class DestinationController extends DestinationControllerBase {
  constructor(protected readonly service: DestinationService) {
    super(service);
  }
}
