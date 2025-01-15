import { ShipmentCreateNestedManyWithoutCarriersInput } from "./ShipmentCreateNestedManyWithoutCarriersInput";

export type CarrierCreateInput = {
  contactNumber?: string | null;
  email?: string | null;
  name?: string | null;
  shipments?: ShipmentCreateNestedManyWithoutCarriersInput;
};
