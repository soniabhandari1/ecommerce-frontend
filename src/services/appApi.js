import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//create api that works for how to access info through backend by creating slices

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
          url: "/products",
          body: product,
          method: "POST",
      }),
  }),
  }),
});

export const{useSignupMutation,useLoginMutation,useCreateProductMutation,}=appApi;  //for mutations usage endpoints are referenced as  useSignupMutation

export default appApi;
