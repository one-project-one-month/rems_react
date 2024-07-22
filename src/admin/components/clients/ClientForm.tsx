import { Button, ConfigProvider, Form, Input, Select, Space } from "antd";
import { RuleObject } from "antd/lib/form";
import { StoreValue } from "rc-field-form/lib/interface";
import { useEffect } from "react";
import { DataType } from "./ClientList";

interface Props {
  onClose: () => void;
  initialValues: DataType | null;
}

const ClientForm = ({ onClose, initialValues }: Props) => {
  const [form] = Form.useForm();

  const { Option } = Select;
  const { TextArea } = Input;

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const onFinish = () => {
    console.log("form", form.getFieldsValue());
    onClose();
  };

  const validatePhoneNumber = (_: RuleObject, value: StoreValue) => {
    const phoneRegex = /^09\d{7,10}$/;
    if (!value) {
      return Promise.reject(new Error("Please enter your phone number."));
    }
    if (!phoneRegex.test(value)) {
      return Promise.reject(
        new Error("Please enter a valid Myanmar phone number (09xxxxxxxxx).")
      );
    }
    return Promise.resolve();
  };

  return (
    <ConfigProvider
      form={{
        requiredMark: (label, { required }) => (
          <>
            {label}
            {required && (
              <span style={{ color: "#ff4d4f", marginLeft: 4 }}>*</span>
            )}
          </>
        ),
      }}>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="custom-form">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            { required: true, message: "Please enter your first name." },
          ]}>
          <Input placeholder="Please enter your first name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Please enter your last name." }]}>
          <Input placeholder="Please enter your last name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email." },
            { type: "email", message: "Please enter a valid email address." },
          ]}>
          <Input placeholder="Please enter your email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ validator: validatePhoneNumber }]}>
          <Input
            className="w-full"
            placeholder="Please enter your phone number"
          />
        </Form.Item>
        <Form.Item
          name="roles"
          label="Roles"
          rules={[{ required: true, message: "Please select your role" }]}>
          <Select>
            <Option value="Agent">Agent</Option>
            <Option value="User">User</Option>
          </Select>
        </Form.Item>
        <Form.Item name="address" label="Address">
          <TextArea />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default ClientForm;
