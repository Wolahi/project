import langReducer from "./langReducer";
import alertReducer from "./alertReducer";
import mapReducer from "./mapReducer";

const rootReducer = {
  lang: langReducer,
  alert: alertReducer,
  map: mapReducer,
};
export default rootReducer;
