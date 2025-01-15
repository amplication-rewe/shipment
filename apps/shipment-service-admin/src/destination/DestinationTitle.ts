import { Destination as TDestination } from "../api/destination/Destination";

export const DESTINATION_TITLE_FIELD = "city";

export const DestinationTitle = (record: TDestination): string => {
  return record.city?.toString() || String(record.id);
};
