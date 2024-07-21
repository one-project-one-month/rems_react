import DashboardLayout from "../components/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "../components/users/UserList";
import AgentList from "../components/agents/AgentList";
import TransactionsList from "../components/transactions/TransactionsList";
import Review from "../components/All Review/Review";
import Appointments from "../components/appointments/Appointments";

const Router = () => {
	const config = createBrowserRouter([
		{
			path: "/",
			element: <DashboardLayout />,
			children: [
				{
					path: "/users",
					element: <UserList />,
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
			],
		},
	]);
	return <RouterProvider router={config} />;
};

export default Router;
