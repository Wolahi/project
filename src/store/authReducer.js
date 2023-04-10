import { createAction, createReducer } from "@reduxjs/toolkit";

const internalState = {
  sign:
    JSON.parse(localStorage.getItem("sign")) !== undefined
      ? JSON.parse(localStorage.getItem("sign"))
      : true,
};
export const switchSign = createAction("SWITH_SIGN");
export default createReducer(internalState, {
  [switchSign]: (state) => {
    // eslint-disable-next-line no-param-reassign
    state.sign = !state.sign;
  },
});
