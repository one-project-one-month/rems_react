import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../login/login-context/AuthContext";

const Navbar: React.FC = () => {

	const auth = useAuth()

	return (
		<div>
			<nav className='bg-blue-800 fixed top-0 left-0 w-full z-50  shadow-md'>
				<div className='container mx-auto flex justify-between items-center p-4'>
					<div className='text-white text-xl font-bold'>REMS</div>
					<div className='flex space-x-4'>
						<Link to='' className='text-white hover:text-gray-200'>
							Home
						</Link>
						<Link
							to='appointment'
							className='text-white hover:text-gray-200'
						>
							Appointment
						</Link>
						<Link
							to='appointment/history'
							className='text-white hover:text-gray-200'
						>
							History
						</Link>
						<Link
							to='transaction'
							className='text-white hover:text-gray-200'
						>
							Transaction
						</Link>
						<button className="text-white" onClick={() => auth.logout()}>Logout</button>
					</div>
				</div>
			</nav>
			<div className='mt-10 container mx-auto py-4'>
				<Outlet />
			</div>
		</div>
	);
};

export default Navbar;
