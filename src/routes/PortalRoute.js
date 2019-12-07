import React from "react";
import { createPortal } from "react-dom";

const PortalRoute = ({ children }) => {
  return createPortal(<div>{children}</div>, document.getElementById("route"));
};

export default PortalRoute;
