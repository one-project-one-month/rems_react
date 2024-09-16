import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Input, Typography } from "antd";
import { toast } from "sonner";

const ClientRegister: React.FC = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const { Link, Text } = Typography;
  const handleSubmit = async (values: {
    address: string;
    confirmPassword: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
  }) => {
    console.log("Values", values);
    const {
      address,
      confirmPassword,
      email,
      firstName,
      lastName,
      password,
      phone,
    } = values;

    // Clear previous messages
    setError("");
    setSuccess("");

    // Validate all fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !address
    ) {
      setError("Please fill in all fields.");
      toast.error(error);
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error(error);
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error(error);
      return;
    }

    try {
      // Simulate an API call
      setLoading(true);
      await axios.post("http://65.18.112.78:44010/rems/api/v1/clients", {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
      });

      setSuccess("Successfully signed up!");
      toast.success(success);
      setError("");

      // Redirect after a successful registration
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError("Registration failed. Please try again.");
      toast.error(error);
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
          Client Registration
        </h1>
        <Text italic className="pb-6 text-gray-600 text-center">
          (Clients can buy or rent the properties)
        </Text>
        {/* First Name and Last Name */}
        <div className="flex flex-wrap gap-2">
          {/* <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-200 focus:outline-none flex-1 border-b-2 p-2 rounded-md font-bold placeholder:font-normal"
              type="text"
              placeholder="First Name"
              required
              font-bold
            />

            <input
              className="bg-gray-200 focus:outline-none flex-1 border-b-2 p-2 rounded-md font-bold placeholder:font-normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              required
            /> */}
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}>
            <Input placeholder="First Name" size="large" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}>
            <Input placeholder="Last Name" size="large" />
          </Form.Item>
        </div>

        {/* <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md font-bold placeholder:font-normal"
            placeholder="Email"
            required
          /> */}

        {/* Email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { pattern: emailRegex, message: "Please enter a valid email!" },
          ]}>
          <Input type="email" placeholder="Email" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password placeholder="Password" />
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
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md font-bold placeholder:font-normal"
            placeholder="Password"
            required
          /> */}

        {/* <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md font-bold placeholder:font-normal"
            placeholder="Confirm Password"
            required
          /> */}

        {/* <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
            cols={10}
            className="focus:outline-none bg-gray-200 p-3 font-bold placeholder:font-normal"
            placeholder="Your address..."
            required
          /> */}

        {/* Phone Number */}
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}>
          <Input type="tel" placeholder="Phone Number" />
        </Form.Item>

        {/* Address */}
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}>
          <Input.TextArea rows={2} placeholder="Your address..." />
        </Form.Item>

        {/* <input
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md font-bold placeholder:font-normal"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            required
          /> */}

        {/* Error and Success Messages */}
        {error && (
          <p className="w-[50%] text-center mt-5 text-red-500">{error}</p>
        )}
        {success && (
          <p className="w-[50%] text-center mt-5 text-green-500">{success}</p>
        )}
        {loading && (
          <p className="w-[50%] text-center mt-5 text-green-500">Loading</p>
        )}

        {/* <button
          className="bg-blue-500 mt-10 px-5 py-2 rounded-md text-white font-bold hover:shadow-lg hover:bg-blue-400"
          type="submit">
          Sign Up
        </button> */}
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

export default ClientRegister;
