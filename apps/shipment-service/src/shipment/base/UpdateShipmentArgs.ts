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
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShipmentUpdateInput } from "./ShipmentUpdateInput";

@ArgsType()
class UpdateShipmentArgs {
  @ApiProperty({
    required: true,
    type: () => ShipmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShipmentWhereUniqueInput)
  @Field(() => ShipmentWhereUniqueInput, { nullable: false })
  where!: ShipmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShipmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShipmentUpdateInput)
  @Field(() => ShipmentUpdateInput, { nullable: false })
  data!: ShipmentUpdateInput;
}

export { UpdateShipmentArgs as UpdateShipmentArgs };
