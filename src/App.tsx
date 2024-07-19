import { ConfigProvider } from "antd";
import Router from "./routes/Router";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "#f5f5f5",
        },
      }}>
      <Router />
    </ConfigProvider>
  );
}
