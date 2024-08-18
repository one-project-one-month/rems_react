import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TAppointmentHistory {
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
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
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

// I have no idea why rtk query yielding :")
export const { useGetAppointmentHistoryQuery, usePostAppointmentMutation } =
  appointmentApi;
