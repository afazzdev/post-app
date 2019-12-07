import React from "react";

import BaseContentGrid from "../Grid/BaseContentGrid";

const Setting = props => {
  const SettingNav = () => <div>this is setting nav</div>;

  const SettingContent = () => <div> this is setting actual content </div>;

  const BaseSetting = BaseContentGrid(SettingNav, SettingContent);

  return (
    <>
      <BaseSetting />
    </>
  );
};

export default Setting;
