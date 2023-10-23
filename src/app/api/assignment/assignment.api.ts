import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.nToken;

const BASE_URL = "http://localhost:3000/assignment";

export const assignmentApiSlice = createApi({
  reducerPath: "assignmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createAssignment: builder.mutation<Assignment, AssignmentDto>({
      query: (assignmentDto) => ({
        url: "/registration",
        method: "POST",
        body: assignmentDto,
      }),
    }),
    getAssignmentByID: builder.query<AssignmentByIDResponse, number>({
      query: (assignmentID) => `/${assignmentID}`,
    }),
    getSortedAssignment: builder.query<
      SortedAssignmentsResponse,
      SortedAssignmentsDto
    >({
      query: (assignmentQuery) => `/sort`,
    }),
  }),
});

export const {
  useCreateAssignmentMutation,
  useGetSortedAssignmentQuery,
  useGetAssignmentByIDQuery,
} = assignmentApiSlice;

type AssignmentDto = {
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

type Assignment = {
  customer_id: number;
  executor_rating_by_customer: null;
  customer_rating_by_executor: null;
  assignment_id: number;
  assignment_status: number;
  views: number;
  assignment_creation_date: string;
  assignment_update_date: string;
} & AssignmentDto;

type AssignmentByIDResponse = {
  candidates: {
    candidatesCount: number;
    candidates: number[];
  };
  assigment: Assignment;
};

type SortedAssignmentsDto = {
  limit?: number;
  location?: string;
  location_id?: number;
  matchinglang?: number[];
};

type SortedAssignmentsResponse = {
  totalCount: number;
  assigments: [] & Omit<Assignment, "customer_id">;
};

("http://localhost:3000/assignment/sort?matchinglang=2&matchinglang=3&location=city&location_id=10&limit=10")