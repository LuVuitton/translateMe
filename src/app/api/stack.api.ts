import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:7777/stack'; // Замените на ваш базовый URL

export const stackApiSlice = createApi({
  reducerPath: "stackApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => '/', // Путь к вашему эндпоинту
    }),
  }),
});

export const { useGetUsersQuery } = stackApiSlice;

