import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import {
  Button,
  Flex,
  Form,
  Input,
  message,
  Space,
  Spin,
  Typography,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../../app/hook";
import { usePostAppointmentMutation } from "../../../services/client/api/appointmentApi";
import { clearInterval } from "../../../services/client/features/appointmentSlice";
import { clientId } from "../../../services/client/features/idSlice";
dayjs.extend(customParseFormat);

const { Title } = Typography;

type FieldType = {
  notes?: string;
};

interface PickTimeProps {
  propertyId?: number;
  prevPage: () => void;
  closeDrawer?: () => void;
}

const AppointmentForm: React.FC<PickTimeProps> = ({ propertyId, prevPage, closeDrawer }) => {
  const [postAppointment, { isSuccess }] = usePostAppointmentMutation();
  const { appointmentTime, appointmentDate, rawAppointmentTime } = useAppSelector((state) => state.appointment);
  const dispatch = useDispatch();
  const id = useSelector(clientId)

  if (isSuccess) {
    return <Spin />;
  }

  const onFinish: FormProps<FieldType>["onFinish"] = async (value) => {
    try {
      await postAppointment({
        clientId: id,
        propertyId: propertyId || 0,
        appointmentDate: appointmentDate,
        appointmentTime: rawAppointmentTime,
        status: "Pending",
        notes: value.notes || "",
      })
        .unwrap()
        .then(() => message.success("Your appointment have been recorded"));
      dispatch(clearInterval())
      if (closeDrawer) {
        closeDrawer();
      }
    } catch (error) {
      message.error("Something went wrong , Please try again");
    }
  };

  return (
    <>
      <Space direction="vertical">
        <Title level={4}>Confirm your appointment</Title>
        <Flex justify="space-between" align="center">
          <Typography className="mr-2">
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
          <Button type="link" onClick={() => {
            prevPage();
          }}>
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
