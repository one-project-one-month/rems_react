import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

export interface Review {
  id: number;
  rating: number;
  comment?: string; 
}

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllReviews: builder.query<Review[], void>({
      query: () => ({
        url: "reviews",
        method: "GET",
      }),
    }),
  }),
});


export const { useGetAllReviewsQuery } = reviewApi;


export default reviewApi;
