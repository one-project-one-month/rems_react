import { ConfigProvider } from "antd";
import Router from "./routes/Router";
import { Toaster } from "sonner";
import { AuthProvider } from "./login/login-context/AuthContext";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "#f5f5f5",
        },
      }}>
      <Toaster richColors position="top-right" closeButton />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}
