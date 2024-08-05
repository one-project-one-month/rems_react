import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../features/agents/api/agentApi";

export const store = configureStore({
	reducer: {
		[agentApi.reducerPath]: agentApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([agentApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
