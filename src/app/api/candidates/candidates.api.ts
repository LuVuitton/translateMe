import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.nToken;

const BASE_URL = "http://localhost:3000/candidates";

export const candidatesApiSlice = createApi({
  reducerPath: "candidatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addMeAsCandidate: builder.mutation<CandidateCDRes, CandidateDto>({
      query: (candidateDto) => ({
        url: "/",
        method: "POST",
        body: candidateDto,
      }),
    }),
    deleteMeAsCandidate: builder.mutation<CandidateCDRes, CandidateDto>({
      query: (candidateDto) => ({
        url: "/",
        method: "DELETE",
        body: candidateDto,
      }),
    }),
    getCandidatesBeAsID: builder.query<getCandidatesByAsIDRes, number>({
      query: (assignmentID) => `/${assignmentID}`,
    }),
  }),
});

export const {
  useAddMeAsCandidateMutation,
  useDeleteMeAsCandidateMutation,
  useGetCandidatesBeAsIDQuery,
} = candidatesApiSlice;

type CandidateDto = {
  assignment_id: number;
};

type CandidateCDRes = {
  message: string;
  assignment_id: number;
  user_id: number;
};

type getCandidatesByAsIDRes = {
  totalCount: number;
  assignment_id: number;
  candidates_ids: number[];
};