import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import DashboardComp from "../../components/Dashboard/DashboardComp";
import DashboardLogic from "./DashboardLogic";

class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardLogic
          render={(state, logOut, handelRoute, handleSubRoute) => (
            <DashboardComp
              state={state}
              logOut={logOut}
              handelRoute={handelRoute}
              handleSubRoute={handleSubRoute}
            />
          )}
        />
      </>
    );
  }
}

export default withRouter(Dashboard);
