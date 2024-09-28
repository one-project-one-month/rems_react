import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Agent {
  agentId: number,
  userId: number,
  agentName: string,
  agencyName: string,
  licenseNumber: string,
  email: string,
  phone: string,
  address: string,
  role: string
}

interface AgentResponse {
  data: Agent
}

export const apiAgentSlice = createApi({
  reducerPath: 'getAgentapi',  
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://65.18.112.78:44010/rems/api/v1/',
  }),
  endpoints: (builder) => ({
    getAgentByUserId: builder.query<AgentResponse, (number | undefined)>({
      query: (id) => `agents/Users/${id}`, 
    }),
  }),
});


export const { useGetAgentByUserIdQuery } = apiAgentSlice;