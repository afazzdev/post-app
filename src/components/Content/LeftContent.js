import React from "react";

import CosTab from "../Tabs/CustomizedTabs";

export default function LeftContent({
  index,
  mapData,
  changeRoute,
  classes,
  ...rest
}) {
  return (
    <div className={classes.rootLeft}>
      <CosTab
        {...rest}
        orientation="vertical"
        index={index}
        mapData={mapData}
        changeRoute={changeRoute}
        style={{
          color: "black",
          alignItems: "flex-start"
        }}
      />
    </div>
  );
}
