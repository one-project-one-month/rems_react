import DashboardLayout from "../components/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [],
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
