import { useState } from "react";
import AgentRegister from "./AgentRegister";
import ClientRegister from "./ClientRegister";
// import { Card, Typography } from "antd";

const Register: React.FC = () => {
  const [role, setRole] = useState<string>("client");

  // const { Title } = Typography;

  const renderRegister = () => {
    if (role === "client") return <ClientRegister />;
    if (role === "agent") return <AgentRegister />;
  };

  return (
    <div className="p-5">
      <div className="flex flex-col flex-wrap gap-5 justify-center items-center mt-5">
        <p className="text-[1.2rem]">Please choose the role</p>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-bold">Register as</p>
          <select
            className="border rounded-md bg-white font-bold px-3 py-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value="client">Client</option>
            <option value="agent">Agent</option>
          </select>
        </div>
      </div>

      {/* <Card style={{ width: 300 }}>
        <Title level={5} className="pb-6 text-gray-600 text-center">
          Please choose the role
        </Title>
      </Card> */}

      <div className="flex justify-center items-center">{renderRegister()}</div>
    </div>
  );
};

export default Register;
