import React, { Component, Fragment } from "react";

import AuthComp from "../../components/Auth/AuthComp";

class Auth extends Component {
  render() {
    return (
      <Fragment>
        {/* {localStorage.getItem("token") ? (
          this.props.history.push("/dashboard")
        ) : ( */}
        <AuthComp />
        {/* )} */}
      </Fragment>
    );
  }
}

export default Auth;
