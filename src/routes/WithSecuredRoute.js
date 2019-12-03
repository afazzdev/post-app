import React from "react";
import { withRouter } from "react-router-dom";

const WithSecuredRoute = RedirectedComponent => {
  class NewComp extends React.Component {
    state = {};
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.

    UNSAFE_componentWillMount() {
      const { history, location } = this.props;
      if (location.pathname === "/" && localStorage.getItem("token")) {
        history.push("/dashboard");
      } else if (
        location.pathname === "/dashboard" &&
        !localStorage.getItem("token")
      ) {
        history.push("/");
      }
    }

    render() {
      return <RedirectedComponent {...this.props} />;
    }
  }

  return withRouter(NewComp);
};

export default WithSecuredRoute;
