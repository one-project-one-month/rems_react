import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

interface overview {
    "agents": number,
    "clients": number,
    "properties": number,
    "propertySoldIncome": number,
    "propertyRentedIncome": number
}

export interface WeeklyActivity {
    "name": string,
    "sold": number,
    "rented": number
}

export interface AgentActivity {
    "agentName": string,
    "sellProperty": number,
    "rentedProperty": number,
    "totalSales": number,
    "commissionEarned": number
}

interface DashboardResponse {
    "isSuccess": boolean,
    "isError": boolean,
    "data": {
        "overview": overview,
        "weeklyActivity": WeeklyActivity,
        "agentActivity": AgentActivity
    },
    "message": string
}

export interface DashboardData{
    overview?: overview[],
    weeklyActivity?: WeeklyActivity[],
    agentActivity?: AgentActivity[]
}

export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: baseUrl,
    tagTypes: ['dashboard'],
    endpoints: (builder) => ({
        getDashboardData: builder.query<DashboardResponse, void>({
            query: () => 'Dashboard',
            providesTags: ['dashboard'],
        }),
    })
});

export const { useGetDashboardDataQuery } = dashboardApi;

export default dashboardApi;
