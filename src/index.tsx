// eslint-disable-next-line import/no-unresolved
import ReactDOM, { Root } from "react-dom/client";
import React from "react";
import App from "./App";

const root: Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
