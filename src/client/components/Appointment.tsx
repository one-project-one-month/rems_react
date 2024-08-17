import { useAppSelector } from "../../store/hooks/appointmentHook";
import appointmentSteps from "./appointmentSteps";
import { Space, Typography } from "antd";

const Appointment = () => {
  const steps = appointmentSteps();
  const currentPage = useAppSelector((state) => state.currentPage.currentPage);

  return (

    <Space
      direction="vertical"
      className="px-8 py-4 w-full"


    >
      <Typography>
        Step {currentPage + 1} of {steps.length}
      </Typography>

      <div>{steps[currentPage].content}</div>
    </Space>



  );
};

export default Appointment;
