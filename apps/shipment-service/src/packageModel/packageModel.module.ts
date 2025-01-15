import { Module } from "@nestjs/common";
import { PackageModelModuleBase } from "./base/packageModel.module.base";
import { PackageModelService } from "./packageModel.service";
import { PackageModelController } from "./packageModel.controller";
import { PackageModelResolver } from "./packageModel.resolver";

@Module({
  imports: [PackageModelModuleBase],
  controllers: [PackageModelController],
  providers: [PackageModelService, PackageModelResolver],
  exports: [PackageModelService],
})
export class PackageModelModule {}
