/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PackageModelService } from "../packageModel.service";
import { PackageModelCreateInput } from "./PackageModelCreateInput";
import { PackageModel } from "./PackageModel";
import { PackageModelFindManyArgs } from "./PackageModelFindManyArgs";
import { PackageModelWhereUniqueInput } from "./PackageModelWhereUniqueInput";
import { PackageModelUpdateInput } from "./PackageModelUpdateInput";
import { ShipmentFindManyArgs } from "../../shipment/base/ShipmentFindManyArgs";
import { Shipment } from "../../shipment/base/Shipment";
import { ShipmentWhereUniqueInput } from "../../shipment/base/ShipmentWhereUniqueInput";

export class PackageModelControllerBase {
  constructor(protected readonly service: PackageModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PackageModel })
  async createPackageModel(
    @common.Body() data: PackageModelCreateInput
  ): Promise<PackageModel> {
    return await this.service.createPackageModel({
      data: data,
      select: {
        contents: true,
        createdAt: true,
        dimensions: true,
        id: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PackageModel] })
  @ApiNestedQuery(PackageModelFindManyArgs)
  async packageModels(@common.Req() request: Request): Promise<PackageModel[]> {
    const args = plainToClass(PackageModelFindManyArgs, request.query);
    return this.service.packageModels({
      ...args,
      select: {
        contents: true,
        createdAt: true,
        dimensions: true,
        id: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PackageModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async packageModel(
    @common.Param() params: PackageModelWhereUniqueInput
  ): Promise<PackageModel | null> {
    const result = await this.service.packageModel({
      where: params,
      select: {
        contents: true,
        createdAt: true,
        dimensions: true,
        id: true,
        updatedAt: true,
        weight: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PackageModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePackageModel(
    @common.Param() params: PackageModelWhereUniqueInput,
    @common.Body() data: PackageModelUpdateInput
  ): Promise<PackageModel | null> {
    try {
      return await this.service.updatePackageModel({
        where: params,
        data: data,
        select: {
          contents: true,
          createdAt: true,
          dimensions: true,
          id: true,
          updatedAt: true,
          weight: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PackageModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePackageModel(
    @common.Param() params: PackageModelWhereUniqueInput
  ): Promise<PackageModel | null> {
    try {
      return await this.service.deletePackageModel({
        where: params,
        select: {
          contents: true,
          createdAt: true,
          dimensions: true,
          id: true,
          updatedAt: true,
          weight: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/shipments")
  @ApiNestedQuery(ShipmentFindManyArgs)
  async findShipments(
    @common.Req() request: Request,
    @common.Param() params: PackageModelWhereUniqueInput
  ): Promise<Shipment[]> {
    const query = plainToClass(ShipmentFindManyArgs, request.query);
    const results = await this.service.findShipments(params.id, {
      ...query,
      select: {
        carrier: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        destination: {
          select: {
            id: true,
          },
        },

        id: true,

        packageModel: {
          select: {
            id: true,
          },
        },

        shippingDate: true,
        status: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/shipments")
  async connectShipments(
    @common.Param() params: PackageModelWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shipments: {
        connect: body,
      },
    };
    await this.service.updatePackageModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/shipments")
  async updateShipments(
    @common.Param() params: PackageModelWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shipments: {
        set: body,
      },
    };
    await this.service.updatePackageModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/shipments")
  async disconnectShipments(
    @common.Param() params: PackageModelWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shipments: {
        disconnect: body,
      },
    };
    await this.service.updatePackageModel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
