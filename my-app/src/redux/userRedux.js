import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    registerRequest: state => {
      state.isFetching = true;
      state.error = null;
    },
    registerSuccess: (state) => {
        state.isFetching = false;
    },
    registerFailure: (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut, registerRequest, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;
