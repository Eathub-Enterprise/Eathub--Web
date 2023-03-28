import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendor: [],
};

const vendorSlice = createSlice({
  name: "VENDOR_INFO",
  initialState,
  reducers: {
    setVendorInfo: (state, action) => {
      state.value = action.payload;
    },
    setContentType: (state, action) => {
      state.contentType = action.payload.contentType;
    },
  },
});

export const { setVendorInfo, setContentType } = vendorSlice.actions;
export const vendorReducer = vendorSlice.reducer;
