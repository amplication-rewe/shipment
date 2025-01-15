import { PackageModel as TPackageModel } from "../api/packageModel/PackageModel";

export const PACKAGEMODEL_TITLE_FIELD = "dimensions";

export const PackageModelTitle = (record: TPackageModel): string => {
  return record.dimensions?.toString() || String(record.id);
};
