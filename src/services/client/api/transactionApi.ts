import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { CTransactionResponse, TResponse, TransApiResponse } from "../../../type/type";

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
  reducerPath: "appointmentHistory",
  baseQuery: baseUrl,
  tagTypes: ["appointments"],
  endpoints: (builder) => ({
    getTranscationHistory: builder.query<
      TResponse<TAppointmentHistory>,
      number[]
    >({
      query: (idArray) =>
        `appointments/GetAppointmentByClientId/${idArray.join("/")}`,
      providesTags: ["appointments"],
    }),

    createTransaction: builder.mutation<void, CreateTransactionRequest>({
      query: (newTransaction) => ({
        url: `transactions`,
        method: "POST",
        body: newTransaction,
      }),
    }),

    getAllTransactionByClientId : builder.query<TransApiResponse,{clientId:number,pageNumber:number,pageSize:number}>({
      query:({clientId,pageNumber,pageSize})=>`transactions/Client?clientId=${clientId}&pageNo=${pageNumber}&pageSize=${pageSize}`
    })
  }),
});

export const {
  useGetTranscationHistoryQuery, 
  useCreateTransactionMutation ,
  useGetAllTransactionByClientIdQuery} = transactionApi;
