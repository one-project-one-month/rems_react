import { createSlice } from "@reduxjs/toolkit";

// Define the Appointment interface
export interface TAppointment {
  appointmentDate: string;
  appointmentTime: string;
  status: "pending" | "done";
  notes?: string;
}

// Initial state for the slice
const initialAppointmentSlice: TAppointment = {
  appointmentDate: "",
  appointmentTime: "",
  status: "pending",
  notes: "",
};

// Create the slice
export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentSlice,
  reducers: {
    addAppointmentDate: (state, action) => {
      state.appointmentDate = action.payload;
    },
    addAppointmentTime: (state, action) => {
      state.appointmentTime = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
    addNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

// Export the actions
export const {
  addAppointmentDate,
  addAppointmentTime,
  updateStatus,
  addNotes,
} = appointmentSlice.actions;

// Export the reducer
export default appointmentSlice.reducer;
