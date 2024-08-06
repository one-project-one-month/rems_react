import DashboardLayout from "../components/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appointments from "../components/agents/appointments/Appointment";
const Router = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/appointments",
          element: <Appointments />,
        },
      ],
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
