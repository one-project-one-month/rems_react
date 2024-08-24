import { useState } from "react";
import { Layout } from "antd";
import DashboardSidebar from "./sidebar/DashboardSidebar";
import DashboardHeader from "./header/DashboardHeader";
import DashboardContext from "./context/DashboardContext";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: "margin-left 0.2s",
        }}>
        <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <DashboardContext />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
