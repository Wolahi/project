import { Provider } from "react-redux";
import React, { ReactElement } from "react";
import "./ui/style/Index.scss";
import store from "./store/store";
import Auth from "./ui/pages/AuthPage/index";

export const getServerSideProps: any = async () => {
  const lang = "en";
  const translation = await import(`./${lang}.json`);
  return {
    props: {
      translation: translation.text,
      lang,
    },
  };
};
function App(): ReactElement {
  return (
    <Provider store={store}>
      <div>
        <Auth translation={getServerSideProps.translation} lang={getServerSideProps.lang} />
      </div>
    </Provider>
  );
}

export default App;
