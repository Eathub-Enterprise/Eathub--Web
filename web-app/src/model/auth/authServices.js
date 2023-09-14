import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (Headers, { getState }) => {
      const token = getState().auth.auth_token;
      if (token) {
        Headers.set("authorization", `Token ${token}`);
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
