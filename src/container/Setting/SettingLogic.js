import { Component } from "react";
import profileSetting from "../../data/profileSetting.json";

import { connect } from "react-redux";
import {
  changeUsername,
  changeEmail,
  changePhone,
  changePassword,
  changePhoto
} from "../../redux/actions/SettingAction.js";

class SettingLogic extends Component {
  state = {
    data: []
  };

  UNSAFE_componentWillMount() {
    this.setState({ data: profileSetting.data });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name } = e.target;

    switch (name) {
      case "username":
        return this.props.changeUsername(name);
      case "email":
        return this.props.changeEmail(name);
      case "phone":
        return this.props.changePhone(name);
      case "password":
        return this.props.changePassword(name);
      case "photo":
        return this.props.changePhoto(name);
      default:
        return null;
    }
  };

  render() {
    return this.props.render(this.state, this.handleSubmit);
  }
}

const MapStateToProps = state => ({
  setting: state.setting
});

export default connect(MapStateToProps, {
  changeUsername,
  changeEmail,
  changePhone,
  changePassword,
  changePhoto
})(SettingLogic);
