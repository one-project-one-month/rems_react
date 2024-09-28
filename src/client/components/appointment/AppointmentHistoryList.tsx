import { Button, Col, Row, Spin } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetAppointmentHistoryQuery } from "../../../services/client/api/appointmentApi";
import { clientId } from "../../../services/client/features/idSlice";
import AppointHistory from "./AppointHistory";

const AppointmentHistoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const id = useSelector(clientId)

  const originalIds = [id, currentPage, perPage];
  const ids: number[] = originalIds.filter(id => id !== undefined);

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
    <Row>
      <Col lg={4} md={4} sm={2} xs={2}></Col>
      <Col lg={16} md={16} sm={20} xs={20}>
        <AppointHistory data={appointment?.data.appointmentDetails} />
        <div className="flex justify-center">
          <Button disabled={currentPage === 1} onClick={prev}>
            Prev
          </Button>
          <Button>{currentPage}</Button>
          <Button disabled={isLastPage} onClick={next}>
            Next
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default AppointmentHistoryList;
