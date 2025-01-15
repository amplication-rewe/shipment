import { Carrier } from "../carrier/Carrier";
import { Destination } from "../destination/Destination";
import { PackageModel } from "../packageModel/PackageModel";

export type Shipment = {
  carrier?: Carrier | null;
  createdAt: Date;
  destination?: Destination | null;
  id: string;
  packageModel?: PackageModel | null;
  shippingDate: Date | null;
  status?: "Option1" | null;
  trackingNumber: string | null;
  updatedAt: Date;
};
