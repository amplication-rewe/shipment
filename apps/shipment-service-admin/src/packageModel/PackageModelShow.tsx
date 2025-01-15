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
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "./PackageModelTitle";

export const PackageModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contents" source="contents" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dimensions" source="dimensions" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
        <ReferenceManyField
          reference="Shipment"
          target="packageModelId"
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
