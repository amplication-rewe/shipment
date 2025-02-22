/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarrierWhereInput } from "./CarrierWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CarrierOrderByInput } from "./CarrierOrderByInput";

@ArgsType()
class CarrierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CarrierWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CarrierWhereInput, { nullable: true })
  @Type(() => CarrierWhereInput)
  where?: CarrierWhereInput;

  @ApiProperty({
    required: false,
    type: [CarrierOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CarrierOrderByInput], { nullable: true })
  @Type(() => CarrierOrderByInput)
  orderBy?: Array<CarrierOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CarrierFindManyArgs as CarrierFindManyArgs };
