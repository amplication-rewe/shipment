import { SortOrder } from "../../util/SortOrder";

export type DestinationOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
