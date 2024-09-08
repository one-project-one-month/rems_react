import { Layout } from "antd";
import DashboardHeader from "./DashboardHeader";
import DashboardContext from "./DashboardContext";

const AgentHeader = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <DashboardHeader />
        <DashboardContext />
      </Layout>
    </Layout>
  );
};

export default AgentHeader;