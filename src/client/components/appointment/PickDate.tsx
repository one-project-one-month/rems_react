import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useAppSelector, useAppDispatch } from "../../../app/hook";
import { next } from "../../../services/client/features/currentPageSlice";
import { addAppointmentDate } from "../../../services/client/features/appointmentSlice";

dayjs.extend(customParseFormat);

interface PickDateProps {
  nextPage: () => void; // Define the function signature in the props
}

const PickDate: React.FC<PickDateProps> = ({ nextPage }) => {
  const dispatch = useAppDispatch();
  const pickedDate = useAppSelector(
    (state) => state.appointment.appointmentDate
  );

  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    dispatch(addAppointmentDate(dateString));
    // dispatch(next());
    nextPage()
  };

  return (
    <>
      <DatePicker
        style={{ width: '40%' }}
        onChange={onChange}
        value={pickedDate.length > 1 ? dayjs(pickedDate) : null}
      />
    </>
  );
};

export default PickDate;
