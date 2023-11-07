import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../auth/auth.api";
import { parseCookies } from "nookies";

const BASE_URL = "http://localhost:3000/user";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const cookies = parseCookies();
      headers.set("Authorization", `Bearer ${cookies.nToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.query<MeResponse, void>({
      query: () => `/me`,
    }),

    getUser: builder.query<MeResponse, { userID: number }>({
      query: ({ userID }) => `/${userID}`,
    }),
  }),
});

export const { useGetMeQuery, useGetUserQuery } = userApiSlice;

export type MeResponse = Omit<UserType, "token">;
