import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.nToken;

const BASE_URL = "http://localhost:3000/reviews";

export const reviewsApiSlice = createApi({
  reducerPath: "candidatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addReview: builder.mutation<Review, addReviewDto>({
      query: (reviewDto) => ({
        url: "/",
        method: "POST",
        body: reviewDto,
      }),
    }),
    getReviewsByUser: builder.query<ReviewsByUserRes, number>({
      query: (userID) => `/${userID}`,
    }),
  }),
});

export const {useAddReviewMutation,useGetReviewsByUserQuery,} = reviewsApiSlice;

type addReviewDto = {
  recipient_id: number;
  review_text: string;
};
type ReviewsByUserRes = {
  userID: number;
  totaCounts: number;
  userReviews: Array<Omit<Review, "recipient_id" | "review_id">>;
};
type Review = {
  reviewer_id: number;
  review_text: string;
  review_id: number;
  recipient_id: number;
  review_creation_date: string;
};
