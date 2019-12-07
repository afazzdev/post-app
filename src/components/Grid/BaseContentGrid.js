import React from "react";
import { Grid, Hidden } from "@material-ui/core";

const EnhanchedGrid = (Comp1, Comp2) => {
  return class Enhanched extends React.Component {
    render() {
      return (
        <Grid container>
          <Grid item xs sm={3}>
            <Comp1 {...this.props} />
          </Grid>
          <Hidden only="xs">
            <Grid item sm={9}>
              <Comp2 {...this.props} />
            </Grid>
          </Hidden>
        </Grid>
      );
    }
  };
};

export default EnhanchedGrid;
