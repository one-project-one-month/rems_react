import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { Transaction } from "../../../type/type";
import { CreateTransactionRequest } from "../../client/api/transactionApi";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  baseQuery: baseUrl,
  tagTypes: ['transaction'],
  endpoints: (builder) => ({
    getAllTransactions: builder.query<Transaction[], { pageNumber: number, pageSize: number }>({
      query: ({ pageNumber, pageSize }) => ({
        url: `/transactions?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        method: "GET",
      }),
      providesTags: ['transaction']
    }),
    getTransactionByClientId: builder.query<Transaction[], { clientId: number, pageNumber: number, pageSize: number }>({
      query: ({ clientId, pageNumber, pageSize }) => ({
        url: `transactions/Client?clientId=${clientId}&pageNo=${pageNumber}&pageSize=${pageSize}`,
        method: "GET"
      }),
      providesTags: ['transaction']
    }),
    createTransaction: builder.mutation<void, CreateTransactionRequest>({
      query: (newTransaction) => ({
        url: `transactions`,
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ['transaction']
    }),

  }),
});

export const { useGetAllTransactionsQuery, useGetTransactionByClientIdQuery } = transactionsApi;

export default transactionsApi;
