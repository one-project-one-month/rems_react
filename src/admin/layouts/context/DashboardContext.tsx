import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const DashboardContext = () => {
  const {
    token: { colorBgLayout, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgLayout,
        borderRadius: borderRadiusLG,
      }}>
      <Outlet />
    </Content>
  );
};

export default DashboardContext;
