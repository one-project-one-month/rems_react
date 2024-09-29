import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AgentList from "../admin/components/agents/AgentList";
import Appointments from "../admin/components/appointments/Appointments";
import ClientList from "../admin/components/clients/ClientList";
import HomePage from "../admin/components/dashboard/HomePage";
import PropertyDetail from "../admin/components/properties/PropertyDetail";
import PropertyList from "../admin/components/properties/PropertyList";
import TransactionsList from "../admin/components/transactions/TransactionList";
import DashboardLayout from "../admin/layouts/DashboardLayout";

import Appointment from "../client/components/appointment/Appointment";
import AppointmentHistoryList from "../client/components/appointment/AppointmentHistoryList";
import Home from "../client/components/property/Home";
import Transaction from "../client/components/transaction/Transaction";
import TransactionSummary from "../client/components/transaction/TransactionSummary";
import TransactionCreateForm from "../client/components/transaction/TransactionCreateForm";
import Navbar from "../client/layouts/Navbar";
import Error from "../error/Error";
// import Review from "../client/components/review/Review";
import PropertyById from "../client/components/property/PropertyById";

import AgentAppointment from "../agents/appointment/AgentAppointment";
import AgentDefaultPage from "../agents/defalult-page/AgentDefaultPage";
import AgentHeader from "../agents/header/AgentHeader";
import PropertiesCRUD from "../agents/property-crud/PropertiesCRUD";
import AgentPropertyList from "../agents/property-list/AgentPropertyList";
import DetailPage from "../agents/property-list/DetailPage";
import AgentTransactions from "../agents/transactions/AgentTransactions";
import Login from "../login/Login";
import { useAuth } from "../login/login-context/AuthContext";
import Register from "../login/Register";

const Router = () => {
  const { user } = useAuth(); // Get the authenticated user from context	

  // Define routes for different user roles
  const adminRoutes = [
    {
      path: "/admin",
      element:
        user && user.role.toLowerCase() === "admin" ? (
          <DashboardLayout />
        ) : (
          <Navigate to="/" replace />
        ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "clients",
          element: <ClientList />,
        },
        {
          path: "agents",
          element: <AgentList />,
        },
        {
          path: "transactions",
          element: <TransactionsList />,
        },
        {
          path: "appointments",
          element: <Appointments />,
        },
        {
          path: "properties",
          element: <PropertyList />,
        },
        {
          path: "properties/detail",
          element: <PropertyDetail />,
        },
      ],
    },
  ];
  // ----

  const clientRoutes = [
    {
      path: "/client",
      element:
        user && user.role.toLowerCase() === "client" ? (
          <Navbar />
        ) : (
          <Navigate to="/" replace />
        ),
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
            
              index: true,
              element: <TransactionSummary/>,
            },
            {
              path: "create",
              element: <TransactionCreateForm id={""} />,
            },
           
          ],
        },
        {
          path: "property/:id",
          element: <PropertyById />,
        },
        // {
        //   path: "review",
        //   children: [
        //     {
        //       index: true,
        //       element: <Review />,
        //     },
        //   ],
        // },
      ],
    },
  ];
  // ----

  const agentRoutes = [
    {
      path: "/agent",
      element:
        user && user.role.toLowerCase() === "agent" ? (
          <AgentHeader />
        ) : (
          <Navigate to="/" replace />
        ),
      children: [
        {
          path: "/agent",
          element: <AgentDefaultPage />
        },
        {
          path: "property-list",
          element: <AgentPropertyList />,
          children: [
            {
              path: ":id",
              element: <DetailPage />,
            },
          ],
        },
        {
          path: "agent-appointments",
          element: <AgentAppointment />,
        },
        {
          path: "agent-transactions",
          element: <AgentTransactions />,
        },
        {
          path: "property-create",
          element: <PropertiesCRUD />,
        },
      ],
    },
  ];

  const config = createBrowserRouter([
    {
      path: "/",
      element: user ? (
        <Navigate to={`/${user.role.toLowerCase()}`} replace />
      ) : (
        <Login />
      ), // Redirect to user's role dashboard if authenticated
    },
    {
      path: "/register",
      element: <Register />,
    },
    ...adminRoutes,
    ...clientRoutes,
    ...agentRoutes,
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
