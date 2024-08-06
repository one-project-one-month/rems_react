
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHome from "../client/pages/Home";
import Navbar from "../client/layouts/Navbar";
import AppointmentHistoryList from "../client/components/appointment/AppointmentHistoryList";
import Appointment from "../client/components/appointment/Appointment";


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
					children: [
						{
							index: true,
					element: <Appointment />
						},
						{
							path: "history",
					element: <AppointmentHistoryList />
						}
					]
				},
				
			]
		}


	]);
	return <RouterProvider router={config} />;
};

export default Router;
