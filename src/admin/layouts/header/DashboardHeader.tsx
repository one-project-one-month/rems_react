import { Avatar, Button, Dropdown, Layout, theme } from "antd";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { collapseProp } from "../sideber/DashboardSidebar";
import type { MenuProps } from "antd";

const { Header } = Layout;

const DashboardHeader = ({ collapsed, setCollapsed }: collapseProp) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<a rel='noopener noreferrer' href='/logout'>
					Log out
				</a>
			),
		},
	];

	return (
		<Header
			style={{
				position: "sticky",
				top: 0,
				zIndex: 1,
				width: "100%",
				padding: 0,
				background: colorBgContainer,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Button
				type='text'
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => setCollapsed(!collapsed)}
				style={{
					fontSize: "16px",
					width: 64,
					height: 64,
				}}
			/>
			<Dropdown
				menu={{ items }}
				placement='bottomRight'
				trigger={["click"]}
			>
				<Avatar
					size={32}
					icon={<UserOutlined />}
					style={{ cursor: "pointer", marginRight: "16px" }}
				/>
			</Dropdown>
		</Header>
	);
};

export default DashboardHeader;
