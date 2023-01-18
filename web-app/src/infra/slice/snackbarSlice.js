import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  duration: 0,
};

const snackbarSlice = createSlice({
  name: "OPEN_SNACKBAR",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.duration = action.payload.duration;
    },
    closeSnackbar: (state) => {
      state.open = false;
      state.message = "";
      state.duration = 1000;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export const snackbarReducer = snackbarSlice.reducer