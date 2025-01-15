import { Carrier as TCarrier } from "../api/carrier/Carrier";

export const CARRIER_TITLE_FIELD = "name";

export const CarrierTitle = (record: TCarrier): string => {
  return record.name?.toString() || String(record.id);
};
