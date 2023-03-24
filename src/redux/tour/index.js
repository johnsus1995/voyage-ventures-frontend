import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    loading: false,
    tour: {},
    tours:[],
    error: {},
  },
  extraReducers: {
    // CREATE TOUR
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
    // FETCH ALL TOURS
    [actions.fetchAllTours.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.fetchAllTours.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = action.payload.data;
      // debugger
    },
    [actions.fetchAllTours.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default tourSlice.reducer;
