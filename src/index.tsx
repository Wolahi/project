// eslint-disable-next-line import/no-unresolved
import ReactDOM, { Root } from "react-dom/client";
import React from "react";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MapPage />,
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

  {
    path: "/settings",
    element: <Settings />,
  },
]);
const root: Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
