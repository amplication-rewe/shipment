import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PackageModelWhereInput = {
  contents?: StringNullableFilter;
  dimensions?: StringNullableFilter;
  id?: StringFilter;
  shipments?: ShipmentListRelationFilter;
  weight?: FloatNullableFilter;
};
