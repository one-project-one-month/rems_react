import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../client/pages/Home";
import Navbar from "../client/layouts/Navbar";
import AppointmentHistoryList from "../client/components/AppointmentHistoryList";
import Appointment from "../client/components/Appointment";
import FilterHome from "../client/pages/FilterHome";
import Transaction from "../client/pages/Transaction";

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
          path: "user/appointment",
          element: <Appointment />,
        },
        {
          path: "user/history",
          element: <AppointmentHistoryList />,
        },
        {
          path: "user/filter",
          element: <FilterHome />,
        },
        {
          path: "user/transaction",
          element: <Transaction/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={config} />;
};

export default Router;
