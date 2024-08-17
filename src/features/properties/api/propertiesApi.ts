import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import {Properties,ChangeStatus} from "../../../type/type";


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
    ChangeStatus : builder.mutation<void ,ChangeStatus>({

      query : (changeStatus) =>({
        url : `properties/ChangeStatus`,
        method : "PUT",
         headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(changeStatus), 
      })

    })

  }),
});

// Export the hooks
export const { useGetAllPropertiesQuery, useDeletePropertyMutation ,useChangeStatusMutation} = propertiesApi; 


export default propertiesApi;
