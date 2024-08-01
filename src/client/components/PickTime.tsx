import { Button, Space, TimePicker, TimePickerProps, Typography } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/appointmentHook";
import { addAppointmentTime } from "../../store/slices/appointmentSlice";
import { next, prev } from "../../store/slices/currentPageSlice";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { ClockCircleOutlined } from "@ant-design/icons";

dayjs.extend(customParseFormat);

const PickTime = () => {
  const dispatch = useAppDispatch();
  const pickedTime = useAppSelector(
    (state) => state.appointment.appointmentTime,
  );
  const pickedDate = useAppSelector(
    (state) => state.appointment.appointmentDate,
  );

  const onTimeChange: TimePickerProps["onChange"] = (_, timeString) => {
    dispatch(addAppointmentTime(timeString));
    dispatch(next());
  };
  return (
    <>
      <Space direction="vertical">
        <Space>
          <Typography>
            <Space>
              <ClockCircleOutlined />
              {new Date(pickedDate).toDateString()}
            </Space>
          </Typography>
          <Button
            type="link"
            onClick={() => dispatch(prev())}
          >
            Change
          </Button>
        </Space>

        <TimePicker
          use12Hours
          format="h:mm a"
          onChange={onTimeChange}
          value={
            pickedTime.length > 1
              ? dayjs(pickedTime, "h:mm a")
              : null
          }
        />
      </Space>



    </>
  );
};

export default PickTime;
