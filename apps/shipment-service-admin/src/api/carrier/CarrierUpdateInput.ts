import { ShipmentUpdateManyWithoutCarriersInput } from "./ShipmentUpdateManyWithoutCarriersInput";

export type CarrierUpdateInput = {
  contactNumber?: string | null;
  email?: string | null;
  name?: string | null;
  shipments?: ShipmentUpdateManyWithoutCarriersInput;
};
