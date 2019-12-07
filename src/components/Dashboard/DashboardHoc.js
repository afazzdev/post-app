import React, { Component } from "react";

import DashboardLogic from "../../container/Dashboard/DashboardLogic";

import { CssBaseline } from "@material-ui/core";

import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import CostumizedTabs from "../Tabs/CustomizedTabs";
import EnhanchedGrid from "../Grid/EnhanchedGrid";

const DashboardHOC = OldComp => {
  class NewComp extends Component {
    state = {};
    render() {
      return (
        <>
          <DashboardLogic
            render={(state, logOut, handelRoute) => (
              <>
                <CssBaseline />
                <Navbar
                  state={state}
                  logOut={logOut}
                  handelRoute={handelRoute}
                />
                <CostumizedTabs state={state} handelRoute={handelRoute} />
                <EnhanchedGrid>
                  <Content>
                    <OldComp />
                  </Content>
                </EnhanchedGrid>
              </>
            )}
          />
        </>
      );
    }
  }

  return NewComp;
};

export default DashboardHOC;
