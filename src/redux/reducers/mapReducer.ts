import initialState from "./initialState";

export default function mapReducer(state = initialState.map, action: any): any {
  switch (action.type) {
    /* Show/hide the form */
    case "SetView": {
      return {
        ...state,
        map: action.view,
      };
    }
    default:
      return state;
  }
}
