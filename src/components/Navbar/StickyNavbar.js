import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Avatar, Hidden, Slide } from "@material-ui/core";

import EnhanchedGrid from "../Grid/EnhanchedGrid";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "64px",
    width: "100%",
    height: "64px",
    boxShadow: "none"
  }
}));

const Stickynavbar = ({ children, state: { height, hidden }, handelRoute }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <EnhanchedGrid style={{ alignSelf: "flex-end" }}>
            <div style={{ display: "flex" }}>
              <Hidden xsUp={hidden}>
                <Slide direction="down" in={height} mountOnEnter unmountOnExit>
                  <Avatar
                    src={logo}
                    alt=""
                    variant="square"
                    style={{ marginRight: "1rem" }}
                    onClick={() => handelRoute("dashboard", 0)}
                  />
                </Slide>
              </Hidden>
              {children}
            </div>
          </EnhanchedGrid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Stickynavbar;
