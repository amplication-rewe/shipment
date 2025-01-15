import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CARRIER_TITLE_FIELD } from "./CarrierTitle";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";

export const CarrierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Shipment"
          target="carrierId"
          label="Shipments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Carrier"
              source="carrier.id"
              reference="Carrier"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
