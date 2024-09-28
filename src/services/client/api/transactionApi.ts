import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { TransApiResponse } from "../../../type/type";

export interface TTransactionHistory {
  appointmentId: number;
  agentName: string;
  clientName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "pending" | "confirmed" | "done";
  notes?: string;
}

// export interface TCreatePostRequest {
//   clientId: number;
//   propertyId: number;
//   appointmentDate: string;
//   appointmentTime: Date | null;
//   status: string;
//   notes: string;
// }

export interface CreateTransactionRequest {
  propertyId: number;
  clientId: number;
  transactionDate: string;
  salePrice: number;
  commission: number;
  status: string;
}

export const transactionApi = createApi({
  reducerPath: "transactionHistory",
  baseQuery: baseUrl,
  tagTypes: ["appointments"],
  endpoints: (builder) => ({
    createTransaction: builder.mutation<void, CreateTransactionRequest>({
      query: (newTransaction) => ({
        url: `transactions`,
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ["appointments"],
    }),

    getAllTransactionByClientId: builder.query<
      TransApiResponse,
      { clientId: number; pageNumber: number; pageSize: number }
    >({
      query: ({ clientId, pageNumber, pageSize }) =>
        `transactions/Client?clientId=${clientId}&pageNo=${pageNumber}&pageSize=${pageSize}`,
      providesTags: ["appointments"]
    }),
  }),
});

export const {
  useCreateTransactionMutation,
  useGetAllTransactionByClientIdQuery,
} = transactionApi;
