useAppSelector;
import { useAppSelector } from "../../../app/hook";
import appointmentSteps from "./AppointmentSteps";
import { Space, Typography } from "antd";

const Appointment = () => {
  const steps = appointmentSteps();
  const currentPage = useAppSelector((state) => state.currentPage.currentPage);

  return (
    <Space direction="vertical" className="px-8 py-4 w-full">
      <Typography>
        Step {currentPage + 1} of {steps.length}
      </Typography>

      <div>{steps[currentPage].content}</div>
    </Space>
  );
};

export default Appointment;
