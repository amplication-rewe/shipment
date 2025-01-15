import { PackageModelWhereInput } from "./PackageModelWhereInput";
import { PackageModelOrderByInput } from "./PackageModelOrderByInput";

export type PackageModelFindManyArgs = {
  where?: PackageModelWhereInput;
  orderBy?: Array<PackageModelOrderByInput>;
  skip?: number;
  take?: number;
};
