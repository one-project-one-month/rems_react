import { Layout, Menu, Typography } from "antd";
import {
	SwapOutlined,
	UserOutlined,
	UserSwitchOutlined,
	FundViewOutlined,
	CalendarOutlined,
	ProductOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import "./style.css";

const { Sider } = Layout;
const { Title } = Typography;

export interface collapseProp {
	collapsed: boolean;
	setCollapsed: (value: boolean) => void;
}

const DashboardSidebar = ({ collapsed }: collapseProp) => {
	const navigate = useNavigate();

	const handleItemClick = (key: string) => {
		navigate(key);
	};

	const navItems = [
		{
			key: "clients",
			icon: <UserOutlined />,
			label: "Clients",
		},
		{
			key: "agents",
			icon: <UserSwitchOutlined />,
			label: "Agents",
		},
		{
			key: "transactions",
			icon: <SwapOutlined />,
			label: "Transactions",
		},
		// {
		// 	key: "review",
		// 	icon: <FundViewOutlined />,
		// 	label: "Review",
		// },
		{
			key: "appointments",
			icon: <CalendarOutlined />,
			label: "Appointments",
		},
		{
			key: "properties",
			icon: <ProductOutlined />,
			label: "Properties",
		},
	];

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			style={{
				overflow: "auto",
				height: "100vh",
				position: "fixed",
				left: 0,
				top: 0,
				bottom: 0,
				backgroundColor: "#fdfdfd",
			}}
		>
			<div className={`logo-container ${collapsed ? "collapsed" : ""}`}>
				{!collapsed && (
					<Title level={5} className='sidebar-title'>
						<img
							src='/images/logo_of_REMS.avif'
							alt=''
							className='inline w-5 h-5 mr-2'
						/>
						Real Estate
					</Title>
				)}
			</div>
			<Menu
				mode='inline'
				defaultSelectedKeys={["1"]}
				onClick={({ key }) => handleItemClick(key)}
				items={navItems}
				className='custom-menu'
			/>
		</Sider>
	);
};

export default DashboardSidebar;