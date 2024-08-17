import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientList from "../admin/components/clients/ClientList";
import AgentList from "../admin/components/agents/AgentList";
import Appointments from "../admin/components/appointments/Appointments";
import Transaction from "../client/pages/Transaction";
import Navbar from "../client/layouts/Navbar";

const Router = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
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
          path: "/transactions",
          element: <Transaction />,
        },
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
