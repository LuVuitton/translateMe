import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000/assignment";

export const assignmentApiSlice = createApi({
  reducerPath: "assignmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    createAssignment: builder.mutation<void, Assignment>({
      query: (assignmentDto) => ({
        url: "/registration",
        method: "POST",
        body: assignmentDto,
      }),
    }),
  }),
});

export const { useCreateAssignmentMutation } = assignmentApiSlice;

// POST

type Assignment = {
  customer_id: number;
  worth: number;
  assignment_data: string;
  address: string;
  country_id: number;
  city_id: number;
  required_languages_id: number[];
  customer_languages_id: number[];
  assignment_title: string;
  assignment_description: string;
  execution_time_minutes: number;
};
