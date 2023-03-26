import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [actions.login.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem(
        "user_token",action?.payload?.token
      );
    },
    [actions.login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [actions.register.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.register.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [actions.register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
