
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHome from "../client/pages/Home";
import Navbar from "../client/layouts/Navbar";
import AppointmentHistoryList from "../client/components/AppointmentHistoryList";
import Appointment from "../client/components/Appointment";
import Transaction from "../client/pages/Transaction";


const Router = () => {
	const config = createBrowserRouter([
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
				},
				{
					path: "history",
					element: <AppointmentHistoryList />
				},
				{
					path:"transaction",
					element:<Transaction/>
				}
			]
		}


	]);
	return <RouterProvider router={config} />;
};

export default Router;
