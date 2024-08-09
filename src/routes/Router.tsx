import DashboardLayout from "../admin/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientList from "../admin/components/clients/ClientList";
import AgentList from "../admin/components/agents/AgentList";
import TransactionsList from "../admin/components/transactions/TransactionsList";
import Review from "../admin/components/All Review/Review";
import Appointments from "../admin/components/appointments/Appointments";
import Properties from "../admin/components/agent-crud/Properties";

const Router = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/clients",
          element: <ClientList />,
        },
        {
          path: "/agents",
          element: <AgentList />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/transactions",
          element: <TransactionsList />,
        },
        {
          path: "/appointments",
          element: <Appointments />,
        },
        {
          path: "/properties",
          element: <Properties />,
        },
      ],
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
