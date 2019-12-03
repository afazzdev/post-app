import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

import clsx from "clsx";

import Bg2 from "../../assets/bg2.jpg";

import Forms from "./Forms";
import LogicForm from "../../container/Auth/AuthLogic";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    height: "100vh",
    background: theme.palette.primary.main
  },
  imageGrid: {
    height: "100vh",
    width: "calc(100% + 5rem)",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "grid",
    placeItems: "flex-end center",
    background: "#fff",
    clipPath: theme.props.polygon.rotb5rem
  },
  image: {
    width: "100%"
  },
  forms: {
    display: "grid",
    placeItems: "center",
    gridAutoFlow: "column",
    width: "300px"
  },
  buttonOutlined: {
    background: theme.palette.grey[300]
  },
  container: {
    background: theme.props.color.background1,
    zIndex: 1
  }
}));

const IsFirstTime = ({ classes }) => {
  return (
    <>
      <Grid
        container
        className={clsx(classes.root, classes.container)}
        style={{
          padding: "0 1rem"
        }}
        direction="row"
      >
        <Grid item xs sm className={classes.forms}>
          <LogicForm
            render={(state, handleChange, handleClick, handleSubmit) => (
              <Forms
                whatFor={state.isNewAccount ? "Register" : "Login"}
                Auth={state.Auth}
                classes={classes}
                values={state.values}
                error={state.error}
                complete={state.complete}
                handleChange={handleChange}
                handleClickShowPassword={handleClick}
                handleSubmit={handleSubmit}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

const AuthComp = () => {
  const classes = useStyle();
  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Hidden smDown>
          <Grid item sm={8} className={classes.imageGrid}>
            <img src={Bg2} alt="none" className={classes.image} />
          </Grid>
        </Hidden>
        <Grid item xs sm={4} className={clsx(classes.root, classes.container)}>
          <IsFirstTime classes={classes} />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthComp;
