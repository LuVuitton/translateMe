import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";



const BASE_URL = "http://localhost:3000/candidates";

export const candidatesApiSlice = createApi({
  reducerPath: "candidatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const cookies = parseCookies();
      headers.set("Authorization", `Bearer ${cookies.nToken}`);
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
    getCandidatesByAsID: builder.query<getCandidatesByAsIDRes, number>({
      query: (assignmentID) => `/${assignmentID}`,
    }),
  }),
});

export const {
  useAddMeAsCandidateMutation,
  useDeleteMeAsCandidateMutation,
  useGetCandidatesByAsIDQuery,
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


