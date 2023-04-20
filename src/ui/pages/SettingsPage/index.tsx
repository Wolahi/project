import React, { ReactElement } from "react";
import SettingPage from "../../core/Settings/components/SettingPage";
import SideBarView from "../../core/SideBar/SideBarView";

const Settings = (): ReactElement => {
  return (
    <div>
      <SideBarView />
      <SettingPage />
    </div>
  );
};

export default Settings;
