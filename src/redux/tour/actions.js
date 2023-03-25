import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tourApi from "api/tour";

export const create = createAsyncThunk("tour/create", async (config) => {

  const res = await tourApi.create(config);
  return res.data;
});

export const fetchAllTours = createAsyncThunk("tour/fetchAllTours", async (config) => {
  const res = await tourApi.fetchAllTours(config);
  return res.data;
});

export const fetchTourById = createAsyncThunk("tour/fetchTourById", async (config) => {
  const res = await tourApi.fetchTourById(config);
  return res.data;
});

export const fetchTourByUserId = createAsyncThunk("tour/fetchTourByUserId", async (config) => {
  const res = await tourApi.fetchTourByUserId(config);
  return res.data;
});

export const deleteTour = createAsyncThunk("tour/deleteTour", async (config) => {
  const res = await tourApi.deleteTour(config);
  return res.data;
});

export const updateTour = createAsyncThunk("tour/updateTour", async (config) => {
  const res = await tourApi.updateTour(config);
  return res.data;
});

