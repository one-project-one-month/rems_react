import DashboardLayout from "../admin/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientList from "../admin/components/clients/ClientList";
import AgentList from "../admin/components/agents/AgentList";
import TransactionList from "../admin/components/transactions/TransactionList";
import Appointments from "../admin/components/appointments/Appointments";
import PropertyList from "../admin/components/properties/PropertyList";
import PropertyDetail from "../admin/components/properties/PropertyDetail";

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
					element: <TransactionList />,
				},
				{
					path: "/appointments",
					element: <Appointments />,
				},
				{
					path: "/properties",
					element: <PropertyList />,
				},
				{
					path: "/properties/detail",
					element: <PropertyDetail />
				}
			],
		},
	]);
	return <RouterProvider router={config} />;
};

export default Router;
