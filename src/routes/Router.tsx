import DashboardLayout from "../admin/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientList from "../admin/components/clients/ClientList";
import AgentList from "../admin/components/agents/AgentList";
import TransactionsList from "../admin/components/transactions/TransactionList";
import PropertyList from "../admin/components/properties/PropertyList";
import Appointments from "../admin/components/appointments/Appointments";
// import Transaction from "../client/pages/Transaction";
import Navbar from "../client/layouts/Navbar";
import Home from "../client/components/property/Home";
import Error from "../error/Error";
import Appointment from "../client/components/appointment/Appointment";
import AppointmentHistoryList from "../client/components/appointment/AppointmentHistoryList";

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
