import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentThunk,
  logOutThunk,
  signInThunk,
  signUpThunk,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    accessToken: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      })
      .addCase(getCurrentThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = null;
        state.accessToken = "";
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});
console.log("authSlice: ", authSlice);
export const authReducer = authSlice.reducer;
