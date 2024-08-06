import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../features/agents/api/agentApi";
import { clientApi } from "../features/clients/api/clientApi";

export const store = configureStore({
  reducer: {
    [agentApi.reducerPath]: agentApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([agentApi.middleware, clientApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
