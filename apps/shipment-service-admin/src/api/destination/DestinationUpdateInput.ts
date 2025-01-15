import { ShipmentUpdateManyWithoutDestinationsInput } from "./ShipmentUpdateManyWithoutDestinationsInput";

export type DestinationUpdateInput = {
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  shipments?: ShipmentUpdateManyWithoutDestinationsInput;
  state?: string | null;
};
