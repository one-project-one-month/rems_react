import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { TResponse } from "../../../type/type";

export interface TAppointmentHistory {
  appointmentId: number;
  agentName: string;
  clientName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "pending" | "confirmed" | "done";
  notes?: string;
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
    getAppointmentHistory: builder.query<
      TResponse<TAppointmentHistory>,
      number[]
    >({
      query: (idArray) =>
        `appointments/client/${idArray.join("/")}`,
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
