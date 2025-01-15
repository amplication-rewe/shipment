import { ShipmentCreateNestedManyWithoutPackageModelsInput } from "./ShipmentCreateNestedManyWithoutPackageModelsInput";

export type PackageModelCreateInput = {
  contents?: string | null;
  dimensions?: string | null;
  shipments?: ShipmentCreateNestedManyWithoutPackageModelsInput;
  weight?: number | null;
};
