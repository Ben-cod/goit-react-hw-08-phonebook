import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerFulfilled(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logInFulfilled(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logOutFulfilled(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshUserPending(state) {
      state.isRefreshing = true;
    },
    refreshUserFulfilled(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    refreshUserRejected(state) {
      state.isRefreshing = false;
    },
  },
});

export const {
  registerFulfilled,
  logInFulfilled,
  logOutFulfilled,
  refreshUserPending,
  refreshUserFulfilled,
  refreshUserRejected,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
