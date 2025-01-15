import { ShipmentCreateNestedManyWithoutDestinationsInput } from "./ShipmentCreateNestedManyWithoutDestinationsInput";

export type DestinationCreateInput = {
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  shipments?: ShipmentCreateNestedManyWithoutDestinationsInput;
  state?: string | null;
};
