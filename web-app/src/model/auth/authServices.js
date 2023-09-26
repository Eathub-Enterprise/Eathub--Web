import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (Headers, { getState }) => {
      // const token = getState().auth.token;
      const token = JSON.parse(localStorage.getItem("vendor"));
      if (token) {
        Headers.set("authorization", `Token ${token.auth_token}`);
        return Headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getVendorProfile: builder.query({
      query: () => ({
        url: `${URL}/vendor/profile/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetVendorProfileQuery } = authApi;
