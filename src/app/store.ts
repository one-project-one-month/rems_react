import { configureStore } from "@reduxjs/toolkit";
import agentApi from "../services/admin/api/agentApi";
import { clientApi } from "../services/admin/api/clientApi";
// import propertiesApi from "../services/admin/api/propertiesApi";
import appointmentSlice from "../services/client/features/appointmentSlice";
import currentPageSlice from "../services/client/features/currentPageSlice";
import { appointmentApi } from "../services/client/api/appointmentApi";
import { transactionApi } from "../services/client/api/transactionApi";

export const store = configureStore({
  reducer: {
    appointment: appointmentSlice,
    currentPage: currentPageSlice,
    [agentApi.reducerPath]: agentApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    // [propertiesApi.reducerPath]: propertiesApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      agentApi.middleware,
      clientApi.middleware,
      // propertiesApi.middleware,
      transactionApi.middleware,
      appointmentApi.middleware,
      //   appointmentApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
