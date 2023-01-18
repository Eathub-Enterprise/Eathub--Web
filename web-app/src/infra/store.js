import { configureStore } from "@reduxjs/toolkit";
import { snackbarReducer } from "./slice/snackbarSlice";
import { vendorReducer } from "./slice/vendorSlice";

const store = configureStore({
  reducer: {
    vendor: vendorReducer,
    snackbar: snackbarReducer
  },
});

export default store;
