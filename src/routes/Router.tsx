import DashboardLayout from "../admin/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyList from "../components/agents/all listing/PropertyList";
import DetailPage from "../components/agents/all listing/DetailPage";
import Appointment from "../components/agents/appointments/Appointment";
import Transactions from "../components/agents/transactions/Transactions";

const Router = () => {
	const config = createBrowserRouter([
		{
			path: "/",
			element: <DashboardLayout />,
			children: [
				{
					path: "/",
					element: <PropertyList />,
				},
				{
					path: "/listing",
					element: <PropertyList/>,
					children: [
						{
							path: "/listing/:id",
							element: <DetailPage />
						}
					]
				},
				{
					path: "/appointments",
					element: <Appointment />
				},
				{
					path: "/transactions",
					element: <Transactions />
				}
			],
		},
	]);
	return <RouterProvider router={config} />;
};

export default Router;
