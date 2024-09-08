import { Button, Spin } from "antd";
import AppointHistory from "./AppointHistory";
import { useState } from "react";
import { useGetAppointmentHistoryQuery } from "../../../services/client/api/appointmentApi";

const AppointmentHistoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  const ids = [3, currentPage, perPage];

  const { data: appointment, isLoading } = useGetAppointmentHistoryQuery(ids);

  const isLastPage = appointment?.data.pageSetting.isEndOfPage;

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
      <AppointHistory data={appointment?.data.appointmentDetails} />
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
