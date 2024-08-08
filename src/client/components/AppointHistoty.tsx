
import { Button, Flex, Space, Typography } from "antd"
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons"
import { TAppointmentHistory } from "../../services/apis/appointmentApi"

const AppointHistoty = ({ data, isHistory }: { data: TAppointmentHistory[] | undefined, isHistory?: boolean }) => {
    return (
        <>
            {data?.map(appointment => (
                <div className="m-4 border-2 shadow border-primary/30 rounded-lg">
                    <Flex align="center" dir="ltr">
                        <Space className="px-4 py-2 rounded-s-lg ring ring-primary ring-offset-0  bg-primary" direction="vertical">
                            <Typography className="text-white">
                                <Space>
                                    <CalendarOutlined />
                                    {new Date(appointment.appointmentDate).toDateString().slice(3, 10)}
                                </Space>
                            </Typography>
                            <Typography className="text-white">
                                <Space>
                                    <ClockCircleOutlined />
                                    {appointment.appointmentTime}
                                </Space>
                            </Typography>
                        </Space>
                        <Space
                            direction="vertical"
                            className="ml-3"
                        >
                            <Typography >Appointment with {appointment.agentName}</Typography>
                            {!isHistory && (
                                <Space >

                                    <Button
                                        type="primary"

                                    >
                                        Chat
                                    </Button>
                                    <Button type="dashed" danger>
                                        Cancel
                                    </Button>
                                </Space>
                            )}
                        </Space>




                    </Flex>
                </div >
            ))}
        </>

    )
}

export default AppointHistoty