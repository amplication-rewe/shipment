import { DestinationWhereInput } from "./DestinationWhereInput";
import { DestinationOrderByInput } from "./DestinationOrderByInput";

export type DestinationFindManyArgs = {
  where?: DestinationWhereInput;
  orderBy?: Array<DestinationOrderByInput>;
  skip?: number;
  take?: number;
};
