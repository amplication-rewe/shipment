import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PackageModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Packages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contents" source="contents" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dimensions" source="dimensions" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />{" "}
      </Datagrid>
    </List>
  );
};
