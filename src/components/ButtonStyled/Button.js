import React from "react";

import { Button, withStyles } from "@material-ui/core";

const Styled = withStyles(theme => ({
  root: {
    border: `1px ${theme.palette.primary.main} solid`,
    padding: ".2rem 1rem"
  },
  containedPrimary: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    boxShadow: "none",
    "&:hover": {
      color: theme.palette.primary.main,
      background: theme.palette.common.white,
      boxShadow: "none"
    }
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
  return <Styled {...props}>{props.children}</Styled>;
};

export default ButtonStyled;
