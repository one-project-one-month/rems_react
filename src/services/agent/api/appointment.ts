import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

export interface Appointment {
  appointmentId: number ;
  agentName: string;
  clientName: string;
  appointmentDate: string;
  appointmentTime: string;
  agentPhoneNumber: string ;
  status: string;
  note: string ;
  address: string;
  city: string;
  state: string;
  price: number;
  size: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
}

export interface AppointmentsResponse {
  isSuccess: boolean;
  isError: boolean;
  data: {
    pageSetting: {
      totalCount: number;
      pageSize: number;
      isEndOfPage: boolean;
    };
    appointmentDetails: Appointment[];
  };
  message: string;
}

export const AgentAppointmentApi = createApi({
  baseQuery: baseUrl,
  tagTypes: ["Appointment"],
  endpoints: (build) => ({
    getAppointmentsByAgentId: build.query<AppointmentsResponse, { id: number; pageNo: number; pageSize: number }>({
      query: ({ id, pageNo, pageSize }) => `appointments/property/${id}/${pageNo + 1}/${pageSize}`,
   	providesTags: ['Appointment']
    }),

    updateAppointmentsStatus: build.mutation<void, { id: number; appointmentId: number; data: { status: string } }>({
      query: ({ appointmentId, data }) => ({
        url: `appointments/${appointmentId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Appointment", id }],
    }),
  }),
});

export const {
  useGetAppointmentsByAgentIdQuery,
  useUpdateAppointmentsStatusMutation
} = AgentAppointmentApi;