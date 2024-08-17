import AppointmentForm from "./AppointmentForm";
import Calendar from "./Calendar";
import PickTime from "./PickTime";

const appointmentSteps = () => [
  {
    title: "First",
    content: <Calendar />,
  },
  {
    title: "Second",
    content: <PickTime />,
  },
  {
    title: "Last",
    content: <AppointmentForm />,
  },
];

export default appointmentSteps;
