useAppSelector;
import { useState } from "react";
import { useAppSelector } from "../../../app/hook";
// import appointmentSteps from "./AppointmentSteps";
import { Col, Flex, Row, Steps } from "antd";
import AppointmentForm from "./AppointmentForm";
import Calendar from "./PickDate";
import PickTime from "./PickTime";

const Appointment = () => {
  const [currentPage, setCurrent] = useState(0);
  // const steps = appointmentSteps();
  // const currentPage = useAppSelector((state) => state.currentPage.currentPage);

  const next = () => {
    setCurrent(currentPage + 1);
  };

  const prev = () => {
    setCurrent(currentPage - 1);
  };

  return (
    // <Space direction="vertical" className="px-8 py-4 w-full">
    //   <Typography>
    //     Step {currentPage + 1} of {steps.length}
    //   </Typography>

    //   <div>{steps[currentPage].content}</div>
    // </Space>
    <Row style={{marginBlock: 100}}>
      <Col lg={4} md={4} sm={2} xs={2}></Col>
      <Col lg={16} md={16} sm={20} xs={20}>
        <Steps
          current={currentPage}
          onChange={(value) => setCurrent(value)}
          items={[
            {
              title: 'Step 1',
            },
            {
              title: 'Step 2',
            },
            {
              title: 'Step 3',
            },
          ]}
        />
        <Flex vertical align="center" justify="center" className="mt-10">
          {
            currentPage === 0 && <Calendar nextPage={next}   />
          }
          {
            currentPage === 1 && <PickTime nextPage={next} prevPage={prev} />
          }
          { 
            currentPage === 2 && <AppointmentForm prevPage={prev} />
          }
        </Flex>
      </Col>
    </Row>
  );
};

export default Appointment;
