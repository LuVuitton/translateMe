import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000/auth"; // Замените на ваш базовый URL

export const authApiSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    registration: builder.mutation<RegistrationResponse, RegistrationDto>({
      query: (registrationData) => ({
        url: "/registration",
        method: "POST",
        body: registrationData,
      }),
    }),
    login: builder.mutation<UserType, LoginDto>({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = authApiSlice;

export type RegistrationDto = {
  full_name: string;
} & LoginDto;

export type LoginDto = {
  email: string;
  password: string;
};

export type RegistrationResponse = {
  user_id: number;
  full_name: string;
  email: string;
  user_registration_date: string;
  token: string;
};

export type UserType = {
  user_photo: string | null;
  country_id: number | null;
  city_id: number | null;
  user_update_date: string;
} & RegistrationResponse;


