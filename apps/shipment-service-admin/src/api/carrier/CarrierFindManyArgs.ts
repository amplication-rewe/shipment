import { CarrierWhereInput } from "./CarrierWhereInput";
import { CarrierOrderByInput } from "./CarrierOrderByInput";

export type CarrierFindManyArgs = {
  where?: CarrierWhereInput;
  orderBy?: Array<CarrierOrderByInput>;
  skip?: number;
  take?: number;
};
