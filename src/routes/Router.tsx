import DashboardLayout from "../components/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "../components/users/UserList";
import AgentList from "../components/agents/AgentList";
import Review from "../components/All Review/Review";

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
					path : "/review",
					element: <Review/>

				},
			],
		},
	]);
	return <RouterProvider router={config} />;
};

export default Router;
