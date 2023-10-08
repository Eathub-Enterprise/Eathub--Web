// This is where we write our actions
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../api";

export const vendorRegister = createAsyncThunk(
  "auth/register",
  async (data = {}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(URL + `/user/create/vendor/`, data, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const vendorLogin = createAsyncThunk(
  "auth/login",
  async ({ vendor_name, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        URL + "/token/login",
        { vendor_name, password },
        config
      );
      localStorage.setItem("vendor", JSON.stringify(data));
      // console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
