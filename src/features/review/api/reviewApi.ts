import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import{Review } from "../../../type/type";


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
