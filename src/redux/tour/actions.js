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