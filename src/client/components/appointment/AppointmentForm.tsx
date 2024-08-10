import { Button, Flex, Form, Input, Space, Typography } from "antd";
import type { FormProps } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/appointmentHook";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import { prev } from "../../../store/slices/currentPageSlice";
import { usePostAppointmentMutation } from "../../../services/apis/appoinement/appointmentApi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);


const { Title } = Typography;

type FieldType = {
  notes?: string;
};

const AppointmentForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const [postAppointment] = usePostAppointmentMutation()
  const {appointmentTime,appointmentDate} = useAppSelector(
    (state) => state.appointment,
  );

  console.log(appointmentTime)
  // const pickedDate = useAppSelector(
  //   (state) => state.appointment.appointmentDate,
  // );
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await postAppointment({
        clientId: 3,
        propertyId: 1,
        appointmentDate: "2024-07-11T16:12:19.885Z",
        appointmentTime:"12:00",
        status: "Approved",
        notes: "Call me back"
      }).unwrap()
      .then(()=> {
        console.log("Success")
      })
      
    } catch (error) {
      console.log(error)
    }
    

  };
  return (
    <>
      <Space direction="vertical">
        <Title level={4}>Confirm your appointment</Title>
        <Flex justify="space-between" align="center">
          <Typography className="mr-5">
            <Space>
              <CalendarOutlined />
              {new Date(appointmentDate).toLocaleDateString()}
            </Space>
          </Typography>
          <Typography>
            <Space>
              <ClockCircleOutlined />
              {appointmentTime}
            </Space>
          </Typography>
          <Button
            type="link"
            onClick={() => dispatch(prev())}
          >
            Change
          </Button>
        </Flex>
      </Space>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item<FieldType> label="notes" name="notes">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AppointmentForm;
