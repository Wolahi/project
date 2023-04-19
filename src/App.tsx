import React, { ReactElement } from "react";
import "./ui/style/Index.scss";
import store from "./store/store";
// import Auth from "./ui/pages/AuthPage/index";
import SettingPage from "./ui/core/Settings/components/SettingPage";

function App(): ReactElement {
  return (
    <Provider store={store}>
      <div>
        <SettingPage />
      </div>
    </Provider>
  );
}

export default App;
