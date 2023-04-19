// eslint-disable-next-line import/no-unresolved
import ReactDOM, { Root } from "react-dom/client";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from "react-router";
import SignInView from "./ui/core/Auth/components/SignInComponets/SignInView";
import SignUpView from "./ui/core/Auth/components/SignUpComponents/SignUpView";
import "./ui/style/Index.scss";
import Settings from "./ui/pages/SettingsPage";
import lang from "./ui/pages/AuthPage/en.json";
import { TranslationProvider } from "./libs/TranslitionProvaider/TranslationProvider";

const router = createBrowserRouter([
  {
    path: "/signUp",
    element: <SignUpView />,
  },
  {
    path: "/signIn",
    element: <SignInView />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
const root: Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <TranslationProvider translations={lang}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </TranslationProvider>,
);
