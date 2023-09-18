// all reducers & extrareducers here
import { createSlice } from "@reduxjs/toolkit";
import { vendorLogin, vendorRegister } from "./authAction";

// initialize userToken from local storage
const auth_token = localStorage.getItem("vendor")
  ? localStorage.getItem("vendor")
  : null;

const initialState = {
  loading: false,
  vendor: null,
  error: null,
  success: false,
  auth_token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // this logs for each state: loading, sucess & failure
    [vendorLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [vendorLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.vendor = payload;
    },
    [vendorLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // registering vendor
    [vendorRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [vendorRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [vendorRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setCredentials: (state, { payload }) => {
      state.token = payload;
    }
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
