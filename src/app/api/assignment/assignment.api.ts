import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.nToken;

const BASE_URL = "http://localhost:3000/assignment";

const generateSortQuery = (dto: SortedAssignmentsDto) => {
  const limit = dto.limit ? `limit=${dto.limit}&` : "";
  const location =
    dto.location && dto.location_id
      ? `location=${dto.location}&location_id=${dto.location_id}&`
      : "";
  let matchinglang = "";
  if (dto.matchinglang) {
    matchinglang = dto.matchinglang.map((e) => `matchinglang=${e}&`).join("");
  }

  return `?${limit}${location}${matchinglang}`;
};

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
    getAssignmentByID: builder.query<AssignmentByIDRes, number>({
      query: (assignmentID) => `/${assignmentID}`,
    }),
    getSortedAssignment: builder.query<
      SortedAssignmentsRes,
      SortedAssignmentsDto
    >({
      query: (assignmentQuery) => {
        const generetedString = generateSortQuery(assignmentQuery);

        return `/sort${generetedString}`;
      },
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
type AssignmentByIDRes = {
  candidates: {
    candidatesCount: number;
    candidates: number[];
  };
  assigment: Assignment;
};
type SortedAssignmentsDto = {
  limit?: number;
  location?: "city" | "country";
  location_id?: number;
  matchinglang?: number[];
};
type SortedAssignmentsRes = {
  totalCount: number;
  assigments: [] & Omit<Assignment, "customer_id">;
};
