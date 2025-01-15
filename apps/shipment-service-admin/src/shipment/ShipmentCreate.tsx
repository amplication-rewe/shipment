import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CarrierTitle } from "../carrier/CarrierTitle";
import { DestinationTitle } from "../destination/DestinationTitle";
import { PackageModelTitle } from "../packageModel/PackageModelTitle";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="carrier.id" reference="Carrier" label="Carrier">
          <SelectInput optionText={CarrierTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="destination.id"
          reference="Destination"
          label="Destination"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="packageModel.id"
          reference="PackageModel"
          label="PackageModel"
        >
          <SelectInput optionText={PackageModelTitle} />
        </ReferenceInput>
        <DateTimeInput label="shippingDate" source="shippingDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="trackingNumber" source="trackingNumber" />
      </SimpleForm>
    </Create>
  );
};
