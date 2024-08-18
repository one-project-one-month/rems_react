import Home from "../client/pages/Home";
import Navbar from "../client/layouts/Navbar";
import FilterHome from "../client/pages/FilterHome";
import Transaction from "../client/pages/Transaction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyById from "../client/components/properties/PropertyById";
import AppointmentHistoryList from "../client/components/appointment/AppointmentHistoryList";
import Appointment from "../client/components/appointment/Appointment";

const Router = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/appointment",
          element: <Appointment />,
        },
        {
          path: "/history",
          element: <AppointmentHistoryList />,
        },
        {
          path: "/filter",
          element: <FilterHome />,
        },
        {
          path: "/transaction",
          element: <Transaction />,
        },
        {
          path: "property/:id",
          element: <PropertyById />,
        },
      ],
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
