import { Button, Empty, Input, Modal, Space, Table, Tag, Row, Col } from "antd";
import type { TableProps } from "antd";
import {
	DeleteOutlined,
	EditOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import AgentDrawer from "./AgentDrawer";
import { Agent } from "../../../type/type";
import { toast } from "sonner";
import {
	useDeleteAgentMutation,
	useGetAllAgentQuery,
} from "../../../services/admin/api/agentApi";

const AgentList = () => {
	const [open, setOpen] = useState(false);
	const [currentRecords, setCurrentRecords] = useState<Agent | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSearched, setIsSearched] = useState(false);
	const [filteredData, setFilteredData] = useState<Agent[] | undefined>([]);
	const [dataSource, setDataSource] = useState<Agent[] | undefined>([]);
	const [agentToDelete, setAgentToDelete] = useState<Agent | null>(null);

	const { data: agents, refetch } = useGetAllAgentQuery();
	const [deleteAgent] = useDeleteAgentMutation();

	console.log("Agents===>", agents);

	const fetchAndUpdateData = useCallback(async () => {
		try {
			if (agents?.data.agentList) {
				const dataWithKeys = agents.data.agentList.map(
					(item: Agent, index: number) => ({
						...item,
						key: (index + 1).toString(),
					})
				);
				setDataSource(dataWithKeys);
			}
		} catch (err) {
			console.log("ERROR ===> ", err);
		}
	}, [agents?.data.agentList]);

	useEffect(() => {
		fetchAndUpdateData();
	}, [fetchAndUpdateData]);

	const handleOk = async () => {
		if (agentToDelete) {
			await deleteAgent(agentToDelete.agentId);
			await refetch();
			toast.success(`Agent delete successfully`);
		}
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setAgentToDelete(null);
		setIsModalOpen(false);
	};

	const onClose = () => {
		setOpen(false);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const filtered = agents?.data.agentList.filter((item) =>
			item.agencyName.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredData(filtered);
		setIsSearched(true);
	};

	const handleCreate = () => {
		console.log("Create");
		setCurrentRecords(null);
		setOpen(true);
	};

	const handleEdit = (record: Agent) => {
		setCurrentRecords(record);
		setOpen(true);
	};

	const handleDelete = (record: Agent) => {
		setAgentToDelete(record);
		setIsModalOpen(true);
	};

	const columns: TableProps<Agent>["columns"] = [
		{
			title: "Agent Id",
			dataIndex: "agentId",
			key: "agentId",
			sorter: (a, b) => a.agentId - b.agentId,
			render: (text) => <span>{text}</span>,
		},
		{
			title: "Name",
			dataIndex: "agencyName",
			key: "agencyName",
			sorter: (a, b) =>
				`${a.agencyName}`.localeCompare(`${b.agencyName}`),
			render: (text) => <span>{text}</span>,
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			sorter: (a, b) => a.email.length - b.email.length,
			responsive: ["md"],
		},
		{
			title: "License Number",
			dataIndex: "licenseNumber",
			key: "licenseNumber",
			sorter: (a, b) => a.licenseNumber.length - b.licenseNumber.length,
			responsive: ["md"],
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
			responsive: ["lg"],
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
			responsive: ["xl"],
		},
		{
			title: "Roles",
			key: "roles",
			render: (_, record) => {
				const color = "red";
				return (
					<Tag color={color} key={record.role}>
						{record.role}
					</Tag>
				);
			},
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<Space size='middle'>
					<Button
						icon={<EditOutlined />}
						onClick={() => handleEdit(record)}
					/>
					<Button
						icon={<DeleteOutlined />}
						onClick={() => handleDelete(record)}
						danger
					/>
				</Space>
			),
		},
	];

	return (
		<div className='p-5'>
			<Row gutter={[16, 16]} className='mb-5'>
				<Col xs={24} sm={16} md={18} lg={20}>
					<Input
						prefix={<SearchOutlined />}
						placeholder='Search by name'
						onChange={handleSearch}
						className='w-full'
					/>
				</Col>
				<Col xs={24} sm={8} md={6} lg={4}>
					<Button
						type='primary'
						onClick={handleCreate}
						className='w-full'
					>
						Create Clients
					</Button>
				</Col>
			</Row>
			<Table
				columns={columns}
				dataSource={isSearched ? filteredData : dataSource}
				locale={{
					emptyText: (
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description='No data found'
						/>
					),
				}}
				scroll={{ x: "max-content" }}
				pagination={{
					responsive: true,
					position: ["bottomLeft"],
				}}
			/>
			<AgentDrawer
				onClose={onClose}
				open={open}
				records={currentRecords}
				refetch={refetch}
			/>
			<Modal
				title='Deleting User'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Are you sure to delete this user?</p>
			</Modal>
		</div>
	);
};

export default AgentList;
