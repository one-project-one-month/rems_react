import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

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
  
  
  export interface Post {
	id: string;
	name: string;
  }
  
  
  export const AgentAppoimentApi = createApi({
	baseQuery: baseUrl,
	tagTypes: ["Appointment"],
	endpoints: (build) => ({
	  getAppointmentsByAgentId: build.query<Appointment[], number>({
		query: (id) => `appointments/?agentId=${id}`,
		providesTags: (result, error, id) => {
		  console.log(id , "Dwadd");
		  
		  return [{ type: "Appointment", id }]
		}
	  }),
  
	  updateAppointmentsStatus:  build.mutation<void,{ id: number; appointmentId: number, data: { status: string } }>({
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
  } = AgentAppoimentApi;