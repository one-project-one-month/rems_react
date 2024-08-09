import { useState } from "react";
import { Avatar, Dropdown, Layout, theme } from "antd";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const DashboardHeader = () => {
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
        <a rel="noopener noreferrer" href="/logout">
          Log out
        </a>
      ),
    },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <div className="container mx-auto px-4 flex items-center h-16">
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
        <nav className="flex gap-6 md:flex-1 md:justify-start hidden md:flex">
          <Link to="/listing" className="font-semibold text-lg">
            Properties
          </Link>
          <Link to="/appointments" className="font-semibold text-lg">
            Appointments
          </Link>
          <Link to="/transactions" className="font-semibold text-lg">
            Transactions
          </Link>
          <Link to="/create" className="font-semibold text-lg">
            Create
          </Link>
        </nav>

        {/* Company Logo */}
        <Link to="/" className="flex-1 flex justify-center">
          <img
            src="/images/logo_of_REMS.avif"
            alt="REMS Logo"
            className="w-24 h-16 object-contain lg:mr-[25rem]"
          />
        </Link>

        {/* User Avatar with Dropdown */}
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
          <Avatar
            size={32}
            icon={<UserOutlined />}
            className="cursor-pointer ml-4"
          />
        </Dropdown>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              to="/listing"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Properties
            </Link>
            <Link
              to="/appointments"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Appointments
            </Link>
            <Link
              to="/transactions"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Transactions
            </Link>
            <Link
              to="/create"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Create
            </Link>
          </nav>
        </div>
      )}
    </Header>
  );
};

export default DashboardHeader;