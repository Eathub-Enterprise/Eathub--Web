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
      await axios.post(URL + `accounts/user/vendor/create`, data, config);
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
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        URL + "api/token",
        { username, password },
        config
      );
      localStorage.setItem("vendor", JSON.stringify(data));
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

export const vendorRefreshLogin = createAsyncThunk(
  "auth/refresh",
  async ({ refresh }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        URL + "api/token/refresh",
        { refresh },
        config
      );
      localStorage.setItem("vendor-refresh", JSON.stringify(data));
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
