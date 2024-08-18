import { Button, Spin } from "antd";
import { useGetAppointmentHistoryQuery } from "../../../services/apis/appoinement/appointmentApi";
import AppointHistoty from "./AppointHistoty";
import { useState } from "react";

const AppointmentHistoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  const ids = [1, currentPage, perPage];

  const { data: appointment, isLoading } = useGetAppointmentHistoryQuery(ids);

  const isLastPage = appointment?.data.isEndOfPage;

  const next = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin />
      </div>
    );
  }

  return (
    <>
      {/* <Tabs defaultActiveKey="1" items={items} /> */}
      <AppointHistoty data={appointment?.data.appointmentDetails} />
      <div className="flex">
        <Button disabled={currentPage === 1} onClick={prev}>
          Prev
        </Button>
        <Button>{currentPage}</Button>
        <Button disabled={isLastPage} onClick={next}>
          Next
        </Button>
      </div>
    </>
  );
};

export default AppointmentHistoryList;
