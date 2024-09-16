import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./login-context/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Button, Form, Input, Typography } from "antd";
import { toast } from "sonner";

const Login: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const { Text, Link } = Typography;

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      const { email, password } = values;

      const res = await axios.post(
        "http://65.18.112.78:44010/rems/api/v1/Signin",
        { email, password }
      );

      if (res.data.message.includes("Username or Password is incorrect.")) {
        toast.error(res.data.message);
      }

      if (res.data.message.includes("Operation Successful.")) {
        toast.success("Login successfully");
      }

      auth.login(res.data.data.tokens);

      const userRole = JSON.parse(
        atob(res.data.data.tokens.accessToken.split(".")[1])
      ).role;

      const decodededToken = jwtDecode(res.data.data.tokens.accessToken);

      console.log(decodededToken);

      if (userRole.toLowerCase() === "admin") {
        navigate("/admin");
      } else if (userRole.toLowerCase() === "agent") {
        navigate("/agent");
      } else if (userRole.toLowerCase() === "client") {
        navigate("/client");
      } else {
        navigate("/");
      }

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Form
        className="w-[80%] md:w-[40%] lg:w-[30%] xl:w-[23%] border-2 mx-auto mt-[8rem] p-5 rounded-xl shadow-md"
        onFinish={handleSubmit}>
        <h1 className="text-[1.4rem] font-bold text-blue-400 text-center pb-6">
          Login
        </h1>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}>
          <Input placeholder="Enter your email" type="email" size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password placeholder="Enter your password" size="large" />
        </Form.Item>

        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
            className="w-full">
            Login
          </Button>
        </Form.Item>

        <Form.Item>
          <Text className="text-sm block pt-3 text-center">
            Don’t have an account yet?{" "}
            <Link href="/register" className="font-bold hover:text-blue-600">
              Register
            </Link>
          </Text>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
