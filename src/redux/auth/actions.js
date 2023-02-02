import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../api/auth";

export const login = createAsyncThunk("auth/login", async (data) => {
  const { formValues, navigate, toast } = data;
  try {
    const res = await authApi.login(formValues);
    debugger;
  } catch (error) {
    console.log(error);
  }
});
