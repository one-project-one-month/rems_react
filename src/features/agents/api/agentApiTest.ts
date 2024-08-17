import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

// Define the Agent interface
export interface Agent {
	id: number;
	name: string;
}

// Create the API slice
export const agentApiTest = createApi({
	reducerPath: "agentApi",
	baseQuery: baseUrl,
	tagTypes: ["Agent"],
	endpoints: (builder) => ({
		agentIndex: builder.query<Agent[], void>({
			query: (id) => ({
				url: `agents/SearchUser/${id}`,
				method: "GET",
			}),
			providesTags: ["Agent"],
		}),
	}),
});

type UseAgentIndexQueryType = ReturnType<typeof agentApiTest.useAgentIndexQuery>;

export const { useAgentIndexQuery } = agentApiTest;

export default agentApiTest;
