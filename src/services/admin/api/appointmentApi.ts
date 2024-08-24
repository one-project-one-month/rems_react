import { createApi } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../../app/hook';

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => 'appointments/GetAppointmentByClientId/1/1/10', 
    }),
  }),
});

export const { useGetAppointmentsQuery } = appointmentApi;

export default appointmentApi;
