import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";
import { Properties ,ChangeStatus} from "../../../type/type";

// export interface Properties {
// 	property_id: number;
// 	agent: string;
// 	address: string;
// 	city: string;
// 	state: string;
// 	zip_code: string;
// 	property_type: string;
// 	price: number;
// 	size: number;
// 	number_of_bedrooms: number;
// 	number_of_bathrooms: number;
// 	year_built: number;
// 	description: string;
// 	status: string;
// 	availability_type: string;
// 	min_rental_period: number;
// 	approved_by: string;
// 	add_date: Date;
// 	edit_date: Date;
// }

export const propertiesApi = createApi({
	reducerPath: "propertiesApi",
	baseQuery: baseUrl,
	tagTypes: ["properties"],
	endpoints: (builder) => ({
		getAllProperties: builder.query<Properties[], {pageNumber: number, pageSize: number}>({
			query: ({ pageNumber, pageSize }) => ({
				url: `properties/${pageNumber}/${pageSize}`,
				method: "GET",
			}),
			providesTags: ['properties']
		}),
		deleteProperty: builder.mutation<void, number>({
			query: (id) => ({
				url: `properties/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ['properties']
		}),
		changestatus: builder.mutation<void,ChangeStatus>({
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
export const { useGetAllPropertiesQuery, useDeletePropertyMutation ,useChangestatusMutation } =
	propertiesApi;

export default propertiesApi;
