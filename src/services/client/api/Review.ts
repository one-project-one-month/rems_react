import { createApi} from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

export interface Review {
  userId: number;
  propertyId: number;
  rating: number;
  comments: string;
}

export const clientReviewApi = createApi({
  reducerPath: "review",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllProperties: builder.query<Review[], void>({
      query: () => ({
        url: "review",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllPropertiesQuery } = clientReviewApi;

export default clientReviewApi;
