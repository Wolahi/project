import initialState from "./initialState";

export default function alertReducer(state = initialState.alert, action: any): any {
  switch (action.type) {
    /* Show/hide the form */
    case "ShowAlert": {
      return {
        ...state,
        ShowAlert: action.ShowAlert,
      };
    }
    case "SetText": {
      return {
        ...state,
        TextAlert: action.TextAlert,
      };
    }
    default:
      return state;
  }
}
