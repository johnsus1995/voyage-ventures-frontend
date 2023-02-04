import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../api/auth";

export const login = createAsyncThunk("auth/login", async (data) => {
  // debugger;
  console.log(data);
  const { formValues, navigate, toast } = data;
  try {
    const res = await authApi.login({
      email: formValues.email,
      password: formValues.password,
    });
  } catch (error) {
    console.log(error);
  }
});
