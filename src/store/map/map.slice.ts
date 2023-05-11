import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface mapConfig {
  center: number[];
  zoom: number;
}

const initialState: mapConfig = {
  center: [0, 0],
  zoom: 11,
};
const mapSlice = createSlice({
  name: "mapCenter",
  initialState,
  reducers: {
    addToMapCenter: (state, action: PayloadAction<mapConfig>) => {
      // eslint-disable-next-line
      state = action.payload;
      return state;
    },
  },
});

export const mapReducer = mapSlice.reducer;
export const mapAction = mapSlice.actions;
