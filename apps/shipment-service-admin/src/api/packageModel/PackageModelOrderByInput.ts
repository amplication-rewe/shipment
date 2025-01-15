import { SortOrder } from "../../util/SortOrder";

export type PackageModelOrderByInput = {
  contents?: SortOrder;
  createdAt?: SortOrder;
  dimensions?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
