import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";



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
      const cookies = parseCookies();
      headers.set("Authorization", `Bearer ${cookies.nToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createAssignment: builder.mutation<Assignment, CreateAssignmentDto>({
      query: (assignmentDto) => ({
        url: "/",
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

export type CreateAssignmentDto = {
  address: string;
  assignment_date: string;
  assignment_title: string;
  city_id: number;
  country_id: number;
  assignment_description: string;
  execution_time_minutes: number;
  worth: number;
  executor_rating_by_customer: null;
  customer_rating_by_executor: null;
  assignment_id: number;
  assignment_status: number;
  views: number;
  assignment_creation_date: string;
  assignment_update_date: string;
  customer: {
    customer_id: number;
    full_name: string;
    user_photo: string;
  };
  customer_languages_id: number[];
  required_languages_id: number[];
};

type Assignment = Omit<
  CreateAssignmentDto,
  "customer_languages_id" | "required_languages_id"
> & {
  customer: {
    customer_id: number;
    full_name: string;
    user_photo: string | null;
  };
  executor_rating_by_customer: null;
  customer_rating_by_executor: null;
  assignment_id: number;
  assignment_status: number;
  views: number;
  assignment_creation_date: string;
  assignment_update_date: string;
  executor: {
    executor_id: number | null;
    full_name: string | null;
    user_photo: string | null;
  };
};

export type AssignmentByIDRes = Assignment & {
  candidates: {
    candidatesCount: number;
    candidates: number[];
  };
};
type SortedAssignmentsDto = {
  limit?: number;
  location?: "city" | "country";
  location_id?: number;
  matchinglang?: number[];
};
export type AssignmentListItem = {
  assignment_id: number;
  assignment_date: string;
  worth: number;
  country_id: number;
  city_id: number;
  assignment_title: string;
  assignment_description: string;
  required_languages_id: number[];
  customer_languages_id: number[];
};
export type SortedAssignmentsRes = {
  totalCount: number;
  assigments: AssignmentListItem[];
};
