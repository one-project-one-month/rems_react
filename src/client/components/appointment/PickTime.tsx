import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Space, TimePicker, TimePickerProps, Typography } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { addAppointmentTime } from "../../../services/client/features/appointmentSlice";

dayjs.extend(customParseFormat);

interface PickTimeProps {
  nextPage: () => void;
  prevPage: () => void;
}

const PickTime: React.FC<PickTimeProps> = ({ nextPage, prevPage }) => {
  const dispatch = useAppDispatch();
  const { appointmentDate, appointmentTime } = useAppSelector(
    (state) => state.appointment
  );

  const onTimeChange: TimePickerProps["onChange"] = (time, timeString) => {
    const rawTime = time ? dayjs(time) : null;

    const timeOnly = rawTime ? rawTime.format("HH:mm:ss") : null;
    dispatch(
      addAppointmentTime({
        appointmentTime: timeString,
        rawAppointmentTime: timeOnly,
      })
    );
    nextPage()
  };
  return (
    <Space direction="vertical">
      <Space>
        <Typography>
          <Space>
            <ClockCircleOutlined />
            {new Date(appointmentDate).toDateString()}
          </Space>
        </Typography>
        <Button type="link" onClick={() => {
          prevPage()
        }}>
          Change
        </Button>
      </Space>

      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onTimeChange}
        style={{ width: '100%' }}
        value={
          appointmentTime.length > 1 ? dayjs(appointmentTime, "h:mm a") : null
        }
      />
    </Space>
  );
};

export default PickTime;
