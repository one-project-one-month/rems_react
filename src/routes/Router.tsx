import DashboardLayout from "../admin/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientList from "../admin/components/clients/ClientList";
import AgentList from "../admin/components/agents/AgentList";
import TransactionsList from "../admin/components/transactions/TransactionList";
import PropertyList from "../admin/components/properties/PropertyList";
import Appointments from "../admin/components/appointments/Appointments";
import Transaction from "../client/pages/Transaction";
import Navbar from "../client/layouts/Navbar";
import Home from "../client/pages/Home";
import Error from "../error/Error";

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
			path: "/web/clients",
			element: (
				<Navbar>
					<Home />
				</Navbar>
			),
		},
		// {
		// 	path: "/web/‌agent",
		// 	element: (
		// 		<Navbar>
		// 			<Home />
		// 		</Navbar>
		// 	), // ဒီပုံစံမျိုး ဆက်သုံးပေးပါ
		// },
		{
			path: "*",
			element: <Error />,
		},
	]);
	return <RouterProvider router={config} />;
};

export default Router;
