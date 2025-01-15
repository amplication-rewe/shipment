import { CarrierWhereUniqueInput } from "../carrier/CarrierWhereUniqueInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";

export type ShipmentUpdateInput = {
  carrier?: CarrierWhereUniqueInput | null;
  destination?: DestinationWhereUniqueInput | null;
  packageModel?: PackageModelWhereUniqueInput | null;
  shippingDate?: Date | null;
  status?: "Option1" | null;
  trackingNumber?: string | null;
};
