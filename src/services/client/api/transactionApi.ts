import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { TResponse } from "../../../type/type";

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
  }),
});

export const { useGetTranscationHistoryQuery } = transactionApi;
