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
import { Type } from "class-transformer";

@ArgsType()
class CarrierCountArgs {
  @ApiProperty({
    required: false,
    type: () => CarrierWhereInput,
  })
  @Field(() => CarrierWhereInput, { nullable: true })
  @Type(() => CarrierWhereInput)
  where?: CarrierWhereInput;
}

export { CarrierCountArgs as CarrierCountArgs };
