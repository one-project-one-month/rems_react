import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";


export const appoimentApi = createApi({
	reducerPath: "appoimentApi",
	baseQuery: baseUrl,
	tagTypes: ["appoiments"],
	endpoints: (builder) => ({
		// getAllProperties: builder.query<Appoiment[] ,void>({
		// 	query: () => ({
		// 		url: `appoiments`,
		// 		method: "GET",
		// 	}),
		// 	providesTags: ['appoiments']
		// }),
	
	}),
});

// Export the hooks
export const { } =
	appoimentApi;

export default appoimentApi;
