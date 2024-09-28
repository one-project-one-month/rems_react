import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../login/login-context/AuthContext";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {

	const auth = useAuth()

	const navList = [
		{
			path: '/',
			name: 'Home'
		},
		{
			path: 'appointment/history',
			name: 'Appointment History'
		},
		{
			path: 'transaction',
			name: 'Transaction History'
		}
	]

	return (
		<div>
			<nav className='bg-slate-50 fixed top-0 left-0 w-full z-50  shadow-md'>
				<div className='container mx-auto flex justify-between items-center py-3 px-9'>
					<Link to="/client">
						<div className='text-blue-600 text-xl font-bold'>REMS</div>
					</Link>
					<div className='flex space-x-4'>
						{
							navList.map(({ path, name }) => (
								<NavLink to={path} 
									className={({ isActive }) => `text-blue-500 ${isActive ? 'bg-blue-500 rounded-lg text-gray-100' : 'bg-transparent'} hover:text-gray-100 px-3 py-2 hover:px-3 hover:py-2 hover:bg-blue-500 hover:rounded-lg transition-all active:bg-blue-700`}
								>
									{name}
								</NavLink>
							))
						}
						<button className="text-blue-500" onClick={() => auth.logout()}>Logout</button>
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
