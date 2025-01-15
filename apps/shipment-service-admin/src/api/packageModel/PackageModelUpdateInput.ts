import { ShipmentUpdateManyWithoutPackageModelsInput } from "./ShipmentUpdateManyWithoutPackageModelsInput";

export type PackageModelUpdateInput = {
  contents?: string | null;
  dimensions?: string | null;
  shipments?: ShipmentUpdateManyWithoutPackageModelsInput;
  weight?: number | null;
};
