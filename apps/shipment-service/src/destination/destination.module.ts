import { Module } from "@nestjs/common";
import { DestinationModuleBase } from "./base/destination.module.base";
import { DestinationService } from "./destination.service";
import { DestinationController } from "./destination.controller";
import { DestinationResolver } from "./destination.resolver";

@Module({
  imports: [DestinationModuleBase],
  controllers: [DestinationController],
  providers: [DestinationService, DestinationResolver],
  exports: [DestinationService],
})
export class DestinationModule {}
