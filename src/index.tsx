// eslint-disable-next-line import/no-unresolved
import ReactDOM, { Root } from "react-dom/client";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from "react-router";
import "./ui/style/Index.scss";
import Settings from "./ui/pages/SettingsPage";
import Auth from "./ui/pages/AuthPage";
import SignInView from "./ui/core/Auth/components/SignInComponets/SignInView";
import SignUpView from "./ui/core/Auth/components/SignUpComponents/SignUpView";
import MapPage from "./ui/pages/MapPage";
import "./i18n.js";
import Main from "./ui/pages/Main/Index";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "signIn",
        element: <SignInView />,
      },
      {
        path: "signUp",
        element: <SignUpView />,
      },
    ],
  },
]);
const root: Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
