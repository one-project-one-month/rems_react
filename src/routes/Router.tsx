import DashboardLayout from "../admin/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientList from "../admin/components/clients/ClientList";
import AgentList from "../admin/components/agents/AgentList";
import TransactionsList from "../admin/components/transactions/TransactionList";
import PropertyList from "../admin/components/properties/PropertyList";
import Appointments from "../admin/components/appointments/Appointments";
import Navbar from "../client/layouts/Navbar";
import Home from "../client/components/property/Home";
import Error from "../error/Error";
import Appointment from "../client/components/appointment/Appointment";
import AppointmentHistoryList from "../client/components/appointment/AppointmentHistoryList";
import Transaction from "../client/components/transaction/Transaction";
import TransactionCreateForm from "../client/components/transaction/TransactionCreateForm";
import Review from "../client/components/review/Review";
import PropertyById from "../client/components/property/PropertyById";

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
          path: "/transactions",
          element: <TransactionsList />,
        },
        {
          path: "/appointments",
          element: <Appointments />,
        },
        {
          path: "/properties",
          element: <PropertyList />,
        },
      ],
    },
    {
      path: "/client",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "appointment",
          children: [
            {
              index: true,
              element: <Appointment />,
            },
            {
              path: "history",
              element: <AppointmentHistoryList />,
            },
          ],
        },
        {
          path: "transaction",
          children: [
            {
              index: true,
              element: <Transaction />,
            },
            {
              path: "create",
              element: <TransactionCreateForm />,
            },
          ],
        },
        {
          path: "property/:id",
          element: <PropertyById />,
        },
        {
          path: "review",
          children: [
            {
              index: true,
              element: <Review />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
