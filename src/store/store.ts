import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice from "./slices/currentPageSlice";
import { appointmentApi } from "../services/apis/appointmentApi";
import appointmentSlice from "./slices/appointmentSlice";

// Configure the store with the appointment reducer
const store = configureStore({
  reducer: {
    appointment: appointmentSlice,
    currentPage: currentPageSlice,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appointmentApi.middleware),
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {appointment: AppointmentState}
export type AppDispatch = typeof store.dispatch;

export default store;
