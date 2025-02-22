/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarrierWhereInput } from "./CarrierWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CarrierListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CarrierWhereInput,
  })
  @ValidateNested()
  @Type(() => CarrierWhereInput)
  @IsOptional()
  @Field(() => CarrierWhereInput, {
    nullable: true,
  })
  every?: CarrierWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarrierWhereInput,
  })
  @ValidateNested()
  @Type(() => CarrierWhereInput)
  @IsOptional()
  @Field(() => CarrierWhereInput, {
    nullable: true,
  })
  some?: CarrierWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarrierWhereInput,
  })
  @ValidateNested()
  @Type(() => CarrierWhereInput)
  @IsOptional()
  @Field(() => CarrierWhereInput, {
    nullable: true,
  })
  none?: CarrierWhereInput;
}
export { CarrierListRelationFilter as CarrierListRelationFilter };
