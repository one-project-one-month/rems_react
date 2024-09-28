import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { Client } from "../../../type/type";

interface Response {    
    data: Client;
}

export const userIdApi = createApi({
    reducerPath: "userIdApi",
    baseQuery: baseUrl,
    tagTypes: ['dashboard'],
    endpoints: (builder) => ({
        getClientUserId: builder.query<Response, { userId?: number}>({
            query: ({userId}) => (
                {
                    url: `clients/Users/${userId}`,
                    method: 'GET',
                }
            ),
            providesTags: ['dashboard'],
        }),
    })
});

export const { useGetClientUserIdQuery } = userIdApi;

export default userIdApi;
