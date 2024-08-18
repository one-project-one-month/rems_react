import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useAppSelector, useAppDispatch } from "../../../app/hook";
import { next } from "../../../services/client/features/currentPageSlice";
import { addAppointmentDate } from "../../../services/client/features/appointmentSlice";

dayjs.extend(customParseFormat);

const PickDate: React.FC = () => {
  const dispatch = useAppDispatch();
  const pickedDate = useAppSelector(
    (state) => state.appointment.appointmentDate
  );

  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    dispatch(addAppointmentDate(dateString));
    dispatch(next());
  };

  return (
    <>
      <DatePicker
        onChange={onChange}
        value={pickedDate.length > 1 ? dayjs(pickedDate) : null}
      />
    </>
  );
};

export default PickDate;
