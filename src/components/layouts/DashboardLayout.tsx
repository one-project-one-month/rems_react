import { Layout } from "antd";
import DashboardHeader from "./header/DashboardHeader";
import DashboardContext from "./context/DashboardContext";

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <DashboardHeader />
        <DashboardContext />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
