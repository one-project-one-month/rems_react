import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./slices/appointmentSlice";
import currentPageSlice from "./slices/currentPageSlice";

// Configure the store with the appointment reducer
const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    currentPage: currentPageSlice,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {appointment: AppointmentState}
export type AppDispatch = typeof store.dispatch;

export default store;
