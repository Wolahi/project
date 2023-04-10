import { Provider } from "react-redux";
import "./ui/style/Index.scss";
import store from "./store/store.js";
// import Auth from "./ui/pages/AuthPage";
import Settings from "./ui/pages/SettingsPage";
import Auth from "./ui/pages/AuthPage";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Auth />
      </div>
    </Provider>
  );
}

export default App;
