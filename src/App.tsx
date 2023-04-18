import { Provider } from "react-redux";
import React, { ReactElement } from "react";
import "./ui/style/Index.scss";
import store from "./store/store";
import Auth from "./ui/pages/AuthPage/index";

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}

export default App;
