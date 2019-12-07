import React from "react";
import { Grid, Hidden } from "@material-ui/core";

const EnhanchedGrid = ({ children, style }) => {
  return (
    <Grid container style={style}>
      <Hidden smDown>
        <Grid item sm md={1}></Grid>
      </Hidden>
      <Grid item xs sm md={10}>
        {children}
      </Grid>
      <Hidden smDown>
        <Grid item sm md={1}></Grid>
      </Hidden>
    </Grid>
  );
};

export default EnhanchedGrid;
