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

import { CARRIER_TITLE_FIELD } from "../carrier/CarrierTitle";
import { DESTINATION_TITLE_FIELD } from "./DestinationTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";

export const DestinationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Shipment"
          target="destinationId"
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
