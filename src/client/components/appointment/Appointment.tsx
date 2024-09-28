useAppSelector;
import { Col, Flex, Row, Steps } from "antd";
import { useState } from "react";
import { useAppSelector } from "../../../app/hook";
import AppointmentForm from "./AppointmentForm";
import Calendar from "./PickDate";
import PickTime from "./PickTime";

interface AppointmentProps {
  propertyId?: number;
  closeDrawer?: () => void;
}

const Appointment: React.FC<AppointmentProps> = ({ propertyId, closeDrawer }) => {
  const [currentPage, setCurrent] = useState(0);

  const next = () => {
    setCurrent(currentPage + 1);
  };

  const prev = () => {
    setCurrent(currentPage - 1);
  };

  return (
    <Row>
      <Col span={24}>
        <Steps
          direction="vertical"
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
            currentPage === 2 && <AppointmentForm propertyId={propertyId} closeDrawer={closeDrawer} prevPage={prev} />
          }
        </Flex>
      </Col>
    </Row>
  );
};

export default Appointment;
