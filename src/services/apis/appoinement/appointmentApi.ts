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

export interface TAppointmentHistoryResponse{
  isSuccess: boolean,
  isError:boolean,
  data: {
    pageSetting: {
      totalCount: number,
      pageSize:number,
      isEndOfPage:boolean
    },
    lstAppointment: TAppointmentHistory[]
  }
}

export interface TCreatePostRequest{
  clientId : number,
  propertyId: number,
  appointmentDate: string,
  appointmentTime:Date | null,
  status: string,
  notes: string
}

export const appointmentApi = createApi({
  reducerPath: "appointmentHistory",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["appointments"],
  endpoints: (builder) => ({
    getAppointmentHistory: builder.query<TAppointmentHistoryResponse,any>({
      query: (idArray) =>  `appointments/${idArray.join('/')}`,
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
