import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import {Properties} from "../../../type/type";


export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    getAllProperties: builder.query<Properties[], void>({
      query: () => ({
        url: "properties",
        method: "GET",
      }),
    }),
    deleteProperty: builder.mutation<void, number>({ 
      query: (id) => ({
        url: `properties/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the hooks
export const { useGetAllPropertiesQuery, useDeletePropertyMutation } = propertiesApi; 


export default propertiesApi;
