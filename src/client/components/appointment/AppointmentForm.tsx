import {  message,Button, Flex, Form, Input, Space, Typography } from "antd";
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
  const {appointmentTime,appointmentDate,rawAppointmentTime} = useAppSelector(
    (state) => state.appointment,
  );
 


  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await postAppointment({
        clientId: 3,
        propertyId: 2,
        appointmentDate: appointmentDate,
        appointmentTime:rawAppointmentTime,
        status: "Pending",
        notes: "I am busy"
      }).unwrap()
      .then(()=> message.success("Your appointment have been recorded")
      )
      
    } catch (error) {
      message.error("Something went wrong , Please try again")
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
