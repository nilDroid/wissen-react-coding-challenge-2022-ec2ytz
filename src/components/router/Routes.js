import React from "react";
import { BrowsweRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import Home from "../Home/Home";
import Login from "../Auth/Login";

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoutes path="/" component={Home} exact />
  </Switch>
);

export default Routes;
