import { Button, Flex, Form, Input, Space, Typography } from "antd";
import type { FormProps } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/appointmentHook";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import { prev } from "../../store/slices/currentPageSlice";


const { Title } = Typography;

type FieldType = {
  notes?: string;
};

const AppointmentForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const pickedTime = useAppSelector(
    (state) => state.appointment.appointmentTime,
  );
  const pickedDate = useAppSelector(
    (state) => state.appointment.appointmentDate,
  );
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Space direction="vertical">
        <Title level={4}>Confirm your appointment</Title>
        <Flex justify="space-between" align="center">
          <Typography>
            <Space>
              <CalendarOutlined />
              {new Date(pickedDate).toLocaleDateString()}
            </Space>
          </Typography>
          <Typography>
            <Space>
              <ClockCircleOutlined />
              {pickedTime}
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
