import { useState } from "react";
import { Avatar, Dropdown, Layout, theme } from "antd";
import {
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../login/login-context/AuthContext";
import { useGetAgentByUserIdQuery } from "../../services/agent/api/getAgentApiSlice";

const { Header } = Layout;

const DashboardHeader: React.FC = () => {
  const auth = useAuth();
  const { user } = useAuth();
  const userId = user?.UserId;
  const { data, isLoading, error } = useGetAgentByUserIdQuery(userId);

  const agent = data?.data;

  console.log(agent);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // State to control mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define dropdown menu items
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="w-[200px]">
          {isLoading ? (
            <div className="flex justify-center text-blue-500 items-center h-[100px]">
              <LoadingOutlined />
            </div>
          ) : (
            <div className="flex flex-col gap-2 mb-2">
              <p>
                Name:{" "}
                <span className="font-bold font-raleWay">
                  {agent?.agentName}
                </span>
              </p>

              <p>
                Agency Name:{" "}
                <span className="font-bold font-raleWay">
                  {agent?.agencyName}
                </span>
              </p>

              <p>
                Phone:{" "}
                <span className="font-bold font-lato">{agent?.phone}</span>
              </p>

              <p>
                Address:{" "}
                <span className="font-bold font-raleWay">{agent?.address}</span>
              </p>
            </div>
          )}
          <hr></hr>
          <button
            onClick={() => auth.logout()}
            rel="noopener noreferrer"
            className="hover:bg-blue-500 mt-1 hover:text-white w-full font-bold text-[1rem] py-1 transition-all ease-in-out duration-300 rounded-md"
          >
            Log out
          </button>
        </div>
      ),
    },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          padding: 0,
          background: colorBgContainer,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container no-scrollbar mx-auto px-4 flex items-center h-16">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden mr-4">
            <button
              onClick={toggleMobileMenu}
              className="text-xl focus:outline-none"
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="gap-6 md:flex-1 md:justify-start hidden  md:flex">
            <Link
              to="property-list"
              className="font-semibold text-[1rem] hover:text-blue-500"
            >
              Properties
            </Link>
            <Link
              to="agent-appointments"
              className="font-semibold text-[1rem] hover:text-blue-500"
            >
              Appointments
            </Link>
            <Link
              to="agent-transactions"
              className="font-semibold text-[1rem] hover:text-blue-500"
            >
              Transactions
            </Link>
            <Link
              to="property-create"
              className="font-semibold text-[1rem] hover:text-blue-500"
            >
              Create
            </Link>
          </nav>

          {/* Company Logo */}
          <Link to="/agent" className="flex-1 flex justify-center">
            <img
              src="/images/logo_of_REMS.avif"
              alt="REMS Logo"
              className="w-24 h-16 object-contain lg:mr-[25rem]"
            />
          </Link>

          {/* User Avatar with Dropdown */}
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-0">
                {isLoading ? (
                  <div className="text-blue-500">
                    <LoadingOutlined />
                  </div>
                ) : (
                  <h1 className="font-raleWay font-bold ">
                    {agent?.agentName}
                  </h1>
                )}
              </div>
              <Avatar
                size={32}
                icon={<UserOutlined />}
                className="cursor-pointer ml-4"
              />
            </div>
          </Dropdown>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col gap-4 p-4">
              <Link
                to="property-list"
                className="font-semibold text-lg"
                onClick={toggleMobileMenu}
              >
                Properties
              </Link>
              <Link
                to="agent-appointments"
                className="font-semibold text-lg"
                onClick={toggleMobileMenu}
              >
                Appointments
              </Link>
              <Link
                to="agent-transactions"
                className="font-semibold text-lg"
                onClick={toggleMobileMenu}
              >
                Transactions
              </Link>
              <Link
                to="property-create"
                className="font-semibold text-lg"
                onClick={toggleMobileMenu}
              >
                Create
              </Link>
            </nav>
          </div>
        )}
      </Header>
      <div className="mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardHeader;
