import React from "react";

import { Paper, withStyles, useTheme } from "@material-ui/core";

const Enhanched = withStyles(theme => ({
  root: {
    clipPath: theme.props.polygon.T5m3x,
    padding: "1rem"
  }
}))(Paper);

const EnhanchedPaper = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        padding: "2px",
        background: `${theme.palette.grey[200]}`,
        clipPath: `${theme.props.polygon.T5}`
      }}
    >
      <Enhanched {...rest}>{children}</Enhanched>
    </div>
  );
};

export default EnhanchedPaper;
