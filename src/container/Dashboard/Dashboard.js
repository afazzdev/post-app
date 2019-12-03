import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div>This is dashboard</div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            this.props.history.push("/");
          }}
        >
          LogOut
        </button>
      </>
    );
  }
}

export default withRouter(Dashboard);
