import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  carrierId?: SortOrder;
  createdAt?: SortOrder;
  destinationId?: SortOrder;
  id?: SortOrder;
  packageModelId?: SortOrder;
  shippingDate?: SortOrder;
  status?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
};
