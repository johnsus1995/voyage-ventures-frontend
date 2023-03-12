import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tourApi from "api/tour"

export const create = createAsyncThunk("tour/create", async (config)=>{
    const res = await tourApi.create(config)
    return res.data
})