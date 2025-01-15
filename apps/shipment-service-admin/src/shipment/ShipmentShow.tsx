import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CARRIER_TITLE_FIELD } from "../carrier/CarrierTitle";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";

export const ShipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Carrier" source="carrier.id" reference="Carrier">
          <TextField source={CARRIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Destination"
          source="destination.id"
          reference="Destination"
        >
          <TextField source={DESTINATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="PackageModel"
          source="packagemodel.id"
          reference="PackageModel"
        >
          <TextField source={PACKAGEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="shippingDate" source="shippingDate" />
        <TextField label="status" source="status" />
        <TextField label="trackingNumber" source="trackingNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
