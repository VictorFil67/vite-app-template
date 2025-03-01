import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../api/api";

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("auth/signup", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signin",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("auth/signin", body);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  "auth/getCurrent",
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (accessToken) {
        setToken(accessToken);
      } else {
        return thunkAPI.rejectWithValue("AccessToken is not exist");
      }
      const { data } = await api("auth/getCurrent");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message ?? error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.post("auth/logout");
      clearToken();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message ?? error.message);
    }
  }
);
