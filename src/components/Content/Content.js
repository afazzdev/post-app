import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BaseContentGrid from "../Grid/BaseContentGrid";
import CosTab from "../Tabs/CustomizedTabs";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "1000px"
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

  const Left = () => {
    return (
      <>
        <div className={classes.rootLeft}>
          <CosTab
            orientation="vertical"
            index={currentSubRouteIndex}
            MapData={data[currentRouteIndex].sidebar}
            changeRoute={handleSubRoute}
            style={{
              color: "black"
            }}
          />
        </div>
      </>
    );
  };

  const Right = () => {
    return (
      <>
        {data &&
          data[currentRouteIndex].sidebar[currentSubRouteIndex].content && (
            <div>
              {data[currentRouteIndex].sidebar[currentSubRouteIndex].content}
            </div>
          )}
      </>
    );
  };

  const BaseContent = BaseContentGrid(Left, Right);

  return (
    <>
      <main className={classes.content}>
        <BaseContent />
      </main>
    </>
  );
}
