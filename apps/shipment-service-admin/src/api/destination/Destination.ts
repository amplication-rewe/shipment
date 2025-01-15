import { Shipment } from "../shipment/Shipment";

export type Destination = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  postalCode: string | null;
  shipments?: Array<Shipment>;
  state: string | null;
  updatedAt: Date;
};
