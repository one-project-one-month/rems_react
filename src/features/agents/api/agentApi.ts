import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

// Define the Agent interface
export interface Agent {
	id: number;
	name: string;
}

// Create the API slice
export const agentApi = createApi({
	reducerPath: "agentApi",
	baseQuery: baseUrl,
	tagTypes: ["Agent"],
	endpoints: (builder) => ({
		agentIndex: builder.query<Agent[], void>({
			query: () => ({
				url: "clients",
				method: "GET",
			}),
			providesTags: ["Agent"],
		}),
		//     userShow: builder.query({
		// 		query: (id) => ({
		// 			url: `user/${id}`,
		// 			method: "GET",
		// 		}),
		// 		providesTags: ["userList"],
		// 	}),
		// 	userStore: builder.mutation({
		// 		query: (data) => ({
		// 			url: "user",
		// 			method: "POST",
		// 			body: data,
		// 		}),
		// 		invalidatesTags: ["userList"],
		// 	}),
		// 	userUpdate: builder.mutation({
		// 		query: ({ data, id }) => ({
		// 			url: `user/${id}`,
		// 			method: "PATCH",
		// 			body: data,
		// 		}),
		// 		invalidatesTags: ["userList"],
		// 	}),
		// 	userDelete: builder.mutation({
		// 		query: (id) => ({
		// 			url: `user/${id}`,
		// 			method: "DELETE",
		// 		}),
		// 		invalidatesTags: ["userList"],
		// 	}),
		// }),
	}),
});

type UseAgentIndexQueryType = ReturnType<typeof agentApi.useAgentIndexQuery>;

export const { useAgentIndexQuery } = agentApi;

export default agentApi;
