import AppointmentForm from "../user_mobile_view/appointment/AppointmentForm";
import PickTime from "../user_mobile_view/appointment/PickTime";
import Calendar from "../user_mobile_view/appointment/Calendar";



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
