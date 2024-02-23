import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (Headers, { getState }) => {
      // let access_token = getState().auth.auth_token;
      // console.log(access_token);
      const token = JSON.parse(localStorage.getItem("vendor"));
      if (token) {
        Headers.set("Authorization", `Bearer ${token.access}`);
        return Headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getVendorProfile: builder.query({
      query: (email) => ({
        url: `${URL}accounts/vendor/details`,
        params: { search: email },
        method: "GET",
      }),
    }),
    getOrderedMeal: builder.query({
      query: () => ({
        url: `${URL}get_ordered_items_or_change status/null/`,
        method: "GET",
      }),
    }),
    getMenuList: builder.query({
      query: () => ({
        url: `${URL}menu/food/create_or_getAll`,
        method: "GET",
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${URL}accounts/vendor/details`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetVendorProfileQuery,
  useGetOrderedMealQuery,
  useGetMenuListQuery,
  useUpdateProfileMutation,
} = authApi;
