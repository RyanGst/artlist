import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Details from "../pages/details";
import Favorites from "../pages/favorites";


export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
  );
}