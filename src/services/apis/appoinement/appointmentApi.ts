import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dayjs from "dayjs";



export interface TAppointmentHistory {
  appointmentId: string;
  agentName: string;
  propertyName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "Pending" | "Confirmed" | "Done";
  notes?: string;
}

export interface TCreatePostRequest{
  clientId : number,
  propertyId: number,
  appointmentDate: string,
  appointmentTime:string,
  status: string,
  notes: string
}

export const appointmentApi = createApi({
  reducerPath: "appointmentHistory",
  baseQuery: fetchBaseQuery({ baseUrl: "http://65.18.112.78:44010/rems/api/v1" }),
  tagTypes: ["appointments"],
  endpoints: (builder) => ({
    getAppointmentHistory: builder.query<TAppointmentHistory[], void>({
      query: () => "appointments",
      providesTags: ["appointments"],
    }),
    postAppointment: builder.mutation<TAppointmentHistory,TCreatePostRequest>({
      
      query:(newAppointment)=>({
        url:"appointments",
        method:"POST",
        body:newAppointment
      })
    })
  }),
});

// I have not idea why rtk query yielding :") "
export const { useGetAppointmentHistoryQuery,usePostAppointmentMutation } = appointmentApi;
