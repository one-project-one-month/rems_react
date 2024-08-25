import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

export interface TProperty {
  property: {
    propertyId: number;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    propertyType: string;
    price: number;
    size: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    yearBuilt: number;
    description: string;
    status: string;
    availiablityType: string;
    adddate: string;
  };
  images: string[];
}

export interface TPropertyResponse {
  data: TProperty;
}

export const propertiesApi = createApi({
  reducerPath: "properties",
  baseQuery: baseUrl,
  tagTypes: ["properties"],
  endpoints: (builder) => ({
    getPropertyById: builder.query<TPropertyResponse, number | undefined>({
      query: (propertyId) => `properties/${propertyId}`,
      providesTags: ["properties"],
    }),
  }),
});

export const { useGetPropertyByIdQuery } = propertiesApi;
