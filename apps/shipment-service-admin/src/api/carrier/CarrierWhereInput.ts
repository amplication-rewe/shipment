import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type CarrierWhereInput = {
  contactNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  shipments?: ShipmentListRelationFilter;
};
