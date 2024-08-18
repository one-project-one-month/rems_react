import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

export interface TAppointmentHistory {
  appointmentId: number;
  agentName: string;
  clientName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "pending" | "confirmed" | "done";
  notes?: string;
}

export interface TAppointmentHistoryResponse {
  isSuccess: boolean;
  isError: boolean;
  data: {
    totalCount: number;
    pageSize: number;
    isEndOfPage: boolean;
    appointmentDetails: TAppointmentHistory[];
  };
}

export interface TCreatePostRequest {
  clientId: number;
  propertyId: number;
  appointmentDate: string;
  appointmentTime: Date | null;
  status: string;
  notes: string;
}

export const appointmentApi = createApi({
  reducerPath: "appointmentHistory",
  baseQuery: baseUrl,
  tagTypes: ["appointments"],
  endpoints: (builder) => ({
    getAppointmentHistory: builder.query<TAppointmentHistoryResponse, any>({
      query: (idArray) =>
        `appointments/GetAppointmentByClientId/${idArray.join("/")}`,
      providesTags: ["appointments"],
    }),
    postAppointment: builder.mutation<TAppointmentHistory, TCreatePostRequest>({
      query: (newAppointment) => ({
        url: "appointments",
        method: "POST",
        body: newAppointment,
      }),
    }),
  }),
});

export const { useGetAppointmentHistoryQuery, usePostAppointmentMutation } =
  appointmentApi;
