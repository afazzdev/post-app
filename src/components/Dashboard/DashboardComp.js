import React from "react";

import { CssBaseline } from "@material-ui/core";

import Navbar from "../Navbar/Navbar";
import StickyNavbar from "../Navbar/StickyNavbar";
import Content from "../Content/Content";
import CostumizedTabs from "../Tabs/CustomizedTabs";
import EnhanchedGrid from "../Grid/EnhanchedGrid";

const DashboardComp = ({ state, logOut, handelRoute, handleSubRoute }) => {
  return (
    <>
      <CssBaseline />
      <Navbar state={state} logOut={logOut} handelRoute={handelRoute} />
      <StickyNavbar state={state} handelRoute={handelRoute}>
        <CostumizedTabs
          index={state.currentRouteIndex}
          MapData={state.data}
          changeRoute={handelRoute}
        />
      </StickyNavbar>
      <EnhanchedGrid>
        <Content state={state} handleSubRoute={handleSubRoute} />
      </EnhanchedGrid>
    </>
  );
};

export default DashboardComp;
