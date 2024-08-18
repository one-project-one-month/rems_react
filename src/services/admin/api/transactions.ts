import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { Transaction } from "../../../type/type";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllTransactions: builder.query<Transaction[], {pageNumber: number, pageSize: number}>({
      query: ({ pageNumber, pageSize }) => ({
        url: `transactions/${pageNumber}/${pageSize}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTransactionsQuery } = transactionsApi;

export default transactionsApi;
