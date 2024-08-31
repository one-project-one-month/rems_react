import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../services/admin/api/agentApi";
import { clientApi } from "../services/admin/api/clientApi";
import propertiesApi from "../services/admin/api/propertiesApi";
import transactionsApi from "../services/admin/api/transactionsApi";
import appointmentSlice from "../services/client/features/appointmentSlice";
import currentPageSlice from "../services/client/features/currentPageSlice";
import { appointmentApi } from "../services/client/api/appointmentApi";

export const store = configureStore({
  reducer: {
    appointment: appointmentSlice,
    currentPage: currentPageSlice,
    [agentApi.reducerPath]: agentApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      agentApi.middleware,
      clientApi.middleware,
      propertiesApi.middleware,
      transactionsApi.middleware,
      appointmentApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;