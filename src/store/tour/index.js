import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    loading: false,
    tour: {},
    tours: [],
    error: {},
    selectedTour: {},
    usersTours: [],
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
    },
    [actions.fetchAllTours.rejected]: (state, action) => {
      state.loading = false;
    },
    // FETCH TOUR BY /:id
    [actions.fetchTourById.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.fetchTourById.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectedTour = action.payload.data;
    },
    [actions.fetchTourById.rejected]: (state, action) => {
      state.loading = false;
    },
    // FETCH TOURS BY user's /:id
    [actions.fetchTourByUserId.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.fetchTourByUserId.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersTours = action.payload.data;
    },
    [actions.fetchTourByUserId.rejected]: (state, action) => {
      state.loading = false;
    },
    // DELETE TOUR
    [actions.deleteTour.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.deleteTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = action.payload.data;
    },
    [actions.deleteTour.rejected]: (state, action) => {
      state.loading = false;
    },
    // SEARCH TOURS
    [actions.searchTours.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.searchTours.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = action.payload.data;
    },
    [actions.searchTours.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default tourSlice.reducer;
