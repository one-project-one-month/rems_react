import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

// Define the Client type
export interface Client {
  id: number;
  name: string;
  // Add other properties as needed
}

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllClients: builder.query<Client[], void>({
      query: () => ({
        url: "clients",
        method: "GET",
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
export const { useGetAllClientsQuery, useDeleteClientMutation } = clientApi;

// Export the entire API for use in the store
export default clientApi;
