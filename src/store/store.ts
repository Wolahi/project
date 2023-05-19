import { configureStore } from "@reduxjs/toolkit";
import { mapReducer } from "./map/map.slice";
import { pointReducer } from "./map/point.slice";

export const store = configureStore({
  reducer: { mapCenter: mapReducer, point: pointReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
