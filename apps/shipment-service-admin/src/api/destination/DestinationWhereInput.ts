import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type DestinationWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  shipments?: ShipmentListRelationFilter;
  state?: StringNullableFilter;
};
