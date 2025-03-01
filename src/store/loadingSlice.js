import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getCurrentThunk,
  logOutThunk,
  signInThunk,
  signUpThunk,
} from "./auth/operations";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          getCurrentThunk.pending,
          logOutThunk.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          getCurrentThunk.fulfilled,
          logOutThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          getCurrentThunk.rejected,
          logOutThunk.rejected
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
