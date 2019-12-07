import React from "react";

import { Button, makeStyles, withStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  dropShadow: {
    // marginTop: "2rem",
    // marginBottom: "2rem",
    margin: "2rem .5rem",
    padding: "3px",
    background: theme.palette.grey[300],
    clipPath: theme.props.polygon.polygonHalfRem
  }
}));

const Styled = withStyles(theme => ({
  root: {
    clipPath: theme.props.polygon.polygonHalfRemMinThreePx
    // margin: "0 .5rem",
  },
  containedPrimary: {
    // filter: "drop-shadow(0, 0, 3px, black)"
  },
  textPrimary: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      background: theme.palette.common.white
    }
  }
}))(Button);

const ButtonStyled = props => {
  const classes = useStyle();

  return (
    <div className={classes.dropShadow}>
      <Styled {...props}>{props.children}</Styled>
    </div>
  );
};

export default ButtonStyled;
