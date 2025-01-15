import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PackageModelList } from "./packageModel/PackageModelList";
import { PackageModelCreate } from "./packageModel/PackageModelCreate";
import { PackageModelEdit } from "./packageModel/PackageModelEdit";
import { PackageModelShow } from "./packageModel/PackageModelShow";
import { CarrierList } from "./carrier/CarrierList";
import { CarrierCreate } from "./carrier/CarrierCreate";
import { CarrierEdit } from "./carrier/CarrierEdit";
import { CarrierShow } from "./carrier/CarrierShow";
import { DestinationList } from "./destination/DestinationList";
import { DestinationCreate } from "./destination/DestinationCreate";
import { DestinationEdit } from "./destination/DestinationEdit";
import { DestinationShow } from "./destination/DestinationShow";
import { ShipmentList } from "./shipment/ShipmentList";
import { ShipmentCreate } from "./shipment/ShipmentCreate";
import { ShipmentEdit } from "./shipment/ShipmentEdit";
import { ShipmentShow } from "./shipment/ShipmentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"shipment service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PackageModel"
          list={PackageModelList}
          edit={PackageModelEdit}
          create={PackageModelCreate}
          show={PackageModelShow}
        />
        <Resource
          name="Carrier"
          list={CarrierList}
          edit={CarrierEdit}
          create={CarrierCreate}
          show={CarrierShow}
        />
        <Resource
          name="Destination"
          list={DestinationList}
          edit={DestinationEdit}
          create={DestinationCreate}
          show={DestinationShow}
        />
        <Resource
          name="Shipment"
          list={ShipmentList}
          edit={ShipmentEdit}
          create={ShipmentCreate}
          show={ShipmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
