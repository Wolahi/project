import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [0, 0];
const pointSlice = createSlice({
  name: "point",
  initialState,
  reducers: {
    addPoint: (state, action: PayloadAction<number[]>) => {
      // eslint-disable-next-line
      state = action.payload;
      return state;
    },
  },
});

export const pointReducer = pointSlice.reducer;
export const pointAction = pointSlice.actions;
