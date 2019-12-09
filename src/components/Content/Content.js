import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: "3rem 0"
  },
  rootLeft: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary,
    display: "flex",
    position: "sticky"
  }
}));

export default function Content({
  state: { data, currentRouteIndex, currentSubRouteIndex },
  handleSubRoute
}) {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <Grid container>
          <Grid item xs sm={3} style={{ position: "relative" }}>
            <LeftContent
              classes={classes}
              index={currentSubRouteIndex}
              mapData={data[currentRouteIndex].sidebar}
              changeRoute={handleSubRoute}
            />
          </Grid>
          <Hidden only="xs">
            <Grid item sm={9}>
              <RightContent
                mainId={currentRouteIndex}
                subId={currentSubRouteIndex}
                dataName={
                  data[currentRouteIndex].sidebar[currentSubRouteIndex].content
                }
              />
            </Grid>
          </Hidden>
        </Grid>
      </main>
    </>
  );
}
