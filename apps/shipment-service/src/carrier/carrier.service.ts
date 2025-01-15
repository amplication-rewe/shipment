import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarrierServiceBase } from "./base/carrier.service.base";

@Injectable()
export class CarrierService extends CarrierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
