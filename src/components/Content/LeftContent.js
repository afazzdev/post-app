import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function LeftContent({
  data,
  currentRouteIndex,
  currentSubRoute,
  handleSubRoute,
  classes
}) {
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currentSubRoute}
        // onChange={() => handleSubRoute(index)}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {data &&
          data[currentRouteIndex].sidebar.map((side, index) => (
            <div key={side.name} className={classes.route}>
              <Tab
                label={side.name}
                {...a11yProps(index)}
                onClick={() => handleSubRoute(index)}
              />
            </div>
          ))}
      </Tabs>
    </div>
  );
}
