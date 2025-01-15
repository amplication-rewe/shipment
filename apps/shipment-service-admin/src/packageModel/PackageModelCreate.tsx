import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const PackageModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contents" multiline source="contents" />
        <TextInput label="dimensions" source="dimensions" />
        <ReferenceArrayInput source="shipments" reference="Shipment">
          <SelectArrayInput
            optionText={ShipmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
