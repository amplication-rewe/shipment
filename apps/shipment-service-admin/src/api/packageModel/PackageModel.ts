import { Shipment } from "../shipment/Shipment";

export type PackageModel = {
  contents: string | null;
  createdAt: Date;
  dimensions: string | null;
  id: string;
  shipments?: Array<Shipment>;
  updatedAt: Date;
  weight: number | null;
};
