import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (s, { payload }) => {
        s.user = payload.user;
        s.token = payload.token;
        s.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (s, { payload }) => {
        s.user = payload.user;
        s.token = payload.token;
        s.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (s) => {
        s.user = { name: null, email: null };
        s.token = null;
        s.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (s) => {
        s.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (s, { payload }) => {
        s.user = payload;
        s.isLoggedIn = true;
        s.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (s) => {
        s.isRefreshing = false;
      }),
});

export default authSlice.reducer;
