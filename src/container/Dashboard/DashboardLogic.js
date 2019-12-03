import { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class DashboardLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.render();
  }
}

export default withRouter(DashboardLogic);
