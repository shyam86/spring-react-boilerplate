import React from "react";
import { Route } from "react-router-dom";

import { Container } from "reactstrap";

import Home from "./containers/home";
import About from "./containers/about";
import SignIn from "./containers/signin";
import AppNav from "./containers/navbar";
import EquipmentSwitch from "./containers/equipmentswitch";
import UpdateEquipment from "./containers/equipmentswitch/UpdateEquipment";
const App = () => (
  <div>
    <AppNav />
    <Container>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/equipmentswitch" component={EquipmentSwitch} />
      <Route exact path="/updateequipment" component={UpdateEquipment} />

      <Route exact path="/signin" component={SignIn} />
    </Container>
  </div>
);

export default App;
