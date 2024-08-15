import { ConfigProvider } from "antd";
import Router from "./routes/Router";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "#f5f5f5",
        },
      }}>
      <Toaster richColors position="top-right" closeButton />
      <Router />
    </ConfigProvider>
  );
}
