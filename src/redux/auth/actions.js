import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../api/auth";

export const login = createAsyncThunk("auth/login", async (data) => {
  const { formValues, navigate, toast } = data;
  try {
    const res = await authApi.login({
      email: formValues.email,
      password: formValues.password,
    });
    if(res.status === 200){
      navigate("/");
      return
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
  }
});
