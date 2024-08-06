export interface Appointment {
  id: number;
  agentId: number;
  property: string;
  clientName: string;
  appointmentDate: Date;
  appointmentTime: Date;
  status: string;
  note: string;
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  id: string;
  name: string;
}

const DEFAULT_URL = "http://localhost:3000";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${DEFAULT_URL}` }),
  tagTypes: ["Appointment"],
  endpoints: (build) => ({
    getAppointmentsByAgentId: build.query<Appointment[], number>({
      query: (id) => `appointments/?agentId=${id}`,
      providesTags: (result, error, id) => {
        console.log(id , "Dwadd");
        
        return [{ type: "Appointment", id }]
      }
    }),

    updateAppointmentsStatus: build.mutation<void,{ id: number; appointmentId: number, data: { status: string } }>({
      query: ({ id, appointmentId, data }) => {
        console.log(id);
        return {
          url: `appointments/${appointmentId}`,
          method: "PATCH",
          body: JSON.stringify(data),
        };
      },
      invalidatesTags: (result, error, { id  }) => {
        console.log(id);
        
        return [{ type: "Appointment", id }]
      }
    }),
  }),
});

export const {
  useGetAppointmentsByAgentIdQuery,
  useUpdateAppointmentsStatusMutation
} = api;
