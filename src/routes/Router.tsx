
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../client/pages/Home";
import Navbar from "../client/layouts/Navbar";
import AppointmentHistoryList from "../client/components/AppointmentHistoryList";
import Appointment from "../client/components/Appointment";


const Router = () => {
	const config = createBrowserRouter([
		{
			path: "user",
			element: <Navbar />,
			children: [
				{
					index: true,
					element: <Home />
				},
				{
					path: "appointment",
					element: <Appointment />
				},
				{
					path: "history",
					element: <AppointmentHistoryList />
				}
			]
		}


	]);
	return <RouterProvider router={config} />;
};

export default Router;
