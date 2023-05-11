import { configureStore } from "@reduxjs/toolkit";
import { mapReducer } from "./map/map.slice";

export const store = configureStore({
  reducer: { mapCenter: mapReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
