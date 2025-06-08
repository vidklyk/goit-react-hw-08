import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken, clearToken } from "../contacts/api";
import authInstance, { setAuthHeader, clearAuthHeader } from "./api";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await authInstance.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await authInstance.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(persistedToken);
      setToken(persistedToken);
      const res = await authInstance.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authInstance.post("/users/logout");
    clearAuthHeader();
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
