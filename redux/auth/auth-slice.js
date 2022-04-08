import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth-api';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.logIn.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(authApi.endpoints.logOut.matchFulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchPending,
      state => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchRejected,
      state => {
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export default authSlice.reducer;
