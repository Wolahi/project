import { ReactElement } from "react";
import "./ui/style/Index.scss";
// import Auth from "./ui/pages/AuthPage/index";
import SettingPage from "./ui/core/Settings/components/SettingPage";

function App(): ReactElement {
  return (
    <div>
      <SettingPage />
    </div>
  );
}

export default App;
