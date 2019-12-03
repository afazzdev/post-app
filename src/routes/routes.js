import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../container/Auth/Auth";
import Dashboard from "../container/Dashboard/Dashboard";
import WithSecuredRoute from "./WithSecuredRoute";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={WithSecuredRoute(Auth)} />
          <Route path="/dashboard" component={WithSecuredRoute(Dashboard)} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
