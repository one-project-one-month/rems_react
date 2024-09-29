import { createSlice } from "@reduxjs/toolkit";
import { TAppointment } from "../../../type/type";

// Initial state for the slice
const initialAppointmentSlice: TAppointment = {
	appointmentDate: "",
	appointmentTime: "",
	rawAppointmentTime: null,
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
			state.appointmentTime = action.payload.appointmentTime;
			state.rawAppointmentTime = action.payload.rawAppointmentTime;
		},
		updateStatus: (state, action) => {
			state.status = action.payload;
		},
		addNotes: (state, action) => {
			state.notes = action.payload;
		},
		clearInterval: (state) => {
			state.appointmentDate = "",
            state.appointmentTime = ""; 
		}
	},
});

// Export the actions
export const {
	addAppointmentDate,
	addAppointmentTime,
	updateStatus,
	addNotes,
	clearInterval
} = appointmentSlice.actions;

// Export the reducer
export default appointmentSlice.reducer;
