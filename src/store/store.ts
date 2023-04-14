import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "react";
// eslint-disable-next-line import/no-unresolved
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import authReducer from "./authReducer";

const rootReducer: Reducer<any, any> = combineReducers({
  auth: authReducer,
});

const store: ToolkitStore = configureStore({
  reducer: rootReducer,
});

export default store;
