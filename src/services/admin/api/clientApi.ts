import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { ClientData } from "../../../type/type";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllClients: builder.query<ClientData, void>({
      query: () => ({
        url: "clients",
        method: "GET",
      }),
    }),
    createClient: builder.mutation({
      query: (data) => ({
        url: "clients",
        method: "POST",
        body: data,
      }),
    }),
    getClientById: builder.query({
      query: (id) => ({
        url: `clients/${id}`,
        method: "GET",
      }),
    }),
    updateClientById: builder.mutation({
      query: ({ data, id }) => ({
        url: `clients/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteClient: builder.mutation<void, number>({
      query: (id) => ({
        url: `clients/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the hooks
export const {
  useGetAllClientsQuery,
  useCreateClientMutation,
  useGetClientByIdQuery,
  useUpdateClientByIdMutation,
  useDeleteClientMutation,
} = clientApi;

// Export the entire API for use in the store
export default clientApi;
