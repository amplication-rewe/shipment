import { CarrierWhereUniqueInput } from "../carrier/CarrierWhereUniqueInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShipmentWhereInput = {
  carrier?: CarrierWhereUniqueInput;
  destination?: DestinationWhereUniqueInput;
  id?: StringFilter;
  packageModel?: PackageModelWhereUniqueInput;
  shippingDate?: DateTimeNullableFilter;
  status?: "Option1";
  trackingNumber?: StringNullableFilter;
};
