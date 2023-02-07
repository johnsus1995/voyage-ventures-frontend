import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../api/auth";

export const login = createAsyncThunk("auth/login", async (data) => {
  const { formValues, navigate, toast } = data;

  const res = await authApi.login({
    email: formValues.email,
    password: formValues.password,
  });
    console.log(res)
    return res
    // toast.error(error.response.data.message)
  
});

export const register = createAsyncThunk("auth/register", async (data) => {
  const { formValues, navigate, toast } = data;
  const res = await authApi.register({
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email,
    password: formValues.password,
    confirm_password: formValues.confirm_password,
  });
  if (res.status === 201) {
    navigate("/");
    toast.success("Account created successfully.");
    return res?.data;
  } else {
    console.log(res);
    // toast.error(error.response.data.message);
  }
});
