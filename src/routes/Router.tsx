import DashboardLayout from "../components/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "../components/users/UserList";
import AgentList from "../components/agents/AgentList";
import Appointment from "../components/user_mobile_view/appointment/Appointment";
import UserHome from "../components/user_mobile_view/Home";
import Navbar from "../components/user_mobile_view/Navbar";

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
			],
		},
		{
			path: "user",
			element: <Navbar />,
			children: [
				{
					index: true,
					element: <UserHome />
				},
				{
					path: "appointment",
					element: <Appointment />
				}
			]
		}


	]);
	return <RouterProvider router={config} />;
};

export default Router;
