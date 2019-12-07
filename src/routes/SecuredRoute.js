import React from "react";
import { Route, Redirect } from "react-router-dom";

export const SecuredRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const { location } = props;

        if (localStorage.getItem("token") && location.pathname === "/") {
          return (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: location } }}
            />
          );
        } else if (
          localStorage.getItem("token") ||
          (!localStorage.getItem("token") && location.pathname === "/")
        ) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/", state: { from: location } }} />;
        }
      }}
    />
  );
};
