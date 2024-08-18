import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="bg-[#a15103] fixed top-0 left-0 w-full z-50  shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-white text-xl font-bold">REMS</div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/appointment" className="text-white hover:text-gray-200">
              Appointment
            </Link>
            <Link to="/history" className="text-white hover:text-gray-200">
              History
            </Link>
            <Link to="/transaction" className="text-white hover:text-gray-200">
              Transaction
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-4 mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
