import React from "react";
import Setting from "../../container/Setting/Setting";

const RightContent = ({ dataName, mainId, subId }) => {
  if (dataName === "profile" && mainId === 3 && subId === 0) {
    return <Setting />;
  }
  return <>{dataName && <div>{dataName}</div>}</>;
};

export default RightContent;
