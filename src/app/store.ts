import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../services/admin/api/agentApi";
import { clientApi } from "../services/admin/api/clientApi";
// import propertiesApi from "../services/admin/api/propertiesApi";
import transactionsApi from "../services/admin/api/transactionsApi";
import appointmentSlice from "../services/client/features/appointmentSlice";
import currentPageSlice from "../services/client/features/currentPageSlice";
import { appointmentApi } from "../services/client/api/appointmentApi";
import { propertiesApi } from "../services/client/api/propertyApi";
import {clientReviewApi} from "../services/client/api/Review"

import agentPropertyFilter from "../agents/agent-services/propertyFilterSearch"
import {AgentAppoimentApi} from "../services/agent/api/appointment"

export const store: any = configureStore({
	reducer: {
		appointment: appointmentSlice,
		currentPage: currentPageSlice,
		agentPropertyFilters:  agentPropertyFilter,
		[agentApi.reducerPath]: agentApi.reducer,
		[clientApi.reducerPath]: clientApi.reducer,
		[propertiesApi.reducerPath]: propertiesApi.reducer,
		[transactionsApi.reducerPath]: transactionsApi.reducer,
		[appointmentApi.reducerPath]: appointmentApi.reducer,
		[AgentAppoimentApi.reducerPath]: AgentAppoimentApi.reducer,
		[clientReviewApi.reducerPath] : clientReviewApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			agentApi.middleware,
			clientApi.middleware,
			propertiesApi.middleware,
			transactionsApi.middleware,
			appointmentApi.middleware,
			AgentAppoimentApi.middleware,
			clientReviewApi.middleware,
		]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;