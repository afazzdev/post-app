import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Auth from "../container/Auth/Auth";
import Dashboard from "../container/Dashboard/Dashboard";
import { SecuredRoute } from "./SecuredRoute";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <SecuredRoute exact path="/" component={Auth} />
          <SecuredRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
