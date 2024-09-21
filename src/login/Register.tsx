import { useState } from "react";
import AgentRegister from "./AgentRegister";
import ClientRegister from "./ClientRegister";
import { Card, Select, Typography } from "antd";

const Register: React.FC = () => {
  const [role, setRole] = useState<string>("client");

  const { Text, Title } = Typography;

  const renderRegister = () => {
    if (role === "client") return <ClientRegister />;
    if (role === "agent") return <AgentRegister />;
  };

  return (
    <div className="p-5">
      <Card
        style={{ width: 460 }}
        className="mx-auto border px-5 rounded-lg shadow-lg">
        <Title level={4} className="pb-6 text-gray-600 text-center">
          Please choose the role
        </Title>
        <div className="flex items-center justify-center space-x-2">
          <Text>Register as</Text>
          <Select
            defaultValue="client"
            style={{ width: 120 }}
            onChange={(value) => setRole(value)}
            options={[
              { value: "client", label: "Client" },
              { value: "agent", label: "Agent" },
            ]}
          />
        </div>
      </Card>

      <div className="flex justify-center items-center">{renderRegister()}</div>
    </div>
  );
};

export default Register;
