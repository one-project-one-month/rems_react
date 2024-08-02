import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="bg-[#a15103] fixed top-0 left-0 w-full z-50 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">REMS</div>
          <div>
            <Link to="/user" className="text-white mr-4 hover:text-gray-200">
              Home
            </Link>
            <Link to="/user/appointment" className="text-white mr-4 hover:text-gray-200">
              Appointment
            </Link>
            <Link to="/user/history" className="text-white hover:text-gray-200">
              History
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
