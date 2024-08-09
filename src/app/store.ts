import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../features/agents/api/agentApi";
import { clientApi } from "../features/clients/api/clientApi";
import reviewApi from "../features/review/api/reviewApi";
import propertiesApi from "../features/properties/api/propertiesApi"

export const store = configureStore({
  reducer: {
    [agentApi.reducerPath]: agentApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    [propertiesApi.reducerPath] : propertiesApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([agentApi.middleware, clientApi.middleware,reviewApi.middleware ,propertiesApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
