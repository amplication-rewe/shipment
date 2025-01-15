import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const PackageModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
