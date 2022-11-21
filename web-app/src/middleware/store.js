import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from './vendorSlice';

export const store = configureStore({
    reducer:{
        vendor: vendorReducer
    }
})