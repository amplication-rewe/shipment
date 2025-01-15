import { Shipment } from "../shipment/Shipment";

export type Carrier = {
  contactNumber: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  shipments?: Array<Shipment>;
  updatedAt: Date;
};
