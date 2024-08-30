import { Flex, Space, Typography } from "antd";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { TAppointmentHistory } from "../../../services/client/api/appointmentApi";

const AppointHistory = ({
  data,
}: {
  data: TAppointmentHistory[] | undefined;
}) => {
  if (data?.length === 0) {
    return <h1 className="m-4 text-primary text-l">Empty record</h1>;
  }

  return (
    <>
      {data?.map((appointment) => {
        const time24 = dayjs(appointment.appointmentTime, "HH:mm:ss.SSSSSSS");

        const formattedTime = time24.format("h:mm A");

        return (
          <div
            key={appointment.appointmentId}
            className="m-4 border-2 shadow border-primary/30 rounded-lg"
          >
            <Flex align="center" dir="ltr">
              <Space
                className="px-4 py-2 rounded-s-lg ring ring-primary ring-offset-0 bg-primary"
                direction="vertical"
              >
                <Typography className="text-white">
                  <Space>
                    <CalendarOutlined />
                    {new Date(appointment.appointmentDate)
                      .toDateString()
                      .slice(3, 10)}
                  </Space>
                </Typography>
                <Typography className="text-white">
                  <Space>
                    <ClockCircleOutlined />
                    {formattedTime}
                  </Space>
                </Typography>
              </Space>
              <div className="ml-3 ">
                <Space direction="vertical" className="mb-2">
                  <Typography className="text-xs">
                    Appointment with{" "}
                    <span className="text-primary font-semibold">
                      {appointment.agentName}clientId
                    </span>
                  </Typography>
                  {/* <Typography >Agent - 
                                    <span className="text-primary font-semibold"> {appointment.agentName}</span>
                                    </Typography>                                */}
                </Space>

                <div className="flex justify-between items-center text-xs">
                  <button className="bg-primary text-white px-3 py-1 rounded">
                    Call
                  </button>
                  <p
                    className={
                      appointment.status === "done"
                        ? "text-primary"
                        : "text-green-800"
                    }
                  >
                    {appointment.status}
                  </p>
                </div>
              </div>
            </Flex>
          </div>
        );
      })}
    </>
  );
};

export default AppointHistory;
