import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TAppointmentHistory {
  appointmentId: string;
  agentName: string;
  propertyName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "Pending" | "Confirmed" | "Done";
  notes?: string;
}

export const appointmentApi = createApi({
  reducerPath: "appointmentHistory",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["appointment"],
  endpoints: (builder) => ({
    getAppointmentHistory: builder.query<TAppointmentHistory[], void>({
      query: () => "appointment",
      providesTags: ["appointment"],
    }),
  }),
});

// I have not idea why rtk query yielding :") "
export const { useGetAppointmentHistoryQuery } = appointmentApi;
