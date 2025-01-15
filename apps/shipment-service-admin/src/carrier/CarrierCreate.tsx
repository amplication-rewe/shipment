import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const CarrierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="shipments" reference="Shipment">
          <SelectArrayInput
            optionText={ShipmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
