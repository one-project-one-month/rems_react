import { CalendarOutlined, ClockCircleOutlined, PhoneFilled } from "@ant-design/icons";
import { Divider, Flex, Space, Tag, Typography } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { BiLocationPlus } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { TAppointmentHistory } from "../../../services/client/api/appointmentApi";
dayjs.extend(customParseFormat);

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
            className="my-4"
          >
            <Flex align="center" dir="ltr">
              <Space
              className="mx-4 rounded-xl p-3 bg-primary"
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
              <div className="ml-3 flex-1 px-2 py-4">
                <Space direction="vertical" className="mb-2">
                  <Typography.Title level={5} className="text-xs">
                    Client {" "}
                    <span className="text-primary font-semibold">
                      {appointment.clientName}
                    </span>
                    {" "}Appointment with Agent {" "}
                    <span className="text-primary font-semibold">
                      {appointment.agentName}
                    </span>
                  </Typography.Title>
                </Space>

                <div className="flex justify-between items-center text-xs">
                  <Flex vertical>
                    <div className="flex items-center gap-2">
                      <PhoneFilled className="text-primary" />
                      <span>{appointment.agentPhoneNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BiLocationPlus className="text-primary" />
                      <span>{appointment.address},{appointment.state},{appointment.city}</span>
                    </div>
                    {
                      appointment.note &&
                       <div className="flex items-center gap-2">
                      <GiNotebook className="text-primary" />
                      <span>{appointment.note}</span>
                    </div>
                    }
                  </Flex>
                  <Tag>{appointment.status}</Tag>
                </div>
              </div>
            </Flex>
            <Divider style={{margin: 0}}/>
          </div>
        );
      })}
    </>
  );
};

export default AppointHistory;
