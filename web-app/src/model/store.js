import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { authApi } from "./auth/authServices";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
