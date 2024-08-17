
import { Tabs } from "antd"
import { useGetAppointmentHistoryQuery } from "../../services/apis/appointmentApi"
import AppointHistoty from "./AppointHistoty"



const AppointmentHistoryList = () => {

    const { data } = useGetAppointmentHistoryQuery()
    console.log(data)
    const upCommingAppointment = data?.filter(appoinemt => appoinemt.status === "Pending")
    const items = [
        {
            key: '1',
            label: 'Upcoming',
            children: <AppointHistoty data={upCommingAppointment} />
        },
        {
            key: '2',
            label: "History",
            children: <AppointHistoty data={data} isHistory={true} />
        },

    ];


    return (
        <Tabs defaultActiveKey="1" items={items} />
    )
}

export default AppointmentHistoryList