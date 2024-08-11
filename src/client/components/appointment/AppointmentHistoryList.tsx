
import { Button, Tabs } from "antd"
import { useGetAppointmentHistoryQuery } from "../../../services/apis/appoinement/appointmentApi"
import AppointHistoty from "./AppointHistoty"
import { useState } from "react"



const AppointmentHistoryList = () => {
    const [currentPage,setCurrentPage] = useState(1)
    const [perPage] = useState(5)

    const ids = [2, currentPage, perPage];

    const { data:appointment } = useGetAppointmentHistoryQuery(ids)
   
    const isLastPage = appointment?.data.pageSetting.isEndOfPage
    


    const upCommingAppointment = appointment?.data.lstAppointment.filter(appoinemt => appoinemt.status === "Pending")
    const appointmentHistory = appointment?.data.lstAppointment.filter(appoinemt => appoinemt.status !== "Pending")
   
 
    const items = [
        {
            key: '1',
            label: 'Upcoming',
            children: <AppointHistoty data={upCommingAppointment} />
        },
        {
            key: '2',
            label: "History",
            children: <AppointHistoty data={appointmentHistory}  />
        },

    ];

    const next = () => {
        setCurrentPage((prev) => prev + 1)
    }

    const prev = () => {
        setCurrentPage((prev) => prev - 1)
    }


    return (
        <>
          <Tabs defaultActiveKey="1" items={items} />
          <div className="flex">
          <Button disabled={currentPage === 1} onClick={prev}>Prev</Button>
          <Button>
              {currentPage}
          </Button>
          <Button disabled={isLastPage} onClick={next}>Next</Button>
    </div>
        
         
        </>
      
    )
}

export default AppointmentHistoryList