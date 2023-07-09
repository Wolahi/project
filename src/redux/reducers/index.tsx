import langReducer from "./langReducer";
import alertReducer from "./alertReducer";

const rootReducer = {
  lang: langReducer,
  alert: alertReducer,
};
export default rootReducer;
