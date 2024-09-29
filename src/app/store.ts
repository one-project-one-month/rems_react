import { combineReducers, configureStore } from "@reduxjs/toolkit";
import agentApi from "../services/admin/api/agentApi";
import { clientApi } from "../services/admin/api/clientApi";
import adminPropertiesApi from "../services/admin/api/propertiesApi";
import transactionsApi from "../services/admin/api/transactionsApi";
import { appointmentApi } from "../services/client/api/appointmentApi";
import { clientReviewApi } from "../services/client/api/Review";
import appointmentSlice from "../services/client/features/appointmentSlice";
import currentPageSlice from "../services/client/features/currentPageSlice";
<<<<<<< HEAD
import { appointmentApi } from "../services/client/api/appointmentApi";
import {appointmentApi as AppointmentApiForAdminDashboard} from "../services/admin/api/appointmentApi";

export const store = configureStore({
	reducer: {
		appointment: appointmentSlice,
		currentPage: currentPageSlice,
		[agentApi.reducerPath]: agentApi.reducer,
		[clientApi.reducerPath]: clientApi.reducer,
		// [propertiesApi.reducerPath]: propertiesApi.reducer,
		[transactionsApi.reducerPath]: transactionsApi.reducer,
		[appointmentApi.reducerPath]: appointmentApi.reducer,
		[AppointmentApiForAdminDashboard.reducerPath]: AppointmentApiForAdminDashboard.reducer
	},
=======
import idSlice from "../services/client/features/idSlice";

import agentPropertyFilter from "../agents/agent-services/propertyFilterSearch";
// import {api} from "../agents/agent-services/appointmentaApiSlice"
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import dashboardApi from "../services/admin/api/dashboardApi";
import { AgentAppointmentApi } from "../services/agent/api/appointment";
import { propertyListApi } from "../services/agent/api/propertyApiSlice";
import { apiAgentSlice } from "../services/agent/api/getAgentApiSlice";
import userIdApi from "../services/client/api/userIdApi";

const rootReducer = combineReducers({
	id: idSlice,
	appointment: appointmentSlice,
	currentPage: currentPageSlice,
	agentPropertyFilters: agentPropertyFilter,
	[agentApi.reducerPath]: agentApi.reducer,
	[clientApi.reducerPath]: clientApi.reducer,
	// [propertiesApi.reducerPath]: propertiesApi.reducer,
	[adminPropertiesApi.reducerPath]: adminPropertiesApi.reducer,

	[transactionsApi.reducerPath]: transactionsApi.reducer,
	[appointmentApi.reducerPath]: appointmentApi.reducer,
	[AgentAppointmentApi.reducerPath]: AgentAppointmentApi.reducer,
	[clientReviewApi.reducerPath]: clientReviewApi.reducer,

	[dashboardApi.reducerPath]: dashboardApi.reducer,
	[propertyListApi.reducerPath]: propertyListApi.reducer,
	[userIdApi.reducerPath]: userIdApi.reducer,
	[apiAgentSlice.reducerPath]: apiAgentSlice.reducer
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
	reducer: persistedReducer,

>>>>>>> dev_conflict_fixed
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			agentApi.middleware,
			clientApi.middleware,

			// propertiesApi.middleware,	
			adminPropertiesApi.middleware,
			transactionsApi.middleware,
			appointmentApi.middleware,
<<<<<<< HEAD
			AppointmentApiForAdminDashboard.middleware
=======
			AgentAppointmentApi.middleware,
			clientReviewApi.middleware,
			dashboardApi.middleware,
			propertyListApi.middleware,
			userIdApi.middleware,
			apiAgentSlice.middleware
>>>>>>> dev_conflict_fixed
		]),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;