import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../services/admin/api/agentApi";
import { clientApi } from "../services/admin/api/clientApi";
// import propertiesApi from "../services/admin/api/propertiesApi";
import transactionsApi from "../services/admin/api/transactions";

export const store = configureStore({
	reducer: {
		[agentApi.reducerPath]: agentApi.reducer,
		[clientApi.reducerPath]: clientApi.reducer,
		// [propertiesApi.reducerPath]: propertiesApi.reducer,
		[transactionsApi.reducerPath]: transactionsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			agentApi.middleware,
			clientApi.middleware,
			// propertiesApi.middleware,
			transactionsApi.middleware,
		]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
