import initialState from "./initialState";

export default function langReducer(state = initialState.lang, action: any): any {
  switch (action.type) {
    /* Show/hide the form */
    case "SWITCH_LANG": {
      return {
        ...state,
        lang: !state.lang,
      };
    }
    default:
      return state;
  }
}
