import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { RuleObject } from "antd/lib/form";
import { StoreValue } from "rc-field-form/lib/interface";
import { useEffect } from "react";
import { Agent } from "../../../type/type";
import { toast } from "sonner";
import {
  useCreateAgentMutation,
  useUpdateAgentByIdMutation,
} from "../../../services/admin/api/agentApi";

interface Props {
  onClose: () => void;
  initialValues: Agent | null;
  refetch: () => void;
}

const AgentForm = ({ onClose, initialValues, refetch }: Props) => {
  const [createAgent] = useCreateAgentMutation();
  const [updateAgent] = useUpdateAgentByIdMutation();
  const [form] = Form.useForm();

  const { TextArea } = Input;

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const onFinish = async () => {
    const values = form.getFieldsValue();
    const passwordWithValue = { ...values, password: "password123" };
    const userNameWithValue = {
      ...values,
      password: "password123",
      userName: initialValues?.agencyName,
    };

    try {
      if (initialValues && initialValues.userId) {
        // Update agent if initialValues is provided
        await updateAgent({
          data: userNameWithValue,
          id: initialValues.userId,
        });
        refetch();
        toast.success("Agent update successfully");
        onClose();
      } else {
        // Create new agent if no initialValues
        await createAgent(passwordWithValue).unwrap();
        refetch();
        toast.success("Agent create successfully");
        onClose();
      }
      onClose();
    } catch (error) {
      toast.error("Error submitting form");
    }
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
          name="agentName"
          label="Agent Name"
          rules={[{ required: true, message: "Please enter agent name." }]}>
          <Input placeholder="Please enter agent name" />
        </Form.Item>
        {!initialValues && (
          <Form.Item
            name="userName"
            label="User Name"
            rules={[{ required: true, message: "Please enter user name." }]}>
            <Input placeholder="Please enter user name" />
          </Form.Item>
        )}
        <Form.Item
          name="licenseNumber"
          label="License Number"
          rules={[{ required: true, message: "Please enter license number." }]}>
          <Input placeholder="Please enter  license number" />
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
          name={initialValues ? "phoneNumber" : "phone"}
          label="phone number"
          rules={[{ validator: validatePhoneNumber }]}>
          <Input
            className="w-full"
            placeholder="Please enter your phone number"
          />
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

export default AgentForm;
