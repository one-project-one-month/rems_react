import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Input, Typography } from "antd";
import { toast } from "sonner";

const AgentRegister = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const { Link, Text } = Typography;

  const handleSubmit = async (values: {
    agencyName: string;
    agentName: string;
    licenseNumber: string;
    email: string;
    password: string;
    phone: string;
    address: string;
  }) => {
    const {
      agencyName,
      agentName,
      licenseNumber,
      email,
      password,
      phone,
      address,
    } = values;

    try {
      // Simulate an API call
      setLoading(true);
      const res = await axios.post(
        "http://65.18.112.78:44010/rems/api/v1/agents",
        {
          agencyName,
          agentName,
          licenseNumber,
          email,
          password,
          phone,
          address,
        }
      );

      toast.success(res.data.message);

      // Redirect after a successful registration
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form
        layout="vertical"
        className="mt-10 border pt-5 px-5 rounded-lg flex flex-col  w-full shadow-lg"
        onFinish={handleSubmit}>
        <h1 className="text-[1.4rem] font-bold text-blue-400 text-center ">
          Agent Registration
        </h1>
        <Text italic className="pb-6 text-gray-600 text-center">
          (Agents can sell or rent the properties)
        </Text>

        {/* Agency Name and Agent Name */}
        <div className="flex flex-wrap gap-2">
          <Form.Item
            name="agencyName"
            rules={[{ required: true, message: "Please enter agency name!" }]}>
            <Input placeholder="Agency Name" size="large" />
          </Form.Item>

          <Form.Item
            name="agentName"
            rules={[{ required: true, message: "Please enter agent name!" }]}>
            <Input placeholder="Agent Name" size="large" />
          </Form.Item>
        </div>

        {/* License Number */}
        <Form.Item
          name="licenseNumber"
          rules={[{ required: true, message: "Please enter License Number!" }]}>
          <Input placeholder="License Number" size="large" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { pattern: emailRegex, message: "Please enter a valid email!" },
          ]}>
          <Input type="email" placeholder="Email" size="large" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}>
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}>
          <Input.Password placeholder="Confirm Password" size="large" />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number!" },
          ]}>
          <Input type="tel" placeholder="Phone Number" size="large" />
        </Form.Item>

        {/* Address */}
        <Form.Item name="address">
          <Input.TextArea rows={2} placeholder="Address" size="large" />
        </Form.Item>

        <Form.Item className="text-center items-center">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full">
            Register
          </Button>
        </Form.Item>

        <Form.Item>
          <Text className="text-sm block text-center">
            Already have a account?{" "}
            <Link href="/" className="font-bold hover:text-blue-600">
              Login
            </Link>
          </Text>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AgentRegister;
