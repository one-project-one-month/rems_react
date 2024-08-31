import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { AgentData } from "../../../type/type";

// Define the Client type

export const agentApi = createApi({
  reducerPath: "agentApi",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllAgent: builder.query<AgentData, void>({
      query: () => ({
        url: "agents",
        method: "GET",
      }),
    }),
    createAgent: builder.mutation({
      query: (data) => ({
        url: "agents",
        method: "POST",
        body: data,
      }),
    }),
    getAgentById: builder.query({
      query: (id) => ({
        url: `agents/${id}`,
        method: "GET",
      }),
    }),
    updateAgentById: builder.mutation({
      query: ({ data, id }) => ({
        url: `agents/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteAgent: builder.mutation<void, number>({
      query: (id) => ({
        url: `agents/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the hooks
export const {
  useGetAllAgentQuery,
  useCreateAgentMutation,
  useGetAgentByIdQuery,
  useUpdateAgentByIdMutation,
  useDeleteAgentMutation,
} = agentApi;

// Export the entire API for use in the store
export default agentApi;
