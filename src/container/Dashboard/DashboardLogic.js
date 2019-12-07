import { Component } from "react";
// import Axios from "axios";
import { withRouter } from "react-router-dom";
import data from "../../data/content.json";

class DashboardLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      api: "https://peaceful-savannah-85788.herokuapp.com",
      data: {
        image: ""
      },
      height: false,
      hidden: true,
      tabs: ["Dashboard", "Supplier", "Setting"],
      currentRoute: "/dashboard",
      currentRouteIndex: 0,
      currentSubRoute: "",
      currentSubRouteIndex: 0
    };
  }

  LogOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  handelRoute = (name, index) => {
    const loweredCaseRoute = name.toLowerCase();
    this.setState(
      {
        currentRoute: `${
          `/${loweredCaseRoute}` === "/dashboard"
            ? `/${loweredCaseRoute}`
            : `/dashboard/${loweredCaseRoute}`
        }`,
        currentRouteIndex: index,
        currentSubRouteIndex: 0
      },
      () => this.props.history.push(`${this.state.currentRoute}`)
    );
    window.scrollTo(0, 0);
  };

  isSameRoute = () => {
    const { tabs, currentRoute } = this.state;
    tabs.forEach((tab, index) => {
      if (
        currentRoute === tab.toLowerCase() ||
        currentRoute === `/dashboard/${tab.toLowerCase()}`
      ) {
        return this.setState({
          currentRouteIndex: index,
          currentSubRouteIndex: 0
        });
      }
      return null;
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // document.title = `Alpha POS - ${this.state.currentRoute}`;
  }

  UNSAFE_componentWillMount() {
    this.setState({
      token: localStorage.getItem("token"),
      currentRoute: this.props.location.pathname,
      data: data.data
    });
  }

  // memunculkan logo saat scroll dari sini

  handleChangeScroll = () => {
    this.setState(prevState => {
      if (window.scrollY > 80 && prevState.height === this.state.height) {
        return { hidden: false, height: true };
      } else {
        setTimeout(() => {
          return { hidden: true };
        }, 500);
        return { height: false };
      }
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleChangeScroll);
    // ^memunculkan logo saat scroll sampai sini
    // window.removeEventListener("scroll", this.handleChangeScroll)
    this.isSameRoute();
    // ^untuk mengecek indicator tabs

    console.log(this.state);
  }

  componentWillUnmount() {}

  handleSubRoute = (name, index) => {
    this.setState({ currentSubRoute: name, currentSubRouteIndex: index }, () =>
      console.log("currentSubRoute", this.state.currentSubRoute, name)
    );
    // console.log(name);
  };

  // // componentDidMount() {
  //   const { api, token } = this.state;
  //   Axios.get(`${api}/api/login?token=${token}`).then(res => {
  //     this.setState({
  //       data: res.data,
  //       avatar: res.data.data.photo,
  //       username: res.data.data.username,
  //       fullname: res.data.data.name,
  //       email: res.data.data.email,
  //       phone_number: res.data.data.phone_number,
  //       address: res.data.data.address
  //     });
  //   });
  // }

  render() {
    return this.props.render(
      this.state,
      this.LogOut,
      this.handelRoute,
      this.handleSubRoute
    );
  }
}

export default withRouter(DashboardLogic);
