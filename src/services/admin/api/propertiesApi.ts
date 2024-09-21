import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { Properties, ChangeStatus, PropertyResponse } from "../../../type/type";

export const propertiesApi = createApi({
	reducerPath: "propertiesApi",
	baseQuery: baseUrl,
	tagTypes: ["properties"],
	endpoints: (builder) => ({
		getAllProperties: builder.query<Properties[], { pageNumber: number, pageSize: number }>({
			query: ({ pageNumber, pageSize }) => ({
				url: `properties/${pageNumber}/${pageSize}`,
				method: "GET",
			}),
			providesTags: ['properties']
		}),
		getPropertyById: builder.query<void, number | undefined>({
			query: (propertyId) => ({
				url: `properties/${propertyId}`,
                method: "GET",
			}),
			providesTags: ["properties"],
		}),
		deleteProperty: builder.mutation<void, number>({
			query: (id) => ({
				url: `properties/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ['properties']
		}),
		changestatus: builder.mutation<void, ChangeStatus>({
			query: (changestatus) => ({
				url: `properties/ChangeStatus`,
				method: "PUT",
				body: changestatus,
			}),
			invalidatesTags: ['properties']
		}),
	}),
});

// Export the hooks
export const { useGetAllPropertiesQuery, useGetPropertyByIdQuery, useDeletePropertyMutation, useChangestatusMutation } =
	propertiesApi;

export default propertiesApi;
