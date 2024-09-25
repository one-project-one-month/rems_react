import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {  PropertiesResponse } from '../../../agents/property-list/data-for-agent/propertyData'; 

// Define the API slice
export const propertyListApi = createApi({
  reducerPath: 'propertyListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://65.18.112.78:44010/rems/api/v1' }),
  endpoints: (builder) => ({
    getProperties: builder.query<{ data: PropertiesResponse }, { 
      page: number, 
      limit: number,
      city?: string
    }>({
      query: ({ page, limit, city }) => {
         let queryStr = `properties/${page}/${limit}`;
         if (city) {
          queryStr += `?city=${encodeURIComponent(city)}`
         }
         return queryStr;
      },
    }),
  }),
});

// Export the auto-generated hook for the `getProperties` query
export const { useGetPropertiesQuery } = propertyListApi;