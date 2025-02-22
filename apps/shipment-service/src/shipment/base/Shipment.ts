/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Carrier } from "../../carrier/base/Carrier";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Destination } from "../../destination/base/Destination";
import { PackageModel } from "../../packageModel/base/PackageModel";
import { EnumShipmentStatus } from "./EnumShipmentStatus";

@ObjectType()
class Shipment {
  @ApiProperty({
    required: false,
    type: () => Carrier,
  })
  @ValidateNested()
  @Type(() => Carrier)
  @IsOptional()
  carrier?: Carrier | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Destination,
  })
  @ValidateNested()
  @Type(() => Destination)
  @IsOptional()
  destination?: Destination | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => PackageModel,
  })
  @ValidateNested()
  @Type(() => PackageModel)
  @IsOptional()
  packageModel?: PackageModel | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shippingDate!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumShipmentStatus,
  })
  @IsEnum(EnumShipmentStatus)
  @IsOptional()
  @Field(() => EnumShipmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  trackingNumber!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Shipment as Shipment };
