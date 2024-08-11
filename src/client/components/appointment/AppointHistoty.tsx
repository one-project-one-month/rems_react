import {  Flex, Pagination, Space, Typography } from "antd";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import { TAppointmentHistory } from "../../../services/apis/appoinement/appointmentApi";
const AppointHistoty = ({ data }: { data: TAppointmentHistory[] | undefined }) => {


    if(data?.length === 0){
         return  <h1 className="m-4 text-primary text-l">Empty record</h1>
    }
    
    return (
        <>
            {data?.map(appointment => {
                 const time24 = dayjs(appointment.appointmentTime, 'HH:mm:ss.SSSSSSS');
                
             
                const formattedTime = time24.format('h:mm A');
                
                return (
                    <div key={appointment.appointmentId} className="m-4 border-2 shadow border-primary/30 rounded-lg">
                        <Flex align="center" dir="ltr">
                            <Space className="px-4 py-2 rounded-s-lg ring ring-primary ring-offset-0 bg-primary" direction="vertical">
                                <Typography className="text-white">
                                    <Space>
                                        <CalendarOutlined />
                                        {new Date(appointment.appointmentDate).toDateString().slice(3, 10)}
                                    </Space>
                                </Typography>
                                <Typography className="text-white">
                                    <Space>
                                        <ClockCircleOutlined />
                                        {formattedTime}
                                    </Space>
                                </Typography>
                            </Space>
                            <Space direction="vertical" className="ml-3">
                                <Typography>Appointment with</Typography>
                                <Typography className="text-primary font-semibold">{appointment.agentName}</Typography>                               
                            </Space>
                        </Flex>
                    </div>
                );
            })}
          
        </>
    );
};

export default AppointHistoty;
