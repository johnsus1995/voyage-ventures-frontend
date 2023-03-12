import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    loading: false,
    tour: {},
    error: {},
  },
  extraReducers: {
    [actions.create.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.create.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = action.payload.data;
    },
    [actions.create.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default tourSlice.reducer;
