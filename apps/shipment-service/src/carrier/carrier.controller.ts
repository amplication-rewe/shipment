import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarrierService } from "./carrier.service";
import { CarrierControllerBase } from "./base/carrier.controller.base";

@swagger.ApiTags("carriers")
@common.Controller("carriers")
export class CarrierController extends CarrierControllerBase {
  constructor(protected readonly service: CarrierService) {
    super(service);
  }
}
