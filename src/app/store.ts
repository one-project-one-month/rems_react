import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../services/admin/api/agentApi";
import { clientApi } from "../services/admin/api/clientApi";
import adminPropertiesApi from "../services/admin/api/propertiesApi";
import transactionsApi from "../services/admin/api/transactionsApi";
import appointmentSlice from "../services/client/features/appointmentSlice";
import currentPageSlice from "../services/client/features/currentPageSlice";
import { appointmentApi } from "../services/client/api/appointmentApi";
import {clientReviewApi} from "../services/client/api/Review"

import agentPropertyFilter from "../agents/agent-services/propertyFilterSearch"
// import {api} from "../agents/agent-services/appointmentaApiSlice"
import dashboardApi from "../services/admin/api/dashboardApi";
import {AgentAppointmentApi} from "../services/agent/api/appointment"

export const store: any = configureStore({
	reducer: {
		appointment: appointmentSlice,
		currentPage: currentPageSlice,
		agentPropertyFilters:  agentPropertyFilter,
		[agentApi.reducerPath]: agentApi.reducer,
		[clientApi.reducerPath]: clientApi.reducer,
		// [propertiesApi.reducerPath]: propertiesApi.reducer,
		[adminPropertiesApi.reducerPath]: adminPropertiesApi.reducer,

		[transactionsApi.reducerPath]: transactionsApi.reducer,
		[appointmentApi.reducerPath]: appointmentApi.reducer,
		[AgentAppointmentApi.reducerPath] : AgentAppointmentApi.reducer,
		[clientReviewApi.reducerPath] : clientReviewApi.reducer,
		[dashboardApi.reducerPath]: dashboardApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			agentApi.middleware,
			clientApi.middleware,
			// propertiesApi.middleware,
			adminPropertiesApi.middleware,
			transactionsApi.middleware,
			appointmentApi.middleware,
			AgentAppointmentApi.middleware,
			clientReviewApi.middleware,
			dashboardApi.middleware,
		]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;