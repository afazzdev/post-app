import React, { Component } from "react";
import SettingComp from "../../components/Setting/SettingComp";
import SettingLogic from "./SettingLogic";

class Setting extends Component {
  state = {};
  render() {
    return <SettingLogic render={(state, handleSubmit) => <SettingComp state={state} handleSubmit={handleSubmit} />} />;
  }
}

export default Setting;
