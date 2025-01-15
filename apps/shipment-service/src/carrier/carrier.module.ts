import { Module } from "@nestjs/common";
import { CarrierModuleBase } from "./base/carrier.module.base";
import { CarrierService } from "./carrier.service";
import { CarrierController } from "./carrier.controller";
import { CarrierResolver } from "./carrier.resolver";

@Module({
  imports: [CarrierModuleBase],
  controllers: [CarrierController],
  providers: [CarrierService, CarrierResolver],
  exports: [CarrierService],
})
export class CarrierModule {}
